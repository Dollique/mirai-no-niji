<template>
  <header class="grid grid-2col col-8">
    <h1 class="grid-2col__left">Mirai-No-Niji</h1>

    <aside class="grid-2col__right">
      <Burger />
      <Navigation />
    </aside>
  </header>
</template>

<script>
import Burger from '~/components/Burger.vue'

export default {
  components: {
    Burger,
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/imports/grid.scss';
@import 'assets/scss/imports/headers.scss';
</style>
