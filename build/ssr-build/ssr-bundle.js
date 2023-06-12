module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0XxG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme

// EXTERNAL MODULE: ../node_modules/react-is/index.js
var react_is = __webpack_require__("xVO4");

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// EXTERNAL MODULE: ../node_modules/preact/hooks/dist/hooks.module.js
var hooks_module = __webpack_require__("QRet");

// CONCATENATED MODULE: ../node_modules/preact/compat/dist/compat.module.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




function compat_module_g(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function compat_module_C(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
  return !1;
}
function compat_module_E(n, t) {
  return n === t && (0 !== n || 1 / n == 1 / t) || n != n && t != t;
}
function w(n) {
  this.props = n;
}
function x(n, e) {
  function r(n) {
    var t = this.props.ref,
      r = t == n.ref;
    return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : compat_module_C(this.props, n);
  }
  function u(e) {
    return this.shouldComponentUpdate = r, Object(external_preact_["createElement"])(n, e);
  }
  return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
}
(w.prototype = new external_preact_["Component"]()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
  return compat_module_C(this.props, n) || compat_module_C(this.state, t);
};
var R = external_preact_["options"].__b;
external_preact_["options"].__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), R && R(n);
};
var compat_module_N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function k(n) {
  function t(t) {
    var e = compat_module_g({}, t);
    return delete e.ref, n(e, t.ref || null);
  }
  return t.$$typeof = compat_module_N, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var compat_module_A = function A(n, t) {
    return null == n ? null : Object(external_preact_["toChildArray"])(Object(external_preact_["toChildArray"])(n).map(t));
  },
  O = {
    map: compat_module_A,
    forEach: compat_module_A,
    count: function count(n) {
      return n ? Object(external_preact_["toChildArray"])(n).length : 0;
    },
    only: function only(n) {
      var t = Object(external_preact_["toChildArray"])(n);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: external_preact_["toChildArray"]
  },
  T = external_preact_["options"].__e;
external_preact_["options"].__e = function (n, t, e, r) {
  if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
  T(n, t, e, r);
};
var compat_module_I = external_preact_["options"].unmount;
function L(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
    "function" == typeof n.__c && n.__c();
  }), n.__c.__H = null), null != (n = compat_module_g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
    return L(n, t, e);
  })), n;
}
function U(n, t, e) {
  return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
    return U(n, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
}
function D() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}
function M(n) {
  var e, r, u;
  function o(o) {
    if (e || (e = n()).then(function (n) {
      r = n.default || n;
    }, function (n) {
      u = n;
    }), u) throw u;
    if (!r) throw e;
    return Object(external_preact_["createElement"])(r, o);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function V() {
  this.u = null, this.o = null;
}
external_preact_["options"].unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), compat_module_I && compat_module_I(n);
}, (D.prototype = new external_preact_["Component"]()).__c = function (n, t) {
  var e = t.__c,
    r = this;
  null == r.t && (r.t = []), r.t.push(e);
  var u = F(r.__v),
    o = !1,
    i = function i() {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };
  e.__R = i;
  var l = function l() {
      if (! --r.__u) {
        if (r.state.__a) {
          var n = r.state.__a;
          r.__v.__k[0] = U(n, n.__c.__P, n.__c.__O);
        }
        var t;
        for (r.setState({
          __a: r.__b = null
        }); t = r.t.pop();) t.forceUpdate();
      }
    },
    c = !0 === t.__h;
  r.__u++ || c || r.setState({
    __a: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, D.prototype.componentWillUnmount = function () {
  this.t = [];
}, D.prototype.render = function (n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"),
        o = this.__v.__k[0].__c;
      this.__v.__k[0] = L(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = e.__a && Object(external_preact_["createElement"])(external_preact_["Fragment"], null, n.fallback);
  return i && (i.__h = null), [Object(external_preact_["createElement"])(external_preact_["Fragment"], null, e.__a ? null : n.children), i];
};
var W = function W(n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();
    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};
function compat_module_P(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}
function j(n) {
  var e = this,
    r = n.i;
  e.componentWillUnmount = function () {
    Object(external_preact_["render"])(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), n.__v ? (e.l || (e.i = r, e.l = {
    nodeType: 1,
    parentNode: r,
    childNodes: [],
    appendChild: function appendChild(n) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    insertBefore: function insertBefore(n, t) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    removeChild: function removeChild(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
    }
  }), Object(external_preact_["render"])(Object(external_preact_["createElement"])(compat_module_P, {
    context: e.context
  }, n.__v), e.l)) : e.l && e.componentWillUnmount();
}
function z(n, e) {
  var r = Object(external_preact_["createElement"])(j, {
    __v: n,
    i: e
  });
  return r.containerInfo = e, r;
}
(V.prototype = new external_preact_["Component"]()).__a = function (n) {
  var t = this,
    e = F(t.__v),
    r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function o() {
      t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
    };
    e ? e(o) : o();
  };
}, V.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = Object(external_preact_["toChildArray"])(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
  return n.children;
}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    W(n, e, t);
  });
};
var B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
  H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  Y = /[A-Z0-9]/g,
  $ = "undefined" != typeof document,
  q = function q(n) {
    return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/ : /fil|che|ra/).test(n);
  };
function G(n, t, e) {
  return null == t.__k && (t.textContent = ""), Object(external_preact_["render"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function J(n, t, e) {
  return Object(external_preact_["hydrate"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
external_preact_["Component"].prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
  Object.defineProperty(external_preact_["Component"].prototype, t, {
    configurable: !0,
    get: function get() {
      return this["UNSAFE_" + t];
    },
    set: function set(n) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  });
});
var K = external_preact_["options"].event;
function Q() {}
function X() {
  return this.cancelBubble;
}
function nn() {
  return this.defaultPrevented;
}
external_preact_["options"].event = function (n) {
  return K && (n = K(n)), n.persist = Q, n.isPropagationStopped = X, n.isDefaultPrevented = nn, n.nativeEvent = n;
};
var tn,
  en = {
    enumerable: !1,
    configurable: !0,
    get: function get() {
      return this.class;
    }
  },
  rn = external_preact_["options"].vnode;
external_preact_["options"].vnode = function (n) {
  "string" == typeof n.type && function (n) {
    var t = n.props,
      e = n.type,
      u = {};
    for (var o in t) {
      var i = t[o];
      if (!("value" === o && "defaultValue" in t && null == i || $ && "children" === o && "noscript" === e || "class" === o || "className" === o)) {
        var l = o.toLowerCase();
        "defaultValue" === o && "value" in t && null == t.value ? o = "value" : "download" === o && !0 === i ? i = "" : "ondoubleclick" === l ? o = "ondblclick" : "onchange" !== l || "input" !== e && "textarea" !== e || q(t.type) ? "onfocus" === l ? o = "onfocusin" : "onblur" === l ? o = "onfocusout" : Z.test(o) ? o = l : -1 === e.indexOf("-") && H.test(o) ? o = o.replace(Y, "-$&").toLowerCase() : null === i && (i = void 0) : l = o = "oninput", "oninput" === l && u[o = l] && (o = "oninputCapture"), u[o] = i;
      }
    }
    "select" == e && u.multiple && Array.isArray(u.value) && (u.value = Object(external_preact_["toChildArray"])(t.children).forEach(function (n) {
      n.props.selected = -1 != u.value.indexOf(n.props.value);
    })), "select" == e && null != u.defaultValue && (u.value = Object(external_preact_["toChildArray"])(t.children).forEach(function (n) {
      n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
    })), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", en)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n.props = u;
  }(n), n.$$typeof = B, rn && rn(n);
};
var un = external_preact_["options"].__r;
external_preact_["options"].__r = function (n) {
  un && un(n), tn = n.__c;
};
var on = external_preact_["options"].diffed;
external_preact_["options"].diffed = function (n) {
  on && on(n);
  var t = n.props,
    e = n.__e;
  null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value), tn = null;
};
var ln = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function readContext(n) {
          return tn.__n[n.__c].props.value;
        }
      }
    }
  },
  cn = "17.0.2";
