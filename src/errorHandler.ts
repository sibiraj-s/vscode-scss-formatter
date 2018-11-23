import {
  commands, Disposable, languages, OutputChannel,
  StatusBarAlignment, StatusBarItem, TextEditor, window
} from 'vscode';

import { EXTENSION_NAME, EXTENSION_VERSION, supportedLanguages } from './utils';

let statusBarItem: StatusBarItem;
let outputChannel: OutputChannel;

function checkForInConsoleTabSwitch(editor: TextEditor): boolean {
  // output and debug console is also seen as an editor
  // hence switching tabs will trigger the function
  // this prevents hiding statusBarItem when switching between tabs
  return ['debug', 'output'].some(
    (part) => editor.document.uri.scheme === part);
}

// toggle statusBarItem when document changes
function toggleStatusBarItem(editor: TextEditor | undefined): void {
  if (editor !== undefined) {
    if (checkForInConsoleTabSwitch(editor)) { return; }

    // hide statusBarItem if document changes and doesn't match supported languages
    const score = languages.match(supportedLanguages, editor.document);
    score ? statusBarItem.show() : statusBarItem.hide();
  }
}

// add filepath to the output message
function addFilePathToMesssage(message: string, fileName: string): string {
  const lines = message.split('\n');
  if (lines.length > 0) {
    lines[0] = lines[0].replace(/(\d*):(\d*)/g, `${fileName}:$1:$2`);
    return lines.join('\n');
  }
  return message;
}

// add message to the output channel
function addToOutput(message: string): void {
  const title = `${new Date().toLocaleString()}:`;

  // Create a sort of title, to differentiate between messages
  outputChannel.appendLine(title);
  outputChannel.appendLine('-'.repeat(title.length));

  // Append actual output
  outputChannel.appendLine(`${message}\n`);
}

// update statusBarItem text and tooltip
function updateStatusBarItem(message: string): void {
  statusBarItem.text = message;
  statusBarItem.show();
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
export function safeExecution(cb: (() => string), rawDocumentText: string, fileName: string): string {
  try {
    const returnValue = cb();
    addToOutput(`${fileName} : Formatted Successfully`);
    updateStatusBarItem(`${EXTENSION_NAME}: $(check)`);
    return returnValue;
  } catch (err) {
    addToOutput(addFilePathToMesssage(err.message, fileName));
    updateStatusBarItem(`${EXTENSION_NAME}: $(x)`);
    return rawDocumentText;
  }
}

/**
 * Setup the output channel and the statusBarItem.
 * Create a command to show the output channel when statusbarItem is clicked
 *
 * @returns {Disposable} The command to open the output channel
 */
export function setupErrorHandler(): Disposable {
  // Setup the statusBarItem
  statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right, -1);
  statusBarItem.text = EXTENSION_NAME;
  statusBarItem.tooltip = `${EXTENSION_NAME}: v${EXTENSION_VERSION}`;
  statusBarItem.command = 'scss-formatter.open-output';

  toggleStatusBarItem(window.activeTextEditor);

  // Setup the outputChannel
  outputChannel = window.createOutputChannel(EXTENSION_NAME);

  return commands.registerCommand('scss-formatter.open-output', () => {
    outputChannel.show();
  });
}

export function registerErrorHandlerDisposables(): Disposable[] {
  return [
    // Keep track whether to show/hide the statusbar
    window.onDidChangeActiveTextEditor((editor: TextEditor | undefined) => {
      if (statusBarItem !== undefined) {
        toggleStatusBarItem(editor);
      }
    }),
    window.onDidChangeActiveTextEditor((editor: TextEditor | undefined) => {
      if (editor === undefined) {
        statusBarItem.hide();
      }
    })
  ];
}
