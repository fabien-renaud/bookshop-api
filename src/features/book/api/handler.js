import {badImplementation, conflict, notFound} from '@hapi/boom';
import BookController from '../controller';

const fetchBooks = (req, h) => {
    return BookController.fetchBooks()
        .then((books) => h.response(books).code(200))
        .catch(() => badImplementation());
};

const fetchBookById = (req, h) => {
    const id = req.params.id;
    return BookController.fetchBookById(id)
        .then((book) => {
            if (!book) return notFound();
            return h.response(book).code(200);
        })
        .catch(() => notFound());
};

const createBook = (req, h) => {
    const payload = req.payload;
    return BookController.createBook(payload)
        .then(() => h.response().code(201))
        .catch(() => conflict());
};

const updateBook = (req, h) => {
    const id = req.params.id;
    const payload = req.payload;
    return BookController.updateBook(id, payload).then(() => h.response().code(204));
};

const deleteBook = (req, h) => {
    const id = req.params.id;
    return BookController.deleteBook(id).then(() => h.response().code(204));
};

export default {
    fetchBooks,
    fetchBookById,
    createBook,
    updateBook,
    deleteBook
};
