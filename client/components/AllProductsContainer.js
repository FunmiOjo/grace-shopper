import React, { Component } from 'react'
import { connect } from 'react-redux'
import AllProducts from './AllProducts'
import { fetchAllProducts } from '../store/allProducts'

const mapStateToProps = state => {
  return {
    products: state.allProducts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadAllProducts: () => dispatch(fetchAllProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
