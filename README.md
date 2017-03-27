

Allows to `require()` template source files directly from JavaScript,
letting Webpack compile them and put in the bundle.

## Installation

Install in your Webpack build directory with:
```
```

## Configuration

Modify `webpack.config.js` (or any other Webpack config file):

```
module.exports = {
  // ...
  module: {
    // ...
    loaders: [{
    }]
    // ...
  }
  // ...
}
```

## Usage

From JavaScript and React:
```
// === if it's a stateless component ===
const MyComponent = require("./my-component.tag.html");

// === if it's a stateful component ===
class MyComponent extends React.Component {
   render = require("./my-component.tag.html");
}

ReactDOM.render(React.createElement(MyComponent), document.body);
```

## How it works

When building the bundle, Webpack will intercept all `require()` with filenames

