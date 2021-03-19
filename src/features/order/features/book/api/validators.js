import Joi from 'joi';

export const OrderBookUuid = Joi.object({
    orderId: Joi.string().uuid().required().description('order uuid'),
    bookId: Joi.string().uuid().required().description('book uuid')
});

export const quantity = Joi.object({
    quantity: Joi.number().optional().description('the number of books')
})
    .allow(null)
    .label('Quantity');
