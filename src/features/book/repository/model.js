import database from '../../../core/database';
import {FLOAT, INTEGER, STRING, UUID, UUIDV4} from 'sequelize';

const BookModel = database.define(
    'Book',
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: STRING,
            allowNull: false
        },
        isbn: {
            type: STRING(13),
            allowNull: false,
            unique: true
        },
        description: {
            type: STRING,
            allowNull: true
        },
        score: {
            type: INTEGER,
            allowNull: false
        },
        price: {
            type: FLOAT,
            allowNull: false
        },
        stock: {
            type: INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'book',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

export default BookModel;
