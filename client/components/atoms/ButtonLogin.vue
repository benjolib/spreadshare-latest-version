<template>
  <nuxt-link
    :class="$style.login"
    to="/login"
  >
    <span>
      Join Us
      <span :class="$style.viaText">
        via
      </span>
    </span>
    <fa
      :class="$style.icon"
      :icon="faFacebook"
      size="xs"
    />
    <fa
      :class="$style.icon"
      :icon="faTwitter"
      size="sm"
    />
    <fa
      :class="$style.icon"
      :icon="faGoogle"
      size="xs"
    />
  </nuxt-link>
</template>

<script>
import {
  faFacebookF,
  faTwitter,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons'
export default {
  computed: {
    faFacebook: () => faFacebookF,
    faTwitter: () => faTwitter,
    faGoogle: () => faGoogle,
  },
}
</script>

<style lang="scss" module>
@import '@design';

.login {
  @extend %button;

  display: inline-flex;
  width: 110px;
  height: 48px;
  color: #fff !important;
  background: #2b60f5;
  border: none;
  box-shadow: none;

  @include mq(large-and-xlarge-devices) {
    width: 200px;
  }
}

.viaText {
  display: none;
  @include mq(large-and-xlarge-devices) {
    display: inline;
    margin-right: 8px;
    font-style: italic;
    font-weight: 100;
  }
}

.icon {
  display: none;
  margin: 0 4px;
  @include mq(large-and-xlarge-devices) {
    display: inline;
  }
}
</style>
