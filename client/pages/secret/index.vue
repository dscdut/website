<template>
  <el-main>
    <h1 class="text-purple">
      {{ $t('secret.text') }}
    </h1>
    <el-button size="mini" type="primary" @click="$router.push('/')">
      {{ $t('secret.to-home') }}
    </el-button>
    <el-button size="mini" type="danger" @click="logout">
      {{ $t('secret.logout') }}
    </el-button>
  </el-main>
</template>
<script>
import { authActions } from '~/constants/vuex/auth'
export default {
  middleware: 'authRequired',
  methods: {
    async logout() {
      await this.$store.dispatch(authActions.LOGOUT)
      this.$router.push('/')
    },
  },
}
</script>
