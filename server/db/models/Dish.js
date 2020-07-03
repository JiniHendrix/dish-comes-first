const { DataTypes, Model } = require('sequelize')
const sequelize = require('../')

class Dish extends Model {}

Dish.init({
  id: {
    unique: true,
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, { sequelize })

module.exports = Dish
