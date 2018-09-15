import React, { Component } from 'react'
import OrderItem from './OrderItem'
import ErrorView from './ErrorView'
import { connect } from 'react-redux'
import { fetchCart } from '../store/cart'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

class Cart extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(updatedQuantity, id) {
    console.log('---------------------------------------------value', updatedQuantity, id)
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
          products.map(product => (
            <OrderItem
              key={product.id}
              product={product}
              handleSubmit={this.handleSubmit}
            />
          ))
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
    fetchCart: () => dispatch(fetchCart())
  }
}

export default connect(mapState, mapDispatch)(Cart)
