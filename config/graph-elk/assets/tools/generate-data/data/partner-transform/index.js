const uuidv1 = require('uuid/v1')

let payload = require("../user-properties-qa-alchemy.json")

let partners = []
let partnerMap = {}
payload.PayloadList.forEach((item) => {
  if(!partnerMap.hasOwnProperty(item.PartnerName)) {

    let partner = {}
    partner.name = item.PartnerName
    partner._id = uuidv1()
    partner.partnerId = item.PartnerID

    partners.push(partner)

    // Only map partner once
    partnerMap[item.PartnerName] = true
  }
})

console.log(JSON.stringify(partners.sort((a, b) => (a.name > b.name) ? 1 : -1), null, 2))
