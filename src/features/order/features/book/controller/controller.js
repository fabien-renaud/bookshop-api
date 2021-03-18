import OrderBookRepository from '../repository';

const addBook = ({orderId, bookId, quantity}) => {
    return OrderBookRepository.addBook({orderId, bookId, quantity});
};

const removeBook = ({orderId, bookId}) => {
    return OrderBookRepository.removeBook({orderId, bookId});
};

export default {
    addBook,
    removeBook
};
