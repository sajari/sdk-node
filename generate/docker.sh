#!/usr/bin/env bash

set -eo pipefail

cd "$(dirname "$0")"

function die() {
    echo 1>&2 "$@"
    exit 1
}

GEN_PATH="$(pwd)/../src/generated"

OPENAPI_URL=${OPENAPI_URL:-https://api.search.io/v4/openapi.json}

if [ -z "$OPENAPI_URL" ]; then
    die "OPENAPI_URL must be set, e.g. https://api.search.io/v4/openapi.json"
fi

rm -rf "$GEN_PATH"
mkdir -p "$GEN_PATH"
cp .openapi-generator-ignore "$GEN_PATH"/

OPENAPI_PATH=$(mktemp /tmp/openapi.json.XXX)
trap "rm -f $OPENAPI_PATH" EXIT

wget -O "$OPENAPI_PATH" "$OPENAPI_URL"

img=$(openssl rand -base64 12 | tr -dc a-z0-9)
docker build -f Dockerfile.generate -t "$img" .
docker run --rm -it \
    -v "$OPENAPI_PATH":/openapi.json \
    -v "$GEN_PATH":/gen \
    -v "$(pwd)"/templates:/templates \
    -v "$(pwd)"/generate.sh:/generate.sh \
    -e GEN_PATH=/gen \
    -e TEMPLATES_PATH=/templates \
    "$img" \
    ./generate.sh

img=$(openssl rand -base64 12 | tr -dc a-z0-9)
docker build -f Dockerfile.post-generate -t "$img" .
docker run --rm -it \
    -v "$GEN_PATH":/app/gen \
    -v "$(pwd)"/post-generate.sh:/app/post-generate.sh \
    -e GEN_PATH=/app/gen \
    "$img" \
    ./post-generate.sh
