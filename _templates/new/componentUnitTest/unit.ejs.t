---
to: "tests/unit/components/<%= type === 'Atom' ? 'atoms' : 'molecules' %>/<%= h.inflection.camelize(name, true) %>.unit.js"
---
// @flow

<%
  const importAlias = type === 'Atom' ? '@atoms' : '@molecules'
  const importName = h.inflection.camelize(name)
  const testName = h.inflection.camelize(name, true)
%>import <%= importName %> from '<%= importAlias %>/<%= importName %>'
import { shallowMount } from '@vue/test-utils'

describe('<%= testName %>', () => {
  const wrapper = shallowMount(<%= importName %>)

  describe('unit tests', () => {
    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
      expect(wrapper.is(<%= importName %>)).toBeTruthy()
    })
  })

  describe('snapshot tests', () => {
    test('should match the snapshot', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
