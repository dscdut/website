<template>
  <el-main>
    <el-button size="mini" type="warning" @click="$router.push('/secret')">
      {{ $t('home.to-secret') }}
    </el-button>
    <ExampleComponent />
    <transition name="slide-fade" mode="out-in">
      <el-button
        v-if="locale === 'en'"
        :key="'locale-button-vi'"
        size="mini"
        type="danger"
        class="text-yellow"
        @click="$changeLocale('vi')"
      >
        Đổi sang vi
      </el-button>
      <el-button
        v-else
        :key="'locale-button-en'"
        size="mini"
        type="primary"
        @click="$changeLocale('en')"
      >
        Change to en
      </el-button>
    </transition>
  </el-main>
</template>
<script>
import { mapState } from 'vuex'
import { ExampleComponent } from '~/components/uncommon/Home'
export default {
  name: 'Home',
  components: {
    ExampleComponent,
  },
  computed: mapState({
    locale: (state) => state.locale,
  }),
  head() {
    return {
      title: this.$t('home.title'),
    }
  },
}
</script>
