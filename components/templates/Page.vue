<template>
  <div
    class="main-wrapper"
    :data-bg-image-desktop="blok.bg_image_desktop"
    :data-bg-image-mobile="blok.bg_image_mobile"
  >
    <Header :showNav="false" />

    <section v-editable="blok" class="page grid">
      <component
        :is="blok.component"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      />
    </section>
  </div>
</template>

<script>
import Header from '~/components/site/Header.vue'

export default {
  components: {
    Header,
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
@import 'assets/scss/imports/headers.scss';
@import 'assets/scss/imports/grid.scss';

h1 {
  text-align: center;
  width: 100%;
}

section {
}

.main-wrapper {
  height: 100%;
}
</style>