#!/usr/bin/env bash

set -eo pipefail

cd "$(dirname "$0")"

if [ -z "$GEN_PATH" ]; then
    die "GEN_PATH must be set, e.g. /path/to/sajari/sdk-node/src/generated"
fi

# In the OpenAPI spec the error response is named Error but that conflicts with
# the JavaScript Error. Instead of ModelError, which the generator uses, we
# manually change it to ApiError.
mv $GEN_PATH/model/modelError.ts $GEN_PATH/model/apiError.ts
find $GEN_PATH -type f -exec sed -i 's/ModelError/ApiError/g' {} +
find $GEN_PATH -type f -exec sed -i 's/modelError/apiError/g' {} +

npm run format
