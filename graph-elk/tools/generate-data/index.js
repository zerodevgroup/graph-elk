const fs = require("fs")
const _ = require("lodash")
const shell = require("shelljs")
const randomstring = require("randomstring");
const program = require("commander")

const Utils = require("./components/utils")
const Identity = require("./components/identity")
const Member = require("./components/member")

program
  .option("--count <count>", "Number of members to generate")
  .option("--output <output>", "Output directory")
  .description("Generate member data")
  .action((options) => {
    // Set count to 1 if no number is supplied
    if(! options.count) {
      options.count = 1
    }

    let firstNames = JSON.parse(fs.readFileSync("./data/baby-names.json"))
    let lastNames = JSON.parse(fs.readFileSync("./data/surnames.json"))
    let emailDomains = JSON.parse(fs.readFileSync("./data/email-domains.json"))
    let phones = JSON.parse(fs.readFileSync("./data/phones.json"))

    let countries = JSON.parse(fs.readFileSync("./data/countries.json"))

    let generateOptions = {
      firstNames: firstNames,
      lastNames: lastNames,
      emailDomains: emailDomains,
      countries: countries,
    }

    let members = []

    // Members
    for(let i = 0; i < options.count; i++) {
      let member = Member.generate(generateOptions)
      members.push(member)
      console.log(member)
    }

    let outputDirectory
    if(options.output) {
      outputDirectory = options.output
    }
    else {
      outputDirectory = "./output"
    }

    shell.mkdir("-p", outputDirectory)

    fs.writeFileSync(`${outputDirectory}/members.json`, JSON.stringify(members, null, 2))
  })

program.parse(process.argv)
