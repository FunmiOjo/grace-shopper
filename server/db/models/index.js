const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Order = require('./order')
const Review = require('./review')

Product.belongsTo(Category)
Category.hasMany(Product)

Order.belongsTo(User)
User.hasMany(Order)

Product.belongsToMany(Order, {through: 'orderproduct'})
Order.belongsToMany(Product, {through: 'orderproduct'})

Review.belongsTo(Product)
Review.belongsTo(User)
Product.hasMany(Review)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User, Product, Order, Review, Category
}
