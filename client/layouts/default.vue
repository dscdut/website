<template>
  <div class="p-0 w-full">
    <Navbar @signInDialogTrigger="dialogVisible = true" />
    <nuxt keep-alive />
    <Login :visible="dialogVisible" @onClose="dialogVisible = false" />
  </div>
</template>

<script>
import { Login } from '~/components/common/Auth'
import { Navbar } from '~/components/common/Layout'
export default {
  components: {
    Login,
    Navbar,
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
}
</script>
