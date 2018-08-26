'use strict';

import {
  DocumentSelector, ExtensionContext, Disposable,
  languages, window
} from 'vscode';

import { SCSSFormatter } from './scssFormatter';

const filesToFormat: DocumentSelector = [
  { scheme: 'file', language: 'css' },
  { scheme: 'file', language: 'scss' }
];

export function activate(context: ExtensionContext) {

  const scssFormatter = new SCSSFormatter();

  const disposables: Disposable[] = [
    languages.registerDocumentFormattingEditProvider(filesToFormat, scssFormatter)
  ];

  context.subscriptions.push(...disposables);

}

export function deactivate() {
  window.showInformationMessage('SCSS Formatter deactivated');
}
