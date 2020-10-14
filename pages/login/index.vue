<template>
  <el-main class="container mx-auto">
    <h1 class="text-2xl my-3">
      {{ $t('login.title') }}
    </h1>
    <div>
      <FormWrapper @onSubmit="postLogin">
        <InputWrapper rules="required|email">
          <!--  -->
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
    </div>
  </el-main>
</template>

<script>
import { authActions } from '~/constants/vuex/auth'
import { FormWrapper, InputWrapper } from '~/components/common/Templates/Form'
export default {
  // Back to home if you've already been authenticated
  middleware: 'authNotRequired',
  components: {
    FormWrapper,
    InputWrapper,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async postLogin() {
      await this.$store.dispatch(authActions.LOGIN, this.form)
      this.$router.push('/')
    },
  },
}
</script>
