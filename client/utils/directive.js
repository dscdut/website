import Vue from 'vue'
import { roles } from '~/constants/config/base/auth'
// v-auth can't work as v-if, use <auth> wrapper component instead
// Use v-auth with "allow" argument
// <div v-auth:allow.active="['ADMIN', 'SOMETHING']" />
// <div v-auth:allow.visible="['ADMIN', 'SOMETHING']" />
// <div v-auth:allow.inner="['ADMIN', 'SOMETHING']" />
Vue.directive('auth', {
  bind(el, binding, vnode, oldVnode) {
    // Only throw in dev mode
    if (process.env.NODE_ENV === 'development') {
      // Handle passing weird args
      if (!['allow', 'forbid'].includes(binding.arg)) {
        throw new Error(
          'The directive v-auth must use :allow or :forbid argument'
        )
      }
      if (!Array.isArray(binding.value)) {
        throw new TypeError(
          'The directive v-auth must have value as Array type'
        )
      }
      if (binding.value.length < 1) {
        throw new Error(
          'The directive v-auth must have value as an array of declared roles'
        )
      }
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
    }
    // Detect if using 'allow' or 'forbid'
    const allow = binding.arg === 'allow'
    if (!binding.value.includes(vnode.context.$store.state.auth.data?.role)) {
      // disabled modifier
      el.disabled = binding.modifiers.active & allow
      if (binding.modifiers.active & allow) {
        el.classList.add('cursor-not-allowed')
        el.classList.add('opacity-50')
      }
      // visible modifier
      if (binding.modifiers.visible & allow) {
        el.classList.add('hidden')
      }
      // inner modifier
      el.innerHTML = binding.modifiers.inner & allow ? null : el.innerHTML
    }
  },
  inserted(el, binding, vnode, oldVnode) {},
  update(el, binding, vnode, oldVnode) {},
  componentUpdated(el, binding, vnode, oldVnode) {},
  unbind(el, binding, vnode, oldVnode) {},
})
