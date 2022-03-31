<template>
  <Nuxt />
</template>

<script>
export default {
  watch: {
    // watch for route change
    $route() {
      // set navigation toggle to false (close all navigation)
      this.$store.commit('navigation/toggle', false)
    },
  },
}
</script>
