import Vue from 'vue'

interface ISvg {
  id: string,
  viewBox: string,
}

interface IDimensions {
  height: number,
  width: number,
}

export const Icon = function(svg : ISvg, defaultScale : number | undefined) {
  return Vue.extend({
    props: {
      scale: {
        type: Number,
        default: defaultScale,
        required: false,
      }
    },
    data() {
      return {
        glyph: svg
      }
    },
    computed: {
      dimension() : IDimensions | {} {
        if (!this.scale) {
          return {}
        }

        let splits = this.glyph.viewBox.split(" ")
        let scale = Math.floor(this.scale)

        return {
          height: parseInt(splits[2]) * scale,
          width: parseInt(splits[3]) * scale,
        }
      }
    },
    render(this: any, h) {
      let svgAttrs : Record<string, number | string> = {
        'aria-hidden': 'true',
        fill: 'currentColor',
      }

      Object.assign(svgAttrs, this.dimension)

      return h(
        'svg', 
        { 
          attrs: svgAttrs,
        }, [
        h(
          'use', 
          {
            attrs: {
              'xlink:href': "#" + this.glyph.id
            }
          }, 
          []
        )]
      ) 
    },
  })
}