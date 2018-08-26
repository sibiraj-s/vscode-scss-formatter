# VS Code SCSS Formatter

SCSS Formatter is an extension for Visual Studio Code to format [SCSS](https://sass-lang.com/).

SCSS Formatter uses [Prettier](https://github.com/prettier/prettier) under the hood to format files. Though Prettier supports formatting various file types. This extension focuses only on `SCSS`. Additionally it supports `CSS`

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

* `scssFormatter.useTabs`: Indent lines with tabs instead of spaces.
* `scssFormatter.tabWidth`: Specify the number of spaces per indentation-level.
* `scssFormatter.singleQuote`: Use single quotes instead of double quotes.

Though prettier supports various options, only few were added to provide consistency. The `formatOnPaste` is not supported and won't be supported as it may lead to unexpected code formatting.
