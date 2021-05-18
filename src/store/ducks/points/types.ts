/**
 * Action Types
 */
 export enum PointsTypes {
  GET_POINTS_REQUEST = '@points/GET_POINTS_REQUEST',
  GET_POINTS_SUCCESS = '@points/GET_POINTS_SUCCESS',
  GET_POINTS_FAILURE = '@points/GET_POINTS_FAILURE',
  SAVE_POINTS = '@points/SAVE_POINTS',
}

/**
 * Data Types
 */

export interface PointsState {
  total: number,
  loading: boolean,
  error?: boolean
}