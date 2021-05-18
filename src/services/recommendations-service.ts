import api from "./api"

const RecommendationsService = {
  getRecommendations: () => api.get('/recommendations')
}

export default RecommendationsService

