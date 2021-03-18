import OrderModel from '../../../repository/model';

const addBook = ({orderId, bookId, quantity}) => {
    return OrderModel.findByPk(orderId).then((order) => {
        return order.addBook([bookId], {through: {quantity}}).catch(error => console.error(error));
    });
};

const removeBook = ({orderId, bookId}) => {
    return OrderModel.findByPk(orderId).then((order) => {
        return order.removeBook([bookId]);
    });
};

export default {
    addBook,
    removeBook
};
