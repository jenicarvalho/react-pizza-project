import { Reducer } from "redux"
import { Order, OrderTypes } from "./types"

const INITIAL_STATE: Order = {
  dough: '',
  flavor: '',
  size: '',
  price: 0,
  recommendation: false
}

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) { 
    case OrderTypes.SAVE_ORDER:
      return {
        ...state,
        dough: action.payload.dough,
        flavor: action.payload.flavor,
        size: action.payload.size,
        price: action.payload.price,
        recommendation: action.payload.recommendation,
      }
    case OrderTypes.FINISH_ORDER:
      return {
        ...state,
        state: INITIAL_STATE
      }
    default:
      return state
  }
}

export default reducer
