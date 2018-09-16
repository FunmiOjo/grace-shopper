import React, { Component } from 'react'
import OrderItem from './OrderItem'
import ErrorView from './ErrorView'
import { connect } from 'react-redux'
import { fetchCart, updateCartItemQuantity, removeItemFromCart } from '../store/cart'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

class Cart extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(updatedItemInfo) {
    if (updatedItemInfo.quantity > 0) {
      this.props.updateCartItemQuantity(updatedItemInfo)
    } else {
      this.props.removeItemFromCart(updatedItemInfo)
    }
  }

  componentDidMount() {
    this.props.fetchCart()
  }

  render() {
    if (this.props.errorHappened) {
      return (
        <div>
          <ErrorView />
        </div>
      )
    }

    const { products } = this.props.cart

    return (
      <div>
        {this.props.isLoading ? (
          <CircularProgress size={200}/>
        ) : (
          <div>
            {products.map(product => (
              <OrderItem
                key={product.id}
                product={product}
                handleSubmit={this.handleSubmit}
              />
            ))}
            <div>
              <Typography variant="headline">
                {`Subtotal: $${products.reduce((accum, curr) => accum + ((curr.price) / 100) * curr.orderProduct.quantity, 0).toLocaleString()}`}
              </Typography>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: { ...state.cart.cartData },
    userId: state.user.currentUser.id,
    isLoading: state.cart.isLoading,
    errorHappened: state.cart.errorHappened
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCart: () => dispatch(fetchCart()),
    updateCartItemQuantity: (itemInfo) => dispatch(updateCartItemQuantity(itemInfo)),
    removeItemFromCart: (itemInfo) => dispatch(removeItemFromCart(itemInfo))
  }
}

export default connect(mapState, mapDispatch)(Cart)
