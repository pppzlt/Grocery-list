const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class UserList extends Model {}

UserList.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: 'user_id'
      }
    },
    list_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'list',
        key: 'list_id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_list",
  }
);

module.exports = UserList;
