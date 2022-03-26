import type { BuiltInParserName, Options as PrettierOptions } from 'prettier';
import { format } from 'prettier/standalone';
import * as postcssPlugin from 'prettier/parser-postcss';
import { TextDocument, workspace, type WorkspaceConfiguration, type FormattingOptions, languages } from 'vscode';

import LoggingService from './LoggingService';
import StatusBarService, { FormatterStatus } from './StatusBarService';
import FormatProvider from './FormatProvider';
import { languageSelector } from './utils';

// add filepath to the output message
const addFilePathToMesssage = (message: string, fileName: string): string => {
  const lines = message.split('\n');
  if (lines.length > 0) {
    lines[0] = lines[0].replace(/(?:\d*):(?:\d*)/g, `${fileName}:$1:$2`);
    return lines.join('\n');
  }
  return message;
};

const getPrettierOptions = (document: TextDocument, options: FormattingOptions): PrettierOptions => {
  const wsConfig: WorkspaceConfiguration = workspace.getConfiguration('scssFormatter');

  return {
    ...wsConfig,
    tabWidth: options.tabSize,
    useTabs: !options.insertSpaces,
    parser: document.languageId as BuiltInParserName,
    plugins: [
      postcssPlugin,
    ],
  };
};

class FormatService {
  private provider: FormatProvider;

  constructor(private loggingService: LoggingService, private statusbarService: StatusBarService) {
    this.provider = new FormatProvider(this.formatDocument);
  }

  private formatDocument = (document: TextDocument, options: FormattingOptions): string => {
    const rawDocumentText = document.getText();
    const { fileName } = document;

    const prettierOptions = getPrettierOptions(document, options);

    try {
      const formattedDocument = format(rawDocumentText, prettierOptions);
      this.loggingService.addToOutput(`${fileName} : Formatted Successfully`);
      this.statusbarService.updateStatusBarItem(FormatterStatus.Success);
      return formattedDocument;
    } catch (err) {
      const errMessage = err instanceof Error ? err.message : String(err);
      this.loggingService.addToOutput(addFilePathToMesssage(errMessage, fileName));
      this.statusbarService.updateStatusBarItem(FormatterStatus.Error);
      return rawDocumentText;
    }
  };

  public registerDisposables() {
    return [
      languages.registerDocumentFormattingEditProvider(languageSelector, this.provider),
    ];
  }
}

export default FormatService;
