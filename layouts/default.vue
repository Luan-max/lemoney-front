<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      fixed
      permanent
      width="160"
      class="transition sidebar"
      app
    >
      <v-list class="sidebar__list">
        <div class="cursor-pointer" @click="goToHome">
          <div :class="[miniVariant ? 'text-center': 'text-right']">
            <v-btn
              icon
              @click.stop="miniVariant = !miniVariant"
            >
              <v-icon class="sidebar__baricon toggle-icon" color="grey" size="18">
                mdi-menu
              </v-icon>
            </v-btn>
          </div>

          <div class="sidebar__logo-container text-center">
            <img :class="[miniVariant ? 'sidebar__logo--inactive': 'sidebar__logo--active']" :src="getImage('nuvem-white')" alt="Logo" class="transition">
            <img v-if="!miniVariant" :class="[miniVariant ? 'sidebar__logo--inactive': 'sidebar__logo--active']" :src="getImage('linkapi-white')" alt="Logo" class="transition">
          </div>
        </div>
        <template
          v-for="(item, i) in items"
        >
          <v-list-item
            v-if="!item.childrens && userCanShow(item)"
            :key="i"
            class="sidebar__item"
            :to="item.to"
          >
            <v-icon class="sidebar__list-item-icon">
              {{ item.icon }}
            </v-icon>
            <v-list-item-content>
              <v-list-item-title class="text-white" v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
          <v-list-group
            v-else-if="userCanShow(item)"
            :key="i"
            :prepend-icon="item.icon"
          >
            <template #activator>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>
            <v-list-item
              v-for="(child, index) in item.childrens"
              :key="i + index"
              :to="child.to"
              class="sidebar__list"

              exact
            >
              <v-icon class="sidebar__list-item-icon">
                {{ child.icon }}
              </v-icon>
              <v-list-item-content>
                <v-list-item-title class="text-white" v-text="child.title" />
              </v-list-item-content>
            </v-list-item>

            <!-- <v-list-group
              no-action
              sub-group
            >
              <template #activator>
              </template>
            </v-list-group> -->
          </v-list-group>
        </template>
      </v-list>
      <template #append>
        <div class="pt-4 pb-4 d-flex justify-center">
          <span class="cursor-pointer sidebar__logout" @click="logout">
            <v-icon>
              mdi-logout
            </v-icon>

            <span v-if="!miniVariant">Logout</span>
          </span>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid class="pa-0 c-fill-height">
        <nuxt />
      </v-container>
    </v-main>
    <LkpSnackbar />
  </v-app>
</template>

<script>
import LkpSnackbar from '@/components/shared/LkpSnackbar'
export default {
  components: {
    LkpSnackbar
  },
  middleware: 'auth',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      userRole: false,
      items: [
        {
          icon: 'mdi-bitcoin',
          title: 'Offers',
          to: '/orders'
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  async created () {
    const user = await this.$store.getters['auth/user']

    this.userRole = user.role
  },
  methods: {
    groupIsActive (group) {
      const route = this.$route.name
      return group.childrens.some(item => item.to === `/${route}`)
    },
    getImage (name) {
      return require(`@/assets/svg/${name}.svg`)
    },
    async logout () {
      this.$localStorage.remove('access_token')
      await this.$router.push('/login')
    },
    async goToHome () {
      await this.$router.push('/')
    },
    userCanShow (item) {
      if (!item.roles) {
        return true
      }

      return item.roles.includes(this.userRole)
    }
  }
}
</script>
