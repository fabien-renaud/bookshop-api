import database from '../../../core/database';
import {DATE, NOW, UUID, UUIDV4} from 'sequelize';

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

export default OrderModel;
