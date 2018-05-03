import * as webpack from 'webpack'
import { getOptions, stringifyRequest } from 'loader-utils'
import { resolve } from 'path'
import { build } from 'vue-svg-component-builder'
import { compile, ASTElement, ASTNode } from 'vue-template-compiler'

interface IOptions {
  defaultScale?: number
}

const isElementNode = (node : ASTNode) : node is ASTElement => {
  return node.hasOwnProperty('children')
}

type MinifiedASTNode = { text: string } | MinifedASTElement

interface MinifedASTElement {
  tag: string,
  attrsMap: Record<string, string>
  children: MinifiedASTNode[]
}

/*
 * We don't really use much of the final AST output in building our icons, so let's
 * avoid the need to ouput the whole thing to the final bundle.
 */
function minifyAst(node: ASTNode) : MinifiedASTNode {
  if (!isElementNode(node)) {
    return {
      text: node.text
    }
  }

  delete node.parent

  let children = node.children.map(element => {
    return minifyAst(element)
  })

  let output = {
    tag: node.tag,
    attrsMap: node.attrsMap,
    children
  }

  return output
}

const loader : webpack.loader.Loader = function(contents : string | Buffer) {
  const options : IOptions = getOptions(this)

  if(typeof contents !== 'string') {
    contents = contents.toString()
  }

  const compiledSvg = compile(contents)
  if (compiledSvg.ast === undefined) {
    let errorMsg = 'Unknown Error'

    if(compiledSvg.errors.length > 0) {
      errorMsg = compiledSvg.errors.join(', ')
    }

    throw new Error(`There were one or more problems building the AST for the requested SVG: ${errorMsg}`)
  }

  const ast = minifyAst(compiledSvg.ast)

  return `
    var builder = require('vue-svg-component-builder')
    module.exports = {
      __esModule: true,
      default: builder.build(${JSON.stringify(ast, null, 2)})
    }
  `
}

module.exports = loader
