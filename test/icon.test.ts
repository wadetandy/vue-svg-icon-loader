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

  describe('fill', () => {
    beforeEach(() => {
      component = Icon(stubSvg, 2)
    })

    it('has a default fill', () => {
      let wrapper = shallow(component)

      expect(wrapper.attributes().fill).to.eq('currentColor')
    })

    it('allows fill override', () => {
      let wrapper = shallow(component, {
        propsData: {
          'fill': 'foobarbaz'
        }
      })

      expect(wrapper.attributes().fill).to.eq('foobarbaz')
    })
  })

  describe('Slots', () => {
    it('Allows injecting additional content', () => {
      let wrapper = shallow(component, {
        slots: {
          default: `
            <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
              <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
            </linearGradient>
          `
        }
      })

      expect(wrapper.find('#myGradient').html()).to.exist
    })
  })
})