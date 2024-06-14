export const typeDefs = `#graphql
  scalar UUID

  type Book {
    title: String
    author: String
    coverPhotoURL: String
    readingLevel: String
    id: UUID
  }

  type Query {
    books: [Book]
    searchBooks(title: String!): [Book]
  }
`;
