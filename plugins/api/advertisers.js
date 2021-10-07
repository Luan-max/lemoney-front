export default function (axios) {
  const routes = {
    getAdvertisers () {
      return axios.get('/advertisers', {
      })
    },
    getAdvertiserById ({ advertiserId }) {
      return axios.get(`/advertisers/${advertiserId}`, {
      })
    }
  }

  return routes
}
