import {
  commands, Disposable, ExtensionContext, languages, window,
} from 'vscode';

import SCSSFormatter from './FormatterProvider';
import StatusBarService from './StatusBarService';
import LoggingService from './LoggingService';

import { languageSelector } from './utils';

const ACTIVATION_COMMAND: Disposable = commands.registerCommand('scss-formatter.activate', () => {
  window.showInformationMessage('SCSS Formatter is Active');
});

// method is called when extension is activated
export const activate = (context: ExtensionContext) => {
  const statusbarService = new StatusBarService();
  const loggingService = new LoggingService(statusbarService);

  const scssFormatter = new SCSSFormatter(
    loggingService,
    statusbarService,
  );

  context.subscriptions.push(languages.registerDocumentFormattingEditProvider(languageSelector, scssFormatter));
  context.subscriptions.push(ACTIVATION_COMMAND);

  context.subscriptions.push(...loggingService.registerDisposables());
  context.subscriptions.push(...statusbarService.registerDisposables());
};

export const deactivate = () => {
  // method is called when extension is deactivated
};
