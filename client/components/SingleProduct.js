import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../store'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import UpdateProductForm from './UpdateProductForm'
import { editProduct, removeProduct } from '../store/product'
import { connect } from 'react-redux'

class SingleProduct extends Component {
  constructor() {
    super()
    this.state = {
      quantity: 0,
      canEdit: true
    }
    this.toggleUpdateForm = this.toggleUpdateForm(this)
    this.update = this.update.bind(this)
    store.subscribe(() => {
      this.setState(store.getState().product)
    })
  }

  componentDidUpdate() {
    this.props.loadSingleProduct()
  }

  toggleUpdateForm() {
    let canEdit = this.state.canEdit
    this.setState({
      canEdit: !canEdit
    })
  }

  update(productId, data) {
    this.props.updateSelectedProduct(productId, data)
    //this.props.loadSingleProduct(productId)
  }

  render() {
    const product = this.props.selectedProduct
    const padding = { padding: '0.5em' }
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
              <Grid item xs>
                <br />
                <br />
                <TextField
                  id="number"
                  label="Quantity"
                  value={this.state.quantity}
                  onChange={event =>
                    this.setState({ quantity: event.target.value })
                  }
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  margin="normal"
                />
                <Button variant="contained" color="secondary">
                  ADD TO CART
                </Button>
              </Grid>
            </Grid>
            <Grid item xs>
              <Link to={`/products/${product.id}/edit`}>
                <Button variant="contained">EDIT</Button>
              </Link>
            </Grid>
            <Grid item xs>
              {this.state.canEdit ? (
                <span key="update" style={padding}>
                  <UpdateProductForm
                    update={this.update}
                    product={product}
                    hide={this.toggleUpdateForm}
                  />
                </span>
              ) : null}
            </Grid>
          </Grid>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateSelectedProduct: (productId, data) =>
    dispatch(editProduct(productId, data)),
  deleteSelectedProduct: productId => {
    dispatch(removeProduct(productId))
  }
})

export default connect(null, mapDispatchToProps)(SingleProduct)
