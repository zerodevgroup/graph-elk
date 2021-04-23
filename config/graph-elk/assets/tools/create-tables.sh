#!/bin/bash
if ! [ -d "$SERVICE_HOME/tools/create-table/node_modules" ]; then
  cd $SERVICE_HOME/tools/create-table
  npm install
  cd -
fi

export PGHOST=$HOST
export PGUSER="devops"
export PGDBNAME=$DBNAME

node $SERVICE_HOME/tools/create-table/index.js $SERVICE_HOME/schemas/users.json
node $SERVICE_HOME/tools/create-table/index.js $SERVICE_HOME/schemas/members.json

