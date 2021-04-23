const fs = require("fs")
const shell = require("shelljs")

const schemaFile = process.argv[2]

// Load Schema
let schema = JSON.parse(fs.readFileSync(schemaFile))

schema.indexes.forEach((indexItem, index) => {
  let indexCommand = `psql --host ${process.env.PGHOST} --username ${process.env.PGUSER} --dbname ${process.env.PGDBNAME} --command "CREATE INDEX idx_${schema.table}_${indexItem.field} ON ${schema.table}(${indexItem.field});"`
  console.log(indexCommand)
  shell.exec(indexCommand)
})
