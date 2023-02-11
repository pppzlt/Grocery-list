const User = require('./User');
const List = require('./List');

User.hasMany(List, {
    foreignKey: 'group_id',
    onDelete: 'SET NULL',
  });

module.exports = { User, List };

