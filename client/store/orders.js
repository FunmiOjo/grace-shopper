import axios from 'axios'

const SET_ALL_ORDERS = 'SET_ALL_ORDERS'

const initialState = {
  allOrders: []
}

const setAllOrders = allOrders => {
  return {
    type: SET_ALL_ORDERS,
    allOrders
  }
}

export const fetchAllOrders = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/orders')
      dispatch(setAllOrders(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default function(state = initialState, action) {
  const allOrders = action.allOrders
  switch (action.type) {
    case SET_ALL_ORDERS:
      return {...state, allOrders}
    default:
      return state
  }
}
