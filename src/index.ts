import * as webpack from 'webpack'
import { getOptions, stringifyRequest } from 'loader-utils'
import { resolve } from 'path'

interface IOptions {
  defaultScale?: number
}

const loader : webpack.loader.Loader = function(contents : string | Buffer) {
  const options : IOptions = getOptions(this)
}

loader.pitch = function(this: webpack.loader.LoaderContext, remainingRequest : string) {
  const options : IOptions = getOptions(this) || { defaultScale: 1 }
  const { defaultScale } = options
  const requireString = stringifyRequest(this, "!!" + remainingRequest)
  const builderPath = resolve(__dirname, './icon-builder')

  return `
    const svg = require(${requireString}).default
    const { Icon } = require('${builderPath}')

    export default Icon(svg, ${defaultScale + ''})
  `
}

module.exports = loader
