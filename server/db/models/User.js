const { DataTypes, Model } = require('sequelize')
const jwt = require('jsonwebtoken')
const sequelize = require('../')

class User extends Model {
  createToken () {
    return jwt.sign({ username: this.dataValues.username }, process.env.JWT_SECRET, { expiresIn: 60 * 60 })
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  middle_name: {
    type: DataTypes.STRING
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar_url: {
    type: DataTypes.STRING
  }
}, { sequelize })

module.exports = User
