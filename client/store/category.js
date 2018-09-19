import axios from 'axios'
import history from '../history'

// ACTION TYPES
const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES'
const SET_CATEGORY_ITEMS = 'SET_CATEGORY_ITEMS'
const ADD_CATEGORY = 'ADD_CATEGORY'
const DELETE_CATEGORY = 'DELETE_CATEGORY'
const SET_PRODUCT_CATEGORIES = 'SET_PRODUCT_CATEGORIES'
const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY'

// ACTION CREATORS
const setAllCategories = categories => {
  return {
    type: SET_ALL_CATEGORIES,
    categories
  }
}

const setCategoryItems = items => {
  return {
    type: SET_CATEGORY_ITEMS,
    items
  }
}

const addCategory = category => {
  return {
    type: ADD_CATEGORY,
    category
  }
}

const deleteCategory = category => {
  return {
    type: DELETE_CATEGORY,
    category
  }
}

const setProductCategories = categories => {
  return {
    type: SET_PRODUCT_CATEGORIES,
    categories
  }
}

const toggleCategory = categoryId => {
  return {
    type: TOGGLE_CATEGORY,
    categoryId
  }
}

// THUNK CREATORS
export const fetchAllCategories = () => {
  return async dispatch => {
    const response = await axios.get('/api/categories')
    const categories = response.data
    dispatch(setAllCategories(categories))
  }
}

export const fetchCategoryItems = categoryId => {
  return async dispatch => {
    const response = await axios.get(`/api/categories/${categoryId}`)
    const items = response.data
    dispatch(setCategoryItems(items))
  }
}

export const postCategory = category => {
  return async dispatch => {
    const response = await axios.post('/api/categories', category)
    const newCategory = response.data
    dispatch(addCategory(newCategory))
  }
}

export const removeCategory = categoryId => {
  return async dispatch => {
    const response = await axios.delete(`/api/categories/${categoryId}`)
    const category = response.data
    dispatch(removeCategory(category))
  }
}

const initialState = {
  allCategories: [],
  selectedCategories: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.categories
      }
    case SET_CATEGORY_ITEMS:
      return {
        ...state,
        selectedCategories: action.items
      }
    // or write two different actions - select and unselect? maybe do on front end instead
    // case TOGGLE_CATEGORY:
    //   let selectedCategories = state.allCategories.map(category => {
    //     return category.id === action.categoryId
    //       ? (category.isActive = !category.isActive)
    //       : category
    //   })

    //   return { ...state, selectedCategories: selectedCategories }
    case ADD_CATEGORY: {
      return {
        ...state,
        allCategories: [...state.allCategories, action.category]
      }
    }
    case DELETE_CATEGORY:
      return {
        ...state,
        allCategories: [
          ...state.allCategories.filter(
            category => category.id !== action.categoryId
          )
        ]
      }

    default:
      return state
  }
}
