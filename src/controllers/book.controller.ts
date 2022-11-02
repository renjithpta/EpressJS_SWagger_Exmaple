import { Request, Response } from 'express';


import { Book, BookInput } from '../models/book.model';


const createBook = async (req: Request, res: Response) => {
  try {
  const { bookName, bookAuthor, bookPrice, bookPages } = req.body;

  if (!bookName || !bookAuthor || !bookPrice || !bookPages) {
    return res.status(422).json({ message: 'The fields bookName, bookAuthor, bookPrice and bookPages  are required' });
  }

  const bookInput: BookInput = {
    bookName,
    bookAuthor,
    bookPrice,
    bookPages,
    
  };

  const bookCreated = await Book.create(bookInput);

  return res.status(201).json({ data: bookCreated });


} catch (err:any){
  

  return res.status(500).json({ message: err });
}

};

const getBooks = async (req: Request, res: Response) => {
 
  const books = await Book.find().sort('-createdAt').exec();

  return res.status(200).json({ data: books });
};

const getBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  const book = await Book.findOne({ _id: id }).exec();

  if (!book) {
    return res.status(404).json({ message: `Book with id "${id}" not found.` });
  }

  return res.status(200).json({ data: book });
};

const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { bookPrice, bookPages } = req.body;

  const book = await Book.findOne({ _id: id });

  if (!book) {
    return res.status(404).json({ message: `Book with id "${id}" not found.` });
  }

  if (!bookPrice || !bookPages) {
    return res.status(422).json({ message: 'The fields price and pages are required' });
  }

  await Book.updateOne({ _id: id }, { bookPrice, bookPages });

  const userUpdated = await Book.findById(id);

  return res.status(200).json({ data: userUpdated });
};

const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Book.findByIdAndDelete(id);

  return res.status(200).json({ message: 'Book deleted successfully.' });
};


export { createBook, deleteBook, getBooks, getBook, updateBook };