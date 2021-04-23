const _ = require("lodash")
const uuidv1 = require('uuid/v1')

let payload = require("../user-outlets-qa-alchemy.json")
let propertyData = require("../properties.json")
let properties = _.keyBy(propertyData, "name")

let outlets = []
payload.Payload.outlets.forEach((item) => {
  let outlet = {}
  outlet._id = uuidv1()
  outlet._propertyId = properties[item.PropertyName]._id
  outlet.city = item.City
  outlet.isActive = item.IsActive
  outlet.location = item.LocationName
  outlet.name = item.OutletName
  outlet.outletId = item.OutletID

  outlets.push(outlet)
})


console.log(JSON.stringify(outlets, null, 2))
