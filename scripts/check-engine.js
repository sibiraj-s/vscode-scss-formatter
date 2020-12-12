const pkg = require('../package.json');

const vscodeVersion = parseFloat(pkg.engines.vscode.substring(1));
const typesVscodeVersion = parseFloat(pkg.devDependencies['@types/vscode'].substring(1));

if (vscodeVersion !== typesVscodeVersion) {
  console.error('Err: Vscode Engines version and \'@types/vscode\' version doesn\'t match');
  process.exit(1);
}
