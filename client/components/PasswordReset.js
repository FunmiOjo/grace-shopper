import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateUserOnServer} from '../store/user'

class PasswordReset extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const new1 = event.target.newpassword1.value
    const new2 = event.target.newpassword2.value
    if (new1 === new2) {
      const newData = {...this.props.currentUser, password: new1, resetPassword: false}
      this.props.updatePassword(this.props.currentUser.id, newData)
      this.props.history.push('/home')
    }
  }
  render () {
    return (
      <div>
        <h3>Password reset is required!</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <small>New Password</small>
            </label>
            <input name="newpassword1" type="password" />
          </div>
          <div>
            <label>
              <small>Confirm New Password</small>
            </label>
            <input name="newpassword2" type="password" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDistachToProps = dispatch => ({
  updatePassword: (id, data) => dispatch(updateUserOnServer(id, data))
})

export default connect(mapStateToProps, mapDistachToProps)(PasswordReset)
