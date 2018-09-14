import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ProductGridList from './ProductGridList'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

class AllProducts extends Component {
  componentDidMount() {
    this.props.loadAllProducts()
  }

  render() {
    const products = this.props.products
    return (
      <div className="container">
        {products && <ProductGridList products={products} />}
      </div>
    )
  }
}

export default withStyles(styles)(AllProducts)
