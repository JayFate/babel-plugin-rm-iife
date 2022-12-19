# @babel/plugin-rm-iife [![Build Status](https://travis-ci.org/JayFate/@babel/plugin-rm-iife.svg?branch=master)](https://travis-ci.org/JayFate/@babel/plugin-rm-iife)

> Wrap file with iife.


## Install

With [npm](https://npmjs.org/package/@babel/plugin-rm-iife) do:
****
```bash
npm i @babel/plugin-rm-iife --D
```


## Example

### Input

```js
(() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();
```

### Output

```js
__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
```


## Usage

In your Babel configuration:

```json
{
  "plugins": ["@babel/plugin-rm-iife"]
}
```

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.


## License

MIT © [JayFate](https://github.com/JayFate)
