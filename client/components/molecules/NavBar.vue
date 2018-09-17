<template>
  <div>
    <nav :class="$style.nav">
      <div :class="$style.navContent">
        <div>

          <app-logo :class="$style.marginLogo" />
          <nav-tab
            :class="$style.marginTabs"
            title="Feed"
            image="/header-feed-bird.svg"
            link="/feed"
            color="#ea612d"
          />
          <nav-tab
            :class="$style.marginTabs"
            title="Explore"
            image="/header-explore-whale.svg"
            link="/"
            color="#2c247f"
          />
          <nav-tab
            :class="$style.marginTabs"
            title="Collabs"
            image="/header-collabs-octopus.svg"
            link="/collabs"
            color="#2860f5"
          />
        </div>
        <div>
          <button-login />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// @flow

import AppLogo from '@atoms/AppLogo'
import NavTab from '@atoms/NavTab'
import ButtonLogin from '@atoms/ButtonLogin'

export default {
  components: { AppLogo, NavTab, ButtonLogin },
}
</script>

<style lang="scss" module>
@import '@design';

.nav {
  position: fixed;
  top: 0; /* stylelint-disable-line length-zero-no-unit */
  left: 0; /* stylelint-disable-line length-zero-no-unit */
  z-index: 999;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 78px;
  background: $color-navbar-bg;
  border-bottom: 1px solid rgb(228, 228, 228);

  .navContent {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1260px;
    padding: 0 12px;

    @include mq(large-and-xlarge-devices) {
      padding: 0 24px;
    }
  }
}

.marginLogo {
  margin-right: 36px;
}

.marginTabs {
  margin-right: 8px;
  @include mq(large-and-xlarge-devices) {
    margin-right: 24px;
  }
}
</style>
