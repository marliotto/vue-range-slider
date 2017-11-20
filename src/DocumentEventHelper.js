// @flow
/* global document */

export default {
  created () {
    Object.keys(this.$options.events).forEach((key) => {
      this._events[key] = this.$options.events[key].bind(this)
    })
    forEachListener(this, (key, listener) => {
      document.addEventListener(key, listener)
    })
  },

  beforeDestroy () {
    forEachListener(this, (key, listener) => {
      document.removeEventListener(key, listener)
    })
  }
}

function forEachListener(vm: any, f: (key: string, listener: Function) => void) {
  Object.keys(vm._events).forEach(key => {
    f(key, events[key])
  })
}
