<template>
  <div class="menu btn1" @click="menuClick">
    <div class="icon-left"></div>
    <div class="icon-right"></div>
  </div>
</template>

<script>
export default {
  methods: {
    menuClick() {
      this.$el.classList.toggle('open')
    },
  },
}
</script>

<style lang="scss" scoped>
$burger-height: 6px;
$burger-width: 25px;
$burger-width__center: 15px;
$space: 15px;

@mixin btn($right, $top) {
  //position: absolute;
  width: 50px;
  height: 50px;
  top: $top;
  right: $right;
  transition-duration: 0.5s;

  display: flex;
}

@mixin icon($height, $width) {
  transition-duration: 0.5s;
  //position: absolute;
  height: $height;
  width: $burger-width__center;
  //top: 30px;
  transform: translateY(30px);
  background-color: $color-white;
}

@mixin icon-before($height, $width, $top) {
  transition-duration: 0.5s;
  position: absolute;
  width: $width;
  height: $height;
  background-color: $color-white;
  content: '';
  top: $top;
  //transform: translateY($top);
}

@mixin icon-after($height, $width, $top) {
  transition-duration: 0.5s;
  position: absolute;
  width: $width;
  height: $height;
  background-color: $color-white;
  content: '';
  top: $top;
  //transform: translateY($top);
}

.btn1 {
  @include btn(0px, 0px);

  .icon-left {
    @include icon($burger-height, $burger-width);
    left: 0px;

    &:before {
      @include icon-before($burger-height, $burger-width, -$space);
    }

    &:after {
      @include icon-after($burger-height, $burger-width, $space);
    }

    &:hover {
      cursor: pointer;
    }
  }

  .icon-right {
    @include icon($burger-height, $burger-width);
    left: 30px;

    &:before {
      @include icon-before($burger-height, $burger-width, -$space);
    }

    &:after {
      @include icon-after($burger-height, $burger-width, $space);
    }
  }

  &.open {
    .icon-left {
      transition-duration: 0.5s;
      background: transparent;

      &:before {
        transform: rotateZ(45deg) scaleX(1.4) translate(4px, 4px);
      }

      &:after {
        transform: rotateZ(-45deg) scaleX(1.4) translate(4px, -4px);
      }
    }

    .icon-right {
      transition-duration: 0.5s;
      background: transparent;

      &:before {
        transform: rotateZ(-45deg) scaleX(1.4) translate(-4px, 4px);
      }

      &:after {
        transform: rotateZ(45deg) scaleX(1.4) translate(-4px, -4px);
      }
    }
  }
  &:hover {
    cursor: pointer;
  }
}
</style>