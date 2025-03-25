import {
  __export
} from "./chunk-5FUTL2UF.js";

// node_modules/.store/@produck+charon-events@0.2.2/node_modules/@produck/charon-events/src/Simple.js
var Simple_exports = {};
__export(Simple_exports, {
  Emitter: () => Emitter,
  destroy: () => destroy
});
var EVENT_LISTENER_MAP = "e";
var CONTEXT = "c";
var SimpleEventEmitter = class {
  constructor(context = this) {
    this[EVENT_LISTENER_MAP] = {};
    this[CONTEXT] = context;
  }
  on(type, listener) {
    if (!this[EVENT_LISTENER_MAP][type]) {
      this[EVENT_LISTENER_MAP][type] = [];
    }
    this[EVENT_LISTENER_MAP][type].push(listener);
  }
  off(type, listener) {
    const list = this[EVENT_LISTENER_MAP][type];
    if (list) {
      const index = list.indexOf(listener);
      if (index !== -1) {
        list.splice(index, 1);
      }
    }
  }
  emit(type, ...args) {
    if (this[EVENT_LISTENER_MAP][type]) {
      for (const listener of this[EVENT_LISTENER_MAP][type]) {
        listener.call(this[CONTEXT], ...args);
      }
    }
  }
};
var destroy = (emitter) => {
  emitter[EVENT_LISTENER_MAP] = null;
  emitter[CONTEXT] = null;
};
var Emitter = SimpleEventEmitter;
export {
  Simple_exports as Simple
};
//# sourceMappingURL=@produck_charon-events.js.map
