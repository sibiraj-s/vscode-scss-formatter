'use strict';

import { ExtensionContext, languages } from 'vscode';

import { ACTIVATION_COMMAND } from './commandManager';
import { registerErrorHandlerDisposables, setupErrorHandler } from './errorHandler';
import { SCSSFormatter } from './scssFormatterProvider';
import { languageSelector } from './utils';

// method is called when extension is activated
export function activate(context: ExtensionContext) {
  const scssFormatter = new SCSSFormatter();

  context.subscriptions.push(languages.registerDocumentFormattingEditProvider(languageSelector, scssFormatter));
  context.subscriptions.push(ACTIVATION_COMMAND);
  context.subscriptions.push(setupErrorHandler());
  context.subscriptions.push(...registerErrorHandlerDisposables());
}
