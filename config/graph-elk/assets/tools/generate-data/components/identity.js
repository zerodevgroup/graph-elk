const _ = require("lodash")
const randomstring = require("randomstring")
const { v1: uuid } = require('uuid');
const Utils = require("./utils")

class Identity {
  static generate(options) {
    let app = options.app
    let player = options.player
    let identifier = options.identifier
    let type = options.type
    let source = options.source

    let timestamp = Utils.getRandomTimestamp()
    let createdDate = Utils.getDate({timestamp: timestamp})

    let identity = {
      _createdDate: createdDate,
      _id: uuid(),
      _playerId: player._id,
      _timestamp: timestamp,
      identifier: identifier,
      app: app,
      source: source,
      type: type,
    }

    return identity
  }
}

module.exports = Identity
