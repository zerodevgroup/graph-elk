const _ = require("lodash")
const randomstring = require("randomstring")
const { v1: uuid } = require('uuid');
const Utils = require("./utils")

class Member {
  static generate(options) {
    let firstNames = options.firstNames
    let lastNames = options.lastNames
    let emailDomains = options.emailDomains

    // firstName, lastName
    let firstNameItem = firstNames[Utils.getRandomInt(0, firstNames.length - 1)]
    let firstName = _.upperFirst(_.toLower(firstNameItem.name))
    let lastName = _.upperFirst(_.toLower(lastNames[Utils.getRandomInt(0, lastNames.length - 1)].name))

    // Gender
    let gender = firstNameItem.sex === "boy" ? "Male" : "Female"

    // Email
    // let emailDomain = _.toLower(emailDomains[Utils.getRandomInt(0, emailDomains.length - 1)].name)
    // let email = `${_.toLower(firstName)}_${_.toLower(lastName)}@${emailDomain}`
    let email = `${_.toLower(firstName)}.${_.toLower(lastName)}@yopmail.com`

    // SSN
    let ssn = Utils.getRandomSsn()

    // Date of Birth
    let dateOfBirth = Utils.getRandomDateOfBirth()

    // Enrolled in Plan
    let enrolledInPlan = Utils.getRandomInt(0, 4) > 3 ? false : true

    // Effective Date
    let timestamp = Utils.getRandomTimestamp()
    let planEffectiveDate = enrolledInPlan ? Utils.getDate({timestamp: timestamp}) : ""

    // Web Registration Flag
    let webRegistrationFlag = enrolledInPlan && Utils.getRandomInt(0, 1) ? true : false

    // Web  Registration Notification
    let webRegistrationNotification = webRegistrationFlag && Utils.getRandomInt(0, 1) ? true : false

    // Web  Registration Notification Date
    let webRegistrationNotificationDate = webRegistrationNotification ? Utils.getDate({timestamp: Utils.getRandomTimestamp()}) : ""

    // Web  Registration Notification Count
    let webRegistrationNotificationCount = webRegistrationNotification ? Utils.getRandomInt(1, 5) : 0

    let member = {
      id: uuid(),
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      email: email,
      ssn: ssn,
      dateOfBirth: dateOfBirth,
      timestamp: timestamp,
      enrolledInPlan: enrolledInPlan,
      planEffectiveDate: planEffectiveDate,
      webRegistrationFlag: webRegistrationFlag,
      webRegistrationNotification: webRegistrationNotification,
      webRegistrationNotificationDate: webRegistrationNotificationDate,
      webRegistrationNotificationCount: webRegistrationNotificationCount,
    }

    return member
  }
}

module.exports = Member
