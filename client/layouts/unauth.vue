<template>
  <div class="p-0 w-full">
    <Navbar @signInDialogTrigger="dialogVisible = true" />
    <nuxt keep-alive />
  </div>
</template>

<script>
import { Navbar } from '~/components/common/Layout'
export default {
  name: 'Default',
  // Back to home if you've already been authenticated
  middleware: 'authNotRequired',
  components: {
    Navbar,
  },
}
</script>
