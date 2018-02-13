import { CreateElement } from 'vue'

interface ISvg {
  id: string,
  viewBox: string,
}

interface IDimensions {
  height: number,
  width: number,
}

interface IComponent {
  scale: number | undefined
  glyph: ISvg
  dimension: IDimensions
}

export const Icon = function(svg : ISvg, defaultScale : number | undefined) {
  return {
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
      dimension(this: IComponent) : IDimensions | {} {
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
    render(this: IComponent, h: CreateElement) {
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
  } 
}