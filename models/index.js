const User = require("./User");
const Items = require("./Items");
const List = require("./List");
const UserList = require("./UserList");

User.belongsToMany(List, {
  through: "user_list",
  foreignKey: 'user_id'
});

List.belongsToMany(User, {
  through: "user_list",
  foreignKey: 'list_id'
});

List.hasMany(Items, {
  foreignKey: "list_id",
  onDelete: "CASCADE",
});

Items.belongsTo(List, {
  foreignKey: "list_id",
});



module.exports = { User, Items, List, UserList };
