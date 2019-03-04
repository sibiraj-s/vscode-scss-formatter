import {
  BuiltInParserName,
  format,
  Options as PrettierOptions
} from 'prettier';
import {
  DocumentFormattingEditProvider, Position, Range, TextDocument,
  TextEdit, workspace, WorkspaceConfiguration
} from 'vscode';

import { safeExecution } from './errorHandler';

async function formatDocument(document: TextDocument): Promise<string> {
  const workspaceConfiguration: WorkspaceConfiguration = workspace.getConfiguration('scssFormatter');
  const rawDocumentText = document.getText();
  const { fileName, languageId } = document;

  const options: PrettierOptions = {
    ...Object.assign({}, workspaceConfiguration),
    parser: languageId as BuiltInParserName
  };

  return safeExecution(
    () => format(rawDocumentText, options),
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
    const formattedDocument = await formatDocument(document);
    return [TextEdit.replace(fullDocumentRange(document), formattedDocument)];
  }
}
