import Joi from 'joi';

export const book = Joi.object({
    id: Joi.string().uuid().description('the book id'),
    title: Joi.string().required().description('the book title'),
    isbn: Joi.string().length(13).required().description('the book isbn'),
    description: Joi.string().description('the book description'),
    score: Joi.number().required().description('the book score'),
    price: Joi.number().required().description('the book price'),
    stock: Joi.number().required().description('the book stock')
})
    .unknown()
    .label('Book');

export const bookArray = Joi.array().items(book).label('Array of books');
