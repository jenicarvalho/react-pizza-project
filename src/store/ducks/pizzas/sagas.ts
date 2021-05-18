import { call, put } from "redux-saga/effects"

import { loadPizzasFailure, loadPizzasSuccess } from "./action"

import PizzasService from "../../../services/pizzas-service"
import { Pizzas } from "./types"

export function* getPizzas() {
  try {
    const response: Pizzas = yield call(PizzasService.getPizzas)
    yield put(loadPizzasSuccess(response))
  } catch (err) {
    console.log(err)
    yield put(loadPizzasFailure())
  }
}
