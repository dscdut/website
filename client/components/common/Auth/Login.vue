<template>
  <el-dialog
    :visible.sync="dialogVisible"
    title="Sign in to access the secret page"
  >
    <FormWrapper @onSubmit="postLogin">
      <InputWrapper rules="required|email">
        <el-input
          v-model="form.email"
          type="email"
          :placeholder="$t('login.email')"
        ></el-input>
      </InputWrapper>
      <InputWrapper rules="required">
        <el-input
          v-model="form.password"
          type="password"
          :placeholder="$t('login.password')"
        ></el-input>
      </InputWrapper>
      <el-button native-type="submit">
        {{ $t('login.button') }}
      </el-button>
    </FormWrapper>
  </el-dialog>
</template>
<script>
export default {
  components: {
    FormWrapper: () =>
      import('~/components/common/Templates/Form/FormWrapper.vue'),
    InputWrapper: () =>
      import('~/components/common/Templates/Form/InputWrapper.vue'),
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      dialogVisible: false,
    }
  },
  created() {
    this.$root.$on('showLoginDialog', () => {
      this.dialogVisible = true
    })
    this.$root.$on('hideLoginDialog', () => {
      this.dialogVisible = false
    })
  },
  // Back to home if you've already been authenticated
  methods: {
    async postLogin() {
      await this.$store.dispatch('login', this.form)
      this.dialogVisible = false
    },
  },
}
</script>
