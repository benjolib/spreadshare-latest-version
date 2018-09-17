// @Flow

import { shallowMount } from '@vue/test-utils'
import AppLogo from '@atoms/AppLogo'

describe('appLogo', () => {
  const wrapper = shallowMount(AppLogo, {
    stubs: ['nuxt-link'],
  })

  describe('unit tests', () => {
    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
      expect(wrapper.is(AppLogo)).toBeTruthy()
    })

    test('should have a nuxt-link pointing to /', () => {
      const link = wrapper.find('nuxt-link-stub')
      expect(link.attributes().to).toBe('/')
    })

    test('img should have a src as logo img', () => {
      const img = wrapper.find('img')
      expect(img.attributes().src).toBe('~assets/logo.svg')
    })

    test('img should have a alt as logo', () => {
      const img = wrapper.find('img')
      expect(img.attributes().alt).toBe('logo')
    })

    test('img should have a logo class', () => {
      const img = wrapper.find('img')
      expect(img.classes()).toContain('logo')
    })
  })

  describe('snapshot tests', () => {
    test('should match the snapshot', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
