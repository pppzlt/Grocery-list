const User = require("./User");
const Items = require("./Items");
const Group = require("./Group");
const UserGroup = require("./UserGroup");

User.belongsToMany(Group, {
  through: "user_group",
});

Group.belongsToMany(User, {
  through: "user_group",
});

Group.hasMany(Items, {
  foreignKey: "group_id",
  onDelete: "SET NULL",
});

UserGroup.hasMany(User, Group, {
  foreignKey: "group_id" ,
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Items.hasOne(Group, {
  foreignKey: "items_id",
  onDelete: "SET NULL",
});

module.exports = { User, Items, Group, UserGroup };
