const User = require("./User");
const Items = require("./Items");
const Group = require("./Group");
const UserGroup = require("./UserGroup");

User.belongsToMany(Group, {
  through: "user_group",
  foreignKey: 'user_id'
});

Group.belongsToMany(User, {
  through: "user_group",
  foreignKey: 'group_id'
});

Group.hasMany(Items, {
  foreignKey: "group_id",
  onDelete: "SET NULL",
});

// Items.hasOne(Group, {
//   foreignKey: "items_id",
//   onDelete: "SET NULL",
// });

module.exports = { User, Items, Group, UserGroup };
