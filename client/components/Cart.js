import React, {Component} from 'react'
import OrderItem from './OrderItem'
import { connect } from 'react-redux'
import { fetchCart } from '../store/cart'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'


class Cart extends Component {

  async componentDidMount() {
    await this.props.fetchCart() //leaving this hard-coded until user is complete
  }

  render() {
    const { products } = this.props.cart

    return (
      <div>
        {
          products
          ?
          products.map(product => (<OrderItem key={product.id} product={product} />))
          :
          <p>Loading</p>
        }
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: { ...state.cart},
    userId: state.user.currentUser.id
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCart: () => dispatch(fetchCart())
  }
}

export default connect(mapState, mapDispatch)(Cart)
