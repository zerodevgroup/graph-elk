const _ = require("lodash")
const uuidv1 = require('uuid/v1')

let payload = require("../user-rewards-qa-alchemy.json")

let outletData = require("../outlets.json")
let outlets = _.keyBy(outletData, "outletId")

let awards = []
payload.Payload.List.forEach((item) => {
  let award = {}
  award._id = uuidv1()
  award._outletId = outlets[item.OutletId]._id
  award.cost = item.Cost
  award.isActive = item.IsActive
  award.noLocals = item.NoLocals
  award.name = item.RewardName
  award.reserved = item.Reserved === 0 ? false : true
  award.awardId = item.RewardId
  award.awardType = item.RewardType
  award.awardValue = item.RewardValue
  award.status = item.StatusText
  award.totalPurchases = item.TotalPurchases
  award.totalRedemptions = item.TotalRedemptions
  award.venue = item.Venue

  awards.push(award)
})


console.log(JSON.stringify(awards, null, 2))
