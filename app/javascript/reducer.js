import { combineReducers } from 'redux'
import {
  RECEIVE_NEW_PARTNER,
  RECEIVE_NEW_PRODUCT,
  REQUEST_PARTNERS,
  REQUEST_PRODUCTS,
  REQUEST_PARTNER,
  RECEIVE_PARTNER,
  RECEIVE_PRODUCT,
  REQUEST_PRODUCT
} from './action'

const Partners = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_NEW_PARTNER:
      return [...state, action.post]
    case REQUEST_PARTNERS:
      return action.partners
    default:
      return state
  }
}

const initialState = { isFetching: false, partner: null }

const Partner = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PARTNER:
      return { ...state, isFetching: true };
    case RECEIVE_PARTNER:
      return { ...state, isFetching: false, partner: action.partner }
    default:
      return state
  }
}

const Products = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_NEW_PRODUCT:
      return [...state, action.post]
    case REQUEST_PRODUCTS:
      return [...state, ...action.products]
    default:
      return state
  }
}

const Product = (state = { isFetching: false, detail: null }, action) => {
  switch (action.type) {
    case REQUEST_PRODUCT:
      return { ...state, isFetching: true }
    case RECEIVE_PRODUCT:
      return { ...state, isFetching: false, product: action.product }
    default:
      return state
  }
}
const reducer = combineReducers({
  partners: Partners,
  products: Products,
  partner: Partner,
  product: Product
})

export default reducer;