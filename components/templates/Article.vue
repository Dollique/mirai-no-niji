<template>
  <div class="main-wrapper">
    <Header :blok="blok" />

    <div v-editable="blok">
      <h1>{{ blok.title }}</h1>

      <rich-text-renderer :document="blok.body" />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/site/Header.vue'
import Footer from '~/components/site/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  props: {
    blok: {
      type: Object,

      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables/structure.scss';

.main-wrapper {
  position: relative;
  margin: 0 $gutter;
  width: calc(100% - $gutter * 2);
}
</style>