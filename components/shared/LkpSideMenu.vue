<template>
  <div>
    <v-navigation-drawer
      ref="navigation"
      absolute
      :value="drawer"
      temporary
      right
      :stateless="true"
      width="420"
      class="side-menu"
    >
      <v-list-item class="title-container">
        <h2 class="title-card">
          {{ sideMenuTitle }}
        </h2>
      </v-list-item>

       <div class="side-menu-container">
        <slot />
      </div>

      <div class="form-actions pt-4 pb-4 d-flex">
        <v-row align="center" justify="end">
          <v-btn class="button-cancel-group form-button" outlined @click="cancel">
            <h4 class="tittle-button-cancel-group">
              FECHAR
            </h4>
          </v-btn>
        </v-row>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'LkpSideMenu',
  props: {
    drawer: {
      type: Boolean,
      required: true
    },
    sideMenuTitle: {
      type: String,
      required: true
    },
    showMenu: {
      type: Boolean,
      required: true
    },
    loadingSubmit: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      valid: false
    }
  },
  methods: {
    cancel () {
      this.$emit('onCancel', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.side-menu {
  height: 100vh;
}

.side-menu-container {
  min-height: calc(100% - 40px - 60px);
}

.v-text-field--enclosed .v-input__append-inner,
.v-text-field--enclosed .v-input__prepend-inner {
  margin-top: 4px;
}
.v-select.v-text-field--outlined:not(.v-text-field--single-line)
  .v-select__selections {
  margin-top: 0px;
  padding: 0;
}

.v-label--active {
  top: 14px !important;
}

.v-menu__content {
  margin-top: 30px;
}

.title-container {
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  top: 0;
  z-index: 10;
  min-height: 40px;
  background: transparent linear-gradient(45deg, #44d289, #1fdcbd) 0 0 no-repeat;
}

.title-card {
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
}

.form-container {
  padding: 10px 18px;
}

.form-actions {
  padding: 14px;
  margin: 0;
  position: sticky;
  bottom: 0;
  background-color: white;
  height: 60px;
  border-top: 1px solid #e7e7e7;
}

.form-button {
  margin-right: 14px;
}

.button-create-group {
  background: transparent linear-gradient(45deg, #44d289, #1fdcbd) 0 0 no-repeat;
}

.button-cancel-group {
  border: 1px solid #ccc;
  background: #fff;
}

.tittle-button-create-group {
  color: #fff;
}
.tittle-button-cancel-group {
  color: gray;
}
</style>
