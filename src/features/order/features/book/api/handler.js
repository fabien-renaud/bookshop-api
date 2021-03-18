import {conflict} from '@hapi/boom';
import OrderBookController from '../controller';

const addBook = (req, h) => {
    const {orderId, bookId} = req.params;
    const payload = req.payload;
    return OrderBookController.addBook({orderId, bookId, ...payload})
        .then(() => h.response().code(201))
        .catch(() => conflict());
};

const removeBook = (req, h) => {
    const {orderId, bookId} = req.params;
    return OrderBookController.removeBook({orderId, bookId}).then(() => h.response().code(204));
};

export default {
    addBook,
    removeBook
};
