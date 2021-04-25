const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
 
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 3000 }, () =>
  console.log('Now browse to http://localhost:3000' + server.graphqlPath)
);
