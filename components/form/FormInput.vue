<template>
  <div>
    {{blok}}
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

<style scoped>

</style>
