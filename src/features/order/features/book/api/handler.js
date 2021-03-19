import {conflict} from '@hapi/boom';
import OrderBookService from '../service';

const addBook = (req, h) => {
    const {orderId, bookId} = req.params;
    const {quantity} = req.payload;
    return OrderBookService.addBook({orderId, bookId, quantity})
        .then(() => h.response().code(201))
        .catch(() => conflict());
};

const removeBook = (req, h) => {
    const {orderId, bookId} = req.params;
    return OrderBookService.removeBook({orderId, bookId}).then(() => h.response().code(204));
};

export default {
    addBook,
    removeBook
};
