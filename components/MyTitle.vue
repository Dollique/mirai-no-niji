<template>
  <div v-editable="blok" class="py-2">
    <h1>{{ blok.name }}</h1>
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