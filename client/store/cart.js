import axios from 'axios'
import history from '../history'

// ACTION TYPES
export const SET_CART = 'SET_CART'
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS'
//ACTION CREATORS
export const setCart = cart => {
  return {
    type: SET_CART,
    cart
  }
}

export const setLoadingStatus = status => {
  return {
    type: SET_LOADING_STATUS,
    status
  }
}

//THUNK CREATOR
export const fetchCart = () => {
  return async dispatch => {
    try {
      dispatch(setLoadingStatus(true))
      const { data: cart} = await axios.get(`/api/orders/cart`)
      dispatch(setCart(cart))
      dispatch(setLoadingStatus(false))
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {
  cartData: {},
  isLoading: true
}

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cartData: action.cart
      }
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.status
      }
    default:
      return state
  }
}

export default reducer
