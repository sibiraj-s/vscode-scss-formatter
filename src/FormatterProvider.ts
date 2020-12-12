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
import StatusBarService from './StatusBarService';

import { EXTENSION_NAME } from './utils';

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

  /**
   * Runs prettier and updates the status on the statusbarItem
   *
   * @param cb callback function to execute prettier
   * @param rawDocumentText unformatted source document
   * @param fileName name/path of the file formatted
   *
   * @returns {string} string with either formatted/raw document
   */
  private safeExecution(cb: (() => string), rawDocumentText: string, fileName: string): string {
    try {
      this.loggingService.addToOutput(`${fileName} : Formatted Successfully`);
      this.statusbarService.updateStatusBarItem(`${EXTENSION_NAME}: $(check)`);
      return cb();
    } catch (err) {
      this.loggingService.addToOutput(addFilePathToMesssage(err.message, fileName));
      this.statusbarService.updateStatusBarItem(`${EXTENSION_NAME}: $(x)`);
      return rawDocumentText;
    }
  }

  private formatDocument(document: TextDocument, options: FormattingOptions): string {
    const rawDocumentText = document.getText();
    const { fileName } = document;

    const prettierOptions = getPrettierOptions(document, options);

    return this.safeExecution(
      () => format(rawDocumentText, prettierOptions),
      rawDocumentText,
      fileName,
    );
  }

  public provideDocumentFormattingEdits(document: TextDocument, options: FormattingOptions): TextEdit[] {
    const formattedDocument = this.formatDocument(document, options);
    return [TextEdit.replace(fullDocumentRange(document), formattedDocument)];
  }
}

export default SCSSFormatter;
