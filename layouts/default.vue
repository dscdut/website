<template>
  <div class="p-0 w-full">
    <Navbar @signInDialogTrigger="dialogVisible = true" />
    <nuxt keep-alive />
    <Login :visible="dialogVisible" @onClose="dialogVisible = false" />
    <Footer />
  </div>
</template>

<script>
import { Login } from '~/components/common/Auth'
import { Navbar, Footer } from '~/components/common/Layout'
export default {
  components: {
    Login,
    Navbar,
    Footer,
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
}
</script>
