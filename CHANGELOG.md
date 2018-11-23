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
