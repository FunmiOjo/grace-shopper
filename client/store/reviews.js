import axios from 'axios'

const ALL_REVIEWS = 'ALL_REVIEWS'
const SELECTED_REVIEW = 'SELECTED_REVIEW'
const REVIEWS_FOR_PRODUCT = 'REVIEWS_FOR_PRODUCT'

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

const setReviewsForProduct = reviewsForProduct => {
  return {
    type: REVIEWS_FOR_PRODUCT,
    reviewsForProduct
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

export default function(state = initialState, action){
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
