export default (gql) => gql`

  enum CommentType {
    collection
    comment
  }

  extend type Query {
    comment(_id: String): Comment,
    comments: [Comment],
  }

  type Comment {
    _id: String,
    type: CommentType,
    subcomments: [Comment],
    user: User,
    likes: Int,
  }

  input CommentInput {
    type: CommentType,
    subcomments: [CommentInput],
    user: String,
    likes: Int,
  }

`;
