import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AllProducts extends Component {
  componentDidMount() {
    this.props.loadAllProducts()
  }

  render() {
    const products = this.props.products
    return (
      <div>
        {products && (
          <ul>
            {products.map(product => <li key={product.id}>{product.name}</li>)}
          </ul>
        )}
      </div>
    )
  }
}
