<template>
  <div class="p-0 w-full">
    <Navbar @signInDialogTrigger="dialogVisible = true" />
    <nuxt keep-alive />
    <Login :visible="dialogVisible" @onClose="dialogVisible = false" />
    <Footer />
  </div>
</template>

<script>
import { Login, Navbar, Footer } from '~/components/common'
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
