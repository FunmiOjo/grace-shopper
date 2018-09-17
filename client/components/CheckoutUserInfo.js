import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'

class CheckoutUserInfo extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      billingAddress: "",
      shippingAddress: ""
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleClose(event) {
    this.setState({ open: false })
    if (event.target.innerText === "UPDATE") {
      console.log(this.state)
    }
  }

  handleClickOpen() {
    this.setState({ open: true })
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Billing Address</TableCell>
              <TableCell>Shipping Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {user.firstName} {user.lastName}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.billingAddress}</TableCell>
              <TableCell>{user.shippingAddress}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button onClick={this.handleClickOpen}>Edit Addresses</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="address-form"
          maxWidth="lg"
          fullWidth={true}
        >
          <DialogTitle id="address-form">Edit Addresses</DialogTitle>
          <DialogContent>
            <FormGroup>
            <FormControl>
            <TextField
              id="billingAddress"
              label="Billing Address"
              type="text"
              margin="normal"
              onChange={this.handleChange}
            />
            <TextField
              id="shippingAddress"
              label="Shipping Address"
              type="text"
              margin="normal"
              onChange={this.handleChange}
            />
            </FormControl>
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} id="cancel">
              Cancel
            </Button>
            <Button onClick={this.handleClose} id="update">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user.currentUser
  }
}

export default connect(mapState, null)(CheckoutUserInfo)
