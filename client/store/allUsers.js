import axios from 'axios'

const ALL_USERS = 'ALL_USERS'

export const getallUsers = (allUsers) => {
  return {
    type: ALL_USERS,
    allUsers
  }
}

export const fetchUsers = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/users')
    dispatch(getallUsers(data))
  }
}

const UserReducer = (allUsers = [], action) => {
  switch(action.type) {
    case ALL_USERS:
      return action.allUsers
    default:
      return allUsers
  }
}

export default UserReducer
