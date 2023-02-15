// importing sequelize and the default models
const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
// setting up the list table
class List extends Model {}

List.init(
    {
        list_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        list_name: {
            type: DataTypes.STRING
        },
        list_descrip: {
            type: DataTypes.STRING
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
// exporting the list table
module.exports = List;