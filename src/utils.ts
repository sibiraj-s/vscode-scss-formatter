import { DocumentSelector } from 'vscode';

const prettier = require('prettier');

const EXTENSION_NAME = 'SCSS Formatter';

/** languages supported by scss formatter */
const supportedLanguages: string[] = [
  'css',
  'scss'
];

/** files to format by language */
const languageSelector: DocumentSelector = supportedLanguages.map(
  (language) => ({ scheme: 'file', language })
);

export {
  prettier,
  EXTENSION_NAME,
  supportedLanguages,
  languageSelector
};
