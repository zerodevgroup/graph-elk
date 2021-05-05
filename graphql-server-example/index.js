const axios = require('axios');
const { ApolloServer, gql } = require('apollo-server');
const GraphElkAPI = require('./src/apis/graph-elk-api');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Member" type defines the queryable fields for every member in our data source.
  type Member {
    firstName: String
    lastName: String
    dateOfBirth: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "members" query returns an array of zero or more Members (defined above).
  type Query {
    members(search: String): [Member]
  }
`;

const resolvers = {
  Query: {
    members: async (_, { search }, { dataSources }) => {
      return dataSources.graphElkAPI.searchMembers(search);
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer(
  {
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        graphElkAPI: new GraphElkAPI(),
      }
    }
  }
)

// The `listen` method launches a web server.
server.listen({port: 4001}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
