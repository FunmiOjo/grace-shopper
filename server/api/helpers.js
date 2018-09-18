const { Order, Product, OrderProduct } = require('../db/models')

const userLoggedIn = req => {
  return !!req.session.passport.user
}

const getCart = async id => {
  try {
    return await Order.findOne({
      where: {
        userId: id,
        isActive: true
      },
      include: [{model: Product}]
    })
  } catch (error) {
    return error
  }
}


const getOrderProduct = async (productId, orderId) => {
  try {
    const response = await OrderProduct.findOrCreate({
      where: {
        productId,
        orderId
      }
    })
    return response[0]
  } catch (error) {
    return error
  }
}

module.exports = {
  userLoggedIn,
  getCart,
  getOrderProduct
}
