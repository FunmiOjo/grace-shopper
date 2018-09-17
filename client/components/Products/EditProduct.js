import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { fetchProduct, editProduct, removeProduct } from '../../store/product'
import ProductForm from './ProductForm'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'

class EditProduct extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.product
  }

  componentDidMount() {
    // set state with the product
    this.props.loadSingleProduct(this.props.match.params.id)
  }

  handleChange = prop => event => {
    const currentState = this.state
    this.setState({ ...currentState, [prop]: event.target.value })
  }

  handleSelect = event => {
    if (event.target.checked) {
      this.state.categories.push(event.target.value)
    } else {
      this.state.categories.filter(
        category => category.id !== event.target.value
      )
    }
  }

  render() {
    const { classes, theme } = this.props
    const product = this.props.selectedProduct
    const deleteProduct = this.props.deleteProduct
    console.log('state', this.state)
    return (
      product && (
        <div>
          <Typography variant="title">Edit Product</Typography>
          <ProductForm
            product={product}
            categories={this.props.categories}
            handleChange={this.handleChange}
            handleSelect={this.handleSelect}
            productAction={this.props.updateProduct}
            buttonName="UPDATE"
          />
          <Button
            variant="contained"
            color="red"
            onClick={() => deleteProduct(product.id)}
          >
            DELETE PRODUCT
          </Button>
        </div>
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.category.allCategories
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const productId = ownProps.match.params.productId
  return {
    loadSingleProduct: () => {
      dispatch(fetchProduct(productId))
    },
    updateProduct: (id, data) => {
      dispatch(editProduct(id, data))
    },
    deleteProduct: id => dispatch(removeProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
