import { booksData } from '../data/books';

interface QueryBooksArgs {
  title: string
}

export const resolvers = {
  Query: {
    books: () => booksData,
    searchBooks: (_: any, args: QueryBooksArgs) => {
      const book = booksData.filter(book => book.title.toLowerCase().includes(args.title.toLowerCase()))
      return book;
    },
  },
};
