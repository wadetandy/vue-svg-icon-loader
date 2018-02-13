# Vue SVG Icon Loader for webpack

This is a webpack loader that turns SVG icons into directly-importable vuejs components.
You can import these and use them directly in your Vue applications:

```vue
<template>
  <div>
    <my-icon width='1.5em' height='1.5em'/>
  </div>
</template>

<script>
import MyIcon from './my-icon.svg'

export default {
  components: {
    MyIcon
  },
}
</script>
```

SVG attributes can be overridden with CSS or inline on the icon element in your template.
See the [example project](./examples/svg-sprite-loader/src/components/IconsDemo.vue) for
more usage examples.

### Caveats

This is currently a  simple loader that has only been designed to work in tandem
with the [`svg-sprite-loader`](https://github.com/kisenka/svg-sprite-loader) project. 
It should be fairly straighforward to make this work with other SVG loader patterns, but
it will probably not do that out of the box. I'm glad to work with anyone to improve the
number of use cases this works for!

## Getting Started

### Examples 

There is a sample Vue + Webpack project in the `examples/` directory that shows
how to use this in an application.

### Installation

```
yarn add vue-svg-icon-loader
```

or

```
npm install vue-svg-icon-loader
```

### Configuration

Create or update `webpack.config.js` like so:

``` javascript
  module.exports = {
    entry: './app.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        // ... other configured loaders
        { 
          test: /\.svg$/,
          use: [
            'vue-svg-icon-loader', 
            'svg-sprite-loader'
          ],
        }
      ]
    }
  }
```

#### Options

You an also provide options to the loader:

``` javascript
{
  test: /\.svg$/,
  use: [
    {
      loader: 'vue-svg-icon-loader',
      options: {
        defaultScale: number | undefined
      }
    }
    'svg-sprite-loader'
  ]
}
```

##### `defaultScale`

`default = undefined`

Setting this to an integer will multiply the SVG `viewBox` dimensions by this number in 
each component.  This can be overridden per component instnace by passing a `scale` prop.

## Contributing

I want you to help make this even better. Please feel free to contribute; if you have any
problems or feature suggestions, please open an issue on Github.

## License

MIT License
