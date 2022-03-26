import type { ExtensionContext } from 'vscode';

import StatusBarService from './StatusBarService';
import LoggingService from './LoggingService';
import FormatService from './FormatService';

// method is called when extension is activated
export const activate = (context: ExtensionContext) => {
  const statusbarService = new StatusBarService();
  const loggingService = new LoggingService(statusbarService);

  const formatter = new FormatService(
    loggingService,
    statusbarService,
  );

  context.subscriptions.push(...loggingService.registerDisposables());
  context.subscriptions.push(...statusbarService.registerDisposables());
  context.subscriptions.push(...formatter.registerDisposables());
};

export const deactivate = () => {
  // method is called when extension is deactivated
};
