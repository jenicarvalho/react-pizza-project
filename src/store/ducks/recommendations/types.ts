/**
 * Action Types
 */
 export enum RecommendationTypes {
  GET_RECOMMENDATION_REQUEST = '@recommendation/GET_RECOMMENDATION_REQUEST',
  GET_RECOMMENDATION_SUCCESS = '@recommendation/GET_RECOMMENDATION_SUCCESS',
  GET_RECOMMENDATION_FAILURE = '@recommendation/GET_RECOMMENDATION_FAILURE'
}

/**
 * Data Types
 */
export interface Recommendation {
  id: number,
  title: string,
  massa: string,
  tamanho: string,
  ingredientes: string,
  price: number,
  image: string,
  isRecommendation: boolean,
  points: number
}

export interface RecommendationState {
  pizza: Recommendation,
  loading: boolean,
  error: boolean
}