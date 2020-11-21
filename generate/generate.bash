#!/usr/bin/env bash

set -eo pipefail

cd "$(dirname "$0")"

function die() {
    echo 1>&2 $*
    exit 1
}

if [ -z "$GEN_PATH" ]; then
    die "GEN_PATH must be set, e.g. /path/to/src/generated"
fi

docker-entrypoint.sh generate \
    -i /openapi.json \
    -g typescript-node \
    --git-user-id sajari \
    --git-repo-id sdk-node \
    --additional-properties supportsES6=true \
    -o $GEN_PATH