function fn(n) {
  return external_preact_["createElement"].bind(null, n);
}
function an(n) {
  return !!n && n.$$typeof === B;
}
function sn(n) {
  return an(n) ? external_preact_["cloneElement"].apply(null, arguments) : n;
}
function hn(n) {
  return !!n.__k && (Object(external_preact_["render"])(null, n), !0);
}
function vn(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}
var dn = function dn(n, t) {
    return n(t);
  },
  pn = function pn(n, t) {
    return n(t);
  },
  mn = external_preact_["Fragment"];
function yn(n) {
  n();
}
function _n(n) {
  return n;
}
function bn() {
  return [!1, yn];
}
var Sn = hooks_module["g" /* useLayoutEffect */];
function gn(n, t) {
  var e = t(),
    r = Object(hooks_module["k" /* useState */])({
      h: {
        __: e,
        v: t
      }
    }),
    u = r[0].h,
    o = r[1];
  return Object(hooks_module["g" /* useLayoutEffect */])(function () {
    u.__ = e, u.v = t, compat_module_E(u.__, t()) || o({
      h: u
    });
  }, [n, e, t]), Object(hooks_module["d" /* useEffect */])(function () {
    return compat_module_E(u.__, u.v()) || o({
      h: u
    }), n(function () {
      compat_module_E(u.__, u.v()) || o({
        h: u
      });
    });
  }, [n]), e;
}
var Cn = {
  useState: hooks_module["k" /* useState */],
  useId: hooks_module["e" /* useId */],
  useReducer: hooks_module["i" /* useReducer */],
  useEffect: hooks_module["d" /* useEffect */],
  useLayoutEffect: hooks_module["g" /* useLayoutEffect */],
  useInsertionEffect: Sn,
  useTransition: bn,
  useDeferredValue: _n,
  useSyncExternalStore: gn,
  startTransition: yn,
  useRef: hooks_module["j" /* useRef */],
  useImperativeHandle: hooks_module["f" /* useImperativeHandle */],
  useMemo: hooks_module["h" /* useMemo */],
  useCallback: hooks_module["a" /* useCallback */],
  useContext: hooks_module["b" /* useContext */],
  useDebugValue: hooks_module["c" /* useDebugValue */],
  version: "17.0.2",
  Children: O,
  render: G,
  hydrate: J,
  unmountComponentAtNode: hn,
  createPortal: z,
  createElement: external_preact_["createElement"],
  createContext: external_preact_["createContext"],
  createFactory: fn,
  cloneElement: sn,
  createRef: external_preact_["createRef"],
  Fragment: external_preact_["Fragment"],
  isValidElement: an,
  findDOMNode: vn,
  Component: external_preact_["Component"],
  PureComponent: w,
  memo: x,
  forwardRef: k,
  flushSync: pn,
  unstable_batchedUpdates: dn,
  StrictMode: mn,
  Suspense: D,
  SuspenseList: V,
  lazy: M,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln
};

// EXTERNAL MODULE: ../node_modules/shallowequal/index.js
var shallowequal = __webpack_require__("F56x");
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);

// CONCATENATED MODULE: ../node_modules/@emotion/stylis/dist/stylis.esm.js
function stylis_esm_typeof(obj) { "@babel/helpers - typeof"; return stylis_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, stylis_esm_typeof(obj); }
function stylis_min(W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e.charAt(l);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;
            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;
                case 125:
                  k--;
                  break;
                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }
                          }
                        }
                        l = u;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {}
              }
              if (0 === k) break;
              l++;
            }
            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);
                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;
                  default:
                    r = O;
                }
                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);
                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;
                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;
                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;
              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }
            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;
          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;
              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }
              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }
      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;
        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }
        default:
          z++;
          y = e.charAt(l);
          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;
                default:
                  32 !== g && (y = ' ');
              }
              break;
            case 0:
              y = '\\0';
              break;
            case 12:
              y = '\\f';
              break;
            case 11:
              y = '\\v';
              break;
            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;
            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
                case 8:
                  111 === K && (E = K);
              }
              break;
            case 58:
              0 === n + b + m && (u = l);
              break;
            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;
            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;
            case 91:
              0 === n + b + v && m++;
              break;
            case 93:
              0 === n + b + v && m--;
              break;
            case 41:
              0 === n + b + m && v--;
              break;
            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;
                  default:
                    q = 1;
                }
                v++;
              }
              break;
            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;
                    case 220:
                      t = l, b = 42;
                  }
                  break;
                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }
          0 === b && (f += y);
      }
      K = x;
      x = g;
      l++;
    }
    t = p.length;
    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';
      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);
        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;
          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }
        E = 0;
      }
    }
    return G + p + F;
  }
  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
      m = d.length;
    switch (m) {
      case 0:
      case 1:
        var b = 0;
        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }
        break;
      default:
        var v = b = 0;
        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }
    }
    return c;
  }
  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));
    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());
      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());
      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }
    return d + c;
  }
  function P(d, c, e, h) {
    var a = d + ';',
      m = 2 * c + 3 * e + 4 * h;
    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }
    if (0 === w || 2 === w && !L(a, 1)) return a;
    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
      case 1009:
        if (100 !== a.charCodeAt(4)) break;
      case 969:
      case 942:
        return '-webkit-' + a + a;
      case 978:
        return '-webkit-' + a + '-moz-' + a + a;
      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;
      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;
      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;
      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;
        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;
          case 232:
            b = a.replace(G, 'tb-rl');
            break;
          case 220:
            b = a.replace(G, 'lr');
            break;
          default:
            return a;
        }
        return '-webkit-' + a + '-ms-' + b + a;
      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;
      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;
          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;
          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }
        return a + ';';
      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;
      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;
      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }
    return a;
  }
  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
      h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }
  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }
  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          x = w;
      }
    }
    if (x !== c) return x;
  }
  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;
      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === stylis_esm_typeof(d)) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }
    return T;
  }
  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }
  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];
    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }
    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }
  var ca = /^\0+/g,
    N = /[\0\r\f]/g,
    aa = /: */g,
    ka = /zoo|gra/,
    ma = /([,: ])(transform)/g,
    ia = /,\r+?/g,
    F = /([\t\r\n ])*\f?&/g,
    fa = /@(k\w+)\s*(\S*)\s*/,
    Q = /::(place)/g,
    ha = /:(read-only)/g,
    G = /[svh]\w+-[tblr]{2}/,
    da = /\(\s*(.*)\s*\)/g,
    oa = /([\s\S]*?);/g,
    ba = /-self|flex-/g,
    na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    la = /stretch|:\s*\w+\-(?:conte|avail)/,
    ja = /([^-])(image-set\()/,
    z = 1,
    D = 1,
    E = 0,
    w = 1,
    O = [],
    S = [],
    A = 0,
    R = null,
    Y = 0,
    V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}
