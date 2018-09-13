import axios from 'axios'
import history from '../history'

// ACTION TYPES
const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS'
const SET_PRODUCT = 'SET_PRODUCT'
const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'
const FILTER_PRODUCTS = 'FILTER_PRODUCTS'

// ACTION CREATORS
const setAllProducts = products => {
  return {
    type: SET_ALL_PRODUCTS,
    products
  }
}

const setProduct = product => {
  return {
    type: SET_PRODUCT,
    product
  }
}

export const searchProducts = text => {
  return {
    type: SEARCH_PRODUCTS,
    text
  }
}

const filterProducts = products => {
  return {
    type: FILTER_PRODUCTS,
    products
  }
}

// THUNK CREATORS
export const fetchAllProducts = () => {
  return async dispatch => {
    const response = await axios.get('/api/products')
    const products = response.data
    dispatch(setAllProducts(products))
  }
}

export const fetchProduct = productId => {
  return async dispatch => {
    const response = await axios.get(`/api/products/${productId}`)
    const product = response.data
    dispatch(setProduct(product))
  }
}

const initialState = {
  allProducts: [],
  selectedProduct: {},
  searchedProducts: [],
  filters: [],
  isLoading: {},
  isError: {}
}
// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.products
      }
    case SET_PRODUCT:
      return {
        ...state,
        selectedProduct: action.product
      }
    case SEARCH_PRODUCTS: {
      let searchResults = state.allProducts.filter(product =>
        product.name.includes(action.text)
      )
      return {
        ...state,
        allProducts: searchResults
      }
    }
    default:
      return state
  }
}
