import axios from 'axios'

const ALL_REVIEWS = 'ALL_REVIEWS'
const SELECTED_REVIEW = 'SELECTED_REVIEW'

const setAllReviews = allReviews => {
  return {
    type: ALL_REVIEWS,
    allReviews
  }
}

const setSelectedReview = selectedReview => {
  return {
    type: SELECTED_REVIEW,
    selectedReview
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

export const fetchSelectedReview = (id) => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/reviews/${id}`)
      dispatch(setSelectedReview(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default function(state, action){
  const allReviews = action.allReviews
  const selectedReview = action.selectedReview
  switch(action.type) {
    case ALL_REVIEWS:
      return {...state, allReviews}
    case SELECTED_REVIEW:
      return {...state, selectedReview}
    default:
      return state
  }
}
