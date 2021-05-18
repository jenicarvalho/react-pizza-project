/**
 * Action Types
 */
 export enum PizzasTypes {
  GET_PIZZAS_REQUEST = '@pizzas/GET_PIZZAS_REQUEST',
  GET_PIZZAS_SUCCESS = '@pizzas/GET_PIZZAS_SUCCESS',
  GET_PIZZAS_FAILURE = '@pizzas/GET_PIZZAS_FAILURE'
}

/**
 * Data Types
 */

export interface PizzaItem {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string
}

export interface Pizzas {
  doughs: PizzaItem[],
  flavors: PizzaItem[],
  sizes: PizzaItem[],
}

export interface PizzasState {
  doughs: PizzaItem[],
  flavors: PizzaItem[],
  sizes: PizzaItem[],
  loading: boolean,
  error: boolean
}