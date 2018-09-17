import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

export default class AddReview extends Component {
  constructor(props){
    super()
    this.state = {
      rating: 1,
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
          <InputLabel>Review</InputLabel>
          <Input name="comment" type="text" multiline />
        </FormControl>
        <FormControl>
          <InputLabel>★</InputLabel>
          <Input name="rating" type="number" inputProps={{ min: 1, max: 5 }} />
        </FormControl>
        <Button type="submit" style={{padding: '1em'}}>POST</Button>
      </form>

    )
  }
}
