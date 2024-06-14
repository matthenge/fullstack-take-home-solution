import {booksData} from '../data/books';
import {v4 as uuidv4} from 'uuid';

interface QueryBooksArgs {
  title: string
}

export const resolvers = {
  Query: {
    books: () => {
      // Add a new id field to each object in the array
      return booksData.map(obj => ({
        ...obj,
        id: uuidv4(),
      }));
    },
    searchBooks: (_: any, args: QueryBooksArgs) => {
      return booksData.filter(book => book.title.toLowerCase().includes(args.title.toLowerCase()));
    },
  },
};
