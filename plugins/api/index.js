// import onResponseError from './helpers/onResponseError'
import auth from './auth'
import user from './advertisers'
import order from './offers'
import onResponseError from './helpers/onResponseError'

export default function ({ $axios, $localStorage, redirect }, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  api.setBaseURL('http://127.0.0.1:9000')

  api.onResponse((response) => {
    const allowedStatus = [200, 201, 204]
    if (allowedStatus.includes(response.status)) {
      return response.data
    }
    return true
  })

  api.onResponseError(err => onResponseError(err, $localStorage, redirect))

  const allRoutes = {
    auth: auth(api),
    advertisers: user(api),
    offers: order(api),
    core: token => api.setToken(token, 'Bearer')
  }

  inject('api', allRoutes)
}
