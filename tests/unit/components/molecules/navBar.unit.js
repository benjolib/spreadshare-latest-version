// @flow

import NavBar from '@molecules/NavBar'
import { shallowMount } from '@vue/test-utils'

describe('navBar', () => {
  const wrapper = shallowMount(NavBar)

  describe('unit tests', () => {
    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
      expect(wrapper.is(NavBar)).toBeTruthy()
    })

    test('should have feed tab', () => {
      const tabs = wrapper.findAll('navtab-stub')
      const tab = tabs.at(0)
      expect(tab.attributes().color).toBe('#ea612d')
      expect(tab.attributes().link).toBe('/feed')
      expect(tab.attributes().title).toBe('Feed')
      expect(tab.attributes().image).toBe('/header-feed-bird.svg')
      expect(tab.classes()).toContain('marginTabs')
    })

    test('should have explore tab', () => {
      const tabs = wrapper.findAll('navtab-stub')
      const tab = tabs.at(1)
      expect(tab.attributes().color).toBe('#2c247f')
      expect(tab.attributes().link).toBe('/')
      expect(tab.attributes().title).toBe('Explore')
      expect(tab.attributes().image).toBe('/header-explore-whale.svg')
      expect(tab.classes()).toContain('marginTabs')
    })

    test('should have collabs tab', () => {
      const tabs = wrapper.findAll('navtab-stub')
      const tab = tabs.at(2)
      expect(tab.attributes().color).toBe('#2860f5')
      expect(tab.attributes().link).toBe('/collabs')
      expect(tab.attributes().title).toBe('Collabs')
      expect(tab.attributes().image).toBe('/header-collabs-octopus.svg')
      expect(tab.classes()).toContain('marginTabs')
    })

    test('should have app logo', () => {
      const logo = wrapper.find('applogo-stub')
      expect(logo.classes()).toContain('marginLogo')
    })

    test('should have button login', () => {
      expect(wrapper.find('buttonlogin-stub').exists()).toBeTruthy()
    })
  })

  describe('snapshot tests', () => {
    test('should match the snapshot', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
