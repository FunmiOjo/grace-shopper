import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../../store'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ProductForm from './ProductForm'
import { editProduct, removeProduct } from '../../store/product'
import { connect } from 'react-redux'

class SingleProduct extends Component {
  componentDidMount() {
    this.props.loadSingleProduct()
  }

  render() {
    const product = this.props.selectedProduct
    return (
      <div className="container">
        {product && (
          <Grid container direction="row">
            <Grid item>
              <img src={product.image} />
            </Grid>
            <Grid container direction="column">
              <Grid item xs>
                {product.name}
              </Grid>
              <Grid item xs>
                ${product.price}
              </Grid>
              <Grid item xs>
                {product.description}
              </Grid>
            </Grid>
          </Grid>
        )}
      </div>
    )
  }
}

export default SingleProduct
