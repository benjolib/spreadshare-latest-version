---
to: "tests/unit/components/atoms/<%= h.inflection.camelize(name, true) %>.unit.js"
---
// @flow

<%
  const importName = h.inflection.camelize(name)
  const testName = h.inflection.camelize(name, true)
%>import <%= importName %> from '@atoms/<%= importName %>'
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
