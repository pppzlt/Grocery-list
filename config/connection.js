// requiring sequelize npm and the dot env file
const Sequelize = require ('sequelize');
require ('dotenv').config();
let sequelize;
// connecting to jawsdb and plugging in the passwords
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
        {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        },
    );
}
// exporting sequelize
module.exports = sequelize;