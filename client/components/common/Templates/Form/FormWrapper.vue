<template>
  <ValidationObserver v-slot="{ passes }">
    <el-form ref="wrappedForm" @submit.native.prevent="passes(submitForm)">
      <slot></slot>
    </el-form>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
export default {
  name: 'FormWrapper',
  components: {
    ValidationObserver,
  },
  methods: {
    reset() {
      this.$refs.wrappedForm.$el.reset()
      this.$refs.wrappedForm.errors.clear()
    },
    submitForm() {
      this.$emit('onSubmit')
    },
  },
}
</script>
