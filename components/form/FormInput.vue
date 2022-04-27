<template>
  <div>
    <label :for="`${blok.name}`">{{blok.name}}</label>
    <input :type="`${blok.type}`" :id="`${blok.name}`" :name="`${blok.name}`" :v-model="`form.${blok.name}`" />
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
    data(){
      return {
        //inputs: this.$emit('update:inputs', this.blok.name),
        inputs: this.$emit('update:inputs', this.form),
        form: [],
      }
    },
    watch: {
      form: {
        handler() {
          console.log("UPDATING FORM")
          this.$emit('update:inputs', this.form)
        }
      }
    }
  }
</script>

<style scoped>

</style>
