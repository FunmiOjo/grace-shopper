'use strict'

const express = require('express')
const db = require('../db/models')
const Product = db.models.product

const router = express.Router()

// route to serve up all products
router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => res.status(200).json(products))
    .catch(next)
})

// route to serve up a single product
router.get('/:productId', (req, res, next) => {
  Product.findById(req.params.productId)
    .then(product => res.status(200).json(product))
    .catch(next)
})
