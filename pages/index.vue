<template>
  <el-main>
    <ExampleComponent />
    <p class="random-class text-primary">
      {{ $t('random-text') | slugify }}
    </p>
    <p class="mt-5 text-gray">
      {{ $t('random-text-using-grid') }}
      <span class="sx-10"></span>
      {{ $t('random-text-using-spacing') }}
    </p>
    <p class="random-text-using-mixin">
      {{ $t('random-text-using-mixin') }}
    </p>
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
    // Global function and variable from mixins
    // this.sayHello("Rim")
    // console.log(this.mixinMessage)
  },
  head() {
    return {
      title: this.$t('title.dashboard'),
    }
  },
}
</script>
<style lang="scss">
@import '~/assets/scss/base/utilities/_mixins';
.random-class {
  color: var(--color-primary);
}
.random-text-using-mixin {
  @include centerAbsolute('both');
}
</style>
