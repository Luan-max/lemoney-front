export default function (axios) {
  const routes = {
    login ({ email, password }) {
      return axios.post('/login', { email, password })
    }
  }

  return routes
}
