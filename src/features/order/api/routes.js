import uuid from '../../common/validators';
import {order, orderArray} from './validators';
import OrderHandler from './handler';

const routes = [
    {
        method: 'GET',
        path: '/orders',
        options: {
            handler: OrderHandler.fetchOrders,
            description: 'Get orders',
            notes: 'Returns all orders',
            tags: ['api', 'order'],
            response: {
                status: {
                    200: orderArray,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/orders/{id}',
        options: {
            handler: OrderHandler.fetchOrderById,
            description: 'Get order by id',
            notes: 'Returns order by id',
            tags: ['api', 'order'],
            validate: {
                params: uuid
            },
            response: {
                status: {
                    200: order,
                    400: undefined,
                    404: undefined,
                    500: undefined
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/orders',
        options: {
            handler: OrderHandler.createOrder,
            description: 'Create order',
            notes: 'Creates a new order',
            tags: ['api', 'order'],
            validate: {
                payload: order
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
        path: '/orders/{id}',
        options: {
            handler: OrderHandler.deleteOrder,
            description: 'Delete order by id',
            notes: 'Deletes a order by id',
            tags: ['api', 'order'],
            validate: {
                params: uuid
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
