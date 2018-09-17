import React, { Component } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import ProductForm from './ProductForm'
import { postProduct } from '../../store/product'

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      image: '',
      description: '',
      quantity: 0,
      categories: [],
      value: 0
    }
  }

  handleChange = prop => event => {
    console.log('selecttarget', event.target.value)
    this.setState({ [prop]: event.target.value })
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
    return (
      <div>
        <Typography variant="title">Add a new product</Typography>
        <ProductForm
          product={this.state}
          categories={this.props.categories}
          handleChange={this.handleChange}
          handleSelect={this.handleSelect}
          productAction={this.props.addProduct}
          buttonName="ADD"
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.category.allCategories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(postProduct(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
