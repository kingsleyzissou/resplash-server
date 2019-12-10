export default (gql) => gql`

  extend type Query {
    image(_id: String): Image,
    images: [Image],
  }

  type Image {
    _id: String,
    description: String,
    alt_description: String,
    user: Artist,
    urls: Urls,
    likes: Int,
  }

  input ImageInput {
    description: String,
    alt_description: String,
    user: ArtistInput,
    urls: UrlsInput,
    likes: Int,
  }

`;
