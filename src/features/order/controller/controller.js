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

export default {
    fetchOrders,
    fetchOrderById,
    createOrder,
    deleteOrder
};
