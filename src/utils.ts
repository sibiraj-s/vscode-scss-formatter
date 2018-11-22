import { DocumentSelector, extensions } from 'vscode';

/**
 * @returns {string} package version
 */
function getExtensionVersion(): string | null {
  const extension = extensions.getExtension('sibiraj-s.vscode-scss-formatter');
  if (extension && extension.packageJSON) {
    return extension.packageJSON.version;
  }
  return null;
}

/** languages supported by scss formatter */
const supportedLanguages: string[] = [
  'css',
  'scss'
];

/** files to format by language */
const languageSelector: DocumentSelector = supportedLanguages.map(
  (language) => ({ scheme: 'file', language })
);

const EXTENSION_NAME = 'SCSS Formatter';
const EXTENSION_VERSION: string | null = getExtensionVersion();

export {
  EXTENSION_NAME,
  EXTENSION_VERSION,
  supportedLanguages,
  languageSelector
};