/* harmony default export */ var stylis_esm = (stylis_min);
// CONCATENATED MODULE: ../node_modules/@emotion/unitless/dist/unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
/* harmony default export */ var unitless_esm = (unitlessKeys);
// CONCATENATED MODULE: ../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

// CONCATENATED MODULE: ../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */ && prop.charCodeAt(1) === 110
  /* n */ && prop.charCodeAt(2) < 91;
}
/* Z+1 */);


// EXTERNAL MODULE: ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__("GeWT");
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ../node_modules/styled-components/dist/styled-components.esm.js
function styled_components_esm_typeof(obj) { "@babel/helpers - typeof"; return styled_components_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, styled_components_esm_typeof(obj); }







function styled_components_esm_m() {
  return (styled_components_esm_m = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var styled_components_esm_y = function y(e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
    return n;
  },
  styled_components_esm_v = function v(t) {
    return null !== t && "object" == styled_components_esm_typeof(t) && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !Object(react_is["typeOf"])(t);
  },
  styled_components_esm_g = Object.freeze([]),
  S = Object.freeze({});
function styled_components_esm_w(e) {
  return "function" == typeof e;
}
function styled_components_esm_E(e) {
  return  false || e.displayName || e.name || "Component";
}
function styled_components_esm_b(e) {
  return e && "string" == typeof e.styledComponentId;
}
var styled_components_esm_ = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
  styled_components_esm_N = "5.3.11",
  styled_components_esm_A = "undefined" != typeof window && "HTMLElement" in window,
  styled_components_esm_C = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && (void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== "production")),
  styled_components_esm_I = {},
  styled_components_esm_P =  false ? undefined : {};
function styled_components_esm_O() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1) t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
  return t.forEach(function (t) {
    e = e.replace(/%[a-z]/, t);
  }), e;
}
function styled_components_esm_R(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw  true ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) : undefined;
}
var styled_components_esm_D = function () {
    function e(e) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
    }
    var t = e.prototype;
    return t.indexOfGroup = function (e) {
      for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
      return t;
    }, t.insertRules = function (e, t) {
      if (e >= this.groupSizes.length) {
        for (var n = this.groupSizes, r = n.length, o = r; e >= o;) (o <<= 1) < 0 && styled_components_esm_R(16, "" + e);
        this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
        for (var s = r; s < o; s++) this.groupSizes[s] = 0;
      }
      for (var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++) this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
    }, t.clearGroup = function (e) {
      if (e < this.length) {
        var t = this.groupSizes[e],
          n = this.indexOfGroup(e),
          r = n + t;
        this.groupSizes[e] = 0;
        for (var o = n; o < r; o++) this.tag.deleteRule(n);
      }
    }, t.getGroup = function (e) {
      var t = "";
      if (e >= this.length || 0 === this.groupSizes[e]) return t;
      for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++) t += this.tag.getRule(s) + "/*!sc*/\n";
      return t;
    }, e;
  }(),
  styled_components_esm_j = new Map(),
  styled_components_esm_T = new Map(),
  styled_components_esm_x = 1,
  styled_components_esm_k = function k(e) {
    if (styled_components_esm_j.has(e)) return styled_components_esm_j.get(e);
    for (; styled_components_esm_T.has(styled_components_esm_x);) styled_components_esm_x++;
    var t = styled_components_esm_x++;
    return  false && false, styled_components_esm_j.set(e, t), styled_components_esm_T.set(t, e), t;
  },
  styled_components_esm_V = function V(e) {
    return styled_components_esm_T.get(e);
  },
  styled_components_esm_z = function z(e, t) {
    t >= styled_components_esm_x && (styled_components_esm_x = t + 1), styled_components_esm_j.set(e, t), styled_components_esm_T.set(t, e);
  },
  styled_components_esm_B = "style[" + styled_components_esm_ + '][data-styled-version="5.3.11"]',
  styled_components_esm_M = new RegExp("^" + styled_components_esm_ + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  styled_components_esm_G = function G(e, t, n) {
    for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
  },
  styled_components_esm_L = function L(e, t) {
    for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
      var i = n[o].trim();
      if (i) {
        var a = i.match(styled_components_esm_M);
        if (a) {
          var c = 0 | parseInt(a[1], 10),
            u = a[2];
          0 !== c && (styled_components_esm_z(u, c), styled_components_esm_G(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
        } else r.push(i);
      }
    }
  },
  styled_components_esm_F = function F() {
    return  true ? __webpack_require__.nc : undefined;
  },
  styled_components_esm_Y = function Y(e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = function (e) {
        for (var t = e.childNodes, n = t.length; n >= 0; n--) {
          var r = t[n];
          if (r && 1 === r.nodeType && r.hasAttribute(styled_components_esm_)) return r;
        }
      }(n),
      s = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(styled_components_esm_, "active"), r.setAttribute("data-styled-version", "5.3.11");
    var i = styled_components_esm_F();
    return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
  },
  styled_components_esm_q = function () {
    function e(e) {
      var t = this.element = styled_components_esm_Y(e);
      t.appendChild(document.createTextNode("")), this.sheet = function (e) {
        if (e.sheet) return e.sheet;
        for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
          var o = t[n];
          if (o.ownerNode === e) return o;
        }
        styled_components_esm_R(17);
      }(t), this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      try {
        return this.sheet.insertRule(t, e), this.length++, !0;
      } catch (e) {
        return !1;
      }
    }, t.deleteRule = function (e) {
      this.sheet.deleteRule(e), this.length--;
    }, t.getRule = function (e) {
      var t = this.sheet.cssRules[e];
      return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
    }, e;
  }(),
  styled_components_esm_H = function () {
    function e(e) {
      var t = this.element = styled_components_esm_Y(e);
      this.nodes = t.childNodes, this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      if (e <= this.length && e >= 0) {
        var n = document.createTextNode(t),
          r = this.nodes[e];
        return this.element.insertBefore(n, r || null), this.length++, !0;
      }
      return !1;
    }, t.deleteRule = function (e) {
      this.element.removeChild(this.nodes[e]), this.length--;
    }, t.getRule = function (e) {
      return e < this.length ? this.nodes[e].textContent : "";
    }, e;
  }(),
  styled_components_esm_$ = function () {
    function e(e) {
      this.rules = [], this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
    }, t.deleteRule = function (e) {
      this.rules.splice(e, 1), this.length--;
    }, t.getRule = function (e) {
      return e < this.length ? this.rules[e] : "";
    }, e;
  }(),
  styled_components_esm_W = styled_components_esm_A,
  styled_components_esm_U = {
    isServer: !styled_components_esm_A,
    useCSSOMInjection: !styled_components_esm_C
  },
  styled_components_esm_J = function () {
    function e(e, t, n) {
      void 0 === e && (e = S), void 0 === t && (t = {}), this.options = styled_components_esm_m({}, styled_components_esm_U, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && styled_components_esm_A && styled_components_esm_W && (styled_components_esm_W = !1, function (e) {
        for (var t = document.querySelectorAll(styled_components_esm_B), n = 0, r = t.length; n < r; n++) {
          var o = t[n];
          o && "active" !== o.getAttribute(styled_components_esm_) && (styled_components_esm_L(e, o), o.parentNode && o.parentNode.removeChild(o));
        }
      }(this));
    }
    e.registerId = function (e) {
      return styled_components_esm_k(e);
    };
    var t = e.prototype;
    return t.reconstructWithOptions = function (t, n) {
      return void 0 === n && (n = !0), new e(styled_components_esm_m({}, this.options, {}, t), this.gs, n && this.names || void 0);
    }, t.allocateGSInstance = function (e) {
      return this.gs[e] = (this.gs[e] || 0) + 1;
    }, t.getTag = function () {
      return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new styled_components_esm_$(o) : r ? new styled_components_esm_q(o) : new styled_components_esm_H(o), new styled_components_esm_D(e)));
      var e, t, n, r, o;
    }, t.hasNameForId = function (e, t) {
      return this.names.has(e) && this.names.get(e).has(t);
    }, t.registerName = function (e, t) {
      if (styled_components_esm_k(e), this.names.has(e)) this.names.get(e).add(t);else {
        var n = new Set();
        n.add(t), this.names.set(e, n);
      }
    }, t.insertRules = function (e, t, n) {
      this.registerName(e, t), this.getTag().insertRules(styled_components_esm_k(e), n);
    }, t.clearNames = function (e) {
      this.names.has(e) && this.names.get(e).clear();
    }, t.clearRules = function (e) {
      this.getTag().clearGroup(styled_components_esm_k(e)), this.clearNames(e);
    }, t.clearTag = function () {
      this.tag = void 0;
    }, t.toString = function () {
      return function (e) {
        for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
          var s = styled_components_esm_V(o);
          if (void 0 !== s) {
            var i = e.names.get(s),
              a = t.getGroup(o);
            if (i && a && i.size) {
              var c = styled_components_esm_ + ".g" + o + '[id="' + s + '"]',
                u = "";
              void 0 !== i && i.forEach(function (e) {
                e.length > 0 && (u += e + ",");
              }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
            }
          }
        }
        return r;
      }(this);
    }, e;
  }(),
  styled_components_esm_X = /(a)(d)/gi,
  styled_components_esm_Z = function Z(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function styled_components_esm_K(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = styled_components_esm_Z(t % 52) + n;
  return (styled_components_esm_Z(t % 52) + n).replace(styled_components_esm_X, "$1-$2");
}
var styled_components_esm_Q = function Q(e, t) {
    for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
    return e;
  },
  ee = function ee(e) {
    return styled_components_esm_Q(5381, e);
  };
function te(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (styled_components_esm_w(n) && !styled_components_esm_b(n)) return !1;
  }
  return !0;
}
var ne = ee("5.3.11"),
  re = function () {
    function e(e, t, n) {
      this.rules = e, this.staticRulesId = "", this.isStatic =  true && (void 0 === n || n.isStatic) && te(e), this.componentId = t, this.baseHash = styled_components_esm_Q(ne, t), this.baseStyle = n, styled_components_esm_J.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function (e, t, n) {
      var r = this.componentId,
        o = [];
      if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
        if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);else {
          var s = be(this.rules, e, t, n).join(""),
            i = styled_components_esm_K(styled_components_esm_Q(this.baseHash, s) >>> 0);
          if (!t.hasNameForId(r, i)) {
            var a = n(s, "." + i, void 0, r);
            t.insertRules(r, i, a);
          }
          o.push(i), this.staticRulesId = i;
        }
      } else {
        for (var c = this.rules.length, u = styled_components_esm_Q(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
          var h = this.rules[d];
          if ("string" == typeof h) l += h,  false && (false);else if (h) {
            var p = be(h, e, t, n),
              f = Array.isArray(p) ? p.join("") : p;
            u = styled_components_esm_Q(u, f + d), l += f;
          }
        }
        if (l) {
          var m = styled_components_esm_K(u >>> 0);
          if (!t.hasNameForId(r, m)) {
            var y = n(l, "." + m, void 0, r);
            t.insertRules(r, m, y);
          }
          o.push(m);
        }
      }
      return o.join(" ");
    }, e;
  }(),
  oe = /^\s*\/\/.*$/gm,
  se = [":", "[", ".", "#"];
