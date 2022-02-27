<template>
  <div class="main-wrapper grid">
    <Header />

    <Nuxt />

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style scoped>
@import 'assets/scss/imports/grid.scss';

.main-wrapper {
}
</style>