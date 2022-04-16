<template>
  <rich-text-renderer v-if="blok.body" :document="blok.body" />
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