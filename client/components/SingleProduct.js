import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

export default class SingleProduct extends Component {
  componentDidMount() {
    this.props.loadSingleProduct()
  }

  render() {
    const product = this.props.selectedProduct
    return (
      <div className="container">
        {product && (
          <div>
            <img src={product.image} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        )}
      </div>
    )
  }
}
