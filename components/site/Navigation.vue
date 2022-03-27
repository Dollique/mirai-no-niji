<template>
  <nav :class="{ hidden: !menuOpen }">
    <ul>
      <li>
        <nuxt-link class="" to="/"> Home </nuxt-link>
      </li>

      <li>
        <nuxt-link class="" to="/en/blog"> Blog </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menuOpen: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables/colors.scss';
@import 'assets/scss/variables/structure.scss';

nav {
  grid-row: 2;
  grid-column: 1 / span 2;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
}
a {
  display: block;
  border-bottom: 1px $color-white solid;
  font-size: $h2;
  text-decoration: none;
  padding: 15px 0;

  &:hover {
    background-color: $color-hover;
  }
}
</style>