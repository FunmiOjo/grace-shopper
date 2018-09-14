const router = require('express').Router()
const { Order, Product, OrderProduct } = require('../db/models')
const { userLoggedIn, getCart, getOrderProduct } = require('./helpers')

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
router.post('/cart', async (req, res, next) => {
  const { productId, quantity } = req.body
  const userId = req.session.passport.user
  if (userLoggedIn(req)) {
   const cart = await getCart(userId)
   if (cart) {
    const orderProduct = getOrderProduct(productId, cart.id)

   }
  }

  res.end()
  //scenario 1: user is not logged in/does not have account
  //scenario 2: user is logged in
  //  a: user already has cart
  //  b: user does not have cart
  //other scenarios:  product is already in cart
  //other scenarios:  product is not already in cart



})

module.exports = router
