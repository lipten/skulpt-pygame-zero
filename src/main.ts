import {loadScript} from './utils'
const Sk = window.Sk;
const libList = {
  // "./pgzrun/__init__.js": "./dist/pygame-zero.js",
  // "./pgzrun/__init__.js": "https://cdn.jsdelivr.net/gh/lipten/skulpt-pygame-zero/dist/pygame-zero.min.js",
  "./pgzrun/__init__.js": "https://cdn.jsdelivr.net/gh/lipten/skulpt-pygame-zero@physics-engine/dist/pygame-zero.min.js",
}
export const PyGameZero = {
  load: function(file) {
    return Sk.misceval.promiseToSuspension(
      new Promise((resolve, reject) => {
        loadScript('https://cdn.bootcdn.net/ajax/libs/pixi.js/5.3.4/pixi.min.js', 'PIXI').then(() => {
          fetch(libList[file]).then(
            function (resp){ 
              const result = resp.text();
              resolve(result); 
            }
          )
        })
      }))
  },
  matchModelName: function(file) {
    return Object.keys(libList).includes(file);
  },
  setContainer: function(el) {
    this.container = el;
  },
  _onRunning: function(app) {
    this.app = app;
  }
}
window.PyGameZero = PyGameZero