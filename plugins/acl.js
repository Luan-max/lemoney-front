export default function (app, inject) {
  const acl = {
    isAdmin: () => {
     
      return app.store.getters['auth/userIsAdmin']
    } 
  }

  inject('acl', acl)
}
