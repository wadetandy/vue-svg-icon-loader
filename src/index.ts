import * as webpack from 'webpack'
import { getOptions, stringifyRequest } from 'loader-utils'

const loader : webpack.loader.Loader = function(contents : string | Buffer) {
  const options = getOptions(this)
}

loader.pitch = function(this: webpack.loader.LoaderContext, remainingRequest : string) {
  const requireString = stringifyRequest(this, "!!" + remainingRequest)

  return `
    const Icon = require(${requireString}).default

    export default {
      name: 'TestIcon',
      props: {
        scale: {
        type: Number,
          default: 1
        }
      },
      data() {
        return {
          glyph: Icon
        }
      },
      render: function(h) {
        return h(
          'svg', { 
            attrs: {
              'aria-hidden': 'true',
              fill: 'currentColor',
              height: this.dimension,
              width: this.dimension,
            },
          }, [
            h('use', {
              attrs: {
                'xlink:href': "#" + this.glyph.id
              }
            }, [])
          ]
        ) 
      },
      computed: {
        dimension() {
          return parseInt(this.glyph.viewBox.split(" ")[2]) * Math.floor(this.scale)
        }
      }
    }
  `
}

module.exports = loader
