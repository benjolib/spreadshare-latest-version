// @flow

import DefaultLayout from '~/layouts/default'
import { shallowMount } from '@vue/test-utils'

describe('defaultLayout', () => {
  const wrapper = shallowMount(DefaultLayout, {
    stubs: ['nuxt'],
  })

  describe('unit tests', () => {
    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
      expect(wrapper.is(DefaultLayout)).toBeTruthy()
    })

    test('should have app id', () => {
      const div = wrapper.find('div')
      expect(div.attributes().id).toBe('app')
    })

    test('should have navBar', () => {
      expect(wrapper.find('navbar-stub').exists()).toBeTruthy()
    })

    test('should have nuxt element', () => {
      const nuxt = wrapper.find('nuxt-stub')
      expect(nuxt.attributes().role).toBe('main')
      expect(nuxt.attributes()['nuxt-child-key']).toBe('none')
    })
  })

  describe('snapshot tests', () => {
    test('should match the snapshot', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
