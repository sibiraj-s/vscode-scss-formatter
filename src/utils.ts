import type { BuiltInParserName } from 'prettier';
import { type DocumentSelector, extensions } from 'vscode';

/**
 * @returns {string} package version
 */
const getExtensionVersion = (): string | null => {
  const extension = extensions.getExtension('sibiraj-s.vscode-scss-formatter');
  if (extension && extension.packageJSON) {
    return extension.packageJSON.version;
  }
  return null;
};

/** languages supported by scss formatter */
export const supportedLanguages: BuiltInParserName[] = [
  'css',
  'scss',
];

/** files to format by language */
export const languageSelector: DocumentSelector = supportedLanguages.map((language) => ({ language }));

export const EXTENSION_NAME = 'SCSS Formatter';
export const EXTENSION_VERSION: string | null = getExtensionVersion();
