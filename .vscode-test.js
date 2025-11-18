const { defineConfig } = require('@vscode/test-cli');

module.exports = defineConfig({
  files: 'out/test/**/*.test.js',
  workspaceFolder: './test-workspace/test.code-workspace',
});
