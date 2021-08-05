# @chronotruck/yaml-loader

YAML loader for [Webpack](https://webpack.js.org/). Allows importing YAML files as JS objects. Uses [`yaml`](https://www.npmjs.com/package/yaml) internally.

## Installation

```sh
npm install --save-dev @chronotruck/yaml-loader
```

## Usage

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        use: '@chronotruck/yaml-loader'
      }
    ]
  }
}
```

```yaml
# file.yaml
---
config:
  js:
    key: test
hello: world
```

```js
// application.js
import file from './file.yaml'

file.hello === 'world'
```

## License

Forked from https://github.com/eemeli/yaml-loader and simplified for our own specific case.

[MIT](http://www.opensource.org/licenses/mit-license.php)
