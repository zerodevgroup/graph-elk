const { RESTDataSource } = require('apollo-datasource-rest');

class GraphElkAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'http://localhost/_search/';
  }

  async searchMembers(search) {
    let query = {
      query: {
        match: {
          phrase: {
            query: search
          }
        }
      }
    }

    const data = await this.post(
      'members', // path
      query, // request body
      {
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'authId': process.env.TOKEN,
        }
      } // options
    );
    return data.hits.hits;
  }
}

module.exports = GraphElkAPI
