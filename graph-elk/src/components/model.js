const fs = require("fs")
const _ = require("lodash")
const { v1: uuidv1 } = require('uuid');
const { Client } = require("pg")

class Model {
  constructor(options) {
    this.options = options
    this.schema = JSON.parse(fs.readFileSync(`./schemas/${this.options.modelName}.json`))
  }

  list(callback) {
    let mockData = [
      {
          "id": "c93d8b70-a443-11eb-b173-bbc163208834",
          "firstName": "Myrtice",
          "lastName": "Alkhateeb",
          "dateOfBirth": "3/6/1993",
          "gender": "Female",
          "email": "myrtice.alkhateeb@yopmail.com",
          "ssn": "611-76-8664",
          "enrolledInPlan": "",
          "planEffectiveDate": "",
          "webRegistrationFlag": "",
          "webRegistrationNotification": "",
          "webRegistrationNotificationDate": "",
          "webRegistrationNotificationCount": ""
      },
      {
          "id": "c93f8740-a443-11eb-b173-bbc163208834",
          "firstName": "Sherman",
          "lastName": "Voge",
          "dateOfBirth": "12/26/1926",
          "gender": "Male",
          "email": "sherman.voge@yopmail.com",
          "ssn": "945-80-1078",
          "enrolledInPlan": true,
          "planEffectiveDate": "2020-04-23 10:54:21",
          "webRegistrationFlag": true,
          "webRegistrationNotification": true,
          "webRegistrationNotificationDate": "2020-04-23 10:54:21",
          "webRegistrationNotificationCount": "1"
      },
      {
          "id": "c9402380-a443-11eb-b173-bbc163208834",
          "firstName": "Johnie",
          "lastName": "Barbus",
          "dateOfBirth": "7/2/1955",
          "gender": "Male",
          "email": "johnie.barbus@yopmail.com",
          "ssn": "723-48-8990",
          "enrolledInPlan": true,
          "planEffectiveDate": "2019-04-23 10:54:21",
          "webRegistrationFlag": true,
          "webRegistrationNotification": "",
          "webRegistrationNotificationDate": "",
          "webRegistrationNotificationCount": ""
      },
      {
          "id": "c94098b0-a443-11eb-b173-bbc163208834",
          "firstName": "Everett",
          "lastName": "Ryu",
          "dateOfBirth": "3/9/1982",
          "gender": "Male",
          "email": "everett.ryu@yopmail.com",
          "ssn": "994-47-6305",
          "enrolledInPlan": true,
          "planEffectiveDate": "2021-04-23 10:54:21",
          "webRegistrationFlag": "",
          "webRegistrationNotification": "",
          "webRegistrationNotificationDate": "",
          "webRegistrationNotificationCount": ""
      },
      {
          "id": "c940bfc0-a443-11eb-b173-bbc163208834",
          "firstName": "Carroll",
          "lastName": "Chhit",
          "dateOfBirth": "2/16/1957",
          "gender": "Female",
          "email": "carroll.chhit@yopmail.com",
          "ssn": "990-67-7916",
          "enrolledInPlan": true,
          "planEffectiveDate": "2019-04-23 10:54:21",
          "webRegistrationFlag": "",
          "webRegistrationNotification": "",
          "webRegistrationNotificationDate": "",
          "webRegistrationNotificationCount": ""
      }
    ]

    callback(mockData)
  }

}

module.exports = Model
