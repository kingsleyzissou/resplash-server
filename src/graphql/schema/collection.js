export default (gql) => gql`

  extend type Query {
    collection(_id: String): Collection,
    collections: [Collection],
  }

  extend type Mutation {
    addCollection(collection: CollectionInput): Collection,
    addImage(_id: String, input: ImageInput): Collection,
    removeImage(_id: String, image: String): Collection,
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
    user: String,
    images: [ImageInput],
    comments: [CommentInput],
    likes: Int,
  }

`;
