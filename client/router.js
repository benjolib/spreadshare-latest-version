// @flow

import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/views/Index'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{ path: '/', component: Index }],
  })
}
