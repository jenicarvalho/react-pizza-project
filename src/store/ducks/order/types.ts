/**
 * Action Types
 */
 export enum OrderTypes {
  SAVE_ORDER = '@order/SAVE_ORDER',
  FINISH_ORDER = '@order/FINISH_ORDER',
}

/**
 * Data Types
 */

export interface Order {
  dough?: string,
  flavor?: string,
  size?: string,
  price: number,
  points?: number,
  recommendation?: boolean
}
