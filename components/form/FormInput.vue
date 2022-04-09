<template>
  <div>
    <label :for="`${blok.name}`">{{blok.name}}</label>
    <input :type="`${blok.type}`" :id="`${blok.name}`" :name="`${blok.name}`" />
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
