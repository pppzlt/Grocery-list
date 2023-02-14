const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Items extends Model {}

Items.init(
    {
        items_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        item: {
            type: DataTypes.STRING
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        frequency: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        },
        comment: {
            type: DataTypes.STRING
        },
        list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'list',
                key: 'list_id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'items'
    }
);

module.exports = Items;