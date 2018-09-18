import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input'
import Review from '../Reviews'
import AddReview from '../AddReview'
import { postReview, fetchAllReviews } from '../../store/reviews'

class SingleProduct extends Component {
  constructor() {
    super()
    this.state = {
      quantityInput: 1
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.postReview = this.postReview.bind(this)
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
    this.props.fetchReview(this.props.match.params.productId)
    this.props.loadSingleProduct()
  }

  componentDidUpdate(prevProps) {
    if (this.props.review.length !== prevProps.review.length) {
      this.props.fetchReview(this.props.match.params.productId)
    }
  }

  postReview(data){
    this.props.postReview(data)
    this.props.loadSingleProduct()
  }

  render() {
    const product = this.props.product
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
        <Review reviews={this.props.review} />
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

const mapStateToProps = state => {
  return {
    product: state.product.selectedProduct,
    review: state.review.allReviews
  }
}

const mapDispatchToProps = dispatch => ({
  postReview: data => dispatch(postReview(data)),
  fetchReview: id => dispatch(fetchAllReviews(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
