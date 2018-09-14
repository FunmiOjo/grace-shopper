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
    store.subscribe(() => {
      this.setState(store.getState().product)
    })
  }

  render() {
    const products = this.state.allProducts
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

const mapDispatchToProps = dispatch => {
  return {
    loadAllProducts: () => dispatch(fetchAllProducts())
  }
}

export default connect(null, mapDispatchToProps)(ManageProducts)
