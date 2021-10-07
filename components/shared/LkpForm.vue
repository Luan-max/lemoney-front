<template>
  <v-form v-bind="$attrs" ref="formChildren" v-on="$listeners">
    <slot />
  </v-form>
</template>

<script>
export default {
  name: 'LkpForm',
  methods: {
    validate () {
      return this.$refs.formChildren.validate()
    },
    resetValidation () {
      return this.$refs.formChildren.resetValidation()
    },
    reset () {
      return this.$refs.formChildren.reset()
    }
  }
}
</script>

<style>

</style>
