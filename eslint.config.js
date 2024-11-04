import pegasus from "eslint-config-pegasus";

export default [
  pegasus.configs.default,
  pegasus.configs.node,
  ...pegasus.tsConfig({
    files: ['*.ts'],
    extends: pegasus.configs.typescript,
  }),
];
