import {
  commands, Disposable, OutputChannel, window,
} from 'vscode';

import StatusBarService from './StatusBarService';

import { EXTENSION_NAME } from './utils';

class LoggingService {
  private outputChannel: OutputChannel;

  private statusbarService: StatusBarService;

  constructor(statusbarService: StatusBarService) {
    this.outputChannel = window.createOutputChannel(EXTENSION_NAME);
    this.statusbarService = statusbarService;
  }

  // add message to the output channel
  public addToOutput(message: string): void {
    const title = `${new Date().toLocaleString()}:`;

    // Create a sort of title, to differentiate between messages
    this.outputChannel.appendLine(title);
    this.outputChannel.appendLine('-'.repeat(title.length));

    // Append actual output
    this.outputChannel.appendLine(`${message}\n`);
  }

  public registerDisposables(): Disposable[] {
    return [
      commands.registerCommand('scss-formatter.output.show', () => {
        this.outputChannel.show();
      }),
      commands.registerCommand('scss-formatter.output.clear', () => {
        this.outputChannel.clear();
        this.statusbarService.reset();
      }),
    ];
  }
}

export default LoggingService;
