import OrderModel from './model';
import BookModel from '../../book/repository/model';

const fetchOrders = () => {
    return OrderModel.findAll({include: {model: BookModel, as: 'books'}});
};

const fetchOrderById = (id) => {
    return OrderModel.findByPk(id, {include: {model: BookModel, as: 'books'}});
};

const createOrder = (order) => {
    return OrderModel.create(order);
};

const deleteOrder = (id) => {
    const options = {
        where: {id}
    };
    return OrderModel.destroy(options);
};

const checkoutOrder = (id) => {
    const options = {
        where: {id}
    };
    return OrderModel.update({checkout_at: new Date()}, options);
};

export default {
    fetchOrders,
    fetchOrderById,
    createOrder,
    deleteOrder,
    checkoutOrder
};
