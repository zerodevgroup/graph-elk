#!/bin/bash
if ! [ -d "$SERVICE_HOME/tools/create-index/node_modules" ]; then
  cd $SERVICE_HOME/tools/create-index
  npm install
  cd -
fi

export PGHOST="business-rules-service"
export PGUSER="devops"
export PGDBNAME="rules"

node $SERVICE_HOME/tools/create-index/index.js $SERVICE_HOME/config/data/schemas/users.json

