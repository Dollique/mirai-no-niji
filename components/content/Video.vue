<template>
  <video mute autoplay loop controls>
    <source :src="blok.video_webm.filename" type="video/webm" />
    <source :src="blok.video_mp4.filename" type="video/mp4" />
  </video>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    // var example = '//a.storyblok.com/f/39898/bd04dbf53c/amp_blog.jpg'
    // console.log(this.resize(example, '500x500'))
  },
}
</script>

<style lang="scss" scoped>
video {
  width: 100%;
}
</style>
