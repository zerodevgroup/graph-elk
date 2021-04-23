#!/bin/bash

BACKUP_DIR=$1

cd $BACKUP_DIR

echo users
curl --silent -X POST -H 'accept: application/json' -H 'content-type: application/json' -H "authId:$TOKEN" --data-binary "@./users.json" http://$SERVICE/create/users
echo ""

echo members
curl --silent -X POST -H 'accept: application/json' -H 'content-type: application/json' -H "authId:$TOKEN" --data-binary "@./members.json" http://$SERVICE/create/members
echo ""
