# VS Code SCSS Formatter [![Build Status](https://travis-ci.com/sibiraj-s/vscode-scss-formatter.svg?branch=master)](https://travis-ci.com/sibiraj-s/vscode-scss-formatter)

SCSS Formatter is an extension for Visual Studio Code to format [SCSS](https://sass-lang.com/).

SCSS Formatter uses [Prettier](https://github.com/prettier/prettier) under the hood to format files. Though Prettier supports formatting various file types. This extension focuses only on `SCSS`. Additionally it supports `CSS`.

Checkout [prettier-vscode](https://github.com/prettier/prettier-vscode) for an extended language support

Any issues related to formatting, open an issue [here](https://github.com/prettier/prettier/issues)

## Installation

Refer to [Visual Studio MarketPlace](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter) to install or download the extension

To install via [command line](https://code.visualstudio.com/docs/editor/command-line), you should have installed `code` command in `PATH`

```bash
code --install-extension sibiraj-s.vscode-scss-formatter
```

## Usage

Files can be formatted by the **Format Document** option available in the **context menu**, by using the associated **Keyboard Shortcut** or running the **Format Document** command from the **command pallete**

Default keyboard shortcuts for **Format Document** command:

* MacOS: **⇧⌥F** or **Shift+Option+F**
* Linux: **Ctrl+Shift+I**
* Windows: **Shift+Alt+F**

### Formatter Demo

![SCSS Formatter Demo](assets/scss-format.gif)

### Extension Settings

This extension contributes the following settings:

* `scssFormatter.printWidth`: Line length that the formatter will wrap on.
* `scssFormatter.useTabs`: Indent lines with tabs instead of spaces.
* `scssFormatter.tabWidth`: Number of spaces per indentation-level.
* `scssFormatter.singleQuote`: Use single quotes instead of double quotes.

**Note:** Though prettier supports various options, only few were added to provide consistency. The `formatOnPaste` is not supported and won't be supported as it may lead to unexpected code formatting.
