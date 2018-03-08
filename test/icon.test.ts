import { shallow } from '@vue/test-utils'
import { Icon } from '../src/icon-builder'
import { expect } from 'chai'

import stubSvg from './svg-stub'

describe('Vue SVG Icons', () => {
  let component

  describe('default behavior', () => {
    beforeEach(() => {
      component = Icon(stubSvg)
    })

    it('links to the SVG sprite', () => {
      let wrapper = shallow(component)

      expect(wrapper.find('use').attributes().href).to.eq('#clipboard')
    })

    it('Uses the default scaling factor', () => {
      let wrapper = shallow(component)

      expect(wrapper.attributes().width).to.be.undefined
      expect(wrapper.attributes().height).to.be.undefined
    })

    it('Allows overriding with properties', () => {
      let wrapper = shallow(component, {
        propsData: {
          scale: 4
        }
      })

      expect(wrapper.attributes().width).to.eq('96')
      expect(wrapper.attributes().height).to.eq('96')
    })
  })

  describe('Scaling factor specified in loader options', () => {
    beforeEach(() => {
      component = Icon(stubSvg, 2)
    })

    it('Adds a scaling factor to the SVG', () => {
      let wrapper = shallow(component)

      expect(wrapper.attributes().width).to.eq('48')
      expect(wrapper.attributes().height).to.eq('48')
    })

    it('Allows overriding with properties', () => {
      let wrapper = shallow(component, {
        propsData: {
          scale: 4
        }
      })

      expect(wrapper.attributes().width).to.eq('96')
      expect(wrapper.attributes().height).to.eq('96')
    })
  })
})