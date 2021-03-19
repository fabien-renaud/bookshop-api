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
        checkout_at: {
            type: DATE,
            allowNull: true
        }
    },
    {
        tableName: 'order',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

OrderModel.afterBulkUpdate(order => {
    console.log("TRIGGER");
    // todo
});

export default OrderModel;
