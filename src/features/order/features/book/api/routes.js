import {quantity, OrderBookUuid} from './validators';
import OrderBookHandler from './handler';

const routes = [
    {
        method: 'POST',
        path: '/orders/{orderId}/books/{bookId}',
        options: {
            handler: OrderBookHandler.addBook,
            description: 'Add a book to the order',
            notes: 'Add a book to the order',
            tags: ['api', 'order'],
            validate: {
                params: OrderBookUuid,
                payload: quantity
            },
            response: {
                status: {
                    201: undefined,
                    400: undefined,
                    409: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'DELETE',
        path: '/orders/{orderId}/books/{bookId}',
        options: {
            handler: OrderBookHandler.removeBook,
            description: 'Remove a book from the order',
            notes: 'Removes a book from the order',
            tags: ['api', 'order'],
            validate: {
                params: OrderBookUuid
            },
            response: {
                status: {
                    204: undefined,
                    400: undefined,
                    500: undefined
                }
            }
        }
    }
];

export default routes;
