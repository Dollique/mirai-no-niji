<template>
  <div v-editable="blok">
    <a :href="blok.href['cached_url']" :class="blok.class">{{ blok.title }}</a>
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