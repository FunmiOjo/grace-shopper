const Sequelize = require('sequelize')
const Category = require('./category')
const db = require('../db')
const Op = Sequelize.Op

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'image.jpg'
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'description'
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

// find all products based on categories
// not sure why this isn't working or what the alias is supposed to be
// using a category route for now
Product.findByCategory = name => {
  console.log(name)
  return Product.findAll({
    include: [{ model: Category, where: { name }, as: 'category' }]
  })
}

module.exports = Product
