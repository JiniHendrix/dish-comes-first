'use strict'

module.exports = {
  up: async (queryInterface, { DataTypes }) => {
    return queryInterface.createTable('Users', {
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
}
