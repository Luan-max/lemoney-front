import Vue from 'vue'

export default (err, $localStorage, redirect) => {
  const response = err.response

  if (response.status === 401 && response.data.message === "Invalid credentials") {
    const { data: { message } } = response
    Vue.$toast.error(message)
    return Promise.resolve(false)
  }
  else if (response.status == 401 && response.data.message == "Invalid access token") {
    $localStorage.remove('access_token')
    redirect('/login')
    Vue.$toast.info('Sua sessão expirou, entre novamente para continuar.')
    return Promise.resolve(false)
  }
  else if (response.status == 401 && response.statusText == "Unauthorized") {
    $localStorage.remove('access_token')
    redirect('/login')
    Vue.$toast.info('Sua sessão expirou, entre novamente para continuar.')
    return Promise.resolve(false)
  }
  else if (response.data.message.indexOf("You can only buy more of this product after this date") == 0) {
    Vue.$toast.error('Você não pode mais retirar essa recompensa')
    return Promise.resolve(false)
  } else {
    Vue.$toast.error('Algo de inesperado aconteceu, tente novamente mais tarde.')
    return Promise.resolve(false)
  }
}
