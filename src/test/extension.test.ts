/* tslint:disable: no-console */
import * as assert from 'assert';
import * as path from 'path';
import { format } from 'prettier';
import { commands, Uri, window, workspace } from 'vscode';

// activate the formatter
async function activateFormatter() {
  await commands.executeCommand('scss-formatter.activate');
}

async function showOutputConsole() {
  await commands.executeCommand('scss-formatter.open-output');
}

// clear console output from formatter
async function clearOutput() {
  await commands.executeCommand('scss-formatter.clear-output');
}

/**
 * loads and format a file.
 * @param file path relative to base URI (a workspaceFolder's URI)
 * @param base base URI
 * @returns source code and resulting code
 */
async function formatWithVscode(
  file: string,
  base: Uri = workspace.workspaceFolders![0].uri
): Promise<{
  result: string;
  source: string;
} | undefined> {
  const absPath = path.join(base.fsPath, file);
  const doc = await workspace.openTextDocument(absPath);
  const text = doc.getText();
  try {
    await window.showTextDocument(doc);
    console.time(file);
    await commands.executeCommand('editor.action.formatDocument');
    console.timeEnd(file);
    return { result: doc.getText(), source: text };
  } catch (e) {
    console.error(e);
    return;
  }
}

/**
 * Compare prettier's output (default settings)
 * with the output from extension.
 * @param file path relative to workspace root
 */
async function formatSameAsPrettier(file: string) {
  const result = await formatWithVscode(file);
  if (result) {
    const prettierFormatted = format(result.source, {
      filepath: file,
      printWidth: 120,
      singleQuote: false,
      tabWidth: 2,
      useTabs: false
    });
    assert.equal(result.result, prettierFormatted);
  }
}

suite('SCSS Formatter Extension Tests', () => {
  test('it should activate the extension', () => activateFormatter());
  test('it should show the output console', () => showOutputConsole());
  test('it should fromat CSS', () => formatSameAsPrettier('fixtures/ugly.css'));
  test('it should format SCSS', () => formatSameAsPrettier('fixtures/ugly.scss'));
  test('it should clear the logs from output console', () => clearOutput());
});
