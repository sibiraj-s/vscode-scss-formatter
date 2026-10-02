/* tslint:disable: no-console */
import * as assert from 'assert';
import { format } from 'prettier/standalone';
import * as postcssPlugin from 'prettier/plugins/postcss';
import { commands, extensions, Uri, workspace, WorkspaceEdit, type FormattingOptions, type TextEdit } from 'vscode';

const showOutputConsole = async () => {
  await commands.executeCommand('scssFormatter.showOutput');
};

// clear console output from formatter
const clearOutput = async () => {
  await commands.executeCommand('scssFormatter.clearOutput');
};

/**
 * loads and format a file.
 * @param workspaceFolderName folder name in the workspace
 * @param file path relative to base URI (a workspaceFolder's URI)
 * @returns source code and resulting code
 */
const formatWithVscode = async (
  workspaceFolderName: string,
  file: string,
): Promise<{
  result: string;
  source: string;
}> => {
  const workspaceFolder = workspace.workspaceFolders?.find((folder) => folder.name === workspaceFolderName);

  if (!workspaceFolder) {
    throw new Error(`Unable to find workspace: ${workspaceFolder}`);
  }

  // make sure the formatting provider is registered before asking for edits
  await extensions.getExtension('sibiraj-s.vscode-scss-formatter')?.activate();

  const absPath = Uri.joinPath(workspaceFolder.uri, file).path;
  const doc = await workspace.openTextDocument(absPath);
  const text = doc.getText();

  // request edits from the provider directly instead of formatting the active editor,
  // so the result doesn't depend on which editor has focus
  const options: FormattingOptions = { tabSize: 2, insertSpaces: true };
  console.time(file);
  const edits = await commands.executeCommand<TextEdit[]>('vscode.executeFormatDocumentProvider', doc.uri, options);
  console.timeEnd(file);

  if (!edits?.length) {
    throw new Error(`No formatting edits returned for ${file}`);
  }

  const workspaceEdit = new WorkspaceEdit();
  workspaceEdit.set(doc.uri, edits);
  await workspace.applyEdit(workspaceEdit);
  return { result: doc.getText(), source: text };
};

/**
 * Compare prettier's output (default settings)
 * with the output from extension.
 * @param file path relative to workspace root
 */
const formatSameAsPrettier = async (file: string) => {
  const result = await formatWithVscode('fixtures', file);

  const prettierFormatted = await format(result.source, {
    filepath: file,
    printWidth: 120,
    singleQuote: false,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'es5',
    plugins: [
      postcssPlugin,
    ],
  });
  assert.strictEqual(result.result, prettierFormatted);
};

suite('SCSS Formatter Extension Tests', () => {
  test('it should show the output console', async () => showOutputConsole());
  test('it should fromat CSS', async () => formatSameAsPrettier('./ugly.css'));
  test('it should format SCSS', async () => formatSameAsPrettier('./ugly.scss'));
  test('it should clear the logs from output console', async () => clearOutput());
});
