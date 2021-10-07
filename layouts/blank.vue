<template>
  <v-app>
    <v-container fluid fill-height>
      <nuxt />
    </v-container>
    <LkpSnackBar />
  </v-app>
</template>

<script>
import LkpSnackBar from '@/components/shared/LkpSnackbar'
export default {
  components: {
    LkpSnackBar
  }
}
</script>

<style></style>
