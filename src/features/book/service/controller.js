import BookRepository from '../repository';

const fetchBooks = () => {
    return BookRepository.fetchBooks();
};

const fetchBookById = (id) => {
    return BookRepository.fetchBookById(id);
};

const createBook = (book) => {
    return BookRepository.createBook(book);
};

const updateBook = (id, book) => {
    return BookRepository.updateBook(id, book);
};

const deleteBook = (id) => {
    return BookRepository.deleteBook(id);
};

export default {
    fetchBooks,
    fetchBookById,
    createBook,
    updateBook,
    deleteBook
};
