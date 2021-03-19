import OrderModel from '../../../repository/model';

const addBook = (order, bookId, quantity) => {
    return order.addBook([bookId], {through: {quantity}}).catch(error => console.error(error));
};

const removeBook = (order, bookId) => {
    return order.removeBook([bookId]);
};

export default {
    addBook,
    removeBook
};
