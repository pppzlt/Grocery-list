const sequelize = require('../config/connection');
const { User, Items } = require('../models');

const itemsData = require('./items-seed.json');
const userData = require('./user-seed.json');
const groupData = require('./group-seed.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const item of userData) {
    await User.create({...item});
  };

  for (const item of itemsData) { 
    await Items.create({...item});
  };

  for (const item of groupData) {
    await Group.create({...item});
  };
  process.exit(0);
};

seedDatabase();