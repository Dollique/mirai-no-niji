<template>
  <div v-if="blok.quote" :class="`align-${blok.align}`" class="quote-wrapper">
    <blockquote>
      {{ blok.quote }}
    </blockquote>

    <img
      v-editable="blok"
      :src="blok.src.filename"
      :class="`align-${blok.align}`"
    />
  </div>

  <img
    v-else
    v-editable="blok"
    :src="blok.src.filename"
    :class="`align-${blok.align}`"
  />
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