<template>
  <header class="grid grid-2col col-8">
    <h1 class="grid-2col__left">
      {{ blok[2].reference.content.site_title }}
    </h1>

    <aside v-if="showNav" class="grid-2col__right">
      <Burger />
      <Navigation />
    </aside>
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
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/grid.scss';
@import 'assets/scss/imports/headers.scss';
</style>
