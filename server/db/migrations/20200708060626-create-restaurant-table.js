'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone_number: {
        type: Sequelize.STRING
      },
      address_line1: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'address'
      },
      address_line2: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.CHAR(2),
        allowNull: false,
        unique: 'address'
      },
      zip_code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'address'
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'address'
      },
      website_url: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Restaurants')
  }
}
