import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {signUpUser} from '../store/user'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';

/**
 * COMPONENT
 */
const SignUpForm = props => {
  const {handleSubmit, error} = props

  return (
    <Card style={{width: "40%"}}>
      <form onSubmit={handleSubmit}>
      <FormGroup style={{margin: "1em"}}>
        <FormControl>
          <InputLabel>First Name</InputLabel>
          <Input name="firstName" type="text" />
        </FormControl>
        <FormControl>
          <InputLabel>Last Name</InputLabel>
          <Input name="lastName" type="text" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input name="email" type="text" />
        </FormControl>
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input name="password" type="password" />
        </FormControl>
        <FormControl>
          <InputLabel>Billing Address</InputLabel>
          <Input name="billingAddress" type="text" />
        </FormControl>
        <FormControl>
          <InputLabel>Shipping Address</InputLabel>
          <Input name="shippingAddress" type="text" />
        </FormControl>
        <br />
        <Button type="submit">SUBMIT</Button>
        <Button component="a" href="/auth/google">Sign up with Google</Button>
        {error && error.response && <div> {error.response.data} </div>}
      </FormGroup>
      </form>
    </Card>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      const billingAddress = evt.target.billingAddress.value
      const shippingAddress = evt.target.shippingAddress.value
      dispatch(signUpUser(firstName, lastName, email, password, billingAddress, shippingAddress))
    }
  }
}

export const SignUp = connect(mapSignup, mapDispatch)(SignUpForm)

/**
 * PROP TYPES
 */
SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
