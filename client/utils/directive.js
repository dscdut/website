import Vue from 'vue'
import { roles } from '~/constants/config/base/auth'
// Use v-auth with "allow" argument
Vue.directive('auth', {
  bind(el, binding, vnode, oldVnode) {
    // Only throw in dev mode
    if (process.env.NODE_ENV === 'development') {
      // Handle passing weird role name
      binding.value.forEach((role) => {
        if (!roles.includes(role)) {
          throw new Error(
            `"${role}" is not in the roles collection in ~/constants/config/base/roles, must be included in ${JSON.stringify(
              roles
            )}`
          )
        }
      })
      // Handle passing weird args
      if (!['allow', 'forbid'].includes(binding.arg)) {
        throw new Error(
          'The directive v-auth must use :allow or :forbid argument'
        )
      }
    }
    // Detect if using 'allow' or 'forbid'
    const allow = binding.arg === 'allow'
    if (!binding.value.includes(vnode.context.$store.state.auth.data?.role)) {
      // disabled modifier
      el.disabled = binding.modifiers.active & allow
      el.style.cursor =
        binding.modifiers.active & allow ? 'not-allowed' : el.style.cursor
      // visible modifier
      el.style.display =
        binding.modifiers.visible & allow ? 'none' : el.style.display
      // inner modifier
      el.innerHTML = binding.modifiers.inner & allow ? null : el.innerHTML
    }
  },
  inserted(el, binding, vnode, oldVnode) {},
  update(el, binding, vnode, oldVnode) {},
  componentUpdated(el, binding, vnode, oldVnode) {},
  unbind(el, binding, vnode, oldVnode) {},
})
