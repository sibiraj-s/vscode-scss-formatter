'use strict';

import {
  commands, Disposable, ExtensionContext,
  languages, window, workspace
} from 'vscode';

import { registerErrorHandlerDisposables, setupErrorHandler } from './errorHandler';
import { SCSSFormatter } from './ScssFormatProvider';
import { languageSelector } from './utils';

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

  const disposable = commands.registerCommand('scss-formatter.activate', () => {
    window.showInformationMessage('SCSS Formatter Activated');
  });

  context.subscriptions.push(
    workspace.onDidChangeWorkspaceFolders(registerFormatter),
    { dispose: disposeHandlers },
    setupErrorHandler(),
    disposable,
    ...registerErrorHandlerDisposables()
  );
}

// method is called when extension is deactivated
export function deactivate() { } // tslint:disable-line:no-empty