function ie(e) {
  var t,
    n,
    r,
    o,
    s = void 0 === e ? S : e,
    i = s.options,
    a = void 0 === i ? S : i,
    c = s.plugins,
    u = void 0 === c ? styled_components_esm_g : c,
    l = new stylis_esm(a),
    h = [],
    p = function (e) {
      function t(t) {
        if (t) try {
          e(t + "}");
        } catch (e) {}
      }
      return function (n, r, o, s, i, a, c, u, l, d) {
        switch (n) {
          case 1:
            if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
            break;
          case 2:
            if (0 === u) return r + "/*|*/";
            break;
          case 3:
            switch (u) {
              case 102:
              case 112:
                return e(o[0] + r), "";
              default:
                return r + (0 === d ? "/*|*/" : "");
            }
          case -2:
            r.split("/*|*/}").forEach(t);
        }
      };
    }(function (e) {
      h.push(e);
    }),
    f = function f(e, r, s) {
      return 0 === r && -1 !== se.indexOf(s[n.length]) || s.match(o) ? e : "." + t;
    };
  function m(e, s, i, a) {
    void 0 === a && (a = "&");
    var c = e.replace(oe, ""),
      u = s && i ? i + " " + s + " { " + c + " }" : c;
    return t = a, n = s, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i || !s ? "" : s, u);
  }
  return l.use([].concat(u, [function (e, t, o) {
    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
  }, p, function (e) {
    if (-2 === e) {
      var t = h;
      return h = [], t;
    }
  }])), m.hash = u.length ? u.reduce(function (e, t) {
    return t.name || styled_components_esm_R(15), styled_components_esm_Q(e, t.name);
  }, 5381).toString() : "", m;
}
var ae = Cn.createContext(),
  ce = ae.Consumer,
  ue = Cn.createContext(),
  le = (ue.Consumer, new styled_components_esm_J()),
  de = ie();
function he() {
  return Object(hooks_module["b" /* useContext */])(ae) || le;
}
function pe() {
  return Object(hooks_module["b" /* useContext */])(ue) || de;
}
function fe(e) {
  var t = Object(hooks_module["k" /* useState */])(e.stylisPlugins),
    n = t[0],
    s = t[1],
    c = he(),
    u = Object(hooks_module["h" /* useMemo */])(function () {
      var t = c;
      return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
        target: e.target
      }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
        useCSSOMInjection: !1
      })), t;
    }, [e.disableCSSOMInjection, e.sheet, e.target]),
    d = Object(hooks_module["h" /* useMemo */])(function () {
      return ie({
        options: {
          prefix: !e.disableVendorPrefixes
        },
        plugins: n
      });
    }, [e.disableVendorPrefixes, n]);
  return Object(hooks_module["d" /* useEffect */])(function () {
    shallowequal_default()(n, e.stylisPlugins) || s(e.stylisPlugins);
  }, [e.stylisPlugins]), Cn.createElement(ae.Provider, {
    value: u
  }, Cn.createElement(ue.Provider, {
    value: d
  },  false ? undefined : e.children));
}
var me = function () {
    function e(e, t) {
      var n = this;
      this.inject = function (e, t) {
        void 0 === t && (t = de);
        var r = n.name + t.hash;
        e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
      }, this.toString = function () {
        return styled_components_esm_R(12, String(n.name));
      }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
    }
    return e.prototype.getName = function (e) {
      return void 0 === e && (e = de), this.name + e.hash;
    }, e;
  }(),
  ye = /([A-Z])/,
  ve = /([A-Z])/g,
  ge = /^ms-/,
  Se = function Se(e) {
    return "-" + e.toLowerCase();
  };
