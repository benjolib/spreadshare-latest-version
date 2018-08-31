<template>
  <div :class="$style.logo">
    <h1>
      <a href="https://github.com/wemake-services/wemake-vue-template">
        Spreadshare Boilerplate
      </a>
    </h1>
  </div>
</template>

<style lang="scss" module>
@import '~/scss/variables';
@import '~/scss/mixins';

.logo {
  @include centered();

  a,
  a:visited,
  a:active {
    color: $color-black;
  }
}
</style>
