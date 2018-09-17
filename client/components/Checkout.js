import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import { makePayment } from '../store/payment'

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
      currency: 'usd'
    })
  }

  render() {
    const { user, subtotal } = this.props
    return <div>
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
    user: state.user.currentUser,
    subtotal: state.cart.cartData.products.reduce((accum, curr) => {
      return accum + curr.price / 100 * curr.orderProduct.quantity
    }, 0) * 100
  }
}

const mapDispatch = dispatch => {
  return {
    makePayment: paymentInfo => dispatch(makePayment(paymentInfo))
  }
}

export default connect(mapState, mapDispatch)(Checkout)
