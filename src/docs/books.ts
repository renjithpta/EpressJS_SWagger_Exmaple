const bookResponse = {
    _id: {
      type: 'string',
      example: '89009922cb544047cdc3844818',
    },
    bookName: {
      type: 'string',
     
      example: 'Do Epic Shit',
    },
    bookAuthor: {
      type: 'string',
      example: 'Ankur Wariko',
    },
    bookPrice: {
      type: 'string',
      example: '$400',
    },
    bookPages: {
      type: 'number',
      example: 200,
    },
   
    createdAt: {
      type: 'string',
      example: '2022-11-02T19:40:59.495Z',
    },
    updatedAt: {
      type: 'string',
      example: '2022-11-02T21:23:10.879Z',
    },
  };
  
  const internalServerError = {
    description: 'Internal Server Error',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Internal Server Error',
            },
          },
        },
      },
    },
  };
  
  const bookNotFound = {
    description: 'Resource not found',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Book with id: "71675fcb655047cdc4955929" not found',
            },
          },
        },
      },
    },
  };
  
  const invalidBookData = {
    description: 'Invalid Data provided',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'The fields field1, field2 and field3 are required',
            },
          },
        },
      },
    },
  };
  
  const security = [
    {
      bearerAuth: [],
    },
  ];
  
  const createBookBody = {
    type: 'object',
    properties: {
      bookName: {
        type: 'string' ,
        example: 'Do Epic Shit',
      },
      bookAuthor: {
        type: 'string',
        example: 'Ankur Wariko',
      },
      bookPrice: {
        type: 'string',
        example: '$400',
      },
      bookPages: {
        type: 'number',
        example: 200,
      },
    },
  };
  
  const updateBookBody = {
    type: 'object',
    properties: {
      bookPrice: {
        type: 'string',
        example: '$200',
      },
      bookPage: {
        type: 'number',
        example: 200,
      },
    },
  };
  
  const createBook = {
    tags: ['Books'],
    description: 'Create a new book in the system',
    operationId: 'createBook',
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/createBookBody',
          },
        },
      },
      required: true,
    },
    responses: {
      '201': {
        description: 'Book created successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '60564fcb544047cdc3844818',
                },
               bookName: {
      type: 'string',
      example: 'Do Epic Shit',
    },
    bookAuthor: {
      type: 'string',
      example: 'Ankur Wariko',
    },
    bookPrice: {
      type: 'string',
      example: '$400',
    },
    bookPages: {
      type: 'number',
      example: 200,
    },
                createdAt: {
                  type: 'string',
                  example: '2021-03-20T19:40:59.495Z',
                },
                updatedAt: {
                  type: 'string',
                  example: '2021-03-20T21:23:10.879Z',
                },
              },
            },
          },
        },
      },
      '422': invalidBookData,
      '500': internalServerError,
    },
  };
  
  const getBooks = {
    tags: ['Books'],
    description: 'Retrieve all the books',
    operationId: 'getBooks',
    security: [
      {
        bearerAuth: [],
      },
    ],
    responses: {
      '200': {
        description: 'Books retrieved successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: bookResponse,
              },
            },
          },
        },
      },
      '500': internalServerError,
    },
  };
  
  const getBook = {
    tags: ['Books'],
    description: 'Retrieve one book',
    operationId: 'getBook',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'Book ID',
        required: true,
        type: 'string',
      },
    ],
    responses: {
      '200': {
        description: 'Book retrieved successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: bookResponse,
            },
          },
        },
      },
      '404': bookNotFound,
      '500': internalServerError,
    },
  };
  
  const updateBook = {
    tags: ['Books'],
    description: 'Update a book',
    operationId: 'updateBook',
    security,
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'Book ID',
        required: true,
        type: 'string',
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/updateBookBody',
          },
        },
      },
      required: true,
    },
    responses: {
      '200': {
        description: 'Book updated successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: bookResponse,
            },
          },
        },
      },
      '404': bookNotFound,
      '422': invalidBookData,
      '500': internalServerError,
    },
  };
  
  const deleteBook = {
    tags: ['Books'],
    description: 'Delete a book',
    operationId: 'deleteBook',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'Book ID',
        required: true,
        type: 'string',
      },
    ],
    responses: {
      '200': {
        description: 'Book deleted successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Book deleted successfully!',
                },
              },
            },
          },
        },
      },
      '500': {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Internal Server Error',
                },
              },
            },
          },
        },
      },
    },
  };
  
  export { createBook, createBookBody, deleteBook, getBooks, getBook, updateBookBody, updateBook };