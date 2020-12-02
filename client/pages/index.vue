<template>
  <el-main class="min-h-screen bg-gray-300 flex p-0">
    <div style="width: 55%; flex: 7" class="bg-danger">
      <!--  -->
    </div>
    <div style="width: 45%; flex: 5" class="bg-success flex flex-col">
      <div style="margin-left: calc(1.25rem + 25px); margin-top: 1.25rem">
        <h1 class="text-2xl text-gray-600 font-medium">
          {{ 'Developer Student Clubs' }}
        </h1>
        <h2 class="text-lg text-gray-600">
          {{ 'Danang university of science and technology' }}
        </h2>
      </div>
      <div class="flex-1 flex flex-col justify-center">
        <el-carousel height="450px" :autoplay="false" class="w-full">
          <el-carousel-item
            v-for="item in 4"
            :key="item"
            class="flex items-center justify-center"
          >
            <h3 class="small">
              {{ item }}
            </h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </el-main>
</template>
<script>
import { mapState } from 'vuex'
import { config } from './config'
export default {
  name: 'Home',
  meta: {
    config,
  },
  middleware: ['auth'],
  components: {},
  data() {
    return {}
  },
  computed: mapState({
    locale: (state) => state.locale,
  }),
  methods: {},
  head() {
    return {
      title: this.$t('home.title'),
    }
  },
}
</script>
