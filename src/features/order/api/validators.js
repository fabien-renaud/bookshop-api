import Joi from 'joi';

export const order = Joi.object({
    id: Joi.string().uuid().description('the order id'),
    user__id: Joi.string().uuid().required().description('the order\'s owner id'),
    checkout_at: Joi.date().description('the order checkout date. null if order is still in draft')
})
    .unknown()
    .label('Order');

export const orderArray = Joi.array().items(order).label('Array of orders');
