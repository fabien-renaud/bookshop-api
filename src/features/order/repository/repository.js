import OrderModel from './model';

const fetchOrders = () => {
    return OrderModel.findAll();
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
