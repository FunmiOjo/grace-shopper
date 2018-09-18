import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logInUser} from '../store/user'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {handleSubmit, error} = props

  return (
    <Card style={{width: "40%"}}>
      <form onSubmit={handleSubmit} >
      <FormGroup style={{margin: "1em"}}>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input name="email" type="text" />
        </FormControl>
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input name="password" type="password" />
        </FormControl>
        <br />
        <Button type="submit" onSubmit={handleSubmit}>LOGIN</Button>
        <Button component="a" href="/auth/google">Login with Google</Button>
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
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(logInUser(email, password))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
