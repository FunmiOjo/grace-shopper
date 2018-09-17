'use strict'

const express = require('express')
const { Product, Category } = require('../db/models')
const router = express.Router()

// route to serve up all products
router.get('/', (req, res, next) => {
  Product.findAll({
    include: [{ model: Category }]
  })
    .then(products => res.status(200).json(products))
    .catch(next)
})

// route to serve up a single product by id
router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id, {
    include: [{ model: Category }]
  })
    .then(product => res.status(200).json(product))
    .catch(next)
})

// POST

router.post('/', (req, res, next) => {
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(next)
})

// PUT

router.put(':/productId', (req, res, next) => {
  Product.findById(req.params.productId)
    .then(product => {
      if (product) {
        product.update(req.body).then(updatedProduct => {
          return res.send(updatedProduct)
        })
      }
      const err = new Error('Product not found.')
      err.status = 404
      next(err)
    })
    .catch(next)
})

// DELETE

router.delete(':/productId', (req, res, next) => {
  Product.findById(req.params.productId)
    .then(product => {
      if (!product) {
        const err = new Error('Product not found.')
        err.status = 404
        next(err)
      }
      if (product) {
        product.destroy({ force: true }).then(products => res.json(products))
      }
    })
    .catch(next)
})

// figure out why this isn't working
// route to serve up all products belonging to a category
router.get('/category/:categoryName', (req, res, next) => {
  Product.findAll({
    include: [
      {
        model: Category,
        where: { name: req.params.categoryName },
        as: 'productcategory'
      }
    ]
  })
    .then(products => res.status(200).json(products))
    .catch(next)
})

// temp
// route to serve up all products belonging to a cateogry
router.get('/category/:categoryId', (req, res, next) => {
  Category.findById(req.params.categoryId)
    .then(products => res.status(200).json(products))
    .catch(next)
})

module.exports = router
