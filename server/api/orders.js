const router = require('express').Router()
const { Order, Product } = require('../db/models')

//GET routes
//retrieves a user's cart
router.get('/cart', (req, res, next) => {
  Order.findOne({
    where: {
      userId: req.session.passport.user,
      isActive: true
    },
    include: [{model: Product}]
  })
    .then(cart => {
      res.status(200).json(cart)
    })
    .catch(next)
})

//retrieves all of a user's orders
router.get('/user/:userId', (req, res, next) => {
  Order.findAll({
    where: {
      userId: req.params.userId
    },
    include: [{all: true}]
  })
    .then(orders => res.status(200).json(orders))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Order.findById(req.params.id)
    .then(order => res.status(200).json(order))
    .catch(next)
})

//retrieves all orders from database
//TODO:  Restrict access to admin users
router.get('/', (req, res, next) => {
  Order.findAll({
    include: [{all: true}]
  })
    .then(orders => {
      return res.status(200).json(orders)
    })
    .catch(next)
})

//POST routes
router.post('/cart', (req, res, next) => {
  const { name, price, image, description, quantity } = req.body.product
  const product = {
    name,
    price,
    image,
    description,
    quantity
  }
})

module.exports = router
