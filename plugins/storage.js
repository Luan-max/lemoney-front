export default function (app, inject) {
  const storage = {
    set: (name, item) => {
      return localStorage.setItem(name, item)
    },
    get: (name) => {
      return localStorage.getItem(name)
    },
    remove: (name) => {
      return localStorage.removeItem(name)
    }
  }

  inject('localStorage', storage)
}
