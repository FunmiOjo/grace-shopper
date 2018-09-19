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
    this.state = this.props.selectedProduct
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  componentDidMount() {
    this.props.loadSingleProduct(this.props.location.state.product.id)
    this.setState(this.props.selectedProduct)
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedProduct.id !== prevProps.selectedProduct.id) {
      this.setState(this.props.selectedProduct)
    }
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
    if (!this.props.isLoading) {
      this.props.history.push('/manageproducts')
    }
  }

  handleDelete(productId) {
    this.props.deleteProduct(productId)
    if (!this.props.isLoading) {
      this.props.history.push('/manageproducts')
    }
  }

  showActiveCategories() {}

  render() {
    const { classes, theme } = this.props
    const product = this.state

    console.log('THIS IS THE loading status', this.props.isLoading)
    console.log('edit product mapped state', this.props.selectedProduct)
    return this.props.isLoading || this.state.id === 0 ? (
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
