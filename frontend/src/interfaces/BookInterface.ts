import { UUID } from "crypto";

interface BookInterface {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  id: UUID;
}

export default BookInterface;
