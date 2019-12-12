export default (gql) => gql`

  extend type Query {
    collection(_id: String): Collection,
    collections: [Collection],
  }

  extend type Mutation {
    addCollection(input: CollectionAdd): Collection,
    deleteCollection(_id: String): Collection,
    updateCollection(_id: String, input: CollectionUpdate): Collection,
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
  }

  input CollectionAdd {
    name: String,
    subtitle: String,
    description: String,
    user: String,
  }

  input CollectionUpdate {
    name: String,
    subtitle: String,
    description: String,
  }

`;
