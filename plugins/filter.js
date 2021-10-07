import Vue from 'vue'

Vue.filter('capitalize', (param) => {
  if (typeof param === 'string') {
    return param.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  return param
})
