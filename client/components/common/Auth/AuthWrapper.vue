<template>
  <span v-if="isAllowed">
    <slot v-for="role in allow" :name="role" />
    <slot />
  </span>
</template>
<script>
import { roles } from '~/constants/config/base/auth'
export default {
  props: {
    allow: {
      type: Array,
      default() {
        return ['ALL']
      },
    },
  },
  computed: {
    isAllowed() {
      return this.allow.includes(this.$store.state.auth.data?.role)
    },
  },
  created() {
    if (process.env.NODE_ENV === 'development') {
      // Check if role is valid
      this.allow.forEach((role) => {
        if (!roles.includes(role)) {
          throw new Error(
            `"${role}" is not in the roles collection in ~/constants/config/base/roles, must be included in ${JSON.stringify(
              roles
            )}`
          )
        }
      })
    }
  },
}
</script>
