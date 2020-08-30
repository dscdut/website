<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#fff"
    :router="true"
    :default-active="activeIndex"
    @select="handleSelect"
  >
    <el-menu-item index="1" :route="{ name: 'index' }">
      <span>Home</span>
    </el-menu-item>
    <el-menu-item index="2" :route="{ name: 'introduction' }">
      <span>Introduction</span>
    </el-menu-item>
    <el-menu-item index="3" :route="{ name: 'secret' }">
      <span>Secret page</span>
    </el-menu-item>
    <client-only>
      <!-- Login button -->
      <el-menu-item
        v-if="$store.state.auth && $route.path != '/login'"
        class="mr-3 float-right"
        :title="$t('navbar.logout')"
        @click="$store.dispatch('logout')"
      >
        {{ $t('navbar.logout') }}
      </el-menu-item>
      <el-menu-item
        v-if="!$store.state.auth && $route.path != '/login'"
        class="mr-3 float-right"
        :title="$t('navbar.login')"
        @click="$root.$emit('showLoginDialog')"
      >
        {{ $t('navbar.login') }}
      </el-menu-item>
      <!-- i18n button -->
      <el-menu-item
        v-if="locale == 'en'"
        size="sm"
        class="float-right"
        @click="$changeLocale('vi')"
      >
        Tiếng Việt
      </el-menu-item>
      <el-menu-item
        v-if="locale == 'vi'"
        size="sm"
        class="float-right"
        @click="$changeLocale('en')"
      >
        English
      </el-menu-item>
    </client-only>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  data() {
    return {
      activeIndex: '1',
    }
  },
  computed: {
    ...mapState({
      locale: (state) => state.locale,
    }),
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
