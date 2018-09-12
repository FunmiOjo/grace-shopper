const router = require('express').Router()
const { Order } = require('../db/models')

router.get('/', (req, res, next) => {
  //retrieve orders from database
  Order.findAll()
    .then(orders => res.json(orders))
    .catch(next)
})
module.exports = router
