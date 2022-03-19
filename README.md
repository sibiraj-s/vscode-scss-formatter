# VS Code SCSS Formatter

[![Tests](https://github.com/sibiraj-s/vscode-scss-formatter/workflows/Tests/badge.svg)](https://github.com/sibiraj-s/vscode-scss-formatter/actions)
[![Version](https://badgen.net/vs-marketplace/v/sibiraj-s.vscode-scss-formatter)](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter)
[![Installs](https://badgen.net/vs-marketplace/i/sibiraj-s.vscode-scss-formatter)](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter)
[![Downloads](https://badgen.net/vs-marketplace/d/sibiraj-s.vscode-scss-formatter)](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter)
[![Ratings](https://badgen.net/vs-marketplace/rating/sibiraj-s.vscode-scss-formatter)](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter&ssr=false#review-details)

SCSS Formatter is an extension for Visual Studio Code to format [SCSS](https://sass-lang.com/).

SCSS Formatter uses [Prettier] under the hood to format files. Though Prettier supports formatting various file types. This extension focuses only on `SCSS`. Additionally it supports `CSS`.

Checkout [prettier-vscode] for an extended language support

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

- MacOS: **⇧⌥F** or **Shift+Option+F**
- Linux: **Ctrl+Shift+I**
- Windows: **Shift+Alt+F**

### Formatter Demo

![SCSS Formatter Demo](assets/scss-format.gif)

### Extension Settings

This extension contributes the following settings:

- `scssFormatter.printWidth`: Line length that the formatter will wrap on.
- `scssFormatter.singleQuote`: Use single quotes instead of double quotes.
- `scssFormatter.trailingComma`: Print trailing commas wherever possible when multi-line.

### Known Issues

- `formatOnPaste` is not supported as [Prettier] does not support formatting a selection or range of text for css/scss.

[prettier]: https://github.com/prettier/prettier
[prettier-vscode]: https://github.com/prettier/prettier-vscode
