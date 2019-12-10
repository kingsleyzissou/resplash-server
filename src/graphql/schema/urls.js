export default (gql) => gql`

  type Urls {
    full: String,
    regular: String,
  }

  input UrlsInput {
    full: String,
    regular: String,
  }

`;
