import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postReview } from '../store/reviews'
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

class AddReview extends Component {
  constructor(props){
    super()
    this.state = {
      rating: 0,
      comment: '',
      productId: props.productId,
      userId: props.userId
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault()
    this.props.postReview(this.state)
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <FormControl>
          <InputLabel>Rating</InputLabel>
          <Input name="rating" type="number" />
        </FormControl>
        <FormControl>
          <InputLabel>Comment</InputLabel>
          <Input name="comment" type="text" />
        </FormControl>
        <Button type="submit">POST</Button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postReview: data => dispatch(postReview(data))
})

export default connect(null, mapDispatchToProps)(AddReview)
