<template>
  <div class="p-0 w-full">
    <FloatingLogo />
    <Navbar />
    <nuxt keep-alive />
    <Login />
  </div>
</template>

<script>
import { Login } from '~/components/common/Auth'
import { Navbar, FloatingLogo } from '~/components/common/Layout'
export default {
  name: 'Default',
  components: {
    Login,
    Navbar,
    FloatingLogo,
  },
  methods: {
    triggerLoginForm() {
      this.$root.$emit('my-dialog-show', 'login-form')
    },
  },
}
</script>
