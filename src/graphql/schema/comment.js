export default (gql) => gql`

  enum CommentType {
    collection
    comment
  }

  extend type Query {
    comment(_id: String): Comment,
    comments(typeId: String, type: CommentType): [Comment],
  }

  extend type Mutation {
    addComment(typeId: String, type: CommentType, input: String): Comment,
  }

  type Comment {
    _id: String,
    type: CommentType,
    typeId: String,
    message: String,
    comments: [Comment],
    user: User,
    created_at: String,
  }

  input CommentInput {
    type: CommentType,
    comments: [CommentInput],
    user: String,
    typeId: String,
  }

`;
