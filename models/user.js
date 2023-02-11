const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        group_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
    },
    {
        sequelize,
        // consider doing timestamps:true as a feature to let other users know when an item was added
        // this will help determine if the list is outdated or updated
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;