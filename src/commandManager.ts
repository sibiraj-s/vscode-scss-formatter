import { commands, Disposable, window } from 'vscode';

export const ACTIVATION_COMMAND: Disposable = commands.registerCommand('scss-formatter.activate', () => {
  window.showInformationMessage('SCSS Formatter Activated');
});
