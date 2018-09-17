<template>
  <div id="app">
    <nav-bar />
    <nuxt
      nuxt-child-key="none"
      role="main"
    />
  </div>
</template>

<script>
// @flow

import NavBar from '~/components/molecules/NavBar'

export default {
  components: { NavBar },
}
</script>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss" module>
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selector-class-pattern

// Design variables and utilities from src/design.
@import '@design';

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  min-width: 320px;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  font-family: $system-default-font-family;
  font-size: $system-default-font-size;
  color: $color-text;
  background-color: $color-body-bg;
}

#app {
  @extend %typography-small;
}

// ===
// Base element styles
// ===

a {
  text-decoration: none;
}

h1 {
  @extend %typography-xxlarge;
}

h2 {
  @extend %typography-xlarge;
}

h3 {
  @extend %typography-large;
}

h4 {
  @extend %typography-medium;
}

h5,
h6 {
  @extend %typography-small;
}
</style>
