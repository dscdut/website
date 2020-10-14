<template>
  <nav class="navbar bg-theme-1 flex justify-between">
    <div class="flex items-center">
      <span class="font-bold text-white m-3"> Left content</span>
    </div>
    <div class="flex items-center">
      <span class="font-bold text-white m-3">Right content</span>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapState({
      locale: (state) => state.locale,
    }),
  },
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
}
</style>
