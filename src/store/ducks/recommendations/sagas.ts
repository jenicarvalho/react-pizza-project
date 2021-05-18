import { call, put } from "redux-saga/effects"

import { loadRecommendationFailure, loadRecommendationSuccess } from "./action"

import RecommendationService from "../../../services/recommendations-service"
import { Recommendation } from "./types"

export function* getRecommendation() {
  try {
    const response: Recommendation = yield call(RecommendationService.getRecommendations)
    yield put(loadRecommendationSuccess(response))
  } catch (err) {
    console.log(err)
    yield put(loadRecommendationFailure())
  }
}
