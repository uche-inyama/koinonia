import { combineReducers } from 'redux'
import {
  RECEIVE_NEW_PARTNER,
  RECEIVE_NEW_PRODUCT,
  REQUEST_PARTNERS,
  REQUEST_PRODUCTS
} from './action'

const Partners = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_NEW_PARTNER:
      return [...state, action.post]
    case REQUEST_PARTNERS:
      return [...state, action.partners]
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
const reducer = combineReducers({
  partners: Partners,
  products: Products
})

export default reducer;