const color = require('picocolors');

const pkg = require('../package.json');
const pkgLock = require('../package-lock.json');

const vscodeVersion = pkg.engines.vscode.substring(1);
const typesVscodeVersion = pkg.devDependencies['@types/vscode'].substring(1);

if (vscodeVersion !== typesVscodeVersion) {
  const msg = color.red('Err: Version specified in engines.vscode and \'@types/vscode\' doesn\'t match');
  console.error(msg);
  process.exit(1);
}

if (pkg.version !== pkgLock.version) {
  console.error(color.red('Err: Manifest and lock file version mismatch'));
  process.exit(1);
}
