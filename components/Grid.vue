<template>
  <div
    v-editable="blok"
    class="grid-wrapper"
    :data-image-desktop="blok.image_desktop.filename"
    :data-image-mobile="blok.image_mobile.filename"
  >
    <div v-for="blok in blok.columns" :key="blok._uid" class="">
      <component :is="blok.component" :blok="blok" />
    </div>
  </div>
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