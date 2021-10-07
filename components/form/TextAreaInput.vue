<template>
  <div>
    <div class="label">
      {{ label }}
    </div>
    <v-textarea
      v-bind="$attrs"
      outlined
      label=""
      hide-details="auto"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'FormTextAreaInput',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    getInputAttrs () {
      const { label, ...restAttrs } = this.$attrs
      return restAttrs
    }
  }
}
</script>

<style scoped>
</style>
