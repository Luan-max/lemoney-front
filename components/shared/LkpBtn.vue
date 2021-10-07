<template>
  <v-btn
    v-bind="$attrs"
    v-on="$listeners"
    elevation="0"
    :disabled="disabled"
    :class="`button ${disabled && 'button-disabled'}`"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'LkpBtn',
  props: {
    disabled: {
      Type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.button {
  background :gray;
  color: #fff;
  text-transform: lowercase;
  text-transform: capitalize;
  border-radius: 3px;
  font-size: 13px;
  transition: background 10.3s ease-out;
}
.button-disabled {
  opacity: 0.55;
}
.button:before {
  background: #1e1e1e;
}
.button:hover::before {
  opacity: 0.25;
}

</style>
