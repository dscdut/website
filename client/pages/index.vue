<template>
  <el-main class="flex p-0 home-page-wrapper">
    <div class="overflow-hidden home-page-left-inner">
      <transition
        v-for="({ thumbnail }, index) in homeContent"
        :key="'thumbnail-wrapper-' + thumbnail"
        name="fade"
        mode="out-in"
      >
        <el-image
          v-if="currentSlide === index"
          :key="'thumbnail-' + thumbnail"
          class="home-page-left-image"
          fit="cover"
          :src="thumbnail"
          alt="DSC-DUT website"
        />
      </transition>
    </div>
    <div class="flex flex-col home-page-right-inner">
      <div class="home-page-right-title">
        <h1 class="text-3xl text-gray-600 font-medium">
          {{ 'Developer Student Clubs' }}
        </h1>
        <h2 class="text-2xl text-gray-600">
          {{ 'Danang university of science and technology' }}
        </h2>
      </div>
      <div class="flex-1 flex flex-col justify-center">
        <el-carousel
          :interval="5000"
          class="home-carousel-wrapper"
          @change="handleCarouselChange"
        >
          <el-carousel-item
            v-for="content in homeContent"
            :key="content.id"
            class="text-gray-600 text-2xl h-full home-carousel-inner"
          >
            <div v-html="content.text"></div>
          </el-carousel-item>
        </el-carousel>
        <!-- <div class="relative">
          <div
            class="p-16 text-gray-600 text-2xl"
            v-html="homeContent[currentSlide].text"
          />
          <transition name="fade" mode="out-in">
            <span
              v-if="currentSlide > 0"
              class="flex items-center justify-center bg-gray-300 text-xl p-3 absolute rounded-full opacity-75 text-gray-600"
              style="width: 40px; height: 40px; top: 50%; left: 30px"
              @click="--currentSlide"
            >
              <fa :icon="['fas', 'chevron-left']" />
            </span>
          </transition>
          <transition name="fade" mode="out-in">
            <span
              v-if="currentSlide < homeContent.length - 1"
              class="flex items-center justify-center bg-gray-300 text-xl p-3 absolute rounded-full opacity-75 text-gray-600"
              style="width: 40px; height: 40px; top: 50%; right: 30px"
              @click="++currentSlide"
            >
              <fa :icon="['fas', 'chevron-right']" />
            </span>
          </transition>
        </div> -->
        <div class="home-find-out-more-button">
          <el-button type="primary" round>
            {{ $t('home.find-out-more') }}
          </el-button>
        </div>
      </div>
    </div>
  </el-main>
</template>
<script>
import { mapState } from 'vuex'
import { config } from './config'
export default {
  name: 'Home',
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
  meta: {
    config,
  },
  middleware: ['auth'],
  components: {},
  data() {
    return {
      homeContent: [
        {
          id: 0,
          text: ` <p>Developer Student Clubs (DSC) is program presented by Google Developers.</p><br />
            <p>DSCs are university-based community groups for students. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome.</p>`,
          thumbnail: require('~/assets/img/home/bg-home-1.jpg'),
        },
        {
          id: 1,
          text: ` <p>By joining a DSC, the students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p><br />
            <p>Developer Student Club - Danang University of Science and Technology is a chapter of DSC.</p>`,
          thumbnail: require('~/assets/img/home/bg-home-2.jpg'),
        },
      ],
      currentSlide: 0,
    }
  },
  computed: mapState({
    locale: (state) => state.locale,
  }),
  methods: {
    handleCarouselChange(index) {
      this.currentSlide = index
    },
  },
  head() {
    return {
      title: this.$t('home.title'),
    }
  },
}
</script>
<style lang="scss">
.home-page-wrapper {
  height: 100vh;
  .home-carousel-wrapper {
    height: 450px;
    .el-carousel__container {
      height: 100%;
    }
  }
  .home-find-out-more-button {
    padding: 0 4rem;
  }
}
.home-page-left-inner {
  width: 55%;
  flex: 7;
  height: 100vh;
  .home-page-left-image {
    height: 100%;
  }
}
.home-page-right-inner {
  width: 45%;
  flex: 5;
  .home-page-right-title {
    margin-left: calc(1.25rem + 25px);
    margin-top: 1.25rem;
  }
  .home-carousel-inner {
    padding: 4rem;
  }
}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  .home-page-wrapper {
    height: auto;
    flex-direction: column-reverse;
    margin-bottom: 4rem;
    .home-carousel-wrapper {
      height: 300px;
    }
  }
  .home-page-left-inner {
    height: 50vh;
    width: 100%;
    .home-page-left-image {
      margin-top: 4rem;
      height: 50vh;
    }
  }
  .home-page-right-inner {
    width: 100%;
    .home-page-right-title {
      margin-left: 5.5rem;
      margin-top: 1.5rem;
      margin-right: 4rem;
    }
  }
}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  .home-page-wrapper {
    .home-carousel-wrapper {
      height: 350px;
    }
  }
}
// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  .home-page-wrapper {
    .home-carousel-wrapper {
      height: 350px;
    }
    .home-find-out-more-button {
      padding: 0 1.25rem;
    }
  }
  .home-page-right-inner {
    .home-carousel-inner {
      padding: 2.5rem 1.25rem;
    }
  }
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .home-page-wrapper {
    .home-carousel-wrapper {
      height: 450px;
    }
  }
}
// Extra extra small devices (portrait phones, less than 375px)
@media (max-width: 373.98px) {
  .home-page-wrapper {
    .home-carousel-wrapper {
      height: 550px;
    }
  }
}
</style>
