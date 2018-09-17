// @Flow

import { shallowMount } from '@vue/test-utils'
import ButtonLogin from '@atoms/ButtonLogin'

describe('buttonLogin', () => {
  const wrapper = shallowMount(ButtonLogin, {
    stubs: ['nuxt-link', 'fa'],
  })

  describe('unit tests', () => {
    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
      expect(wrapper.is(ButtonLogin)).toBeTruthy()
    })

    test('should have a nuxt-link pointing to /login', () => {
      const link = wrapper.find('nuxt-link-stub')
      expect(link.attributes().to).toBe('/login')
    })

    test('link should have a login class', () => {
      const link = wrapper.find('nuxt-link-stub')
      expect(link.classes()).toContain('login')
    })

    test('link should have proper text', () => {
      const spans = wrapper.findAll('span')

      const spanOuter = spans.at(0)
      expect(spanOuter.text()).toContain('Join Us')

      const spanInner = spans.at(1)
      expect(spanInner.text()).toContain('via')
      expect(spanInner.classes()).toContain('viaText')
    })

    test('should have a facebook icon', () => {
      const cmp = shallowMount(ButtonLogin, {
        stubs: ['nuxt-link', 'fa'],
        computed: {
          faFacebook: () => 'fbIcon',
        },
      })
      const icons = cmp.findAll('fa-stub')
      const fbIcon = icons.at(0)
      expect(fbIcon.attributes().size).toEqual('xs')
      expect(fbIcon.attributes().icon).toEqual('fbIcon')
      expect(fbIcon.classes()).toContain('icon')
    })

    test('should have a twitter icon', () => {
      const cmp = shallowMount(ButtonLogin, {
        stubs: ['nuxt-link', 'fa'],
        computed: {
          faTwitter: () => 'twitterIcon',
        },
      })
      const icons = cmp.findAll('fa-stub')
      const fbIcon = icons.at(1)
      expect(fbIcon.attributes().size).toEqual('sm')
      expect(fbIcon.attributes().icon).toEqual('twitterIcon')
      expect(fbIcon.classes()).toContain('icon')
    })

    test('should have a google icon', () => {
      const cmp = shallowMount(ButtonLogin, {
        stubs: ['nuxt-link', 'fa'],
        computed: {
          faGoogle: () => 'googleIcon',
        },
      })
      const icons = cmp.findAll('fa-stub')
      const fbIcon = icons.at(2)
      expect(fbIcon.attributes().size).toEqual('xs')
      expect(fbIcon.attributes().icon).toEqual('googleIcon')
      expect(fbIcon.classes()).toContain('icon')
    })
  })

  describe('snapshot tests', () => {
    test('should match the snapshot', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
