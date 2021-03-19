import {badImplementation, badRequest, conflict, notFound} from '@hapi/boom';
import OrderService from '../service';

const fetchOrders = (req, h) => {
    return OrderService.fetchOrders()
        .then((orders) => h.response(orders).code(200))
        .catch(() => badImplementation());
};

const fetchOrderById = (req, h) => {
    const id = req.params.id;
    return OrderService.fetchOrderById(id)
        .then((order) => {
            if (!order) return notFound();
            return h.response(order).code(200);
        })
        .catch(() => notFound());
};

const createOrder = (req, h) => {
    const payload = req.payload;
    return OrderService.createOrder(payload)
        .then(() => h.response().code(201))
        .catch(() => conflict());
};

const deleteOrder = (req, h) => {
    const id = req.params.id;
    return OrderService.deleteOrder(id).then(() => h.response().code(204));
};

const checkoutOrder = (req, h) => {
    const id = req.params.id;
    return OrderService.checkoutOrder(id)
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
