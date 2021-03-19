import OrderRepository from '../../../repository';
import OrderBookRepository from '../repository';

const addBook = async ({orderId, bookId, quantity}) => {
    const order = await OrderRepository.fetchOrderById(orderId);
    return OrderBookRepository.addBook(order, bookId, quantity);
};

const removeBook = async ({orderId, bookId}) => {
    const order = await OrderRepository.fetchOrderById(orderId);
    return OrderBookRepository.removeBook(order, bookId);
};

export default {
    addBook,
    removeBook
};
