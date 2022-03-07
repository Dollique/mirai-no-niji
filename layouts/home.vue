<template>
  <div class="main-wrapper grid">
    <Header />

    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
  },
}
</script>

<style scoped>
@import 'assets/scss/imports/grid.scss';

.main-wrapper {
  background-color: red;
}
</style>