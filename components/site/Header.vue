<template>
  <header class="grid grid-2col col-8" :class="{ navOpen }">
    <template v-if="blok">
      <template v-for="myblok in blok.globals">
        <h1
          v-if="myblok.component === 'global_reference'"
          :key="myblok._uid"
          class="grid-2col__left"
        >
          <nuxt-link to="/">{{
            myblok.reference.content.site_title
          }}</nuxt-link>
        </h1>
      </template>
    </template>

    <aside v-if="showNav" class="grid-2col__right">
      <Burger />
    </aside>

    <Navigation :blok="blok" />
  </header>
</template>

<script>
import Burger from '~/components/site/Burger.vue'
import Navigation from '~/components/site/Navigation.vue'

export default {
  components: {
    Burger,
    Navigation,
  },
  props: {
    showNav: {
      required: false,
      type: Boolean,
      default: true,
    },
    blok: {
      type: Object,
      required: false,
      default: () => undefined,
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
@import 'assets/scss/imports/grid.scss';
@import 'assets/scss/imports/headers.scss';

header {
}

h1 {
  margin-top: 20px;
}

a {
  text-decoration: none;
}

.navOpen {
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;

  grid-auto-rows: minmax(100px, auto) 1fr;

  background-color: $color-primary;

  aside {
  }
}
</style>
