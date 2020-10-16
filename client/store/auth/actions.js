import { authMutations } from '~/constants/vuex/auth'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  login({ commit }, form) {
    let auth = null
    // Faking auth data
    auth = {
      ...form,
      role: 'ADMIN',
      accessToken: 'yourAccessTokenFromBackend',
    }
    Cookie.set('auth', auth, { expires: 365 }) // Saving token in cookie for server rendering
    commit(authMutations.SET.AUTH, auth, { root: true }) // Mutating to store for client rendering
  },
  logout({ commit }) {
    Cookie.remove('auth')
    commit(authMutations.SET.AUTH, null, { root: true })
  },
}
