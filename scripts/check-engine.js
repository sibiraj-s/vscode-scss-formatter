const pkg = require('../package.json');
const pkgLock = require('../package-lock.json');

const vscodeVersion = parseFloat(pkg.engines.vscode.substring(1));
const typesVscodeVersion = parseFloat(pkg.devDependencies['@types/vscode'].substring(1));

if (vscodeVersion !== typesVscodeVersion) {
  console.error('Err: Vscode Engines version and \'@types/vscode\' version doesn\'t match');
  process.exit(1);
}

if (pkg.version !== pkgLock.version) {
  console.error('Err: Manifest and lock file version mismatch');
  process.exit(1);
}
