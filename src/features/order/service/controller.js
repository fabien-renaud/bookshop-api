import BookRepository from '../../book/repository';
import OrderRepository from '../repository';

const fetchOrders = () => {
    return OrderRepository.fetchOrders();
};

const fetchOrderById = (id) => {
    return OrderRepository.fetchOrderById(id);
};

const createOrder = (order) => {
    return OrderRepository.createOrder(order);
};

const deleteOrder = (id) => {
    return OrderRepository.deleteOrder(id);
};

const checkoutOrder = async (id) => {
    const order = await OrderRepository.fetchOrderById(id);
    Promise.all(
        order.books.map(async (orderBook) => {
            const book = await BookRepository.fetchBookById(orderBook.id);
            return new Promise((resolve, reject) => {
                const quantity = orderBook.OrderBook.quantity;
                if (book.stock > quantity) resolve();
                reject();
            });
        })
    ).then(() => OrderRepository.checkoutOrder(id));
};

export default {
    fetchOrders,
    fetchOrderById,
    createOrder,
    deleteOrder,
    checkoutOrder
};
