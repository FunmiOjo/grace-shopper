import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ALL_USERS = 'ALL_USERS'

/**
 * INITIAL STATE
 */
const initialState= {
  currentUser: {},
  allUsers: [],
  isLoading: false
}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const setAllUsers = (allUsers) => {
  return {
    type: ALL_USERS,
    allUsers,
    isLoading: true
  }
}

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || {}))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const fetchAllUsers = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/users')
    dispatch(setAllUsers(data))
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  //const user = action.user
  const allUsers = action.allUsers
  const currentUser = state.currentUser
  switch (action.type) {
    case GET_USER:
      return {...state, currentUser}
    case REMOVE_USER:
      return {...state}
    case ALL_USERS:
      return {...state, allUsers}
    default:
      return state
  }
}
