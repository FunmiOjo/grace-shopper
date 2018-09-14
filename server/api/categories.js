'use strict'

const express = require('express')
const { Product, Category } = require('../db/models')
const router = express.Router()

// route to serve up all categories
router.get('/', (req, res, next) => {
  Category.findAll({
    include: [{ model: Product }]
  })
    .then(category => res.status(200).json(category))
    .catch(next)
})

// route to serve up all products belonging to a cateogry
router.get('/:categoryName', (req, res, next) => {
  Category.findByCategory(req.params.categoryName)
    .then(products => res.status(200).json(products))
    .catch(next)
})

module.exports = router
