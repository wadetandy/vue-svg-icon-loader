# Vue SVG Icon Loader for webpack

This is the Vuejs SVG Icon loader for webpack.

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
