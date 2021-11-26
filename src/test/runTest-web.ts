import * as path from 'path';

import { runTests } from '@vscode/test-web';

const main = async () => {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');

    // The path to test runner
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, './suite/index-web');

    // extension test workspace
    const extensionTestWorkspace = path.resolve(extensionDevelopmentPath, 'test-workspace');

    const attachArgName = '--waitForDebugger=';
    const waitForDebugger = process.argv.find((arg) => arg.startsWith(attachArgName));

    // Download VS Code, unzip it and run the integration test
    await runTests({
      browserType: 'chromium',
      extensionDevelopmentPath,
      extensionTestsPath,
      folderPath: extensionTestWorkspace,
      waitForDebugger: waitForDebugger ? Number(waitForDebugger.slice(attachArgName.length)) : undefined,
    });
  } catch (err) {
    console.error('Failed to run tests');
    process.exit(1);
  }
};

main();
