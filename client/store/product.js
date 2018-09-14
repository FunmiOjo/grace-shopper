import axios from 'axios'
import history from '../history'

// ACTION TYPES
const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS'
const SET_PRODUCT = 'SET_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

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

const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product
  }
}

const updateProduct = product => {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}

const deleteProduct = product => {
  return {
    type: DELETE_PRODUCT,
    product
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

export const postProduct = product => {
  return async dispatch => {
    const response = await axios.post('/api/products', product)
    const newProduct = response.data
    dispatch(addProduct(newProduct))
  }
}

export const removeProduct = productId => {
  return async dispatch => {
    const response = await axios.delete(`/api/products/${productId}`)
    const product = response.data
    dispatch(deleteProduct(product))
  }
}

export const editProduct = (productId, productData) => {
  return async dispatch => {
    const response = await axios.put(`/api/products/${productId}`, productData)
    const updatedProduct = response.data
    dispatch(updateProduct(updatedProduct))
  }
}

const initialState = {
  allProducts: [],
  selectedProduct: {},
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
    case ADD_PRODUCT:
      return {
        ...state,
        allProducts: [...state.allProducts, action.product]
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        allProducts: [
          ...state.allProducts.filter(
            product => product.id !== action.productId
          )
        ]
      }
    case UPDATE_PRODUCT:
      return {
        ...state,
        selectedProduct: action.product
      }
    default:
      return state
  }
}
