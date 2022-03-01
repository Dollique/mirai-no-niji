<template>
  <ul v-editable="blok" class="">
    <li v-for="blok in blok.columns" :key="blok._uid" class="">
      <component :is="blok.component" :blok="blok" />
    </li>
  </ul>
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