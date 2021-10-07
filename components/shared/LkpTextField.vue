<template>
  <!-- <span class="text-primary"> {{ $attrs.label }} </span> -->
  <v-text-field v-bind="$attrs" outlined v-on="$listeners" />
</template>

<script>
export default {
  name: 'LkpTextFiel',
  computed: {
    getInputAttrs () {
      const { label, ...restAttrs } = this.$attrs
      return restAttrs
    }
  }
}
</script>