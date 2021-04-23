#!/bin/bash

COUNT=5
export TIMESTAMP=`timestamp.sh`

cd ~/cim-nba-reference-app/member-service/tools

rm -rf ~/wip/output-*; ./create-tables.sh; ./generate-data.sh $COUNT;

psql -U devops -h $SERVICE -d $DBNAME --command "insert into users values('$TOKEN', 'admin@zerodevgroup.com', '0000', 'admin', NULL, 'Administrator', NULL, NULL);"

./import-all.sh ~/wip/output-*
