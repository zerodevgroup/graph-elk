const fs = require("fs")
const moment = require("moment")

class Utils {
  static getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 

    return randomInt
  }

  static getTimestamp() {
    return moment().valueOf()
  }

  static getRandomTimestamp() {
    let randomYears = Utils.getRandomInt(0, 2)

    return moment().subtract(randomYears, "years").valueOf()
  }

  static getDate(options) {
    let timestamp
    if(options.timestamp) {
      timestamp = options.timestamp
    }
    else {
      timestamp = Utils.getTimestamp()
    }

    let date
    if(options.subtractDays) {
      let subtractDays = parseInt(options.subtractDays)
      date = moment(timestamp).subtract(subtractDays, "days")
    }
    else if(options.addDays) {
      let addDays = parseInt(options.addDays)
      date = moment(timestamp).add(addDays, "days")
    }
    else {
      date = moment(timestamp)
    }

    return date.format("YYYY-MM-DD HH:mm:ss")
  }

  static getRandomDateOfBirth() {
    const randomDateOfBirth = `${Utils.getRandomInt(1, 12)}/${Utils.getRandomInt(1,28)}/${Utils.getRandomInt(1921, 2001)}`
  
    return randomDateOfBirth
  }

  static getRandomEffectiveDate() {
    const randomRandomEffectiveDate = `${Utils.getRandomInt(1, 12)}/${Utils.getRandomInt(1,28)}/${Utils.getRandomInt(2010, 2020)}`
  
    return randomRandomEffectiveDate
  }

  static getRandomCapitalLetter() {
    const initials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let middleInitial = initials[Utils.getRandomInt(0, initials.length - 1)]

    return middleInitial
  }

  static getRandomPhone() {
    const randomPhone = `(${Utils.getRandomInt(200, 999)}) ${Utils.getRandomInt(200, 999)}-${Utils.getRandomInt(1000, 9999)}`
  
    return randomPhone
  }

  static getRandomSsn() {
    const ssn = `${Utils.getRandomInt(200, 999)}-${Utils.getRandomInt(10, 99)}-${Utils.getRandomInt(1000, 9999)}`
  
    return ssn
  }

}

module.exports = Utils
