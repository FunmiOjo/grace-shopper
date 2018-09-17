import axios from 'axios'

//ACTION TYPES
export const SET_PAYMENT = 'SET_PAYMENT'

//ACTION CREATORS
export const setPayment = paymentInfo => {
  return {
    type: SET_PAYMENT,
    paymentInfo
  }
}

//THUNK CREATOR
export const makePayment = paymentInfo => {
  return async dispatch => {
    try {
      const { data } = await axios.post('/payment', paymentInfo)
      dispatch(setPayment(data))
    } catch (error) {
      console.error(error)
    }
  }
}

//reducer
const initialState = {
  info: {}
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAYMENT:
      return {
        ...state,
        info: action.paymentInfo
      }
    default:
      return state
  }
}

export default reducer
