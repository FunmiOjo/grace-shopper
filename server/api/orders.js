const router = require('express').Router()
const { Order } = require('../db/models')

//retrieves a user's cart
router.get(':/userId/cart', (req, res, next) => {
  Order.findOne({
    where: {
      userId: req.params.userId,
      isActive: true
    }
  })
    .then(cart => res.json(cart))
    .catch(next)
})

//retrieves all of a user's orders
router.get('/:userId', (req, res, next) => {
  Order.findAll({
    where: {
      userId: req.params.userId
    },
    include: [{all: true}]
  })
    .then(orders => res.status(200).json(orders))
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


module.exports = router
