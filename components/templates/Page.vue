<template>
  <div
    class="main-wrapper"
    :class="routeClass"
    :data-bg-image-desktop="blok.bg_image_desktop['filename']"
    :data-bg-image-mobile="blok.bg_image_mobile['filename']"
  >
    <style>
      :root {
        --bg-image-desktop: url('{{ blok.bg_image_desktop.filename }}');
        --bg-image-mobile: url('{{ blok.bg_image_mobile.filename }}');
      }
    </style>
    <Header :blok="blok" :showNav="false" />

    <section v-editable="blok" class="page flex">
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
  data: () => ({
    routeClass: '',
  }),
  fetch() {
    let getRouteClass
    if (typeof this.$nuxt.$route.params.slug !== 'undefined') {
      getRouteClass = this.$nuxt.$route.params.slug
    } else {
      getRouteClass = 'home'
    }

    this.routeClass = 'route__' + getRouteClass
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

.main-wrapper {
  min-height: 100%;

  display: grid;
  grid-template-rows: minmax(100px, auto) 1fr;
}

.main-wrapper {
  background-size: cover;
}

.route__home .page {
  position: absolute;
  height: 100vh;
  width: 100%;
}

.page {
  flex-direction: column;
  justify-content: center;
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