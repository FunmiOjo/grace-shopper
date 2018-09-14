import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { fetchAllProducts } from '../store/product'

class ManageProducts extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const products = this.props.products
    return (
      <div>
        {products && (
          <List>
            {products.map(product => (
              <ListItem
                component="a"
                href={'/products/' + product.id}
                key={product.id}
              >
                <img src={product.image} />
                <ListItemText
                  primary={product.name}
                  secondary={product.price}
                />
              </ListItem>
            ))}
          </List>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.allProducts
  }
}

export default connect(mapStateToProps)(ManageProducts)
