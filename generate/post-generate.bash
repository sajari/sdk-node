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

# This does two things:
# 1. Fix generated path variables that don't work with Google's API design
#    resource names.
# 2. Make sure that resource names are not URL encoded. Resource names contain
#    slashes so the URL encoding needs to be done by the caller.
# TODO(jingram): Consider using openapi-generator templates instead of this hack
# to fix paths.
npx replace-in-file \
    "/\.replace\(\n*\s*'\{'\s*\+\s*('[\w\.]+')\s*\+\s*'\}',\n*\s*encodeURIComponent\(String\((\w+)\)\)/g" \
    ".replace(/{\w+}/, String(\$2)" \
    $GEN_PATH/api/**.ts \
    --isRegex

npm run format
