import axios from "axios"

const baseApiURL = "https://60a3e45e7c6e8b0017e282c8.mockapi.io/"

const api = axios.create({
  baseURL: baseApiURL
})

export default api
