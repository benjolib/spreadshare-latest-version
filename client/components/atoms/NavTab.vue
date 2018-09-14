<template>
  <nuxt-link
    :style="{ color: color, borderBottom: selector }"
    :class="[$style.navTab, $style.navSelector]"
    :to="link"
  >
    <img
      :alt="title"
      :src="image"
    >{{ title }}
  </nuxt-link>
</template>

<script>
// @flow

const transparentSelector = '3px solid transparent'
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '/',
    },
    color: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    selector: transparentSelector,
  }),
  watch: {
    $route(to) {
      this.changeSelector(to.path === this.link)
    },
  },
  mounted() {
    this.changeSelector(this.$route.path === this.link)
  },
  methods: {
    changeSelector(active: boolean) {
      if (active) {
        this.selector = '3px solid ' + this.color
      } else {
        this.selector = transparentSelector
      }
    },
  },
}
</script>

<style lang="scss" module>
@import '~/scss/index';

.navTab {
  @extend %font-button;

  display: inline-flex;
  align-items: center;
  height: 77px;
  padding: 24px 6px 22px;
  font-size: 0; /* stylelint-disable-line length-zero-no-unit */
  vertical-align: middle;

  @include mq(large-and-xlarge-devices) {
    font-size: 14px;
  }

  img {
    width: 20px;
    vertical-align: middle;
    @include mq(large-and-xlarge-devices) {
      margin-right: 12px;
    }
  }
}
</style>
