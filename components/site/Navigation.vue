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
  data() {
    return {
      links: [],
    }
  },
  computed: {
    navOpen() {
      return this.$store.state.navigation.navOpen
    },
  },
  mounted() {
    if (this.$router) {
      this.addListeners()
    }
  },

  beforeUnmount() {
    if (this.$router) {
      this.removeListeners()
    }
  },

  updated() {
    if (this.$router) {
      this.removeListeners()
      this.$nextTick(() => {
        this.addListeners()
      })
    }
  },
  methods: {
    getNavigation(nav) {
      let result

      result = '<ul>'
      for (const key in nav) {
        if (Object.prototype.hasOwnProperty.call(nav, key)) {
          result +=
            '<li><a href="/' +
            nav[key].Header_Link.cached_url +
            '">' +
            nav[key].display_name +
            '</a>'

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
    /**
     * Prevents default browser behavior (page reload) for relative links.
     * https://github.com/d-darwin/darwin-vue-ui/blob/main/src/mixins/linkClickRouting.js
     */
    navigate(event) {
      const href = event.target.getAttribute('href')
      const target = event.target.getAttribute('target')
      // TODO: add if it is the same domain check
      if (href && href[0] === '/' && target !== '_blank') {
        event.preventDefault()
        this.$router && this.$router.push(href)
      }
    },

    addListeners() {
      this.links = this.$el.getElementsByTagName('a')
      for (let i = 0; i < this.links.length; i++) {
        this.links[i].addEventListener('click', this.navigate, false)
      }
    },

    removeListeners() {
      for (let i = 0; i < this.links.length; i++) {
        this.links[i].removeEventListener('click', this.navigate, false)
      }
      this.links = []
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables/colors.scss';
@import 'assets/scss/variables/structure.scss';

nav ::v-deep {
  grid-row: 2;
  grid-column: 1 / span 2;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    ul {
      margin-left: 20px;
    }
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
}
</style>