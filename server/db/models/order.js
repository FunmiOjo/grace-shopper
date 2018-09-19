const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  orderStatus: {
    type: Sequelize.ENUM('processing', 'shipped', 'fulfilled'),
    defaultValue: 'processing'
  }
})

module.exports = Order
