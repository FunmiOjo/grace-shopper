const Sequelize = require('sequelize')
const Product = require('./product')
const db = require('../db')

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'cat.jpg'
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

Category.findByCategory = name => {
  return Product.findAll({
    include: [{ model: Product, where: { name }, as: 'productcategory' }]
  })
}

module.exports = Category
