<template>
  <section
    v-editable="blok"
    class="page"
    :data-bg-image-desktop="blok.bg_image_desktop"
    :data-bg-image-mobile="blok.bg_image_mobile"
  >
    <h1>Welcome to the Future</h1>

    <component
      :is="blok.component"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </section>
</template>

<script>
export default {
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

h1 {
  text-align: center;
  width: 100%;
}

section {
}
</style>
