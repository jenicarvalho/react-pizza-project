import { all, takeLatest } from "redux-saga/effects"

import { PointsTypes } from "./points/types"
import { getPoints } from "./points/sagas"

import { RecommendationTypes } from "./recommendations/types"
import { getRecommendation } from "./recommendations/sagas"

import { PizzasTypes } from "./pizzas/types"
import { getPizzas } from "./pizzas/sagas"

export default function* rootSaga(): any {
  return yield all([
    takeLatest(PointsTypes.GET_POINTS_REQUEST, getPoints),
    takeLatest(RecommendationTypes.GET_RECOMMENDATION_REQUEST, getRecommendation),
    takeLatest(PizzasTypes.GET_PIZZAS_REQUEST, getPizzas),
  ])
}
