import {badImplementation, conflict, notFound} from '@hapi/boom';
import BookService from '../service';

const fetchBooks = (req, h) => {
    return BookService.fetchBooks()
        .then((books) => h.response(books).code(200))
        .catch(() => badImplementation());
};

const fetchBookById = (req, h) => {
    const id = req.params.id;
    return BookService.fetchBookById(id)
        .then((book) => {
            if (!book) return notFound();
            return h.response(book).code(200);
        })
        .catch(() => notFound());
};

const createBook = (req, h) => {
    const payload = req.payload;
    return BookService.createBook(payload)
        .then(() => h.response().code(201))
        .catch(() => conflict());
};

const updateBook = (req, h) => {
    const id = req.params.id;
    const payload = req.payload;
    return BookService.updateBook(id, payload).then(() => h.response().code(204));
};

const deleteBook = (req, h) => {
    const id = req.params.id;
    return BookService.deleteBook(id).then(() => h.response().code(204));
};

export default {
    fetchBooks,
    fetchBookById,
    createBook,
    updateBook,
    deleteBook
};
