import { Reducer } from "redux"
import { RecommendationState, RecommendationTypes } from "./types"

const INITIAL_STATE: RecommendationState = {
  pizza: {
    id: 0,
    title: '',
    massa: '',
    tamanho: '',
    ingredientes: '',
    price: 0,
    image: '',
    isRecommendation: false,
    points: 0
  },
  loading: false,
  error: false
}

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RecommendationTypes.GET_RECOMMENDATION_REQUEST:
      return { ...state, loading: true }
    case RecommendationTypes.GET_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        loading: false,
        pizza: action.payload.data[0]
      }
    case RecommendationTypes.GET_RECOMMENDATION_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default reducer
