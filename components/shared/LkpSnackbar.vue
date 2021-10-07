<template>
  <v-snackbar v-model="show" :color="color">
    <div class="d-flex justify-center align-center">
      {{ message }}
      <v-spacer />
      <v-btn text @click="show = false">
        Fechar
      </v-btn>
    </div>
  </v-snackbar>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      message: '',
      color: ''
    }
  },
  // created () {
  //   this.$store.subscribe((mutation, state) => {
  //     if (mutation.type === 'snackbar/showMessage') {
  //       this.message = state.snackbar.content
  //       this.color = state.snackbar.color
  //       this.show = true
  //     }
  //   })
  // }
}
</script>

<style>
.v-snack__content {
  padding: 5px 8px;
  margin-left: 5px;
}
</style>
