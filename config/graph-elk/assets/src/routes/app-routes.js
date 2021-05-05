let Model = require("../components/model")

class AppRoutes {
  static getRoutes(router) {
    /**
     * @api {get} /status/ Get Status
     * @apiName status
     * @apiGroup app
     * @apiVersion 0.1.0
     *
     * @apiSuccessExample Success-Response:
     *   HTTP/1.1 200 OK
     *   {
     *     "status": "OK"
     *   }
     *
     */
    router.get("/status", (request, response) => {
      response.json({
        status: "OK"
      })
    })

    router.post("/_search/:modelName", (request, response) => {

      let modelName = request.params.modelName
      let data = request.body
      let searchTerm = data.query.match.phrase.query

      let options = {}
      options.modelName = modelName
      options.data = {
        "statement": `select * from ${modelName}`
      }

      let model = new Model(options)

      model.list((data) => {
        let matchedItems = []

        data.forEach((item) => {
          let itemString = `${item.lastName} ${item.firstName} ${item.dateOfBirth}`

          let pattern = new RegExp(searchTerm, "i")
          if(pattern.test(itemString)) {
            let matchedItem = {
              id: item.id,
              firstName: item.firstName,
              lastName: item.lastName,
              dateOfBirth: item.dateOfBirth
            }
            matchedItems.push(matchedItem)
          }
        })

        let returnData = {
          "took" : 0,
          "timed_out" : false,
          "_shards" : {
            "total" : 1,
            "successful" : 1,
            "skipped" : 0,
            "failed" : 0
          },
          "hits" : {
            "total" : {
              "value" : 2,
              "relation" : "eq"
            },
            "max_score" : 0.6785374,
            "hits" : matchedItems
          }
        }

        response.json(returnData)
      })
    })
  }
}

module.exports = AppRoutes
