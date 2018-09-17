// @flow

import { shallowMount, createLocalVue } from '@vue/test-utils'
import NavTab from '@atoms/NavTab'
import VueRouter from 'vue-router'

const mountTab = (propsData, route = '/') => {
  const router = new VueRouter()
  router.push({ path: route })
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  return {
    comp: shallowMount(NavTab, {
      stubs: ['nuxt-link'],
      propsData,
      localVue,
      router,
    }),
    router,
  }
}

describe('navTab', () => {
  describe('unit tests', () => {
    test('is a Vue instance', () => {
      const props = {
        title: 'some value',
        image: 'someImage',
        link: '/explore',
      }
      const comp = mountTab(props).comp
      expect(comp.isVueInstance()).toBeTruthy()
      expect(comp.is(NavTab)).toBeTruthy()
    })

    test('color should be same as prop color', () => {
      const props = {
        title: 'some value',
        image: 'someImage',
        color: '#edf34d',
      }
      const comp = mountTab(props).comp
      const link = comp.find('nuxt-link-stub')
      expect(link.attributes().style).toContain('color: rgb(237, 243, 77)')
    })

    test('link should be same as link provided', () => {
      const props = {
        title: 'some value',
        image: 'someImage',
        link: '/feed',
      }
      const comp = mountTab(props).comp
      const link = comp.find('nuxt-link-stub')
      expect(link.attributes().to).toBe('/feed')
    })

    test('title should have the provided title', () => {
      const props = {
        title: 'some title',
        image: 'someImage',
        link: '/feed',
      }
      const comp = mountTab(props).comp
      const link = comp.find('nuxt-link-stub')
      expect(link.attributes().to).toBe('/feed')
    })

    test('nuxt-link should have navTab class', () => {
      const props = {
        title: 'some value',
        image: 'someImage',
      }
      const comp = mountTab(props).comp
      const link = comp.find('nuxt-link-stub')
      expect(link.classes()).toContain('navTab')
    })

    describe('selected border', () => {
      test('should be enabled if link is same as route path', () => {
        const props = {
          title: 'some value',
          image: 'someImage',
          link: '/feed',
        }
        const comp = mountTab(props, '/feed').comp
        const link = comp.find('nuxt-link-stub')

        expect(link.attributes().style).toContain(
          'border-bottom: 3px solid #333;'
        )
      })

      test('should be disabled if link is not same as route path', () => {
        const props = {
          title: 'some value',
          image: 'someImage',
          link: '/explore',
        }
        const comp = mountTab(props, '/feed').comp
        const link = comp.find('nuxt-link-stub')

        expect(link.attributes().style).toContain(
          'border-bottom: 3px solid transparent;'
        )
      })

      test('should get enabled if link matches route path', () => {
        const props = {
          title: 'some value',
          image: 'someImage',
          link: '/explore',
        }
        const mount = mountTab(props, '/feed')
        const link = mount.comp.find('nuxt-link-stub')

        expect(link.attributes().style).toContain(
          'border-bottom: 3px solid transparent;'
        )

        mount.router.push({ path: '/explore' })

        expect(link.attributes().style).toContain(
          'border-bottom: 3px solid #333;'
        )
      })

      test('should get disabled if link does not matches route path any more', () => {
        const props = {
          title: 'some value',
          image: 'someImage',
          link: '/explore',
          color: '#edf34d',
        }
        const mount = mountTab(props, '/explore')
        const link = mount.comp.find('nuxt-link-stub')

        expect(link.attributes().style).toContain(
          'border-bottom: 3px solid #edf34d;'
        )

        mount.router.push({ path: '/feed' })

        expect(link.attributes().style).toContain(
          'border-bottom: 3px solid transparent;'
        )
      })
    })

    describe('image', () => {
      test('should have a given src', () => {
        const props = {
          title: 'some value',
          image: 'someImage',
          link: '/feed',
        }
        const comp = mountTab(props).comp
        const link = comp.find('img')
        expect(link.attributes().src).toBe('someImage')
      })

      test('should have title as alt', () => {
        const props = {
          title: 'some title',
          image: 'someImage',
          link: '/feed',
        }
        const comp = mountTab(props).comp
        const link = comp.find('img')
        expect(link.attributes().alt).toBe('some title')
      })
    })
  })

  describe('snapshot tests', () => {
    test('should have bottom selector as transperent if route does not matches link on first mount', () => {
      const props = {
        title: 'some value',
        image: 'someImage',
        link: '/explore',
      }
      const comp = mountTab(props, '/feed').comp
      expect(comp.element).toMatchSnapshot()
    })

    test('should have bottom selector if route matches link on first mount', () => {
      const props = {
        title: 'some value',
        image: 'someImage',
        link: '/explore',
      }
      const comp = mountTab(props, '/explore').comp
      expect(comp.element).toMatchSnapshot()
    })
  })
})
