import { action } from "typesafe-actions"
import { Recommendation, RecommendationTypes } from "./types"

export const loadRecommendationRequest = () => action(RecommendationTypes.GET_RECOMMENDATION_REQUEST)
export const loadRecommendationSuccess = (data: Recommendation) => action(RecommendationTypes.GET_RECOMMENDATION_SUCCESS, data)
export const loadRecommendationFailure = () => action(RecommendationTypes.GET_RECOMMENDATION_FAILURE)
