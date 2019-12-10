export default (gql) => gql`

  type Avatar {
    medium: String,
  }

  input AvatarInput {
    medium: String,
  }

`;
