import axios from 'axios'

const ALL_REVIEWS = 'ALL_REVIEWS'
const SELECTED_REVIEW = 'SELECTED_REVIEW'
const ADD_REVIEW = 'ADD_REVIEW'

const initialState = {
  allReviews: [],
  selectedReview: {}
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

export const fetchAllReviews = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/reviews')
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
  const selectedReview = action.selectedReview
  switch(action.type) {
    case ALL_REVIEWS:
      return {...state, allReviews}
    case SELECTED_REVIEW:
      return {...state, selectedReview}
    case ADD_REVIEW:
      return {...state, allReviews: [...state.allReviews, action.review]}
    default:
      return state
  }
}
