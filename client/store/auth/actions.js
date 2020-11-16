import { authMutations } from './mutations'
const Cookie = process.client ? require('js-cookie') : undefined

/**
 * Auth action module's enum
 */
export const authActions = {
  LOGIN: 'auth/login',
  LOGOUT: 'auth/logout',
}

export default {
  /**
   * Login action
   * @param {Object} context Vuex default action's first parameter
   * @param {Object} form Get from login form
   * @param {String} form.email
   * @param {String} form.password
   * @returns {void} Return nothing
   */
  login({ commit }, form) {
    let auth = null
    // Faking auth data
    auth = {
      ...form,
      id: 1,
      role: 'ADMIN',
      accessToken: 'yourAccessTokenFromBackend',
    }
    Cookie.set('auth', auth, { expires: 365 }) // Saving token in cookie for server rendering
    commit(authMutations.SET.AUTH, auth, { root: true }) // Mutating to store for client rendering
  },
  /**
   * Logout action
   * @param {Object} context Vuex default action's first parameter
   * @returns {void} Return nothing
   */
  logout({ commit }) {
    Cookie.remove('auth')
    commit(authMutations.SET.AUTH, null, { root: true })
  },
}
