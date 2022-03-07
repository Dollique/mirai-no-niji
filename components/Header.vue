<template>
  <header class="grid grid-2col col-8">
    <h1 class="grid-2col__left">{{ myData.rels[0].content.site_title }}</h1>

    <aside class="grid-2col__right">
      <Burger />
      <Navigation />
    </aside>
  </header>
</template>

<script>
import Burger from '~/components/Burger.vue'

const apiURL = 'stories/home?version=draft&token=81s4Cor3H041sHeymtMDSgtt'
const getGlobals = '&resolve_relations=global_reference.reference'

const getData = 'https://api.storyblok.com/v2/cdn/' + apiURL + getGlobals

export default {
  components: {
    Burger,
  },
  data: () => ({
    myData: [],
  }),
  async fetch() {
    this.myData = await this.$axios.$get(getData)
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/grid.scss';
@import 'assets/scss/imports/headers.scss';
</style>
