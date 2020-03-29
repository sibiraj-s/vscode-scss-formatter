import {
  BuiltInParserName,
  format,
  Options as PrettierOptions
} from 'prettier';
import {
  DocumentFormattingEditProvider, Position, Range, TextDocument,
  TextEdit, workspace, WorkspaceConfiguration, FormattingOptions
} from 'vscode';

import LoggingService from './LoggingService';
import StatusBarService from './StatusBarService';

import { EXTENSION_NAME } from './utils';

class SCSSFormatter implements DocumentFormattingEditProvider {
  private loggingService: LoggingService;
  private statusbarService: StatusBarService;

  constructor(loggingService: LoggingService, statusbarService: StatusBarService) {
    this.loggingService = loggingService;
    this.statusbarService = statusbarService;
  }

  // add filepath to the output message
  private addFilePathToMesssage(message: string, fileName: string): string {
    const lines = message.split('\n');
    if (lines.length > 0) {
      lines[0] = lines[0].replace(/(\d*):(\d*)/g, `${fileName}:$1:$2`);
      return lines.join('\n');
    }
    return message;
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
      const returnValue = cb();
      this.loggingService.addToOutput(`${fileName} : Formatted Successfully`);
      this.statusbarService.updateStatusBarItem(`${EXTENSION_NAME}: $(check)`);
      return returnValue;
    } catch (err) {
      this.loggingService.addToOutput(this.addFilePathToMesssage(err.message, fileName));
      this.statusbarService.updateStatusBarItem(`${EXTENSION_NAME}: $(x)`);
      return rawDocumentText;
    }
  }

  private getPrettierOptions(document: TextDocument, options: FormattingOptions): PrettierOptions {
    const wsConfig: WorkspaceConfiguration = workspace.getConfiguration('scssFormatter');
    const { languageId } = document;

    return {
      ...wsConfig,
      tabWidth: options.tabSize,
      useTabs: !options.insertSpaces,
      parser: languageId as BuiltInParserName
    };
  }

  // get range for the current document
  private fullDocumentRange(document: TextDocument): Range {
    const rangeStart: Position = document.lineAt(0).range.start;
    const rangeEnd: Position = document.lineAt(document.lineCount - 1).range.end;
    return new Range(rangeStart, rangeEnd);
  }

  private async formatDocument(document: TextDocument, options: FormattingOptions): Promise<string> {
    const rawDocumentText = document.getText();
    const { fileName } = document;

    const prettierOptions = this.getPrettierOptions(document, options);

    return this.safeExecution(
      () => format(rawDocumentText, prettierOptions),
      rawDocumentText,
      fileName
    );
  }

  public async provideDocumentFormattingEdits(document: TextDocument, options: FormattingOptions): Promise<TextEdit[]> {
    const formattedDocument = await this.formatDocument(document, options);
    return [TextEdit.replace(this.fullDocumentRange(document), formattedDocument)];
  }
}

export default SCSSFormatter;
