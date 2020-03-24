import {
  Disposable, languages, StatusBarAlignment,
  StatusBarItem, TextEditor, window
} from 'vscode';

import { EXTENSION_NAME, EXTENSION_VERSION, supportedLanguages } from './utils';

function checkForInConsoleTabSwitch(editor: TextEditor): boolean {
  // output and debug console is also seen as an editor
  // hence switching tabs will trigger the function
  // this prevents hiding statusBarItem when switching between tabs
  return ['debug', 'output'].some(
    (part) => editor.document.uri.scheme === part);
}

class StatusBarService {
  private statusBarItem: StatusBarItem;

  constructor() {
    this.statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right, -1);
    this.statusBarItem.text = EXTENSION_NAME;
    this.statusBarItem.tooltip = `${EXTENSION_NAME}: v${EXTENSION_VERSION}`;
    this.statusBarItem.command = 'scss-formatter.open-output';

    this.toggleStatusBarItem(window.activeTextEditor);
  }

  public registerDisposables(): Disposable[] {
    return [
      // Keep track whether to show/hide the statusbar
      window.onDidChangeActiveTextEditor((editor: TextEditor | undefined) => {
        this.toggleStatusBarItem(editor);
      })
    ];
  }

  // toggle statusBarItem when document changes
  private toggleStatusBarItem(editor: TextEditor | undefined): void {
    if (!this.statusBarItem) {
      return;
    }

    if (editor !== undefined) {
      if (checkForInConsoleTabSwitch(editor)) { return; }

      // hide statusBarItem if document changes and doesn't match supported languages
      const score = languages.match(supportedLanguages, editor.document);
      score ? this.statusBarItem.show() : this.statusBarItem.hide();
    } else {
      this.statusBarItem.hide();
    }
  }

  // update statusBarItem text and tooltip
  public updateStatusBarItem(message: string): void {
    this.statusBarItem.text = message;
    this.statusBarItem.show();
  }

  public reset() {
    this.statusBarItem.text = EXTENSION_NAME;
  }
}

export default StatusBarService;
