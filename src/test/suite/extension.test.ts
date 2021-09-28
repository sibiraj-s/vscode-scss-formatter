/* tslint:disable: no-console */
import * as assert from 'assert';
import { format } from 'prettier';
import {
  commands, Uri, window, workspace,
} from 'vscode';

// activate the formatter
const activateFormatter = async () => {
  await commands.executeCommand('scss-formatter.activate');
};

const showOutputConsole = async () => {
  await commands.executeCommand('scss-formatter.output.show');
};

// clear console output from formatter
const clearOutput = async () => {
  await commands.executeCommand('scss-formatter.output.clear');
};

/**
 * loads and format a file.
 * @param file path relative to base URI (a workspaceFolder's URI)
 * @param base base URI
 * @returns source code and resulting code
 */
const formatWithVscode = async (
  workspaceFolderName:string,
  file: string,
): Promise<{
  result: string;
  source: string;
} | null> => {
  const workspaceFolder = workspace.workspaceFolders?.find((folder) => folder.name === workspaceFolderName);

  if (!workspaceFolder) {
    throw new Error(`Unable to find workspace: ${workspaceFolder}`);
  }

  const absPath = Uri.joinPath(workspaceFolder.uri, file).path;
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
    return null;
  }
};

/**
 * Compare prettier's output (default settings)
 * with the output from extension.
 * @param file path relative to workspace root
 */
const formatSameAsPrettier = async (file: string) => {
  const result = await formatWithVscode('fixtures', file);

  if (result) {
    const prettierFormatted = format(result.source, {
      filepath: file,
      printWidth: 120,
      singleQuote: false,
      tabWidth: 2,
      useTabs: false,
      trailingComma: 'es5',
    });
    assert.strictEqual(result.result, prettierFormatted);
  }
};

suite('SCSS Formatter Extension Tests', () => {
  test('it should activate the extension', async () => activateFormatter());
  test('it should show the output console', async () => showOutputConsole());
  test('it should fromat CSS', async () => formatSameAsPrettier('./ugly.css'));
  test('it should format SCSS', async () => formatSameAsPrettier('./ugly.scss'));
  test('it should clear the logs from output console', async () => clearOutput());
});
