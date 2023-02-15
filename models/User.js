// import in seqelize and the default models
const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}
// setting up the user table
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
        }
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
// exporting the user table
module.exports = User;