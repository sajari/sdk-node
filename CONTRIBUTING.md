# Contributing

**Table of contents**

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Run tests](#run-tests)
- [Setup examples](#setup-examples)
- [Build](#build)

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
./generate/docker.bash
```

## Build

```
npm run clean
npm run build
```
