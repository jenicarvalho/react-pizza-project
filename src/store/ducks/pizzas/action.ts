import { action } from "typesafe-actions"
import { Pizzas, PizzasTypes } from "./types"

export const loadPizzasRequest = () => action(PizzasTypes.GET_PIZZAS_REQUEST)
export const loadPizzasSuccess = (data: Pizzas) => action(PizzasTypes.GET_PIZZAS_SUCCESS, data)
export const loadPizzasFailure = () => action(PizzasTypes.GET_PIZZAS_FAILURE)
