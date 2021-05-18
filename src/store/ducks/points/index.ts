import { Reducer } from "redux"
import { PointsTypes, PointsState } from "./types"

const INITIAL_STATE: PointsState = {
  total: 0,
  loading: false,
  error: false
}

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PointsTypes.GET_POINTS_REQUEST:
      return { ...state, loading: true }
    case PointsTypes.GET_POINTS_SUCCESS:
      return {
        ...state,
        loading: false,
        total: action.payload.data[0].total
      }
    case PointsTypes.SAVE_POINTS:
      return {
        ...state,
        total: action.payload
      }
    case PointsTypes.GET_POINTS_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default reducer
