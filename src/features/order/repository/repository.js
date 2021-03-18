import OrderModel from './model';
import BookModel from '../../book/repository/model';

const fetchOrders = () => {
    return OrderModel.findAll({include: {model: BookModel, as: 'books'}});
};

const fetchOrderById = (id) => {
    return OrderModel.findByPk(id);
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

export default {
    fetchOrders,
    fetchOrderById,
    createOrder,
    deleteOrder
};
