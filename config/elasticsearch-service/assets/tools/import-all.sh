#!/bin/bash

BACKUP_DIR=$1

cd $BACKUP_DIR

echo users
curl --silent -X POST -H 'accept: application/json' -H 'content-type: application/json' -H "authId:$TOKEN" --data-binary "@./users.json" http://member-service/create/users
echo ""

echo members
curl --silent -X POST -H 'accept: application/json' -H 'content-type: application/json' -H "authId:$TOKEN" --data-binary "@./members.json" http://member-service/create/members
echo ""

echo preferences
curl --silent -X POST -H 'accept: application/json' -H 'content-type: application/json' -H "authId:$TOKEN" --data-binary "@./preferences.json" http://preference-service/create/preferences
echo ""
