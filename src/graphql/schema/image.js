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

  type Artist {
    id: String,
    name: String,
    profile_image: Avatar,
    username: String,
  }

  type Urls {
    full: String,
    regular: String,
  }

  type Avatar {
    medium: String,
  }

`;
