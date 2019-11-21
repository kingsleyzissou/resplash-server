# Graphql Schema
This directory houses all the GraphQL schema for
the app.

To add a new schema, create a new file and use the following as
boiler plate:

```
export default (gql) => gql`

  extend type Query {
    ...
  }

  type Type {
    ...
  }

`;
```

Then import the file into the `aggregator.js` file and
add it to the default array being exported.

The index file will then load the aggregation of schema and
inject the `gql` dependency into each schema and return
an array of schema to be used in the server.
