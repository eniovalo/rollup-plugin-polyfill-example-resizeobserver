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
