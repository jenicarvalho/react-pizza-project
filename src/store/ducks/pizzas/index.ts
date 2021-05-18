import { Reducer } from "redux"
import { PizzasState, PizzasTypes } from "./types"

const INITIAL_STATE: PizzasState = {
  doughs: [{
    id: 1,
    title: '',
    description: '',
    price: 0,
    image: ''
  }],
  flavors: [{
    id: 1,
    title: '',
    description: '',
    price: 0,
    image: ''
  }],
  sizes: [{
    id: 1,
    title: '',
    description: '',
    price: 0,
    image: ''
  }],
  loading: false,
  error: false
}

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PizzasTypes.GET_PIZZAS_REQUEST:
      return { ...state, loading: true }
    case PizzasTypes.GET_PIZZAS_SUCCESS:
      return {
        ...state,
        loading: false,
        doughs: action.payload.data[0].doughs,
        flavors: action.payload.data[0].flavors,
        sizes: action.payload.data[0].sizes
      }
    case PizzasTypes.GET_PIZZAS_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default reducer
