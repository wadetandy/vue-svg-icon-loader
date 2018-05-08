import { loader } from 'webpack'
import { getOptions, stringifyRequest } from 'loader-utils'
import { buildComponent, buildEsmComponent } from 'vue-svg-component-builder'

interface IOptions {
  defaultScale?: number
  esm?: boolean
}

const loader : loader.Loader = function(contents : string | Buffer) {
  const options : IOptions = getOptions(this)

  if(typeof contents !== 'string') {
    contents = contents.toString()
  }

  if (options.esm) {
    return buildEsmComponent(contents)
  } else {
    return buildComponent(contents)
  }
}

module.exports = loader
