const { DataTypes, Model } = require('sequelize')
const sequelize = require('../')
const { User } = require('./')

class Restaurant extends Model {}

// TODO: add latitude, longitude
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
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.fn('NOW')
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.fn('NOW')
  },
  owner_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: User,
      key: 'id'
    }
  }
}, { sequelize })

module.exports = Restaurant
