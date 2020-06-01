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
