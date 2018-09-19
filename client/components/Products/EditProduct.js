import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProduct, editProduct, removeProduct } from '../../store/product'
import { toggleCategory } from '../../store/category'
import ProductForm from './ProductForm'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

class EditProduct extends Component {
  constructor(props) {
    super(props)
    const productProps = props.location.state.product
    // const productProps = this.props.selectedProduct
    console.log('these are product props inside edit product', productProps)
    this.state = {
      name: 'hello',
      price: productProps.price,
      image: productProps.image,
      description: productProps.description,
      quantity: productProps.quantity,
      categories: this.props.selectedCategories
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  componentDidMount() {
    this.props.loadSingleProduct(this.props.location.state.product.id)
  }

  handleChange = prop => event => {
    const currentState = this.state
    this.setState({ ...currentState, [prop]: event.target.value })
  }

  handleCheckbox(event) {
    this.props.toggleCategory(event.target.value)
  }

  handleUpdate(productData) {
    this.props.updateProduct(productData)
    console.log('this is product data', productData)
    this.props.location.state.product = productData
    this.props.history.push('/manageproducts')
  }

  handleDelete(productId) {
    this.props.deleteProduct(productId)
    this.props.history.push('/manageproducts')
  }

  showActiveCategories() {}

  render() {
    const { classes, theme } = this.props
    const product = this.state

    console.log('THIS IS THE loading status', this.props.isLoading)
    return this.props.isLoading || !this.props.selectedProduct ? (
      <CircularProgress size={200} />
    ) : (
      <div>
        <Typography variant="title">Edit Product</Typography>
        <ProductForm
          product={product}
          categories={this.props.selectedCategories}
          handleChange={this.handleChange}
          handleCheckbox={this.handleCheckbox}
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
  }
}

const mapStateToProps = state => {
  return {
    selectedProduct: state.product.selectedProduct,
    selectedCategories: state.product.selectedCategories,
    categories: state.category.allCategories,
    isLoading: state.product.isLoading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const productId = ownProps.match.params.productId
  return {
    loadSingleProduct: () => {
      dispatch(fetchProduct(productId))
    },
    toggleCategory: categoryId => {
      dispatch(toggleCategory(categoryId))
    },
    updateProduct: data => {
      dispatch(editProduct(productId, data))
    },
    deleteProduct: () => dispatch(removeProduct(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
