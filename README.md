# graph-elk
Graph/ElasticSearch integration

graph-elk - Mock ElasticSearch Server

```
cd graph-elk
npm install
npm start
```

graphql-server-example - GraphQL Server

```
cd graph-server-example
npm install
npm start
```

Point your browser to: http://localhost:4000

Insert this query to see all members:

```
{
  members {
    firstName
    lastName
    dateOfBirth
  }
}
```

Insert this query to filter members:

```
{
  members(search: "ever") {
    firstName
    lastName
    dateOfBirth
  }
}
```
