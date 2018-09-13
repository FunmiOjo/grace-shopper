import React, {Component} from 'react'
import OrderItem from './OrderItem'
import { connect } from 'react-redux'
import { fetchCart } from '../store/cart'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'


class Cart extends Component {

  componentDidMount() {
    this.props.fetchCart()
  }

  render() {
    const { products } = this.props.cart

    return (
      <div>
        {
          this.props.isLoading
          ?
          <p>Loading</p>
          :
          products.map(product => (<OrderItem key={product.id} product={product} />))
        }
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: { ...state.cart.cartData},
    userId: state.user.currentUser.id,
    isLoading: state.cart.isLoading
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCart: () => dispatch(fetchCart())
  }
}

export default connect(mapState, mapDispatch)(Cart)
