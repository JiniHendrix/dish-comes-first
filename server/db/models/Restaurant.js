const { DataTypes, Model } = require('sequelize')
const sequelize = require('../')

class Restaurant extends Model {}

Restaurant.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING
  },
  address_line1: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'address'
  },
  address_line2: {
    type: DataTypes.STRING
  },
  state: {
    type: DataTypes.CHAR(2),
    allowNull: false,
    unique: 'address'
  },
  zip_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'address'
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'address'
  },
  website_url: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
}, { sequelize })

module.exports = Restaurant
