import React, { Component } from 'react'
import store from '../../store'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input'
import Review from '../Reviews'
import AddReview from '../AddReview'
import { postReview } from '../../store/reviews'

class SingleProduct extends Component {
  constructor() {
    super()
    this.state = {
      quantityInput: 1,
      product: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.postReview = this.postReview.bind(this)
    store.subscribe(() => {
      if (this._mounted) this.setState({product: store.getState().product.selectedProduct})
    })
  }

  handleClick() {
    const { id } = this.props.selectedProduct
    const { quantityInput } = this.state
    this.props.addProduct(id, quantityInput)
  }

  handleChange(event) {
    this.setState({
      quantityInput: event.target.value
    })
  }

  componentDidMount() {
    this.props.loadSingleProduct()
    this._mounted = true
  }

  componentWillUnmount() {
    this._mounted = false
  }

  postReview(data){
    this.props.postReview(data)
    this.props.loadSingleProduct()
  }

  render() {
    const product = this.state.product
    const reviews = product.reviews
    const currentUser = this.props.currentUser
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
                ${product.price / 100}
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
        <br />
        {reviews ? reviews.map(review => (
          <Review key={review.id} review={review} />))
        : null}
        <br />
        {currentUser.id && product.id ?
        <div>
        <hr />
        <h2>Add review</h2>
        <AddReview productId={product.id} userId={currentUser.id} postReview={this.postReview} />
        </div>
        : null}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postReview: data => dispatch(postReview(data))
})

export default connect(null, mapDispatchToProps)(SingleProduct)
