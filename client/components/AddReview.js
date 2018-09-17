import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export default class AddReview extends Component {
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