function we(e) {
  return ye.test(e) ? e.replace(ve, Se).replace(ge, "-ms-") : e;
}
var Ee = function Ee(e) {
  return null == e || !1 === e || "" === e;
};
function be(e, n, r, o) {
  if (Array.isArray(e)) {
    for (var s, i = [], a = 0, c = e.length; a < c; a += 1) "" !== (s = be(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
    return i;
  }
  if (Ee(e)) return "";
  if (styled_components_esm_b(e)) return "." + e.styledComponentId;
  if (styled_components_esm_w(e)) {
    if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
    var u = e(n);
    return  false && false, be(u, n, r, o);
  }
  var l;
  return e instanceof me ? r ? (e.inject(r, o), e.getName(o)) : e : styled_components_esm_v(e) ? function e(t, n) {
    var r,
      o,
      s = [];
    for (var i in t) t.hasOwnProperty(i) && !Ee(t[i]) && (Array.isArray(t[i]) && t[i].isCss || styled_components_esm_w(t[i]) ? s.push(we(i) + ":", t[i], ";") : styled_components_esm_v(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push(we(i) + ": " + (r = i, null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in unitless_esm || r.startsWith("--") ? String(o).trim() : o + "px") + ";"));
    return n ? [n + " {"].concat(s, ["}"]) : s;
  }(e) : e.toString();
}
var _e = function _e(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ne(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return styled_components_esm_w(e) || styled_components_esm_v(e) ? _e(be(styled_components_esm_y(styled_components_esm_g, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : _e(be(styled_components_esm_y(e, n)));
}
var Ae = /invalid hook call/i,
  Ce = new Set(),
  Ie = function Ie(e, t) {
    if (false) { var o, n, r; }
  },
  Pe = function Pe(e, t, n) {
    return void 0 === n && (n = S), e.theme !== n.theme && e.theme || t || n.theme;
  },
  Oe = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Re = /(^-|-$)/g;
function De(e) {
  return e.replace(Oe, "-").replace(Re, "");
}
var je = function je(e) {
  return styled_components_esm_K(ee(e) >>> 0);
};
function Te(e) {
  return "string" == typeof e && ( true || false);
}
var xe = function xe(e) {
    return "function" == typeof e || "object" == styled_components_esm_typeof(e) && null !== e && !Array.isArray(e);
  },
  ke = function ke(e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
  };
function Ve(e, t, n) {
  var r = e[n];
  xe(t) && xe(r) ? ze(r, t) : e[n] = t;
}
function ze(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  for (var o = 0, s = n; o < s.length; o++) {
    var i = s[o];
    if (xe(i)) for (var a in i) ke(a) && Ve(e, i[a], a);
  }
  return e;
}
var Be = Cn.createContext(),
  Me = Be.Consumer;
function Ge(e) {
  var t = Object(hooks_module["b" /* useContext */])(Be),
    n = Object(hooks_module["h" /* useMemo */])(function () {
      return function (e, t) {
        if (!e) return styled_components_esm_R(14);
        if (styled_components_esm_w(e)) {
          var n = e(t);
          return  true ? n : undefined;
        }
        return Array.isArray(e) || "object" != styled_components_esm_typeof(e) ? styled_components_esm_R(8) : t ? styled_components_esm_m({}, t, {}, e) : e;
      }(e.theme, t);
    }, [e.theme, t]);
  return e.children ? Cn.createElement(Be.Provider, {
    value: n
  }, e.children) : null;
}
var Le = {};
function Fe(e, t, n) {
  var o = styled_components_esm_b(e),
    i = !Te(e),
    a = t.attrs,
    c = void 0 === a ? styled_components_esm_g : a,
    l = t.componentId,
    d = void 0 === l ? function (e, t) {
      var n = "string" != typeof e ? "sc" : De(e);
      Le[n] = (Le[n] || 0) + 1;
      var r = n + "-" + je("5.3.11" + n + Le[n]);
      return t ? t + "-" + r : r;
    }(t.displayName, t.parentComponentId) : l,
    h = t.displayName,
    y = void 0 === h ? function (e) {
      return Te(e) ? "styled." + e : "Styled(" + styled_components_esm_E(e) + ")";
    }(e) : h,
    v = t.displayName && t.componentId ? De(t.displayName) + "-" + t.componentId : t.componentId || d,
    _ = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
    N = t.shouldForwardProp;
  o && e.shouldForwardProp && (N = t.shouldForwardProp ? function (n, r, o) {
    return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
  } : e.shouldForwardProp);
  var A,
    C = new re(n, v, o ? e.componentStyle : void 0),
    I = C.isStatic && 0 === c.length,
    P = function P(e, t) {
      return function (e, t, n, r) {
        var o = e.attrs,
          i = e.componentStyle,
          a = e.defaultProps,
          c = e.foldedComponentIds,
          l = e.shouldForwardProp,
          d = e.styledComponentId,
          h = e.target,
          f = function (e, t, n) {
            void 0 === e && (e = S);
            var r = styled_components_esm_m({}, t, {
                theme: e
              }),
              o = {};
            return n.forEach(function (e) {
              var t,
                n,
                s,
                i = e;
              for (t in styled_components_esm_w(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
            }), [r, o];
          }(Pe(t, Object(hooks_module["b" /* useContext */])(Be), a) || S, t, o),
          y = f[0],
          v = f[1],
          g = function (e, t, n, r) {
            var o = he(),
              s = pe(),
              i = t ? e.generateAndInjectStyles(S, o, s) : e.generateAndInjectStyles(n, o, s);
            return  false && false, i;
          }(i, r, y,  false ? undefined : void 0),
          E = n,
          b = v.$as || t.$as || v.as || t.as || h,
          _ = Te(b),
          N = v !== t ? styled_components_esm_m({}, t, {}, v) : t,
          A = {};
        for (var C in N) "$" !== C[0] && "as" !== C && ("forwardedAs" === C ? A.as = N[C] : (l ? l(C, isPropValid, b) : !_ || isPropValid(C)) && (A[C] = N[C]));
        return t.style && v.style !== t.style && (A.style = styled_components_esm_m({}, t.style, {}, v.style)), A.className = Array.prototype.concat(c, d, g !== d ? g : null, t.className, v.className).filter(Boolean).join(" "), A.ref = E, Object(external_preact_["createElement"])(b, A);
      }(A, e, t, I);
    };
  return P.displayName = y, (A = Cn.forwardRef(P)).attrs = _, A.componentStyle = C, A.displayName = y, A.shouldForwardProp = N, A.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : styled_components_esm_g, A.styledComponentId = v, A.target = o ? e.target : e, A.withComponent = function (e) {
    var r = t.componentId,
      o = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }(t, ["componentId"]),
      s = r && r + "-" + (Te(e) ? e : De(styled_components_esm_E(e)));
    return Fe(e, styled_components_esm_m({}, o, {
      attrs: _,
      componentId: s
    }), n);
  }, Object.defineProperty(A, "defaultProps", {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(t) {
      this._foldedDefaultProps = o ? ze({}, e.defaultProps, t) : t;
    }
  }),  false && (false), Object.defineProperty(A, "toString", {
    value: function value() {
      return "." + A.styledComponentId;
    }
  }), i && hoist_non_react_statics_cjs_default()(A, e, {
    attrs: !0,
    componentStyle: !0,
    displayName: !0,
    foldedComponentIds: !0,
    shouldForwardProp: !0,
    styledComponentId: !0,
    target: !0,
    withComponent: !0
  }), A;
}
var styled_components_esm_Ye = function Ye(e) {
  return function e(t, r, o) {
    if (void 0 === o && (o = S), !Object(react_is["isValidElementType"])(r)) return styled_components_esm_R(1, String(r));
    var s = function s() {
      return t(r, o, Ne.apply(void 0, arguments));
    };
    return s.withConfig = function (n) {
      return e(t, r, styled_components_esm_m({}, o, {}, n));
    }, s.attrs = function (n) {
      return e(t, r, styled_components_esm_m({}, o, {
        attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
      }));
    }, s;
  }(Fe, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function (e) {
  styled_components_esm_Ye[e] = styled_components_esm_Ye(e);
});
var qe = function () {
  function e(e, t) {
    this.rules = e, this.componentId = t, this.isStatic = te(e), styled_components_esm_J.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function (e, t, n, r) {
    var o = r(be(this.rules, t, n, r).join(""), ""),
      s = this.componentId + e;
    n.insertRules(s, s, o);
  }, t.removeStyles = function (e, t) {
    t.clearRules(this.componentId + e);
  }, t.renderStyles = function (e, t, n, r) {
    e > 2 && styled_components_esm_J.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
  }, e;
}();
function He(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
  var i = Ne.apply(void 0, [e].concat(n)),
    a = "sc-global-" + je(JSON.stringify(i)),
    u = new qe(i, a);
  function l(e) {
    var t = he(),
      n = pe(),
      o = Object(hooks_module["b" /* useContext */])(Be),
      u = Object(hooks_module["j" /* useRef */])(t.allocateGSInstance(a)).current;
    return  false && false,  false && false, t.server && d(u, e, t, o, n), null;
  }
  function d(e, t, n, r, o) {
    if (u.isStatic) u.renderStyles(e, styled_components_esm_I, n, o);else {
      var s = styled_components_esm_m({}, t, {
        theme: Pe(t, r, l.defaultProps)
      });
      u.renderStyles(e, s, n, o);
    }
  }
  return  false && false, Cn.memo(l);
}
function $e(e) {
   false && false;
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var o = Ne.apply(void 0, [e].concat(n)).join(""),
    s = je(o);
  return new me(s, o);
}
var We = /^\s*<\/[a-z]/i,
  Ue = function () {
    function e() {
      var e = this;
      this._emitSheetCSS = function () {
        var t = e.instance.toString();
        if (!t) return "";
        var n = styled_components_esm_F();
        return "<style " + [n && 'nonce="' + n + '"', styled_components_esm_ + '="true"', 'data-styled-version="5.3.11"'].filter(Boolean).join(" ") + ">" + t + "</style>";
      }, this.getStyleTags = function () {
        return e.sealed ? styled_components_esm_R(2) : e._emitSheetCSS();
      }, this.getStyleElement = function () {
        var t;
        if (e.sealed) return styled_components_esm_R(2);
        var n = ((t = {})[styled_components_esm_] = "", t["data-styled-version"] = "5.3.11", t.dangerouslySetInnerHTML = {
            __html: e.instance.toString()
          }, t),
          o = styled_components_esm_F();
        return o && (n.nonce = o), [Cn.createElement("style", styled_components_esm_m({}, n, {
          key: "sc-0-0"
        }))];
      }, this.seal = function () {
        e.sealed = !0;
      }, this.instance = new styled_components_esm_J({
        isServer: !0
      }), this.sealed = !1;
    }
    var t = e.prototype;
    return t.collectStyles = function (e) {
      return this.sealed ? styled_components_esm_R(2) : Cn.createElement(fe, {
        sheet: this.instance
      }, e);
    }, t.interleaveWithNodeStream = function (e) {
      if (styled_components_esm_A) return styled_components_esm_R(3);
      if (this.sealed) return styled_components_esm_R(2);
      this.seal();
      var t = __webpack_require__("msIP"),
        n = (t.Readable, t.Transform),
        r = e,
        o = this.instance,
        s = this._emitSheetCSS,
        i = new n({
          transform: function transform(e, t, n) {
            var r = e.toString(),
              i = s();
            if (o.clearTag(), We.test(r)) {
              var a = r.indexOf(">") + 1,
                c = r.slice(0, a),
                u = r.slice(a);
              this.push(c + i + u);
            } else this.push(i + r);
            n();
          }
        });
      return r.on("error", function (e) {
        i.emit("error", e);
      }), r.pipe(i);
    }, e;
  }(),
  styled_components_esm_Je = function Je(e) {
    var t = Cn.forwardRef(function (t, n) {
      var o = Object(hooks_module["b" /* useContext */])(Be),
        i = e.defaultProps,
        a = Pe(t, o, i);
      return  false && false, Cn.createElement(e, styled_components_esm_m({}, t, {
        theme: a,
        ref: n
      }));
    });
    return hoist_non_react_statics_cjs_default()(t, e), t.displayName = "WithTheme(" + styled_components_esm_E(e) + ")", t;
  },
  styled_components_esm_Xe = function Xe() {
    return Object(hooks_module["b" /* useContext */])(Be);
  },
  Ze = {
    StyleSheet: styled_components_esm_J,
    masterSheet: le
  };
 false && false,  false && (false);
/* harmony default export */ var styled_components_esm = __webpack_exports__["a"] = (styled_components_esm_Ye);


/***/ }),

/***/ "3br2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0XxG");
/* harmony import */ var _components_DailyCard_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LY4Z");
/* harmony import */ var _components_ClockedInCard_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rOP7");
/* harmony import */ var _components_ClockedOutCard_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Adfj");
var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Home = function Home() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(Date.now()),
    _useState2 = _slicedToArray(_useState, 2),
    time = _useState2[0],
    setTime = _useState2[1];
  return h(Container, null, h(StyledName, null, "Hey Royhan Mardista!"), h(StyledDate, null, new Date(time).toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })), h(_components_DailyCard_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), h(_components_ClockedInCard_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), h(_components_ClockedOutCard_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null));
};
var StyledName = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 32px;\n\n  color: #000000;\n\n  margin: 0px;\n"])));
var StyledDate = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].h2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #000000;\n\n  margin: 0px;\n  margin-bottom: 20px;\n"])));
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));
/* harmony default export */ __webpack_exports__["a"] = (Home);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "9K2m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var b = 60103,
  c = 60106,
  d = 60107,
  e = 60108,
  f = 60114,
  g = 60109,
  h = 60110,
  k = 60112,
  l = 60113,
  m = 60120,
  n = 60115,
  p = 60116,
  q = 60121,
  r = 60122,
  u = 60117,
  v = 60129,
  w = 60131;
if ("function" === typeof Symbol && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r = x("react.server.block");
  u = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}
function y(a) {
  if ("object" === _typeof(a) && null !== a) {
    var t = a.$$typeof;
    switch (t) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;
              default:
                return t;
            }
        }
      case c:
        return t;
    }
  }
}
var z = g,
  A = b,
  B = k,
  C = d,
  D = p,
  E = n,
  F = c,
  G = f,
  H = e,
  I = l;
