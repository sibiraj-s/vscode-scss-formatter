import {
  DocumentFormattingEditProvider, Position, Range, TextDocument,
  TextEdit, workspace, WorkspaceConfiguration
} from 'vscode';

const prettier = require('prettier');

export class SCSSFormatter implements DocumentFormattingEditProvider {
  public provideDocumentFormattingEdits(document: TextDocument): TextEdit[] {
    return this.formatDocument(document);
  }

  private formatDocument(document: TextDocument): TextEdit[] {
    const workspaceConfiguration: WorkspaceConfiguration = workspace.getConfiguration('scssFormatter');
    const rangeStart: Position = document.lineAt(0).range.start;
    const rangeEnd: Position = document.lineAt(document.lineCount - 1).range.end;
    const range: Range = new Range(rangeStart, rangeEnd);
    const rawDocument = document.getText(range);
    const languageId = document.languageId;

    const options = {
      ...JSON.parse(JSON.stringify(workspaceConfiguration)),
      parser: languageId
    };

    const formattedDocument = prettier.format(rawDocument, options);

    return [TextEdit.replace(range, formattedDocument)];
  }
}
