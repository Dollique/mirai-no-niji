<template>
  <img
    v-editable="blok"
    :src="blok.src.filename"
    :class="`align-${blok.align}`"
  />
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
img {
  &.align {
    &-center {
      padding-left: $gutter;
      padding-right: $gutter;
    }
    &-left {
      padding-right: $gutter;
    }
    &-right {
      padding-left: $gutter;
    }
  }
}
</style>