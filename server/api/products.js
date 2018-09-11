'use strict'

const express = require('express')
const db = require('../db/models')
const {Product} = require('../db/models')

const router = express.Router()

// route to serve up all products
router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => res.status(200).json(products))
    .catch(next)
})

// route to serve up a single product
router.get('/:id', async (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => res.status(200).json(product))
    .catch(next)
})

module.exports = router
