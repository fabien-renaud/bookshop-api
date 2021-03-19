import Joi from 'joi';
import {bookArray} from '../../book/api/validators';

export const order = Joi.object({
    id: Joi.string().uuid().description('the order id'),
    user__id: Joi.string().uuid().required().description("the order's owner id"),
    books: bookArray,
    checkout_at: Joi.date().allow(null).description('the order checkout date. null if order is still in draft')
})
    .unknown()
    .label('Order');

export const orderArray = Joi.array().items(order).label('Array of orders');
