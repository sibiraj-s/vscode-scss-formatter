import * as path from 'path';
import * as Mocha from 'mocha';
import * as glob from 'fast-glob';

export const run = async (): Promise<void> => {
  // Create the mocha test
  const mocha = new Mocha({
    ui: 'tdd',
    color: true,
  });

  const testsRoot = path.resolve(__dirname, '..');

  try {
    const files = await glob('**/**.test.js', { cwd: testsRoot });
    files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)));

    await new Promise((c, e) => {
      mocha.run((failures) => {
        if (failures > 0) {
          e(new Error(`${failures} tests failed.`));
        } else {
          c(null);
        }
      });
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
