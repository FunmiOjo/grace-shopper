import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { fetchProduct, editProduct, removeProduct } from '../../store/product'
import ProductForm from './ProductForm'
import store from '../../store'
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
    const productProps = props.location.state.product
    this.state = {
      name: productProps.name,
      price: productProps.price,
      image: productProps.image,
      description: productProps.description,
      quantity: productProps.quantity,
      categories: productProps.categories
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    // set state with the product
    this.props.loadSingleProduct()
  }

  handleChange = prop => event => {
    const currentState = this.state
    this.setState({ ...currentState, [prop]: event.target.value })
  }

  handleUpdate(productData) {
    this.props.updateProduct(productData)
    this.props.history.push('/manageproducts')
  }

  handleDelete(productId) {
    this.props.deleteProduct(productId)
    this.props.history.push('/manageproducts')
  }

  render() {
    const { classes, theme } = this.props
    const product = this.state
    console.log('state', this.state)
    return (
      product && (
        <div>
          <Typography variant="title">Edit Product</Typography>
          <ProductForm
            product={product}
            categories={this.props.categories}
            handleChange={this.handleChange}
            productAction={this.handleUpdate}
            buttonName="UPDATE"
          />
          <Button
            variant="contained"
            onClick={() => this.handleDelete(product.id)}
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
    selectedProduct: state.product.selectedProduct,
    categories: state.category.allCategories
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const productId = ownProps.match.params.productId
  return {
    loadSingleProduct: () => {
      dispatch(fetchProduct(productId))
    },
    updateProduct: data => {
      dispatch(editProduct(productId, data))
    },
    deleteProduct: id => dispatch(removeProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
