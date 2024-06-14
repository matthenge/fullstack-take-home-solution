import { gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
      coverPhotoURL
      readingLevel
      id
    }
  }
`;

export default GET_BOOKS;
