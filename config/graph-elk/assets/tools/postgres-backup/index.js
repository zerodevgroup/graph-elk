const program = require("commander")
const shell = require("shelljs")
const fs = require("fs")
const Backup = require("./components/backup")

// ~/.postgres-backup.json
/*
{
  "host": "goldenyears-api",
  "user": "devops",
  "db": "goldenyears",
  "backupDirectory": "/var/backups/goldenyears",
  "schemaDirectory": "/root/goldenyears-20210131/config/data/schemas"
}
*/


program
  .option("--model [model name]", "Model name")
  .description("Backup a model")
  .action((options) => {
    let defaultOptions = JSON.parse(fs.readFileSync(`${process.env.HOME}/.postgres-backup.json`))
    let backupOptions = Object.assign(defaultOptions, { model: options.model })

    let backup = new Backup(backupOptions)
    backup.exec()
  })

program.parse(process.argv)
