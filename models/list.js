const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class list extends Model {}

list.init(
    {
        list_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        item: {
            type: DataTypes.STRING
        },
        quantity: {
            type: DataTypes.STRING
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
        group_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'group',
              },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'list'
    }
);

module.exports = list;