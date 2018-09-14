const { Order, Product, OrderProduct } = require('../db/models')

const userLoggedIn = req => {
  return !!req.session.passport.user
}

const getCart = id => {
  return Order.findOne({
    where: {
      userId: id
    },
    include: [{model: Product}]
  })
}


const getOrderProduct = (productId, orderId) => {
  return OrderProduct.findOne({
    where: {
      productId,
      orderId
    }
  })
}

module.exports = {
  userLoggedIn,
  getCart,
  getOrderProduct
}
