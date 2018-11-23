'use strict';

import { commands, Disposable, ExtensionContext, languages, window } from 'vscode';

import { registerErrorHandlerDisposables, setupErrorHandler } from './errorHandler';
import { SCSSFormatter } from './scssFormatterProvider';
import { languageSelector } from './utils';

const ACTIVATION_COMMAND: Disposable = commands.registerCommand('scss-formatter.activate', () => {
  window.showInformationMessage('SCSS Formatter Activated');
});

// method is called when extension is activated
export function activate(context: ExtensionContext) {
  const scssFormatter = new SCSSFormatter();

  context.subscriptions.push(languages.registerDocumentFormattingEditProvider(languageSelector, scssFormatter));
  context.subscriptions.push(ACTIVATION_COMMAND);
  context.subscriptions.push(...setupErrorHandler());
  context.subscriptions.push(...registerErrorHandlerDisposables());
}
