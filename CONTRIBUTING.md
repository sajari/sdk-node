# Contributing

**Table of contents**

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Run tests](#run-tests)
- [Setup examples](#setup-examples)
- [Build](#build)
- [Release](#release)

## Prerequisites

- Prepare your environment for Node.js. We use [volta](https://volta.sh/) to manage node versions. Follow the [install guide for volta](https://docs.volta.sh/guide/getting-started) to get started.
- You will also need Docker if you regenerate the OpenAPI code.

## Install

```
npm install
```

## Run tests

```
npm test
```

## Setup examples

```
npm run setup-examples
```

## Generate

If you need to regenerate the OpenAPI-generated, use the script:

```
./generate/docker.sh
```

## Build

```
npm run clean
npm run build
```

## Release

When you are ready to release, make sure the version in package.json has been bumped. Then create a [GitHub Release](https://github.com/sajari/sdk-node/releases).

The format of the release tag should be `vx.x.x` e.g. `v4.5.1`.

Creating a release triggers a [GitHub Action](.github/workflows/npm-publish.yml) that publishes the package to NPM.
