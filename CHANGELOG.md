# CHANGELOG

All notable changes to this project will be documented in this file.

> **Tags**
> - Features
> - Bug Fixes
> - Performance Improvements
> - Enhancements
> - Dependency Updates
> - Breaking Changes
> - Documentation
> - Internal

## v1.4.2 (2019-08-15)

#### Dependency Updates

- update `prettier` to v1.18.2 ([82ffd3d](https://github.com/sibiraj-s/vscode-scss-formatter/commit/82ffd3d))
- update `@types/mocha` to v5.2.7 ([82ffd3d](https://github.com/sibiraj-s/vscode-scss-formatter/commit/82ffd3d))
- update `@types/prettier` to v1.18.2 ([82ffd3d](https://github.com/sibiraj-s/vscode-scss-formatter/commit/82ffd3d))
- update `husky` to v3.0.3 ([82ffd3d](https://github.com/sibiraj-s/vscode-scss-formatter/commit/82ffd3d))
- update `tslint` to v5.18.0 ([82ffd3d](https://github.com/sibiraj-s/vscode-scss-formatter/commit/82ffd3d))
- update `typescript` to v3.5.3 ([82ffd3d](https://github.com/sibiraj-s/vscode-scss-formatter/commit/82ffd3d))
- update `@types/node` to v10.14.15 ([ffcf4e1](https://github.com/sibiraj-s/vscode-scss-formatter/commit/ffcf4e1))
- update vscode test runner ([1b6e6a6](https://github.com/sibiraj-s/vscode-scss-formatter/commit/1b6e6a6))

## v1.4.1 (2019-03-04)

#### Dependency Updates

- update `@types/node` to v10.12.29 ([02c294b](https://github.com/sibiraj-s/vscode-scss-formatter/commit/02c294b))
- update `@types/mocha` to v5.2.6 ([02c294b](https://github.com/sibiraj-s/vscode-scss-formatter/commit/02c294b))
- update `vscode` to v1.1.30 ([02c294b](https://github.com/sibiraj-s/vscode-scss-formatter/commit/02c294b))
- update `@types/prettier` to v1.16.1 ([02c294b](https://github.com/sibiraj-s/vscode-scss-formatter/commit/02c294b))
- update `prettier` to v1.16.4 ([02c294b](https://github.com/sibiraj-s/vscode-scss-formatter/commit/02c294b))

#### Internal

- file rename scssFormatterProvider to FormatterProvider ([eb5f15d](https://github.com/sibiraj-s/vscode-scss-formatter/commit/eb5f15d))
- remove unncessary use strict statement ([00c1eb7](https://github.com/sibiraj-s/vscode-scss-formatter/commit/00c1eb7))
- fix warnings in package.json ([02c294b](https://github.com/sibiraj-s/vscode-scss-formatter/commit/02c294b))

## v1.4.0 (2019-01-24)

#### Features

- add an option to specify `printWidth`, defaults to `120` ([2dbc172](https://github.com/sibiraj-s/vscode-scss-formatter/commit/2dbc172))

#### Internal

- update `@types/node` to v10.12.18 ([ee7bc09](https://github.com/sibiraj-s/vscode-scss-formatter/commit/ee7bc09))
- update `husky` to v1.3.1 ([ee7bc09](https://github.com/sibiraj-s/vscode-scss-formatter/commit/ee7bc09))
- update `tslint` to v5.12.1 ([ee7bc09](https://github.com/sibiraj-s/vscode-scss-formatter/commit/ee7bc09))
- update `typescript` to v3.2.4 ([ee7bc09](https://github.com/sibiraj-s/vscode-scss-formatter/commit/ee7bc09))
- update `vscode` to v1.1.28 ([ee7bc09](https://github.com/sibiraj-s/vscode-scss-formatter/commit/ee7bc09))

## v1.3.4 (2018-11-30)

#### Performance Improvements

- remove multiple event handlers ([0c22a10](https://github.com/sibiraj-s/vscode-scss-formatter/commit/0c22a10))
- update `prettier` to v1.15.3 ([d8bf27e](https://github.com/sibiraj-s/vscode-scss-formatter/commit/d8bf27e))

#### Dependency Updates

- update `typescript` to v3.2.1 ([dcc6d59](https://github.com/sibiraj-s/vscode-scss-formatter/commit/dcc6d59))
- update `@types/prettier` to v1.15.2 ([d8bf27e](https://github.com/sibiraj-s/vscode-scss-formatter/commit/d8bf27e))
- package-lock.json maintenance update ([def591e](https://github.com/sibiraj-s/vscode-scss-formatter/commit/def591e))

## v1.3.3 (2018-11-25)

#### Internal

- move @types/prettier to devDependencies ([59e489e](https://github.com/sibiraj-s/vscode-scss-formatter/commit/59e489e))

## v1.3.2 (2018-11-24)

#### Internal

- use type definitions for prettier ([25b9b35](https://github.com/sibiraj-s/vscode-scss-formatter/commit/25b9b35))

## v1.3.1 (2018-11-23)

#### Internal

- update homepage link in package.json ([7420978](https://github.com/sibiraj-s/vscode-scss-formatter/commit/7420978))

## v1.3.0 (2018-11-23)

#### Features

- add commands to show/clear formatter output logs ([a347d1c](https://github.com/sibiraj-s/vscode-scss-formatter/commit/a347d1c))
- add message to output console on format success ([7420978](https://github.com/sibiraj-s/vscode-scss-formatter/commit/7420978))

#### Enhancements

- clear statusbarItem if active editor's file scheme doesn't match supported file types ([459c1d2](https://github.com/sibiraj-s/vscode-scss-formatter/commit/459c1d2))
- remove package-lock.json from extension bundle ([3be1f3d](https://github.com/sibiraj-s/vscode-scss-formatter/commit/3be1f3d))

#### Performance Improvements

- handle extension registration efficiently ([9a6fd40](https://github.com/sibiraj-s/vscode-scss-formatter/commit/9a6fd40))

## v1.2.3 (2018-11-22)

#### Enhancements

- show extension version instead of prettier version ([ca4f516](https://github.com/sibiraj-s/vscode-scss-formatter/commit/ca4f516))

#### Dependency Updates

- update `@types/node` to v10.12.10 ([ea49c29](https://github.com/sibiraj-s/vscode-scss-formatter/commit/ea49c29))

## v1.2.2 (2018-11-21)

#### Enhancements

- use proper menu category for commands ([de74a9c](https://github.com/sibiraj-s/vscode-scss-formatter/commit/de74a9c))

## v1.2.1 (2018-11-21)

#### Performance Improvements

- remove redundant code in deactivate method ([7f59324](https://github.com/sibiraj-s/vscode-scss-formatter/commit/7f59324))

## v1.2.0 (2018-11-21)

#### Features

- new command `SCSS Formatter: Activate` to activate the extension ([754d2fd](https://github.com/sibiraj-s/vscode-scss-formatter/commit/754d2fd))

#### Performance Improvements

- revert: don't activate extension on startup ([754d2fd](https://github.com/sibiraj-s/vscode-scss-formatter/commit/754d2fd))

#### Dependency Updates

- update `husky` to v1.2.0 ([e4e17d8](https://github.com/sibiraj-s/vscode-scss-formatter/commit/e4e17d8))

## v1.1.2 (2018-11-21)

#### Performance Improvements

- activate extension on startup ([b070fa3](https://github.com/sibiraj-s/vscode-scss-formatter/commit/b070fa3))
- remove unwanted files from extension bundle ([141e5aa](https://github.com/sibiraj-s/vscode-scss-formatter/commit/141e5aa))

#### Internal

- add extension tests ([b070fa3](https://github.com/sibiraj-s/vscode-scss-formatter/commit/b070fa3))

## v1.1.1 (2018-11-20)

#### Performance Improvements

- set minimum vscode requirement to v1.29.0 ([a4195b7](https://github.com/sibiraj-s/vscode-scss-formatter/commit/a4195b7))

## v1.1.0 (2018-11-18)

#### Features

- add format errors to vscode console ([c110235](https://github.com/sibiraj-s/vscode-scss-formatter/commit/c110235))
- update vscode statusbar with format status ([c110235](https://github.com/sibiraj-s/vscode-scss-formatter/commit/c110235))

#### Dependency Updates

- update `prettier` to v1.15.2 ([f3a3a70](https://github.com/sibiraj-s/vscode-scss-formatter/commit/f3a3a70))
- update `@types/node` to v10.12.9 ([f3a3a70](https://github.com/sibiraj-s/vscode-scss-formatter/commit/f3a3a70))
- update `husky` to v1.1.4 ([f3a3a70](https://github.com/sibiraj-s/vscode-scss-formatter/commit/f3a3a70))

## v1.0.4 (2018-11-07)

#### Dependency Updates

- update `prettier` to v1.15.1 ([618050b](https://github.com/sibiraj-s/vscode-scss-formatter/commit/618050b))
- update `@types/node` to v10.12.2 ([618050b](https://github.com/sibiraj-s/vscode-scss-formatter/commit/618050b))
- update `typescript` to v3.1.6 ([618050b](https://github.com/sibiraj-s/vscode-scss-formatter/commit/618050b))
- update `husky` to v1.1.3 ([618050b](https://github.com/sibiraj-s/vscode-scss-formatter/commit/618050b))

## v1.0.3 (2018-10-05)

#### Dependency Updates

- update `prettier` to v1.14.3 ([21df4ad](https://github.com/sibiraj-s/vscode-scss-formatter/commit/21df4ad))
- update `@types/node` to v10.11.4 ([21df4ad](https://github.com/sibiraj-s/vscode-scss-formatter/commit/21df4ad))
- update `typescript` to v3.1.1 ([21df4ad](https://github.com/sibiraj-s/vscode-scss-formatter/commit/21df4ad))
- update `husky` to v1.1.0 ([21df4ad](https://github.com/sibiraj-s/vscode-scss-formatter/commit/21df4ad))

#### Internal

- don't use standard-version for generating changelogs ([768e1d6](https://github.com/sibiraj-s/vscode-scss-formatter/commit/768e1d6))

## v1.0.2 (2018-08-26)

#### Documentation

- update README.md with installation instructions

## v1.0.1 (2018-08-26)

#### Bug Fixes

- disable `singleQuote` enabled by default([db9cd59](https://github.com/sibiraj-s/vscode-scss-formatter/commit/db9cd59))

## v1.0.0 (2018-08-26)

#### Features

- **Initial Release**: A VS Code Extension to format SCSS
