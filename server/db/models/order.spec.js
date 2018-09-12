'use strict'

const chai = require('chai')
const expect = chai.expect

const db = require('../index')
const Product = db.model('product')
const Order = db.model('order')
const OrderProduct = db.model('orderProduct')

describe('Order model', () => {
  describe.only('Associated products', () => {
    it('should retrieve associated products', async () => {
      let product1 = await Product.create({
        name: 'product',
      })

      const order1 = await Order.create({
        orderStatus: 'processing'
      })
      const id = order1.id
      await order1.addProducts([product1])
      await order1.save()
      const order = await Order.findById(id, {
        include: [{all: true}]
      })
      expect(order.products[0].id).to.equal(product1.id)
    })
  })
})
