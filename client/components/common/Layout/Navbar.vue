<template>
  <nav
    class="navbar flex flex-col justify-between fixed"
    style="left: 1.25rem; top: 50%; transform: translateY(-50%)"
  >
    <el-tooltip
      v-for="(item, index) in navbarItems"
      :key="'nav-item-' + index"
      effect="dark"
      :content="$t(item.label)"
      placement="right"
    >
      <div
        style="width: 50px; height: 50px"
        class="flex items-center justify-center rounded-full mb-5 shadow-md cursor-pointer duration-150"
        :class="[
          `bg-${item.color}`,
          `hover:bg-${item.color}-600`,
          'hover:shadow-lg',
        ]"
      >
        <fa class="text-xl text-white" :icon="item.icon" />
      </div>
    </el-tooltip>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  data() {
    return {
      navbarItems: [
        {
          color: 'danger',
          icon: ['fas', 'calendar-check'],
          label: 'navbar.events',
        },
        {
          color: 'success',
          icon: ['fas', 'layer-group'],
          label: 'navbar.products',
        },
        {
          color: 'yellow',
          icon: ['fas', 'newspaper'],
          label: 'navbar.news-blogs',
        },
        {
          color: 'primary',
          icon: ['fas', 'user-friends'],
          label: 'navbar.our-team',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      locale: (state) => state.locale,
    }),
  },
}
</script>
