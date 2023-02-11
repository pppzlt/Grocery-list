const User = require('./User');
const List = require('./List');

List.hasOne(User, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE',
  });

module.exports = { User, List };

