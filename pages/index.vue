<template>
  <el-main>
    <ExampleComponent />
  </el-main>
</template>
<script>
import { ExampleComponent } from '~/components/uncommon/Home'
export default {
  name: 'Home',
  components: {
    ExampleComponent,
  },
  created() {
    // Global function and variable from global mixins
    // this.sayHello("Rim")
    // console.log(this.mixinMessage)
  },
  head() {
    return {
      title: this.$t('home.title'),
    }
  },
}
</script>