exports.ContextConsumer = h;
exports.ContextProvider = z;
exports.Element = A;
exports.ForwardRef = B;
exports.Fragment = C;
exports.Lazy = D;
exports.Memo = E;
exports.Portal = F;
exports.Profiler = G;
exports.StrictMode = H;
exports.Suspense = I;
exports.isAsyncMode = function () {
  return !1;
};
exports.isConcurrentMode = function () {
  return !1;
};
exports.isContextConsumer = function (a) {
  return y(a) === h;
};
exports.isContextProvider = function (a) {
  return y(a) === g;
};
exports.isElement = function (a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === b;
};
exports.isForwardRef = function (a) {
  return y(a) === k;
};
exports.isFragment = function (a) {
  return y(a) === d;
};
exports.isLazy = function (a) {
  return y(a) === p;
};
exports.isMemo = function (a) {
  return y(a) === n;
};
exports.isPortal = function (a) {
  return y(a) === c;
};
exports.isProfiler = function (a) {
  return y(a) === f;
};
exports.isStrictMode = function (a) {
  return y(a) === e;
};
exports.isSuspense = function (a) {
  return y(a) === l;
};
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === v || a === e || a === l || a === m || a === w || "object" === _typeof(a) && null !== a && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? !0 : !1;
};
exports.typeOf = y;

