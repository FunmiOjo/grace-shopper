import React, { Component } from 'react'
import store from '../store'
import { fetchAllUsers } from '../store/user'
import { connect } from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    this.setState({user: {isLoading: false}})
  }
  render () {
    let loading, users;
    if (this.state.user) {
      users = this.state.user.allUsers
      loading = this.state.user.isLoading
    }
    return (
      <List>
        { users && !loading ?
        users.map(user => (
          <ListItem key={user.id}>
            <ListItemText
              primary={user.firstName + user.lastName}
              secondary={user.userType}
            />
          </ListItem>
        )) : <p>Loading...</p> }
      </List>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchAllUsers())
})

export default connect(null, mapDispatchToProps)(AllUsers)
