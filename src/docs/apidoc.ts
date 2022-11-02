
import { createBook, createBookBody, deleteBook, getBook, getBooks, updateBook, updateBookBody } from './books';
const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'Book REST API - Documentation',
    description: 'Description of Book API here',
    termsOfService: 'https://book.com/terms',
    contact: {
      name: 'Developer name',
      email: 'dev@example.com',
      url: 'https://devwebsite.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:4500/',
      description: 'Local Server',
    },
    {
      url: 'https://api.book.com',
      description: 'Production Server',
    },
  ],
  tags: [
  
    {
      name: 'Books',
    },
  ],
  paths: {
    
    '/books': {
      post: createBook,
      get: getBooks,
    },
    '/books/{id}': {
      delete: deleteBook,
      get: getBook,
      patch: updateBook,
    },
    
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
     
      createBookBody,
      updateBookBody,

    },
  },
};

export { apiDocumentation };