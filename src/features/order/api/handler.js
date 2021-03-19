import {badImplementation, badRequest, conflict, notFound} from '@hapi/boom';
import OrderController from '../controller';

const fetchOrders = (req, h) => {
    return OrderController.fetchOrders()
        .then((orders) => h.response(orders).code(200))
        .catch(() => badImplementation());
};

const fetchOrderById = (req, h) => {
    const id = req.params.id;
    return OrderController.fetchOrderById(id)
        .then((order) => {
            if (!order) return notFound();
            return h.response(order).code(200);
        })
        .catch(() => notFound());
};

const createOrder = (req, h) => {
    const payload = req.payload;
    return OrderController.createOrder(payload)
        .then(() => h.response().code(201))
        .catch(() => conflict());
};

const deleteOrder = (req, h) => {
    const id = req.params.id;
    return OrderController.deleteOrder(id).then(() => h.response().code(204));
};

const checkoutOrder = (req, h) => {
    const id = req.params.id;
    return OrderController.checkoutOrder(id)
        .then(() => h.response().code(200))
        .catch(() => badRequest());
};

export default {
    fetchOrders,
    fetchOrderById,
    createOrder,
    deleteOrder,
    checkoutOrder
};
