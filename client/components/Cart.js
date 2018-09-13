import React, {Component} from 'react'
import OrderItem from './OrderItem'
import { connect } from 'react-redux'
import { fetchCart } from '../store/cart'

class Cart extends Component {

  async componentDidMount() {
    await this.props.fetchCart(2) //leaving this hard-coded until user is complete
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
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCart: (userId) => dispatch(fetchCart(userId))
  }
}

export default connect(mapState, mapDispatch)(Cart)
