export default (gql) => gql`

  extend type Query {
    collection(_id: String): Collection,
    collections: [Collection],
  }

  extend type Mutation {
    addCollection(collection: CollectionInput): Collection
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

  input CollectionInput {
    name: String,
    subtitle: String,
    description: String,
    user: UserInput,
    images: [ImageInput],
    comments: [CommentInput],
    likes: Int,
  }

`;
