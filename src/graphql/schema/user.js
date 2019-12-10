export default (gql) => gql`

  extend type Query {
    user(_id: String): User,
  }

  type User {
    _id: String,
    name: String,
    username: String,
    email: String,
    collections: [Collection],
  }

  input UserInput {
    name: String,
    username: String,
    email: String,
    collections: [CollectionInput],
  }

`;
