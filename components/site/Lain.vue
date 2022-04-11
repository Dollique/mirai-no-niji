<template>
  <hr />
</template>

<style lang="scss" scoped>
hr {
  border: none;
  border-bottom: 1px $color-white solid;
  margin-top: 0px;
  height: 11px;
  width: 20px;

  &:before,
  &:after {
    content: '';

    display: block;
    height: 0px;
  }
  &:before {
    width: 20px;
    border-bottom: 1px $color-white solid;
    margin-top: 4px;
    margin-left: 15px;
  }
  &:after {
    width: calc(100vw - 9px - $gutter * 2);
    border-bottom: 1px $color-white solid;
    margin-top: 4px;
    margin-left: 9px;
  }
}
</style>