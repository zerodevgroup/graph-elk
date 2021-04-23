#!/bin/bash
if ! [ -d "$SERVICE_HOME/tools/postgres-backup/node_modules" ]; then
  cd $SERVICE_HOME/tools/postgres-backup
  npm install
  cd -
fi

node $SERVICE_HOME/tools/postgres-backup/index.js $*

