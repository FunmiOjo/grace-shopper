import axios from 'axios'

const ALL_REVIEWS = 'ALL_REVIEWS'
const ADD_REVIEW = 'ADD_REVIEW'

const initialState = {
  allReviews: []
}

const setAllReviews = allReviews => {
  return {
    type: ALL_REVIEWS,
    allReviews
  }
}

const addReview = review => {
  return {
    type: ADD_REVIEW,
    review
  }
}

export const fetchAllReviews = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/reviews/product/${id}`)
      dispatch(setAllReviews(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const postReview = review => {
  return async dispatch => {
    try {
      const { data } = await axios.post('/api/reviews', review)
      dispatch(addReview(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default function(state = initialState, action){
  const allReviews = action.allReviews
  switch(action.type) {
    case ALL_REVIEWS:
      return {allReviews}
    case ADD_REVIEW:
      return {allReviews: [...state.allReviews, action.review]}
    default:
      return state
  }
}
