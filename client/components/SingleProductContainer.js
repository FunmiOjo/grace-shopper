import React, { Component } from 'react'
import { connect } from 'react-redux'
import SingleProduct from './SingleProduct'
import { fetchProduct } from '../store/product'

const mapStateToProps = state => {
  return {
    selectedProduct: state.fetchProduct.selectedProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleProduct: () => dispatch(fetchProduct())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
