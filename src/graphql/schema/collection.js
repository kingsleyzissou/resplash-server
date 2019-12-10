export default (gql) => gql`

  extend type Query {
    collection(_id: String): Collection,
    collections: [Collection],
  }

  type Collection {
    _id: String,
    name: String,
    subtitle: String,
    description: String,
    user: User,
    images: [Image],
    comments: [Comment],
    likes: Int,
  }

`;
