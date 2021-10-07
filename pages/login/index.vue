<template>
  <v-layout justify-center align-center>
    <v-flex>
      <div class="login-wrapper">
        <lkp-row no-gutters class="h-100">
        <lkp-col v-show="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" md="5" class="background-primary">
          </lkp-col>
          <lkp-col sm="12" md="7">
            <v-card
              class="card-container card-container-login h-100"
              elevation="0"
            >
              <h4 class="card-container__title midtitle">
                Welcome Lemoney Offers
              </h4>

              <h3 class="card-container__title mb-5 bold">
                Log into your Account
              </h3>

              <lkp-form ref="form" lazy-validation>
                 <lkp-input
                  v-model="login.email"
                  type="email"
                  label="E-mail"
                  placeholder="Input your e-mail"
                  :rules="[
                    v => !!v || 'Insert a valid email.',
                    v => /.+@.+\..+/.test(v) || 'Insert a valid email.'
                  ]"
                  required
                  @keyup.enter="makeLogin"
                />

                <lkp-input
                  v-model="login.password"
                  type="password"
                  label="Password"
                  placeholder="Input your password"
                  :rules="[
                    v => !!v || 'Insert your password.'
                  ]"
                  required
                  @keyup.enter="makeLogin"
                />
                <lkp-btn
                  justify-center
                  color="blue"
                  :loading="loading"
                  block
                  @click="makeLogin"
                >
                  Login with your account
                </lkp-btn>
              </lkp-form>
            </v-card>
          </lkp-col>
        </lkp-row>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import LkpCol from '~/components/shared/LkpCol.vue'
export default {
  components: { LkpCol },
  layout: 'blank',
  data: () => ({
    valid: false,
    loading: false,
    login: {
      email: '',
      password: ''
    }
  }),
  methods: {
    getImage (name) {
      return require(`@/assets/svg/${name}`)
    },
    async makeLogin () {
      try {
        const { access_token: token } = await this.$api.auth.login({ ...this.login })
        console.log(token)

        if (token) {
          this.$localStorage.set('access_token', token.access_token)
          await this.$api.core(token.access_token)
          await this.$store.dispatch('auth/login', {
            token
          })
          await this.$router.push('/')
          this.$toast.success('Bem vindo, logado com sucesso!')
        }
      } catch (error) {
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.h-100 {
  height: 100%;
}
.login-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 358px;
}
.card-container {
  padding: 50px !important;

  &.card-container-login {
    box-shadow: 0 3px 6px hsl(90deg 4% 49% / 20%) !important;
  }

  &__title {
    color: rgb(33 150 243) !important;
    font-weight: 300;

    & + & {
      color:rgb(33 150 243) !important;
    }
  }

  &__title.midtitle {
    font-size: 1.14rem;
  }
}
.background-primary {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(33 150 243);

  &::after,
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::after {
    background: #fff;
    opacity: 0.2;
  }

  &::before {
    background: rgb(33 150 243) !important;
    background-repeat: no-repeat !important;
    background-position: 50% !important;
  }

  &__logo {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 150px;
    z-index: 1;
  }
  &__title {
    text-align: center;
    font-size: 2.25rem;
    z-index: 1;
    white-space: nowrap;
    color: white;
    font-weight: 400;
    line-height: 1.2;

    & + & {
      margin-top: 8px;
    }

    &:nth-child(3) {
      font-weight: 700;
    }
  }
}
</style>
