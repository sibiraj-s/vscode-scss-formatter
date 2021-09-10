import {
  BuiltInParserName,
  format,
  Options as PrettierOptions,
} from 'prettier';
import {
  DocumentFormattingEditProvider, Position, Range, TextDocument,
  TextEdit, workspace, WorkspaceConfiguration, FormattingOptions,
} from 'vscode';

import LoggingService from './LoggingService';
import StatusBarService, { FormatterStatus } from './StatusBarService';

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
  const { languageId } = document;

  return {
    ...wsConfig,
    tabWidth: options.tabSize,
    useTabs: !options.insertSpaces,
    parser: languageId as BuiltInParserName,
  };
};

// get range for the current document
const fullDocumentRange = (document: TextDocument): Range => {
  const rangeStart: Position = document.lineAt(0).range.start;
  const rangeEnd: Position = document.lineAt(document.lineCount - 1).range.end;
  return new Range(rangeStart, rangeEnd);
};

class SCSSFormatter implements DocumentFormattingEditProvider {
  private loggingService: LoggingService;

  private statusbarService: StatusBarService;

  constructor(loggingService: LoggingService, statusbarService: StatusBarService) {
    this.loggingService = loggingService;
    this.statusbarService = statusbarService;
  }

  private formatDocument(document: TextDocument, options: FormattingOptions): string {
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
  }

  public provideDocumentFormattingEdits(document: TextDocument, options: FormattingOptions): TextEdit[] {
    const formattedDocument = this.formatDocument(document, options);
    return [TextEdit.replace(fullDocumentRange(document), formattedDocument)];
  }
}

export default SCSSFormatter;
