require('dotenv').config();
//this allows us to make an .env file to store things like passwords that will not be then pushed up to gitHub (good for security)

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

module.exports = sequelize;
//this sets up the connection between the database, mysql, the models and then the routes
