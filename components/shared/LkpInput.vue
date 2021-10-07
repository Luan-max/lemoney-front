<template>
  <!-- <span class="text-primary"> {{ $attrs.label }} </span> -->
  <v-text-field v-bind="$attrs" outlined v-on="$listeners" />
</template>

<script>
export default {
  name: 'LkpInput',
  computed: {
    getInputAttrs () {
      const { label, ...restAttrs } = this.$attrs
      return restAttrs
    }
  }
}
</script>
