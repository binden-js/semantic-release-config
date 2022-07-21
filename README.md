# semantic-release-config ![CI Status](https://github.com/binden-js/semantic-release-config/workflows/CI/badge.svg) [![version](https://img.shields.io/github/package-json/v/binden-js/semantic-release-config?style=plastic)](https://github.com/binden-js/semantic-release-config) [![Known Vulnerabilities](https://snyk.io/test/github/binden-js/semantic-release-config/badge.svg)](https://snyk.io/test/github/binden-js/semantic-release-config) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) ![GitHub top language](https://img.shields.io/github/languages/top/binden-js/semantic-release-config) ![Node.js version](https://img.shields.io/node/v/@binden/semantic-release-config) ![npm downloads](https://img.shields.io/npm/dt/@binden/semantic-release-config) ![License](https://img.shields.io/github/license/binden-js/semantic-release-config)

Shareable semantic-release config.

- based on [conventionalcommits](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits)

- updates `CHANGELOG.md`

- adds GitHub tags and releases with release notes

- publishes new versions to [npm](https://www.npmjs.com/)

## Installation

```sh
npm i --save-dev @binden/semantic-release-config
```

## Usage

- Add the `extends` property (in the `.releaserc.json` file)

```json
{ "extends": "@binden/semantic-release-config", "branches": ["v1", "main"] }
```

- Run `semantic-release`

```sh
npx semantic-release
```
