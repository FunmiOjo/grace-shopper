import React, { Component } from 'react'
import { connect } from 'react-redux'
import SingleProduct from './SingleProduct'
import { fetchProduct } from '../../store/product'
import { addProductToCart } from '../../store/cart'
const mapStateToProps = state => {
  return {
    selectedProduct: state.product.selectedProduct,
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadSingleProduct: () => {
      const productId = ownProps.match.params.productId
      dispatch(fetchProduct(productId))
    },
    addProduct: (id, quantity) => dispatch(addProductToCart(id, quantity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
