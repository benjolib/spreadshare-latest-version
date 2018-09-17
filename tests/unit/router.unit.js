import { createRouter } from '../../client/router'
import Router from 'vue-router'
import Index from '~/views/Index'

describe('router', () => {
  test('should be a vue-router instance', () => {
    const router = createRouter()
    expect(router).toBeInstanceOf(Router)
  })

  test('should have history mode', () => {
    const router = createRouter()
    expect(router.options.mode).toEqual('history')
  })

  test('should have home route pointed to index', () => {
    const router = createRouter()
    expect(router.options.routes).toContainEqual({
      path: '/',
      component: Index,
    })
  })
})
