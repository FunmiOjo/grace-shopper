import React, { Component } from 'react'
import store from '../store'
import { fetchUsers } from '../store/allUsers'
import { connect } from 'react-redux'

// ---------- Only admins should be able to see this page
class AllUsers extends Component {
  constructor () {
    super()
    this.state = {}
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }
  componentDidMount(){
    this.props.fetchData()
  }
  render () {
    const users = this.state.allUsers
    return (
      <div id='all-users'>
        { users !== undefined ? users.map(user => (
          <div key={user.id}>
            <ul>
              <li>Name: {user.firstName} {user.lastName}</li>
              <li>Email: {user.email}</li>
              <li>Billing address: {user.billingAddress}</li>
              <li>Shipping address: {user.shippingAddress}</li>
              <li>User type: {user.userType}</li>
            </ul>
          </div>
        )) : <p>No users in the database.</p> }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchUsers())
})

export default connect(null, mapDispatchToProps)(AllUsers)
