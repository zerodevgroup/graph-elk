#!/bin/bash
if ! [ -d "$SERVICE_HOME/tools/generate-data/node_modules" ]; then
  cd $SERVICE_HOME/tools/generate-data
  npm install
  cd -
fi

COUNT=$1

cd $SERVICE_HOME/tools/generate-data/
node index.js --count $COUNT --output ~/wip/output-$TIMESTAMP
