import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../../store'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ProductForm from './ProductForm'
import { editProduct, removeProduct } from '../../store/product'
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input'

class SingleProduct extends Component {
  constructor() {
    super()
    this.state = {
      quantityInput: 1
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick() {
    const { id } = this.props.selectedProduct
    let { quantityInput } = this.state
    quantityInput = Number(quantityInput)
    console.log('type', typeof quantityInput)
    this.props.addProduct(id, quantityInput)
  }

  handleChange(event) {
    this.setState({
      quantityInput: event.target.value
    })
  }

  componentDidMount() {
    this.props.loadSingleProduct()
  }

  render() {
    const product = this.props.selectedProduct
    return (
      <div className="container">
        {product && (
          <Grid container direction="row">
            <Grid item>
              <img src={product.image} />
            </Grid>
            <Grid container direction="column">
              <Grid item xs>
                {product.name}
              </Grid>
              <Grid item xs>
                ${product.price}
              </Grid>
              <Grid item xs>
                {product.description}
              </Grid>
            </Grid>
            <Grid item>
              <Input defaultValue={1} onChange={this.handleChange} />
            </Grid>
            <Grid item>
              <Button onClick={this.handleClick}>Add to cart</Button>
            </Grid>
          </Grid>
        )}
      </div>
    )
  }
}

export default SingleProduct
