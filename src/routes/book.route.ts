import { Router } from 'express';
import { createBook, deleteBook, getBooks, getBook, updateBook } from '../controllers/book.controller';

const bookRoute = () => {
  const router = Router();
  
  router.post('/books', createBook);

  router.get('/books', getBooks);

  router.get('/books/:id', getBook);

  router.patch('/books/:id', updateBook);

  router.delete('/books/:id', deleteBook);

  return router;
};

export { bookRoute };