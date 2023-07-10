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

type Formatter = (document: TextDocument, options: FormattingOptions) => Promise<string>;

class FormatProvider implements DocumentFormattingEditProvider {
  constructor(private format: Formatter) { }

  public async provideDocumentFormattingEdits(document: TextDocument, options: FormattingOptions): Promise<TextEdit[]> {
    const formattedDocument = await this.format(document, options);
    return [TextEdit.replace(fullDocumentRange(document), formattedDocument)];
  }
}

export default FormatProvider;
