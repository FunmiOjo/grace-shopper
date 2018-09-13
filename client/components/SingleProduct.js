import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

export default class SingleProduct extends Component {
  constructor() {
    super()
    this.state = {
      quantityInput: 1
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { selectedProduct } = this.props
    selectedProduct.quantity = this.state.quantityInput
    this.props.addProduct(selectedProduct)
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
              <Button onClick={this.handleClick}>
                Add to cart
              </Button>
            </Grid>
          </Grid>
        )}
      </div>
    )
  }
}
