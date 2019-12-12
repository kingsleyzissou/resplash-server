export default (gql) => gql`

  extend type Query {
    likes: Like,
  }

  type Like {
    likedByMe: Boolean,
    count: Int,
  }

`;
