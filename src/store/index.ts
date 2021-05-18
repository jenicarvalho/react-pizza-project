import { createStore, Store, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"

import createRootReducer from './ducks/rootReducer'
import rootSaga from "./ducks/rootSaga"

import { PointsState } from "./ducks/points/types"
import { RecommendationState } from "./ducks/recommendations/types"
import { PizzasState } from "./ducks/pizzas/types"
import { Order } from "./ducks/order/types"

export interface ApplicationState {
  points: PointsState,
  recommendations: RecommendationState,
  pizzas: PizzasState,
  order: Order
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [
  sagaMiddleware
]

const store: Store<ApplicationState> = createStore(
  createRootReducer(),
  composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store
