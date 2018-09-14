import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductGridList from './ProductGridList'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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
  constructor() {
    super()
    this.state = {
      canEdit: false
    }
  }

  componentDidMount() {
    this.props.loadAllProducts()
  }

  render() {
    const products = this.props.products
    return (
      <div className="container">
        {products && (
          <div>
            <ProductGridList products={products} />
          </div>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(AllProducts)
