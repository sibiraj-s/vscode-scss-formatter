import {
  Range, TextDocument, TextEdit,
  type DocumentFormattingEditProvider, type Position, type FormattingOptions,
} from 'vscode';

// get range for the current document
const fullDocumentRange = (document: TextDocument): Range => {
  const rangeStart: Position = document.lineAt(0).range.start;
  const rangeEnd: Position = document.lineAt(document.lineCount - 1).range.end;
  return new Range(rangeStart, rangeEnd);
};

type Format = (document: TextDocument, options: FormattingOptions) => string;

class FormatProvider implements DocumentFormattingEditProvider {
  constructor(private format: Format) { }

  public provideDocumentFormattingEdits(document: TextDocument, options: FormattingOptions): TextEdit[] {
    const formattedDocument = this.format(document, options);
    return [TextEdit.replace(fullDocumentRange(document), formattedDocument)];
  }
}

export default FormatProvider;
