export default (gql) => gql`

  type Artist {
    id: String,
    name: String,
    profile_image: Avatar,
    username: String,
  }

  input ArtistInput {
    id: String,
    name: String,
    profile_image: AvatarInput,
    username: String,
  }

`;