/***/ }),

/***/ "Adfj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0XxG");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ClockedOutCard = function ClockedOutCard() {
  return h(Container, null, h(Row, null, h(SectionName, null, "Section 3X"), h(SectionCode, null, "S3X")), h(OrgName, null, "Potato Org"), h(Divider, null), h(ClockOutButton, null, "\uD83D\uDCAA Work More"), h(Row, null, h(Timing, {
    name: "CLOCK IN",
    number: "09:00"
  }), h(Timing, {
    name: "CLOCK OUT",
    number: "18:00"
  }), h(Timing, {
    name: "BREAK",
    number: "30 m"
  })));
};
var Timing = function Timing(props) {
  return h(Col, null, h(TimingName, null, props.name), h(TimingNumber, null, props.number));
};
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n\n  padding: 14px;\n"])));
var ClockOutButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 60px;\n\n  background: #fdcc71;\n  border-radius: 4px;\n  border: none;\n\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n\n  color: #ffffff;\n\n  margin-bottom: 8px;\n"])));
var SectionName = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 32px;\n\n  color: #000000;\n\n  margin: 0px;\n"])));
var OrgName = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #5e5e5e;\n\n  margin: 0px;\n  margin-bottom: 10px;\n"])));
var SectionCode = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 41px;\n  height: 22px;\n\n  background: #ffffff;\n\n  border: 1px solid #9b9b9b;\n  border-radius: 4px;\n\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #000000;\n"])));
var Row = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border-top: 1px solid #d9d9d9;\n"])));
var TimingName = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #5e5e5e;\n\n  margin: 0px;\n  margin-top: 15px;\n"])));
var TimingNumber = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 32px;\n\n  color: #000000;\n\n  margin: 0px;\n  margin-top: 10px;\n"])));
var Col = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
/* harmony default export */ __webpack_exports__["a"] = (ClockedOutCard);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "F56x":
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (_typeof(objA) !== "object" || !objA || _typeof(objB) !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
};

/***/ }),

/***/ "GKGO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("L0At");
} else {}

/***/ }),

/***/ "GeWT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__("GKGO");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }
  return targetComponent;
}
module.exports = hoistNonReactStatics;

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "L0At":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var b = "function" === typeof Symbol && Symbol.for,
  c = b ? Symbol.for("react.element") : 60103,
  d = b ? Symbol.for("react.portal") : 60106,
  e = b ? Symbol.for("react.fragment") : 60107,
  f = b ? Symbol.for("react.strict_mode") : 60108,
  g = b ? Symbol.for("react.profiler") : 60114,
  h = b ? Symbol.for("react.provider") : 60109,
  k = b ? Symbol.for("react.context") : 60110,
  l = b ? Symbol.for("react.async_mode") : 60111,
  m = b ? Symbol.for("react.concurrent_mode") : 60111,
  n = b ? Symbol.for("react.forward_ref") : 60112,
  p = b ? Symbol.for("react.suspense") : 60113,
  q = b ? Symbol.for("react.suspense_list") : 60120,
  r = b ? Symbol.for("react.memo") : 60115,
  t = b ? Symbol.for("react.lazy") : 60116,
  v = b ? Symbol.for("react.block") : 60121,
  w = b ? Symbol.for("react.fundamental") : 60117,
  x = b ? Symbol.for("react.responder") : 60118,
  y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === _typeof(a) && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m;
}
exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;
exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};
exports.isConcurrentMode = A;
exports.isContextConsumer = function (a) {
  return z(a) === k;
};
exports.isContextProvider = function (a) {
  return z(a) === h;
};
exports.isElement = function (a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === c;
};
exports.isForwardRef = function (a) {
  return z(a) === n;
};
exports.isFragment = function (a) {
  return z(a) === e;
};
exports.isLazy = function (a) {
  return z(a) === t;
};
exports.isMemo = function (a) {
  return z(a) === r;
};
exports.isPortal = function (a) {
  return z(a) === d;
};
exports.isProfiler = function (a) {
  return z(a) === g;
};
exports.isStrictMode = function (a) {
  return z(a) === f;
};
exports.isSuspense = function (a) {
  return z(a) === p;
};
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
exports.typeOf = z;

/***/ }),

/***/ "LY4Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0XxG");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DailyCard = function DailyCard() {
  return h(Container, null, h(Row, null, h(SectionName, null, "Section 3X"), h(SectionCode, null, "S3X")), h(OrgName, null, "Potato Org"), h(Divider, null), h(ShiftString, null, "Today 09:00 - 18:00 | 9h"), h(RoleName, null, "Role"), h(ClockInButton, null, "Clock-in"));
};
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n\n  padding: 14px;\n\n  margin-bottom: 8px;\n"])));
var ClockInButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 60px;\n\n  background: #45beb4;\n  border-radius: 4px;\n  border: none;\n\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n\n  color: #ffffff;\n"])));
var SectionName = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 32px;\n\n  color: #000000;\n\n  margin: 0px;\n"])));
var OrgName = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #5e5e5e;\n\n  margin: 0px;\n  margin-bottom: 10px;\n"])));
var SectionCode = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 41px;\n  height: 22px;\n\n  background: #ffffff;\n\n  border: 1px solid #9b9b9b;\n  border-radius: 4px;\n\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #000000;\n"])));
var Row = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var ShiftString = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n\n  color: #000000;\n\n  margin: 0px;\n  margin-top: 10px;\n"])));
var RoleName = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #5e5e5e;\n\n  margin-bottom: 14px;\n  margin-top: 4px;\n"])));
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  border-top: 1px solid #d9d9d9;\n"])));
/* harmony default export */ __webpack_exports__["a"] = (DailyCard);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "QRet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return p; });
/* unused harmony export useErrorBoundary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return h; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,
  a = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,
  v = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,
  l = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,
  m = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
function d(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function h(n) {
  return o = 1, s(B, n);
}
function s(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    var f = function f(n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
    };
    r.u = !0;
    var c = r.shouldComponentUpdate,
      e = r.componentWillUpdate;
    r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function p(u, i) {
  var o = d(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function y(u, i) {
  var o = d(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  o = 6, y(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(t++, 10),
    i = h();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  r = null, e && e(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [], t = 0)), u = r;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || ((i = preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, t.__v);
    }
  }), l && l(t, r);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./style/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// CONCATENATED MODULE: ../node_modules/preact-router/dist/preact-router.es.js

var EMPTY$1 = {};
function preact_router_es_assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }
  return obj;
}
function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
    c = url.match(reg),
    matches = {},
    ret;
  if (c && c[1]) {
    var p = c[1].split('&');
    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }
  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);
  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
        flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
        plus = ~flags.indexOf('+'),
        star = ~flags.indexOf('*'),
        val = url[i$1] || '';
      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}
function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0) type = 'push';
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }
  return "" + (url.pathname || '') + (url.search || '');
}
function route(url, replace) {
  if (replace === void 0) replace = false;
  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  }

  // only push URL into history if we can handle it
  if (preact_router_es_canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }
  return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function preact_router_es_canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }
  return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
  var didRoute = false;
  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute('href'),
    target = node.getAttribute('target');

  // ignore links with targets and non-path URLs
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }

  // attempt to route, if no match simply cede control to browser
  return route(href);
}
function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}
function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  var t = e.target;
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      }
      // if link is handled by the router, prevent browser defaults
      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener('click', delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var preact_router_es_Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;
  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };

  /** Check if the given URL can be matched against any children */
  Router.prototype.canRoute = function canRoute(url) {
    var children = Object(external_preact_["toChildArray"])(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };

  /** Re-render children with a new URL to match against. */
  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url);

    // trigger a manual re-route if we're not in the middle of an update:
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }
    this.updating = false;
  };
  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          preact_router_es_assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return Object(external_preact_["cloneElement"])(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(Object(external_preact_["toChildArray"])(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }
    return current;
  };
  return Router;
}(external_preact_["Component"]);
var preact_router_es_Link = function Link(props) {
  return Object(external_preact_["createElement"])('a', preact_router_es_assign({
    onClick: handleLinkClick
  }, props));
};
var preact_router_es_Route = function Route(props) {
  return Object(external_preact_["createElement"])(props.component, props);
};
preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;
preact_router_es_Router.exec = exec;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
// EXTERNAL MODULE: ./routes/home/index.js
var home = __webpack_require__("3br2");

