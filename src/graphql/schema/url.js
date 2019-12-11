export default (gql) => gql`

  type Url {
    full: String,
    regular: String,
  }

  input UrlInput {
    full: String,
    regular: String,
  }

`;
