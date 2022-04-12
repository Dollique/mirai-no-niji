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
  },
}
</script>

<style lang="scss" scoped>
h1 {
}
</style>