<template>
  <h1 v-editable="blok">{{ blok.name }}</h1>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
    body: {
      type: Object,
      required: false,
      default: [],
    },
  },
  mounted() {
    if (typeof this.blok === 'undefined') {
      // change the props.blok to be props.body (mutate props in nuxt)
      // TODO
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
}
</style>