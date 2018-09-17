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


const getOrderProduct = async (productId, orderId) => {
  const response = await OrderProduct.findOrCreate({
    where: {
      productId,
      orderId
    }
  })
  return response[0]
}

module.exports = {
  userLoggedIn,
  getCart,
  getOrderProduct
}
