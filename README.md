# rollup-plugin-polyfill-example-resizeobserver

Example of rollup-plugin-polyfill with resizeObserver Polyfill.

An example of using ResizeObserver:

```javascript
const div = document.getElementById('myDIV');
div.innerText = 'My default width is ' + div.offsetWidth;

const resizeObserver = new ResizeObserver(entries => {
    console.log('Something change...');
    div.innerText = 'My new width is ' + entries[0].contentRect.width;
});

resizeObserver.observe(div);
```

If I use *rollup-plugin-polyfill* with *resize-observer-polyfill*, it changes the function `ResizeObserver` to `ResizeObserver$1`. I think it is conflicting with `new ResizeObserver` .

```javascript
const polyfill = require('rollup-plugin-polyfill');
const plugins = [
  polyfill(['resize-observer-polyfill']),
]
```

## Solution

So, I created a wrapper to put resize-observer-polyfill in global.

```javascript
import ResizeObserver from 'resize-observer-polyfill';

//Finding the global variable.
const myGlobal = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
})();

//If ResizeObserver doesn't exist, set the Polyfill.
if(!myGlobal.ResizeObserver) {
    myGlobal.ResizeObserver = ResizeObserver;
}
```

## Instruction

1. Execute `npm install`
2. Choose a build format:
    - IIFE: `npm run build-iife`
    - Commonjs: `npm run build-commonjs`
    - UMD: `npm run build-umd`
3. *bundle.js* generated.
