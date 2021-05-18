import { action } from "typesafe-actions"
import { Order, OrderTypes } from "./types"

export const saveOrder = (data: Order) => action(OrderTypes.SAVE_ORDER, data)
export const finishOrder = () => action(OrderTypes.FINISH_ORDER)
