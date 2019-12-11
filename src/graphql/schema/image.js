export default (gql) => gql`

  extend type Query {
    image(id: String): Image,
    images: [Image],
  }

  type Image {
    _id: String,
    description: String,
    alt_description: String,
    user: Artist,
    urls: Url,
    likes: Int,
  }

  input ImageInput {
    id: String,
    description: String,
    alt_description: String,
    user: ArtistInput,
    urls: UrlInput,
    likes: Int,
  }

`;
