const { DataTypes, Model } = require('sequelize')
const sequelize = require('../')
const { User, Restaurant } = require('./')

class Review extends Model {}

Review.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  review: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: User,
      key: 'id'
    },
    allowNull: false
  },
  restaurant_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: Restaurant,
      key: 'id'
    },
    allowNull: false
  }
}, { sequelize })

module.exports = Review
