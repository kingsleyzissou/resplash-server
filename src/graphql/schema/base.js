export default (gql) => gql`

  type Query {
    hello: String
  }

  type Mutation {
    sayHello(name: String!): String!
  }

`;
