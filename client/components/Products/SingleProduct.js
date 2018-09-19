import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input'
import Review from '../Reviews'
import AddReview from '../AddReview'
import { postReview, fetchAllReviews } from '../../store/reviews'
import Typography from '@material-ui/core/Typography';

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
  }

  render() {
    const productId = this.props.match.params.productId
    const product = this.props.product
    const currentUser = this.props.currentUser
    return (
      <div className="container">
        {product && (
          <div style={{margin: 'auto', width: '60%'}}>
            <Grid container direction="row" spacing={24} alignContent="center">
              <Grid item xs={24}>
                <Typography variant="display2">{product.name}</Typography>
              </Grid>
              <div style={{margin: 'auto'}}>
                <Grid item xs={12}><img src={product.image} /></Grid>
              </div>
              <Grid item xs={12}>
                <Typography variant="body1">{product.description}</Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography variant="body1">${product.price / 100}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Input defaultValue={1} onChange={this.handleChange} />
                <Button onClick={this.handleClick}>Add to cart</Button>
              </Grid>
            </Grid>
          </div>
        )}
        <br /><hr style={{"borderTop": "1px dotted lightgrey"}} />
        {currentUser.id && product.id ?
        <div style={{alignContent: 'center'}}>
        <AddReview productId={productId} userId={currentUser.id} postReview={this.postReview} />
        </div>
        : null}
        <br />
        <Review reviews={this.props.review} />
        <br />
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
