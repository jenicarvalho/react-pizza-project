import api from "./api"

const PizzasService = {
  getPizzas: () => api.get('/pizzas')
}

export default PizzasService

