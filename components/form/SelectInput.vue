<template>
  <div>
    <div class="label">
      {{ label }}
    </div>
    <lkp-select
      class="input-field"
      v-bind="$attrs"
      label=""
      hide-details="auto"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'FormSelectInput',
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
.label {
  margin-bottom: 8px;
}

.input-field {
  margin-bottom: 12px;
}
</style>
