<template>
  <div class="alert-body">
    <h3>{{ message }}</h3>
    <v-btn
      color="black"
      @click="$emit('confirmed')"
    >
      <h3>Confirmar</h3>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'ConfirmOrder',
  props: {
    message: {
      type: String,
      default: 'Deseja continuar com o resgate?'
    }
  }
}
</script>
<style scoped>

</style>
