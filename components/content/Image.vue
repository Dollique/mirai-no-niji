<template>
  <div v-if="blok.quote" :class="`align-${blok.align}`" class="quote-wrapper">
    <blockquote>
      {{ blok.quote }}
    </blockquote>

    <img
      v-editable="blok"
      :src="blok.src.filename"
      :srcset="`${resize(blok.src.filename, '480x0')} 480w,
              ${resize(blok.src.filename, '800x0')} 800w,
              ${resize(blok.src.filename, '1200x0')} 1200w
              `"
      :class="`align-${blok.align}`"
    />
  </div>

  <img
    v-else
    v-editable="blok"
    :src="blok.src.filename"
    :srcset="`${resize(blok.src.filename, '480x0')} 480w,
              ${resize(blok.src.filename, '800x0')} 800w,
              ${resize(blok.src.filename, '1200x0')} 1200w
              `"
    :class="`align-${blok.align}`"
  >
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      image: {
        backgroundImage: `url(${this.blok.src.filename})`,
      },
    }
  },
  methods: {
    resize(image, option) {
      let imageService = '//img2.storyblok.com/'
      let path = image.replace('https://a.storyblok.com', '') // -> /f/148502/718x112/769dd796c1/mind-control1_mobile.jpg

      return imageService + option + path // -> //img2.storyblok.com//400x100/f/148502/718x112/769dd796c1/mind-control1_mobile.jpg
    }
  },
  mounted() {
    // var example = '//a.storyblok.com/f/39898/bd04dbf53c/amp_blog.jpg'
    // console.log(this.resize(example, '500x500'))
  }
}
</script>

<style lang="scss" scoped>
img,
.quote-wrapper {
  &.align {
    &-center {
      padding-left: $gutter;
      padding-right: $gutter;
    }
    &-left {
      padding-right: $gutter;
    }
    &-right {
      padding-left: $gutter;
    }
  }
}

.quote-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    filter: blur(5px);
    -webkit-filter: blur(5px);

    z-index: -1;
  }
  blockquote {
    min-height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    padding: 10vw;
    text-transform: uppercase;

    @include fontSize(0.8rem, 2.5vw);
  }
}
</style>
