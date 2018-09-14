import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'

export default class UpdateProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.product
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.update(this.state.id, this.state)
  }

  render() {
    const product = this.state
    console.log(product)
    const padding = { padding: '0.5em' }
    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="name">Product Name</InputLabel>
          <Input
            value={product.name}
            name="productName"
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            value={product.price}
            name="price"
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Description</InputLabel>
          <Input
            value={product.description}
            name="description"
            onChange={this.handleChange}
          />
        </FormControl>
        <TextField
          id="number"
          label="Number"
          value={product.quantity}
          onChange={this.handleChange}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        <br />
        <br />
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.handleSubmit}
        >
          UPDATE
        </Button>
        <span style={padding} />
        <Button variant="outlined" onClick={this.props.hide}>
          CANCEL
        </Button>
      </div>
    )
  }
}
