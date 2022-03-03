<template>
  <div v-editable="blok" class="">
    <h1>{{ blok.title }}</h1>

    <rich-text-renderer :document="blok.body" />
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