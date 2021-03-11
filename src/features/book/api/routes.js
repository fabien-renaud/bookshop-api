import uuid from '../../common/validators';
import {book, bookArray} from './validators';
import BookHandler from './handler';

const routes = [
    {
        method: 'GET',
        path: '/books',
        options: {
            handler: BookHandler.fetchBooks,
            description: 'Get books',
            notes: 'Returns all books',
            tags: ['api', 'book'],
            response: {
                status: {
                    200: bookArray,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/books/{id}',
        options: {
            handler: BookHandler.fetchBookById,
            description: 'Get book by id',
            notes: 'Returns book by id',
            tags: ['api', 'book'],
            validate: {
                params: uuid
            },
            response: {
                status: {
                    200: book,
                    400: undefined,
                    404: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/books',
        options: {
            handler: BookHandler.createBook,
            description: 'Create book',
            notes: 'Creates a new book',
            tags: ['api', 'book'],
            validate: {
                payload: book
            },
            response: {
                status: {
                    201: undefined,
                    400: undefined,
                    409: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'PATCH',
        path: '/books/{id}',
        options: {
            handler: BookHandler.updateBook,
            description: 'Update book by id',
            notes: 'Updates a book by id',
            tags: ['api', 'book'],
            validate: {
                params: uuid,
                payload: book
            },
            response: {
                status: {
                    204: undefined,
                    400: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        options: {
            handler: BookHandler.deleteBook,
            description: 'Delete book by id',
            notes: 'Deletes a book by id',
            tags: ['api', 'book'],
            validate: {
                params: uuid
            },
            response: {
                status: {
                    204: undefined,
                    400: undefined,
                    500: undefined
                }
            }
        }
    }
];

export default routes;
