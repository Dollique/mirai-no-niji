<template>
  <div class="main-wrapper grid">
    <Header :blok="blok" />

    <main v-editable="blok">
      <h1>{{ blok.title }}</h1>

      <rich-text-renderer v-if="blok.body" :document="blok.body" />

      <div v-if="blok.link_prev">
        <pre>{{ blok.link_prev }}</pre>
        <nuxt-link :to="blok.link_prev.cached_url">{{
          blok.link_prev.cached_url
        }}</nuxt-link>
      </div>

      <div v-if="blok.link_next">
        <pre>{{ blok.link_next }}</pre>
        <nuxt-link :to="blok.link_next.cached_url">{{
          blok.link_next.cached_url
        }}</nuxt-link>
      </div>
    </main>

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
      return this.$store.state.navigation.navOpen
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables/structure.scss';
@import 'assets/scss/imports/headers.scss';
@import 'assets/scss/imports/grid.scss';

.main-wrapper {
  position: relative;
  height: 100%;
  width: 100%;

  grid-template-rows: auto 1fr auto;
}

main ::v-deep {
  h1,
  p {
    @include addGutter;
  }

  h1 {
    padding-bottom: 55px;
  }

  p {
    padding-bottom: 20px;

    &:last-child {
      padding-bottom: 0;
    }
  }

  img {
    width: 100%;
  }
}
</style>