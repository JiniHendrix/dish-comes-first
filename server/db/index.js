const { Sequelize } = require('sequelize')

const {
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_HOST
} = process.env

const sequelize = new Sequelize(
  'dish_comes_first',
  MYSQL_USERNAME,
  MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    dialect: 'mysql'
  })

async function connectDB () {
  try {
    await sequelize.authenticate()
    console.log('Successfully connected to DB')
  } catch (e) {
    console.error('Unable to connect to DB')
  }
}

connectDB()

module.exports = sequelize
