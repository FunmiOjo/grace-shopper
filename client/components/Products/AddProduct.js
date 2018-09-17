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
      value: 0
    }
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
  }

  render() {
    return (
      <div>
        <Typography variant="title">Add a new product</Typography>
        <ProductForm
          newProduct={this.state}
          handleChange={this.handleChange}
          addProduct={this.props.addProduct}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(postProduct(product))
  }
}

export default connect(null, mapDispatchToProps)(AddProduct)
