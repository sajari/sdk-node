#!/usr/bin/env bash

set -eo pipefail

cd "$(dirname "$0")"

npm run format
