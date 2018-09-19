import React, { Component } from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'

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
      <Grid container direction="column"
      alignItems="center" justify="center">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <FormGroup style={{margin: '1em'}}>
            <TextField
              type="text"
              name="comment"
              label="Write a review."
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              fullWidth multiline required
            />
            <TextField
              type="number"
              label="★"
              name="rating"
              inputProps={{min: 1, max: 5}}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
            <br />
            <Button type="submit" style={{padding: '1em'}}>SUBMIT REVIEW</Button>
          </FormGroup>
        </form>
      </Grid>
    )
  }
}
