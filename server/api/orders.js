const router = require('express').Router()
const { Order } = require('../db/models')

//retrieves all orders from database
//TODO:  Restrict access to admin users
router.get('/', (req, res, next) => {
  Order.findAll()
    .then(orders => res.status(200).json(orders))
    .catch(next)
})

router.get('/:userId', (req, res, next) => {
  Order.findAll({
    where: {
      userId: req.params.userId
    }
  })
    .then(orders => res.status(200).json(orders))
})

module.exports = router
