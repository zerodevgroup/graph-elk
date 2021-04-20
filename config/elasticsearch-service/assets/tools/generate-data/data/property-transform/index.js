const _ = require("lodash")
const uuidv1 = require('uuid/v1')

let payload = require("../user-properties-qa-alchemy.json")
let partnerData = require("../partners.json")
let partners = _.keyBy(partnerData, "partnerId")

let properties = []
payload.PayloadList.forEach((item) => {
  let property = {}
  property.name = item.PropertyName
  property._id = uuidv1()
  property._partnerId = partners[item.PartnerID]._id

  properties.push(property)
})


console.log(JSON.stringify(properties, null, 2))
