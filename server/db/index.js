const { Sequelize } = require('sequelize')

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST
} = process.env

const sequelize = new Sequelize(
  'dish_comes_first',
  DB_USERNAME,
  DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
  });

(async () => {
  try {
    await sequelize.authenticate()
    console.log('Successfully connected to DB')
  } catch (e) {
    console.error('Unable to connect to DB')
  }
})()

module.exports = sequelize
