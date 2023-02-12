const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class UserGroup extends Model {}

UserGroup.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'user_id'
      }
    },
    group_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Group,
        key: 'group_id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_group",
  }
);

module.exports = UserGroup;
