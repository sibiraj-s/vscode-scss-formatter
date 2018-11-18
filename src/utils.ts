import { DocumentSelector } from 'vscode';

export const EXTENSION_NAME = 'SCSS Formatter';

/** languages supported by scss formatter */
export const supportedLanguages: string[] = [
  'css',
  'scss'
];

/** files to format by language */
export const languageSelector: DocumentSelector = supportedLanguages.map(
  (language) => ({ scheme: 'file', language })
);
