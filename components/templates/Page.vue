<template>
  <div
    class="main-wrapper"
    :data-bg-image-desktop="blok.bg_image_desktop['filename']"
    :data-bg-image-mobile="blok.bg_image_mobile['filename']"
  >
    <style>
      :root {
        --bg-image-desktop: url('{{ blok.bg_image_desktop.filename }}');
        --bg-image-mobile: url('{{ blok.bg_image_mobile.filename }}');
      }
    </style>
    <Header :blok="blok.body" :showNav="false" />

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
@import 'assets/scss/mixins.scss';
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

.main-wrapper {
  background-size: cover;
}

[data-bg-image-mobile] {
  background-image: var(--bg-image-mobile);
}

@include for-desktop-up {
  [data-bg-image-desktop] {
    background-image: var(--bg-image-desktop);
  }
}
</style> 