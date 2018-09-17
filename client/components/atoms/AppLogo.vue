<template>
  <nuxt-link
    to="/"
  >
    <img
      :class="$style.logo"
      src="~assets/logo.svg"
      alt="logo"
    >
  </nuxt-link>
</template>

<style lang="scss" module>
@import '@design';

.logo {
  display: inline-block;
  width: $size-logo;
  vertical-align: middle;
}
</style>
