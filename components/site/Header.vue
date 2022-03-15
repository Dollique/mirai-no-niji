<template>
  <header class="grid grid-2col col-8">
    <template v-if="blok">
      <template v-for="myblok in blok.globals">
        <h1
          v-if="myblok.component === 'global_reference'"
          :key="myblok._uid"
          class="grid-2col__left"
        >
          {{ myblok.reference.content.site_title }}
        </h1>
      </template>
    </template>

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
      required: false,
      default: () => undefined,
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/grid.scss';
@import 'assets/scss/imports/headers.scss';
</style>
