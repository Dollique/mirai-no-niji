<template>
  <form v-editable="blok" class="form-section">
    <fieldset v-for="blok in blok.fields" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
    </fieldset>

    <fieldset>
      <button type="submit">Submit</button>
    </fieldset>
  </form>
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
