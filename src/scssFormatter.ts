import {
  DocumentFormattingEditProvider, Position, Range, TextDocument,
  TextEdit, workspace, WorkspaceConfiguration
} from 'vscode';

import { safeExecution } from './errorHandler';
import { prettier } from './utils';

async function format(document: TextDocument): Promise<string> {
  const workspaceConfiguration: WorkspaceConfiguration = workspace.getConfiguration('scssFormatter');
  const rawDocumentText = document.getText();
  const { fileName, languageId } = document;

  const options = {
    ...Object.assign({}, workspaceConfiguration),
    parser: languageId
  };

  return safeExecution(
    () => prettier.format(rawDocumentText, options),
    rawDocumentText,
    fileName
  );
}

// get range for the current document
function fullDocumentRange(document: TextDocument): Range {
  const rangeStart: Position = document.lineAt(0).range.start;
  const rangeEnd: Position = document.lineAt(document.lineCount - 1).range.end;
  return new Range(rangeStart, rangeEnd);
}

export class SCSSFormatter implements DocumentFormattingEditProvider {
  public async provideDocumentFormattingEdits(document: TextDocument): Promise<TextEdit[]> {
    const formattedDocument = await format(document);
    return [TextEdit.replace(fullDocumentRange(document), formattedDocument)];
  }
}
