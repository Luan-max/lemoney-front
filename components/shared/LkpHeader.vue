<template>
  <header>
    <lkp-row>
      <lkp-col cols="12" sm="12" md="12" class="d-flex">
        <h1>{{ title }}</h1>
        <v-spacer />
        <slot name="right" />
      </lkp-col>
    </lkp-row>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
