import database from '../../../core/database';
import {BOOLEAN, DATE, INTEGER, NOW, UUID, UUIDV4} from 'sequelize';
import BookModel from "../../book/repository/model";

const OrderModel = database.define(
    'Order',
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        user__id: {
            type: UUID,
            allowNull: false
        },
        created_at: {
            type: DATE,
            allowNull: true,
            defaultValue: NOW
        }
    },
    {
        tableName: 'order',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

const OrderBookModel = database.define(
    'OrderBook',
    {
        book__id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        order__id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        quantity: {
            type: INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        tableName: 'order__book',
        timestamps: false
    }
)

OrderModel.belongsToMany(BookModel, {through: OrderBookModel});
BookModel.belongsToMany(OrderModel, {through: OrderBookModel});

export default OrderModel;
