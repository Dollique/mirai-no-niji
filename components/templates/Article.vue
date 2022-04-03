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
  computed: {
    navOpen() {
      /* console.log('CHANGE BODY CLASS')
        document.body.classList.toggle('navOpen')
      */

      return this.$store.state.navigation.navOpen
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables/structure.scss';

.main-wrapper {
  position: relative;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-rows: auto 1fr auto;
}

h1,
div > p {
  @include addGutter;
}
</style>