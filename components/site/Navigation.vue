<template>
  <nav :class="{ hidden: !navOpen }">
    <template v-if="blok">
      <template v-for="myblok in blok.globals">
        <div
          v-if="myblok.component === 'global_reference'"
          :key="myblok._uid"
          v-html="getNavigation(myblok.reference.content.Header_Navigation)"
        ></div>
      </template>
    </template>

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
    blok: {
      type: Object,
      required: false,
      default: () => undefined,
    },
  },
  computed: {
    navOpen() {
      return this.$store.state.navigation.navOpen
    },
  },
  methods: {
    getNavigation(nav) {
      let result

      result = '<ul>'
      for (const key in nav) {
        if (nav.hasOwnProperty(key)) {
          result += '<li><a>' + nav[key].display_name + '</a>'

          const myObject = nav[key]
          if (myObject.Sub_Category.length !== 0) {
            result += this.getNavigation(myObject.Sub_Category)
          }

          result += '</li>'
        }
      }
      result += '</ul>'

      return result
    },
  },
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