<template>
  <Nuxt />
</template>

<script>
export default {
  computed: {
    navOpen() {
      return this.$store.state.navigation.navOpen
    },
  },
  watch: {
    // watch for route change
    $route() {
      // set navigation toggle to false (close all navigation)
      this.$store.commit('navigation/close')
    },
    navOpen(store) {
      // console.log('navOpen() -> watching navOpen', store)
      document.querySelector('body').classList.remove('navOpen')
    },
  },
}
</script>
