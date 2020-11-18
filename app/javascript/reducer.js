import { combineReducers } from 'redux'
import { RECEIVE_NEW_PARTNER } from './action'

const Partners = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_NEW_PARTNER:
      return [...state, action.post]
    default:
      return state
  }
}

const reducer = combineReducers({
  partners: Partners
})

export default reducer;