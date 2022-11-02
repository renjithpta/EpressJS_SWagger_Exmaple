import mongoose, { Schema, Model, Document } from 'mongoose';

type BookDocument = Document & {
  bookName: string;
  bookAuthor: string;
  bookPrice: string;
  bookPages: number;
 
};

type BookInput = {
  bookName: BookDocument['bookName'];
  bookAuthor: BookDocument['bookAuthor'];
  bookPrice: BookDocument['bookPrice'];
  bookPages: BookDocument['bookPages'];
};

const bookSchema = new Schema(
  {
    bookName: {
      type: Schema.Types.String,
      required: true,
    },
    bookAuthor: {
      type: Schema.Types.String,
      required: true,
     
    },
    bookPrice: {
      type: Schema.Types.String,
      required: true,
    },
    bookPages: {
      type: Schema.Types.Number,
      default: true,
    },
  },
  {
    collection: 'books',
    timestamps: true,
  },
);

const Book: Model<BookDocument> = mongoose.model<BookDocument>('Book', bookSchema);

export { Book, BookInput, BookDocument };