// EXTERNAL MODULE: ../node_modules/preact/hooks/dist/hooks.module.js
var hooks_module = __webpack_require__("QRet");

// CONCATENATED MODULE: ./routes/profile/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



// Note: `user` comes from the URL, courtesy of our router
var profile_Profile = function Profile(_ref) {
  var user = _ref.user;
  var _useState = Object(hooks_module["k" /* useState */])(Date.now()),
    _useState2 = _slicedToArray(_useState, 2),
    time = _useState2[0],
    setTime = _useState2[1];
  var _useState3 = Object(hooks_module["k" /* useState */])(10),
    _useState4 = _slicedToArray(_useState3, 2),
    count = _useState4[0],
    setCount = _useState4[1];
  Object(hooks_module["d" /* useEffect */])(function () {
    var timer = setInterval(function () {
      return setTime(Date.now());
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, []);
  return Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("h1", null, "Profile: ", user), Object(external_preact_["h"])("p", null, "This is the user profile for a user named ", user, "."), Object(external_preact_["h"])("div", null, "Current time: ", new Date(time).toLocaleString()), Object(external_preact_["h"])("p", null, Object(external_preact_["h"])("button", {
    onClick: function onClick() {
      return setCount(function (count) {
        return count + 1;
      });
    }
  }, "Click Me"), ' ', "Clicked ", count, " times."));
};
/* harmony default export */ var profile = (profile_Profile);
// EXTERNAL MODULE: ./routes/login/index.js
var login = __webpack_require__("WCH/");

// CONCATENATED MODULE: ./components/app.js



// Code-splitting is automated for `routes` directory



var app_App = function App() {
  return Object(external_preact_["h"])("div", {
    id: "app"
  }, Object(external_preact_["h"])("main", null, Object(external_preact_["h"])(preact_router_es_Router, null, Object(external_preact_["h"])(home["a" /* default */], {
    path: "/"
  }), Object(external_preact_["h"])(login["a" /* default */], {
    path: "/login"
  }), Object(external_preact_["h"])(profile, {
    path: "/profile/",
    user: "me"
  }), Object(external_preact_["h"])(profile, {
    path: "/profile/:user"
  }))));
};
/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./index.js


/* harmony default export */ var index = __webpack_exports__["default"] = (app);

/***/ }),

/***/ "WCH/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0XxG");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Login = function Login() {
  return h(Container, null, h(PreTitle, null, "Welcome to"), h(StaffAnyTitle, null, "StaffAny"), h(SubTitle, null, "\uD83E\uDD54 Potato Edition"), h(StyledForm, null, h(StyledFormLabel, null, "Your Phone Number"), h(StyledTextInput, {
    type: "text",
    placeholder: "+62"
  }), h(StyledSubmit, null, "Login")));
};
var StaffAnyTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 40px;\n  line-height: 56px;\n\n  color: #45beb4;\n\n  margin-bottom: 0px;\n  margin-top: 0px;\n"])));
var PreTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].h3(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #9b9b9b;\n"])));
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].h4(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n\n  color: #000000;\n"])));
var StyledFormLabel = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].label(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n\n  color: #5e5e5e;\n"])));
var StyledTextInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].input(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n\n  align-items: center;\n  padding: 8px;\n  gap: 8px;\n\n  width: 255px;\n  height: 40px;\n\n  background: #ffffff;\n\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n"])));
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].form(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
var StyledSubmit = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 8px 24px;\n  gap: 8px;\n\n  width: 255px;\n  height: 40px;\n  left: 31px;\n  top: 246px;\n\n  background: #45beb4;\n  border-radius: 4px;\n  border: none;\n\n  margin-top: 12px;\n"])));
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n"])));
/* harmony default export */ __webpack_exports__["a"] = (Login);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "msIP":
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "rOP7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0XxG");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ClockedInCard = function ClockedInCard() {
  return h(Container, null, h(Row, null, h(SectionName, null, "Section 3X"), h(SectionCode, null, "S3X")), h(OrgName, null, "Potato Org"), h(Divider, null), h(ClockOutButton, null, "Clock-out"), h(BreakButton, null, "Start Break"), h(Row, null, h(Timing, {
    name: "CLOCK IN",
    number: "09:00"
  }), h(Timing, {
    name: "CLOCK OUT",
    number: "-"
  }), h(Timing, {
    name: "BREAK",
    number: "30 m"
  })));
};
var Timing = function Timing(props) {
  return h(Col, null, h(TimingName, null, props.name), h(TimingNumber, null, props.number));
};
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n\n  padding: 14px;\n\n  margin-bottom: 8px;\n"])));
var ClockOutButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 60px;\n\n  background: #fdcc71;\n  border-radius: 4px;\n  border: none;\n\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n\n  color: #ffffff;\n\n  margin-bottom: 8px;\n"])));
var BreakButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 60px;\n\n  background: #ffffff;\n  border-radius: 4px;\n  border: 2px solid #fdcc71;\n\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n\n  color: #fdcc71;\n"])));
var SectionName = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 32px;\n\n  color: #000000;\n\n  margin: 0px;\n"])));
var OrgName = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #5e5e5e;\n\n  margin: 0px;\n  margin-bottom: 10px;\n"])));
var SectionCode = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 41px;\n  height: 22px;\n\n  background: #ffffff;\n\n  border: 1px solid #9b9b9b;\n  border-radius: 4px;\n\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #000000;\n"])));
var Row = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  border-top: 1px solid #d9d9d9;\n"])));
var TimingName = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #5e5e5e;\n\n  margin: 0px;\n  margin-top: 15px;\n"])));
var TimingNumber = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].p(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 32px;\n\n  color: #000000;\n\n  margin: 0px;\n  margin-top: 10px;\n"])));
var Col = styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
/* harmony default export */ __webpack_exports__["a"] = (ClockedInCard);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "xVO4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("9K2m");
} else {}

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map