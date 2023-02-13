const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class List extends Model {}

List.init(
    {
        list_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        listName: {
            type: DataTypes.STRING
        },
        listDescrip: {
            type: DataTypes.STRING
        },
        // references the 'id' of 'user' to find which one is within a list
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //       model: 'user',
        //       key: 'user_id',
        //     },
        //   },
    },
    {
        sequelize,
        // consider doing timestamps:true as a feature to let other users know when an item was added
        // this will help determine if the list is outdated or updated
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'list'
    }
);

module.exports = List;