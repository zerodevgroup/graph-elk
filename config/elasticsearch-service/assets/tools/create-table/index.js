const fs = require("fs")
const shell = require("shelljs")

const schemaFile = process.argv[2]

// Load Schema
let schema = JSON.parse(fs.readFileSync(schemaFile))

// Drop table
let dropCommand = `psql --host ${process.env.PGHOST} --username ${process.env.PGUSER} --dbname ${process.env.PGDBNAME} --command "DROP TABLE IF EXISTS ${schema.table} CASCADE;"`
console.log(dropCommand)
shell.exec(dropCommand)


let tableDefinition = ""
schema.fields.forEach((fieldItem, index) => {
  if(index > 0) {
    tableDefinition += ", "
  }
  tableDefinition += `${fieldItem.field} ${fieldItem.type}`
})

// Create table
let createCommand = `psql --host ${process.env.PGHOST} --username ${process.env.PGUSER} --dbname ${process.env.PGDBNAME} --command 'CREATE TABLE ${schema.table}(${tableDefinition});'`
console.log(createCommand)
shell.exec(createCommand)

