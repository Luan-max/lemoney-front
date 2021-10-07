export default function (axios) {
  const routes = {
    listOffers () {
      return axios.get('/offers', {})
    },
    offersById ({ offerId }) {
      return axios.get(`/offers/${offerId}`, {})
    },
    create ({ offer }) {
      return axios.post('/offer', {
        ...offer
      })
    },
    update ({ offer, offerId }) {
      return axios.patch(`/offers/${offerId}`, {
        ...offer
      })
    }
  }

  return routes
}
