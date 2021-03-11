import BookModel from './model';

const fetchBooks = () => {
    return BookModel.findAll();
};

const fetchBookById = (id) => {
    return BookModel.findByPk(id);
};

const createBook = (book) => {
    return BookModel.create(book);
};

const updateBook = (id, book) => {
    const options = {
        where: {id}
    };
    return BookModel.update(book, options);
};

const deleteBook = (id) => {
    const options = {
        where: {id}
    };
    return BookModel.destroy(options);
};

export default {
    fetchBooks,
    fetchBookById,
    createBook,
    updateBook,
    deleteBook
};
