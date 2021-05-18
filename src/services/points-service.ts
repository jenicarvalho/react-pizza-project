import api from "./api"

const PointsService = {
  getPoints: () => api.get('/points')
}

export default PointsService

