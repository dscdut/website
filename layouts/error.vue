<template>
  <div id="notfound">
    <div class="notfound-bg"></div>
    <div class="notfound">
      <div class="notfound-404">
        <h1>{{ error.statusCode }}</h1>
      </div>
      <h2>{{ message }}</h2>
      <nuxt-link to="/" class="home-btn">
        <!--  -->
        Go Home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  layout: 'blank',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || 'Oh no!'
    },
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('~assets/img/error/bg.jpg');
  background-size: cover;
}

#notfound .notfound-bg:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color-theme-1);
  opacity: 0.7;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.notfound {
  max-width: 910px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
}

.notfound .notfound-404 {
  position: relative;
  height: 200px;
}

.notfound .notfound-404 h1 {
  font-family: Google;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 220px;
  font-weight: 900;
  margin: 0px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 10px;
}

.notfound h2 {
  font-family: Google;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 15px;
}

.notfound .home-btn,
.notfound .contact-btn {
  font-family: Google;
  display: inline-block;
  font-weight: 700;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid transparent;
  text-transform: uppercase;
  padding: 13px 25px;
  font-size: 18px;
  border-radius: 40px;
  margin: 7px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.notfound .home-btn:hover,
.notfound .contact-btn:hover {
  opacity: 0.9;
}

.notfound .home-btn {
  color: var(--color-theme-1);
  background: #fff;
}

.notfound .contact-btn {
  border: 2px solid rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

@media only screen and (max-width: 767px) {
  .notfound .notfound-404 h1 {
    font-size: 182px;
  }
}

@media only screen and (max-width: 480px) {
  .notfound .notfound-404 {
    height: 146px;
  }
  .notfound .notfound-404 h1 {
    font-size: 146px;
  }
  .notfound h2 {
    font-size: 16px;
  }
  .notfound .home-btn,
  .notfound .contact-btn {
    font-size: 14px;
  }
}
</style>
