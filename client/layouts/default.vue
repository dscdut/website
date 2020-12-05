<template>
  <div class="p-0 w-full">
    <FloatingLogo />
    <Navbar />
    <nuxt keep-alive />
    <Login />
  </div>
</template>

<script>
import { Navbar, FloatingLogo } from '~/components/common/Layout'
export default {
  name: 'Default',
  components: {
    Navbar,
    FloatingLogo,
  },
}
</script>
