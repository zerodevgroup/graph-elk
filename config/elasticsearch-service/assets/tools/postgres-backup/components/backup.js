const fs = require("fs")
const _ = require("lodash")
const moment = require("moment")
const shell = require("shelljs")

class Backup {
  constructor(options) {
    this.options = options
  }

  exec() {
    console.log(this.options)
    let schema = JSON.parse(fs.readFileSync(`${this.options.schemaDirectory}/${this.options.model}.json`))

    let itemFields = []
    schema.fields.forEach((fieldItem, index) => {
      itemFields.push(fieldItem.field)
    })

    console.log(itemFields)

    let date = moment().format("YYYY-MM-DD")
    let outputDirectory = `${this.options.backupDirectory}/data-backup-${date}`

    shell.exec(`mkdir -p ${outputDirectory}`)

    let outputFile = `${outputDirectory}/${this.options.model}.json`
    
    let command = `psql --host ${this.options.host} --username ${this.options.user} --dbname ${this.options.db} --tuples-only --pset format=unaligned --command 'with t(${itemFields.join(",")}) as (select ${itemFields.join(",")} from ${schema.table}) select json_agg(t) from t' > ${outputFile}`

    console.log(command)

    shell.exec(command, { silent: true } )


    // Post process data
    let data = JSON.parse(fs.readFileSync(outputFile))
    let schemaFields = _.keyBy(schema.fields, "field")
    let processedData = []

    data.forEach((item) => {
      let processedItem = {}
      Object.keys(item).forEach((field) => {
        let outputField = schemaFields[field].name

        if(item[field] === "undefined") {
          processedItem[outputField] = ""
        }
        else {
          processedItem[outputField] = item[field]
        }
      })
      processedData.push(processedItem)
    })

    fs.writeFileSync(outputFile, JSON.stringify(processedData, null, 2))
  }
} 

module.exports = Backup
