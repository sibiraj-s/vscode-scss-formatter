'use strict';

import {
  Disposable, ExtensionContext, languages,
  window, workspace
} from 'vscode';

import { registerErrorHandlerDisposables, setupErrorHandler } from './errorHandler';
import { SCSSFormatter } from './scssFormatter';
import { EXTENSION_NAME, languageSelector } from './utils';

let formatterHandler: undefined | Disposable;

// dispose formatter
function disposeHandlers() {
  if (formatterHandler) {
    formatterHandler.dispose();
  }
  formatterHandler = undefined;
}

// register formatter
function registerFormatter() {
  disposeHandlers();
  const scssFormatter = new SCSSFormatter();
  formatterHandler = languages.registerDocumentFormattingEditProvider(
    languageSelector, scssFormatter
  );
}

// method is called when extension is activated
export function activate(context: ExtensionContext) {
  registerFormatter();

  context.subscriptions.push(
    workspace.onDidChangeWorkspaceFolders(registerFormatter),
    { dispose: disposeHandlers },
    setupErrorHandler(),
    ...registerErrorHandlerDisposables()
  );
}

// method is called when extension is deactivated
export function deactivate() {
  window.showInformationMessage(`${EXTENSION_NAME} deactivated`);
}
