import axios from 'axios'
import history from '../history'

// ACTION TYPES
export const SET_CART = 'SET_CART'

//ACTION CREATORS
export const setCart = cart => {
  return {
    type: SET_CART,
    cart
  }
}

//THUNK CREATOR
export const fetchCart = userId => {
  return async dispatch => {
    try {
      const { data: cart} = await axios.get(`/api/orders/cart`)
      dispatch(setCart(cart))
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {}

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...action.cart
      }
    default:
      return state
  }
}

export default reducer
