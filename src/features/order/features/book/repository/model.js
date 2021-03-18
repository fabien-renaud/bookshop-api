import database from '../../../../../core/database';
import {INTEGER} from 'sequelize';
import BookModel from '../../../../book/repository/model';
import OrderModel from '../../../repository/model';

const OrderBookModel = database.define(
    'OrderBook',
    {
        quantity: {
            type: INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    },
    {
        tableName: 'order__book',
        timestamps: false
    }
);

OrderModel.belongsToMany(BookModel, {
    as: 'books',
    through: OrderBookModel,
    foreignKey: 'order__id',
    otherKey: 'book__id'
});
BookModel.belongsToMany(OrderModel, {
    through: OrderBookModel,
    foreignKey: 'book__id',
    otherKey: 'order__id'
});

export default OrderBookModel;
