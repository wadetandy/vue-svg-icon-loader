# Vue SVG Icon Loader for webpack

This is the Vuejs SVG Icon loader for webpack.

## Getting Started

### Caveats

This is currently a very simple loader that has only been designed to work in tandem
with the [`svg-sprite-loader`](https://github.com/kisenka/svg-sprite-loader) project. 
It should be fairly straighforward to make this work with other SVG loader patterns, but
it will probably not do that out of the box. I'm glad to work with anyone to improve the
number of use cases this works for!

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

1. Create or update `webpack.config.js` like so:

    ```javascript
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
              'vue-svg-sprite-loader', 
              'svg-sprite-loader'
            ]
          }
        ]
      }
    }
    ```

## Contributing

We want you to help make this even better. Please feel free to contribute; if you have any
problems or feature suggestions, please open an issue on Github.

## License

MIT License
