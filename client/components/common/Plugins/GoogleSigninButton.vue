<template>
  <div class="inline-block">
    <!-- Custom sign in button -->
    <div v-show="!isSignedIn" id="gSignInWrapper">
      <div id="google-signin-button">
        <el-button
          :size="options.size"
          :type="options.variant.signedIn"
          :disabled="isSignedIn && doneLoading"
          :loading="!doneLoading"
          class="customGPlusSignIn google-button google-signin-button animated fadeIn faster"
        >
          <slot name="signin-inner">
            <span class="google-signin-button-text">
              <!-- -->
              <fa :icon="['fas', 'user']" />
              Sign in
            </span>
          </slot>
        </el-button>
      </div>
    </div>
    <!-- Custom sign out button -->
    <div v-show="isSignedIn" id="gSignOutWrapper" @click="onSignOut">
      <el-button
        :size="options.size"
        :type="options.variant.signedOut"
        :disabled="!isSignedIn && doneLoading"
        :loading="!doneLoading"
        class="google-button google-signout-button animated fadeIn faster"
      >
        <slot name="signout-inner">
          <span class="google-signout-button-text">
            <!-- -->
            Sign out
          </span>
        </slot>
      </el-button>
      <p v-show="isSignedIn">
        <!--  -->
        Welcome back, {{ currentUser.name }}
      </p>
    </div>
  </div>
</template>

<script>
// https://developers.google.com/identity/sign-in/web/sign-in
// You don't need to modify this component, but you can if you want to
// This component $emit('onSignIn', {currentUser, token}) when sign in successfully
// And fire $emit('onSignOut') when user sign out
// It also store auth data to localStorage
// This component doesn't use VueX or anything else, just the localStorage
// To use this, you need to specify your CLIENT_ID you got from your Google developer console in .env
// You also have to include Google API platform source code in app.html (there's a app.html.example)
export default {
  props: {
    options: {
      type: Object,
      default() {
        return {
          size: 'sm',
          variant: {
            loading: 'light',
            signedIn: 'success',
            signedOut: 'danger',
          },
        }
      },
    },
  },
  data() {
    return {
      doneLoading: false,
      isSignedIn: false,
      token: '',
      currentUser: {
        name: '',
        email: '',
        first_name: '',
        last_name: '',
        image_url: '',
      },
    }
  },
  async created() {
    const response = await this.$axios.post('abc.com/api/v1/login', {
      header: {
        Authorization: `Bearer ${this.token}`,
      },
    })
    console.log(response)
  },
  mounted() {
    // window only usable in mounted hook
    if (!window.gapi) {
      //
      // eslint-disable-next-line no-useless-return
      return
    } else {
      // Sign in the user if they are currently signed in.
      window.gapi.load('auth2', () => {
        window.gapi.auth2
          .init({
            client_id: process.env.CLIENT_ID,
          })
          .then(() => {
            this.doneLoading = true
            // Check if signed in and did have id_token stored
            if (
              window.gapi.auth2.getAuthInstance().isSignedIn.get() &&
              localStorage.getItem('currentUser') != null &&
              localStorage.getItem('token') != null &&
              localStorage.getItem('isSignedInWithGoogle')
            ) {
              this.isSignedIn = true
              this.$emit('onSignIn', {
                currentUser: localStorage.getItem('currentUser'),
                token: localStorage.getItem('token'),
              })
            } else {
              this.isSignedIn = false
              this.initAuthButton()
            }
          })
      })
      //
    }
  },
  methods: {
    initAuthButton() {
      //
      if (process.client) {
        //
        window.gapi.load('auth2', () => {
          const element = document.getElementById('google-signin-button')
          window.gapi.auth2
            .init({
              client_id: process.env.CLIENT_ID,
            })
            .then((auth2) => {
              auth2.attachClickHandler(
                element,
                {},
                () => {
                  this.onsuccess(
                    window.gapi.auth2.getAuthInstance().currentUser.get()
                  )
                },
                (error) => {
                  if (error.error === 'popup_closed_by_user')
                    console.error('User has closed google authentication popup')
                }
              )
            })
        })
      }
    },
    onsuccess(user) {
      // Get token
      this.token = window.gapi.auth2
        .getAuthInstance()
        .currentUser.get()
        .getAuthResponse().id_token
      // Get current user
      this.currentUser = {
        name: user.getBasicProfile().getName(),
        email: user.getBasicProfile().getEmail(),
        first_name: user.getBasicProfile().getFamilyName(),
        last_name: user.getBasicProfile().getGivenName(),
        image_url: user.getBasicProfile().getImageUrl(),
      }
      // Store token and current user
      this.$emit('onSignIn', {
        currentUser: this.currentUser,
        token: this.token,
      })
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
      localStorage.setItem('token', this.token)
      localStorage.setItem('isSignedInWithGoogle', true)
      this.isSignedIn = true
    },
    onSignOut() {
      window.gapi.load('auth2', () => {
        window.gapi.auth2
          .init({
            client_id: process.env.CLIENT_ID,
          })
          .then(() => {
            window.gapi.auth2
              .getAuthInstance()
              .signOut()
              .then(() => {
                // Remove token and current user
                localStorage.removeItem('currentUser')
                localStorage.removeItem('token')
                localStorage.removeItem('isSignedInWithGoogle')
                this.isSignedIn = false
                this.$emit('onSignOut')
                // Re-init signin button
                this.initAuthButton()
                console.warn('User signed out.')
              })
          })
      })
    },
  },
}
</script>
