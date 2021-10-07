<template>
  <v-row v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-row>
</template>
<script>
export default {
  name: 'LkpRow'
}
</script>
