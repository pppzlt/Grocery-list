const sequelize = require('../config/connection');
const { User, List } = require('../models');

const listData = require('./list-seed.json');
const userData = require('./user-seed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const item of userData) {
    await User.create({...item});
  };

  for (const item of listData) { 
    await List.create({...item});
  };
  process.exit(0);
};

seedDatabase();