import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import { makePayment, fetchCart } from '../store/cart'
import Cart from './Cart'
import CheckoutUserInfo from './CheckoutUserInfo'

class Checkout extends Component {
  constructor() {
    super()
    this.onToken = this.onToken.bind(this)
  }

  onToken (token) {
    this.props.makePayment({
      source: token.id,
      userId: this.props.user.id,
      amount: this.props.subtotal,
      currency: 'usd',
      cartId: this.props.cartId
    })
  }

  componentDidMount() {
    this.props.fetchCart()
  }

  render() {
    const { user, subtotal } = this.props
    return <div>
      <Cart checkout={1}/>
      <CheckoutUserInfo />
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_eRGqXtCXghlozssQP3iTYo6E"
        name={`${user.firstName} ${user.lastName}`}
        amount={subtotal}/>
    </div>
  }
}

const mapState = state => {
  return {
    cartId: state.cart.cartData.id,
    user: state.user.currentUser,
    subtotal: state.cart.subtotal
  }
}

const mapDispatch = dispatch => {
  return {
    makePayment: paymentInfo => dispatch(makePayment(paymentInfo)),
    fetchCart: () => dispatch(fetchCart())
  }
}

export default connect(mapState, mapDispatch)(Checkout)
