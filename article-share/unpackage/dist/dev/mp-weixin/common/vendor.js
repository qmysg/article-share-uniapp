(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 3);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);enumerableOnly && (symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;})), keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = null != arguments[i] ? arguments[i] : {};i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {_defineProperty(target, key, source[key]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];if (_i == null) return;var _arr = [];var _n = true;var _d = false;var _s, _e;try {for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct.bind();} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));return true;} catch (e) {return false;}}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo =

    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 =

    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 =

    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {
  var _wx$getSystemInfoSync =



  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';

var messages = {};

var locale;

{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}

function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}

function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function setLocale$1(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom };

  }
}

function populateParameters(result) {
  var _result$brand =




  result.brand,brand = _result$brand === void 0 ? '' : _result$brand,_result$model = result.model,model = _result$model === void 0 ? '' : _result$model,_result$system = result.system,system = _result$system === void 0 ? '' : _result$system,_result$language = result.language,language = _result$language === void 0 ? '' : _result$language,theme = result.theme,version = result.version,platform = result.platform,fontSizeSetting = result.fontSizeSetting,SDKVersion = result.SDKVersion,pixelRatio = result.pixelRatio,deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__11054F2",
    appName: "article-share",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.6.8",
    uniRuntimeVersion: "3.6.8",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined };


  Object.assign(result, parameters);
}

function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc' };

    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}

function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}

function getAppLanguage(defaultLanguage) {
  return getLocale$1 ?
  getLocale$1() :
  defaultLanguage;
}

function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }

  return _hostName;
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  } };


var showActionSheet = {
  args: function args(fromArgs) {
    if (typeof fromArgs === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  } };


var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,version = _result.version,language = _result.language,SDKVersion = _result.SDKVersion,theme = _result.theme;

    var _hostName = getHostName(result);

    var hostLanguage = language.replace('_', '-');

    result = sortObject(Object.assign(result, {
      appId: "__UNI__11054F2",
      appName: "article-share",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme }));

  } };


var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,brand = _result2.brand,model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);

    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model }));

  } };


var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);

    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0 }));

  } };


var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;

    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}

function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}

var cid;
var cidErrMsg;
var enabled;

function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}

function invokePushCallback(
args)
{
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message) };

    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message) });

    });
  }
}

var getPushCidCallbacks = [];

function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}

function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks =



  getApiCallbacks(args),success = _getApiCallbacks.success,fail = _getApiCallbacks.fail,complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);

  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid };

        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '') };

        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}

var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};

var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initUnknownHooks(mpOptions, vueOptions) {var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {return initHook$1(mpOptions, hook, excludes);});
}

function findHooks(vueOptions) {var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}

function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"article-share","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: '' };

        properties.virtualHostClass = {
          type: null,
          value: '' };

      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ?
  event.detail.__args__ || [event.detail] :
  [event.detail];

  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }

  var extraObj = processEventExtra(vm, extra, event, __args__);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);

  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function syncRefs(refs, newRefs) {
  var oldKeys = _construct(Set, _toConsumableArray(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {return oldValue.includes(value);})) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return syncRefs(refs, $refs);
    } });

}

function handleLink(event) {
  var _ref4 =


  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation },
  needVueOptions);
}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),_parseComponent2 = _slicedToArray(_parseComponent, 2),pageOptions = _parseComponent2[0],vueOptions = _parseComponent2[1];

  initHooks(pageOptions.methods, hooks$1, vueOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (typeof wx[name] !== 'function' && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 14:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 15:
/*!*****************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/ajax/api/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var requireApi = __webpack_require__(16);

var moudle = {};

requireApi.keys().forEach(function (key, index) {
  if (key == './index.js') return;
  Object.assign(moudle, requireApi(key));
});var _default =

moudle;exports.default = _default;

/***/ }),

/***/ 153:
/*!***************************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "id": "2852637",
  "name": "uniui图标库",
  "font_family": "uniicons",
  "css_prefix_text": "uniui-",
  "description": "",
  "glyphs": [
  {
    "icon_id": "25027049",
    "name": "yanse",
    "font_class": "color",
    "unicode": "e6cf",
    "unicode_decimal": 59087 },

  {
    "icon_id": "25027048",
    "name": "wallet",
    "font_class": "wallet",
    "unicode": "e6b1",
    "unicode_decimal": 59057 },

  {
    "icon_id": "25015720",
    "name": "settings-filled",
    "font_class": "settings-filled",
    "unicode": "e6ce",
    "unicode_decimal": 59086 },

  {
    "icon_id": "25015434",
    "name": "shimingrenzheng-filled",
    "font_class": "auth-filled",
    "unicode": "e6cc",
    "unicode_decimal": 59084 },

  {
    "icon_id": "24934246",
    "name": "shop-filled",
    "font_class": "shop-filled",
    "unicode": "e6cd",
    "unicode_decimal": 59085 },

  {
    "icon_id": "24934159",
    "name": "staff-filled-01",
    "font_class": "staff-filled",
    "unicode": "e6cb",
    "unicode_decimal": 59083 },

  {
    "icon_id": "24932461",
    "name": "VIP-filled",
    "font_class": "vip-filled",
    "unicode": "e6c6",
    "unicode_decimal": 59078 },

  {
    "icon_id": "24932462",
    "name": "plus_circle_fill",
    "font_class": "plus-filled",
    "unicode": "e6c7",
    "unicode_decimal": 59079 },

  {
    "icon_id": "24932463",
    "name": "folder_add-filled",
    "font_class": "folder-add-filled",
    "unicode": "e6c8",
    "unicode_decimal": 59080 },

  {
    "icon_id": "24932464",
    "name": "yanse-filled",
    "font_class": "color-filled",
    "unicode": "e6c9",
    "unicode_decimal": 59081 },

  {
    "icon_id": "24932465",
    "name": "tune-filled",
    "font_class": "tune-filled",
    "unicode": "e6ca",
    "unicode_decimal": 59082 },

  {
    "icon_id": "24932455",
    "name": "a-rilidaka-filled",
    "font_class": "calendar-filled",
    "unicode": "e6c0",
    "unicode_decimal": 59072 },

  {
    "icon_id": "24932456",
    "name": "notification-filled",
    "font_class": "notification-filled",
    "unicode": "e6c1",
    "unicode_decimal": 59073 },

  {
    "icon_id": "24932457",
    "name": "wallet-filled",
    "font_class": "wallet-filled",
    "unicode": "e6c2",
    "unicode_decimal": 59074 },

  {
    "icon_id": "24932458",
    "name": "paihangbang-filled",
    "font_class": "medal-filled",
    "unicode": "e6c3",
    "unicode_decimal": 59075 },

  {
    "icon_id": "24932459",
    "name": "gift-filled",
    "font_class": "gift-filled",
    "unicode": "e6c4",
    "unicode_decimal": 59076 },

  {
    "icon_id": "24932460",
    "name": "fire-filled",
    "font_class": "fire-filled",
    "unicode": "e6c5",
    "unicode_decimal": 59077 },

  {
    "icon_id": "24928001",
    "name": "refreshempty",
    "font_class": "refreshempty",
    "unicode": "e6bf",
    "unicode_decimal": 59071 },

  {
    "icon_id": "24926853",
    "name": "location-ellipse",
    "font_class": "location-filled",
    "unicode": "e6af",
    "unicode_decimal": 59055 },

  {
    "icon_id": "24926735",
    "name": "person-filled",
    "font_class": "person-filled",
    "unicode": "e69d",
    "unicode_decimal": 59037 },

  {
    "icon_id": "24926703",
    "name": "personadd-filled",
    "font_class": "personadd-filled",
    "unicode": "e698",
    "unicode_decimal": 59032 },

  {
    "icon_id": "24923351",
    "name": "back",
    "font_class": "back",
    "unicode": "e6b9",
    "unicode_decimal": 59065 },

  {
    "icon_id": "24923352",
    "name": "forward",
    "font_class": "forward",
    "unicode": "e6ba",
    "unicode_decimal": 59066 },

  {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrow-right",
    "unicode": "e6bb",
    "unicode_decimal": 59067 },

  {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrowthinright",
    "unicode": "e6bb",
    "unicode_decimal": 59067 },

  {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrow-left",
    "unicode": "e6bc",
    "unicode_decimal": 59068 },

  {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrowthinleft",
    "unicode": "e6bc",
    "unicode_decimal": 59068 },

  {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrow-up",
    "unicode": "e6bd",
    "unicode_decimal": 59069 },

  {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrowthinup",
    "unicode": "e6bd",
    "unicode_decimal": 59069 },

  {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrow-down",
    "unicode": "e6be",
    "unicode_decimal": 59070 },
  {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrowthindown",
    "unicode": "e6be",
    "unicode_decimal": 59070 },

  {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "bottom",
    "unicode": "e6b8",
    "unicode_decimal": 59064 },
  {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "arrowdown",
    "unicode": "e6b8",
    "unicode_decimal": 59064 },

  {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "right",
    "unicode": "e6b5",
    "unicode_decimal": 59061 },

  {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "arrowright",
    "unicode": "e6b5",
    "unicode_decimal": 59061 },

  {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "top",
    "unicode": "e6b6",
    "unicode_decimal": 59062 },

  {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "arrowup",
    "unicode": "e6b6",
    "unicode_decimal": 59062 },

  {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "left",
    "unicode": "e6b7",
    "unicode_decimal": 59063 },

  {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "arrowleft",
    "unicode": "e6b7",
    "unicode_decimal": 59063 },

  {
    "icon_id": "24923334",
    "name": "eye",
    "font_class": "eye",
    "unicode": "e651",
    "unicode_decimal": 58961 },

  {
    "icon_id": "24923335",
    "name": "eye-filled",
    "font_class": "eye-filled",
    "unicode": "e66a",
    "unicode_decimal": 58986 },

  {
    "icon_id": "24923336",
    "name": "eye-slash",
    "font_class": "eye-slash",
    "unicode": "e6b3",
    "unicode_decimal": 59059 },

  {
    "icon_id": "24923337",
    "name": "eye-slash-filled",
    "font_class": "eye-slash-filled",
    "unicode": "e6b4",
    "unicode_decimal": 59060 },

  {
    "icon_id": "24923305",
    "name": "info-filled",
    "font_class": "info-filled",
    "unicode": "e649",
    "unicode_decimal": 58953 },

  {
    "icon_id": "24923299",
    "name": "reload-01",
    "font_class": "reload",
    "unicode": "e6b2",
    "unicode_decimal": 59058 },

  {
    "icon_id": "24923195",
    "name": "mic_slash_fill",
    "font_class": "micoff-filled",
    "unicode": "e6b0",
    "unicode_decimal": 59056 },

  {
    "icon_id": "24923165",
    "name": "map-pin-ellipse",
    "font_class": "map-pin-ellipse",
    "unicode": "e6ac",
    "unicode_decimal": 59052 },

  {
    "icon_id": "24923166",
    "name": "map-pin",
    "font_class": "map-pin",
    "unicode": "e6ad",
    "unicode_decimal": 59053 },

  {
    "icon_id": "24923167",
    "name": "location",
    "font_class": "location",
    "unicode": "e6ae",
    "unicode_decimal": 59054 },

  {
    "icon_id": "24923064",
    "name": "starhalf",
    "font_class": "starhalf",
    "unicode": "e683",
    "unicode_decimal": 59011 },

  {
    "icon_id": "24923065",
    "name": "star",
    "font_class": "star",
    "unicode": "e688",
    "unicode_decimal": 59016 },

  {
    "icon_id": "24923066",
    "name": "star-filled",
    "font_class": "star-filled",
    "unicode": "e68f",
    "unicode_decimal": 59023 },

  {
    "icon_id": "24899646",
    "name": "a-rilidaka",
    "font_class": "calendar",
    "unicode": "e6a0",
    "unicode_decimal": 59040 },

  {
    "icon_id": "24899647",
    "name": "fire",
    "font_class": "fire",
    "unicode": "e6a1",
    "unicode_decimal": 59041 },

  {
    "icon_id": "24899648",
    "name": "paihangbang",
    "font_class": "medal",
    "unicode": "e6a2",
    "unicode_decimal": 59042 },

  {
    "icon_id": "24899649",
    "name": "font",
    "font_class": "font",
    "unicode": "e6a3",
    "unicode_decimal": 59043 },

  {
    "icon_id": "24899650",
    "name": "gift",
    "font_class": "gift",
    "unicode": "e6a4",
    "unicode_decimal": 59044 },

  {
    "icon_id": "24899651",
    "name": "link",
    "font_class": "link",
    "unicode": "e6a5",
    "unicode_decimal": 59045 },

  {
    "icon_id": "24899652",
    "name": "notification",
    "font_class": "notification",
    "unicode": "e6a6",
    "unicode_decimal": 59046 },

  {
    "icon_id": "24899653",
    "name": "staff",
    "font_class": "staff",
    "unicode": "e6a7",
    "unicode_decimal": 59047 },

  {
    "icon_id": "24899654",
    "name": "VIP",
    "font_class": "vip",
    "unicode": "e6a8",
    "unicode_decimal": 59048 },

  {
    "icon_id": "24899655",
    "name": "folder_add",
    "font_class": "folder-add",
    "unicode": "e6a9",
    "unicode_decimal": 59049 },

  {
    "icon_id": "24899656",
    "name": "tune",
    "font_class": "tune",
    "unicode": "e6aa",
    "unicode_decimal": 59050 },

  {
    "icon_id": "24899657",
    "name": "shimingrenzheng",
    "font_class": "auth",
    "unicode": "e6ab",
    "unicode_decimal": 59051 },

  {
    "icon_id": "24899565",
    "name": "person",
    "font_class": "person",
    "unicode": "e699",
    "unicode_decimal": 59033 },

  {
    "icon_id": "24899566",
    "name": "email-filled",
    "font_class": "email-filled",
    "unicode": "e69a",
    "unicode_decimal": 59034 },

  {
    "icon_id": "24899567",
    "name": "phone-filled",
    "font_class": "phone-filled",
    "unicode": "e69b",
    "unicode_decimal": 59035 },

  {
    "icon_id": "24899568",
    "name": "phone",
    "font_class": "phone",
    "unicode": "e69c",
    "unicode_decimal": 59036 },

  {
    "icon_id": "24899570",
    "name": "email",
    "font_class": "email",
    "unicode": "e69e",
    "unicode_decimal": 59038 },

  {
    "icon_id": "24899571",
    "name": "personadd",
    "font_class": "personadd",
    "unicode": "e69f",
    "unicode_decimal": 59039 },

  {
    "icon_id": "24899558",
    "name": "chatboxes-filled",
    "font_class": "chatboxes-filled",
    "unicode": "e692",
    "unicode_decimal": 59026 },

  {
    "icon_id": "24899559",
    "name": "contact",
    "font_class": "contact",
    "unicode": "e693",
    "unicode_decimal": 59027 },

  {
    "icon_id": "24899560",
    "name": "chatbubble-filled",
    "font_class": "chatbubble-filled",
    "unicode": "e694",
    "unicode_decimal": 59028 },

  {
    "icon_id": "24899561",
    "name": "contact-filled",
    "font_class": "contact-filled",
    "unicode": "e695",
    "unicode_decimal": 59029 },

  {
    "icon_id": "24899562",
    "name": "chatboxes",
    "font_class": "chatboxes",
    "unicode": "e696",
    "unicode_decimal": 59030 },

  {
    "icon_id": "24899563",
    "name": "chatbubble",
    "font_class": "chatbubble",
    "unicode": "e697",
    "unicode_decimal": 59031 },

  {
    "icon_id": "24881290",
    "name": "upload-filled",
    "font_class": "upload-filled",
    "unicode": "e68e",
    "unicode_decimal": 59022 },

  {
    "icon_id": "24881292",
    "name": "upload",
    "font_class": "upload",
    "unicode": "e690",
    "unicode_decimal": 59024 },

  {
    "icon_id": "24881293",
    "name": "weixin",
    "font_class": "weixin",
    "unicode": "e691",
    "unicode_decimal": 59025 },

  {
    "icon_id": "24881274",
    "name": "compose",
    "font_class": "compose",
    "unicode": "e67f",
    "unicode_decimal": 59007 },

  {
    "icon_id": "24881275",
    "name": "qq",
    "font_class": "qq",
    "unicode": "e680",
    "unicode_decimal": 59008 },

  {
    "icon_id": "24881276",
    "name": "download-filled",
    "font_class": "download-filled",
    "unicode": "e681",
    "unicode_decimal": 59009 },

  {
    "icon_id": "24881277",
    "name": "pengyouquan",
    "font_class": "pyq",
    "unicode": "e682",
    "unicode_decimal": 59010 },

  {
    "icon_id": "24881279",
    "name": "sound",
    "font_class": "sound",
    "unicode": "e684",
    "unicode_decimal": 59012 },

  {
    "icon_id": "24881280",
    "name": "trash-filled",
    "font_class": "trash-filled",
    "unicode": "e685",
    "unicode_decimal": 59013 },

  {
    "icon_id": "24881281",
    "name": "sound-filled",
    "font_class": "sound-filled",
    "unicode": "e686",
    "unicode_decimal": 59014 },

  {
    "icon_id": "24881282",
    "name": "trash",
    "font_class": "trash",
    "unicode": "e687",
    "unicode_decimal": 59015 },

  {
    "icon_id": "24881284",
    "name": "videocam-filled",
    "font_class": "videocam-filled",
    "unicode": "e689",
    "unicode_decimal": 59017 },

  {
    "icon_id": "24881285",
    "name": "spinner-cycle",
    "font_class": "spinner-cycle",
    "unicode": "e68a",
    "unicode_decimal": 59018 },

  {
    "icon_id": "24881286",
    "name": "weibo",
    "font_class": "weibo",
    "unicode": "e68b",
    "unicode_decimal": 59019 },

  {
    "icon_id": "24881288",
    "name": "videocam",
    "font_class": "videocam",
    "unicode": "e68c",
    "unicode_decimal": 59020 },

  {
    "icon_id": "24881289",
    "name": "download",
    "font_class": "download",
    "unicode": "e68d",
    "unicode_decimal": 59021 },

  {
    "icon_id": "24879601",
    "name": "help",
    "font_class": "help",
    "unicode": "e679",
    "unicode_decimal": 59001 },

  {
    "icon_id": "24879602",
    "name": "navigate-filled",
    "font_class": "navigate-filled",
    "unicode": "e67a",
    "unicode_decimal": 59002 },

  {
    "icon_id": "24879603",
    "name": "plusempty",
    "font_class": "plusempty",
    "unicode": "e67b",
    "unicode_decimal": 59003 },

  {
    "icon_id": "24879604",
    "name": "smallcircle",
    "font_class": "smallcircle",
    "unicode": "e67c",
    "unicode_decimal": 59004 },

  {
    "icon_id": "24879605",
    "name": "minus-filled",
    "font_class": "minus-filled",
    "unicode": "e67d",
    "unicode_decimal": 59005 },

  {
    "icon_id": "24879606",
    "name": "micoff",
    "font_class": "micoff",
    "unicode": "e67e",
    "unicode_decimal": 59006 },

  {
    "icon_id": "24879588",
    "name": "closeempty",
    "font_class": "closeempty",
    "unicode": "e66c",
    "unicode_decimal": 58988 },

  {
    "icon_id": "24879589",
    "name": "clear",
    "font_class": "clear",
    "unicode": "e66d",
    "unicode_decimal": 58989 },

  {
    "icon_id": "24879590",
    "name": "navigate",
    "font_class": "navigate",
    "unicode": "e66e",
    "unicode_decimal": 58990 },

  {
    "icon_id": "24879591",
    "name": "minus",
    "font_class": "minus",
    "unicode": "e66f",
    "unicode_decimal": 58991 },

  {
    "icon_id": "24879592",
    "name": "image",
    "font_class": "image",
    "unicode": "e670",
    "unicode_decimal": 58992 },

  {
    "icon_id": "24879593",
    "name": "mic",
    "font_class": "mic",
    "unicode": "e671",
    "unicode_decimal": 58993 },

  {
    "icon_id": "24879594",
    "name": "paperplane",
    "font_class": "paperplane",
    "unicode": "e672",
    "unicode_decimal": 58994 },

  {
    "icon_id": "24879595",
    "name": "close",
    "font_class": "close",
    "unicode": "e673",
    "unicode_decimal": 58995 },

  {
    "icon_id": "24879596",
    "name": "help-filled",
    "font_class": "help-filled",
    "unicode": "e674",
    "unicode_decimal": 58996 },

  {
    "icon_id": "24879597",
    "name": "plus-filled",
    "font_class": "paperplane-filled",
    "unicode": "e675",
    "unicode_decimal": 58997 },

  {
    "icon_id": "24879598",
    "name": "plus",
    "font_class": "plus",
    "unicode": "e676",
    "unicode_decimal": 58998 },

  {
    "icon_id": "24879599",
    "name": "mic-filled",
    "font_class": "mic-filled",
    "unicode": "e677",
    "unicode_decimal": 58999 },

  {
    "icon_id": "24879600",
    "name": "image-filled",
    "font_class": "image-filled",
    "unicode": "e678",
    "unicode_decimal": 59000 },

  {
    "icon_id": "24855900",
    "name": "locked-filled",
    "font_class": "locked-filled",
    "unicode": "e668",
    "unicode_decimal": 58984 },

  {
    "icon_id": "24855901",
    "name": "info",
    "font_class": "info",
    "unicode": "e669",
    "unicode_decimal": 58985 },

  {
    "icon_id": "24855903",
    "name": "locked",
    "font_class": "locked",
    "unicode": "e66b",
    "unicode_decimal": 58987 },

  {
    "icon_id": "24855884",
    "name": "camera-filled",
    "font_class": "camera-filled",
    "unicode": "e658",
    "unicode_decimal": 58968 },

  {
    "icon_id": "24855885",
    "name": "chat-filled",
    "font_class": "chat-filled",
    "unicode": "e659",
    "unicode_decimal": 58969 },

  {
    "icon_id": "24855886",
    "name": "camera",
    "font_class": "camera",
    "unicode": "e65a",
    "unicode_decimal": 58970 },

  {
    "icon_id": "24855887",
    "name": "circle",
    "font_class": "circle",
    "unicode": "e65b",
    "unicode_decimal": 58971 },

  {
    "icon_id": "24855888",
    "name": "checkmarkempty",
    "font_class": "checkmarkempty",
    "unicode": "e65c",
    "unicode_decimal": 58972 },

  {
    "icon_id": "24855889",
    "name": "chat",
    "font_class": "chat",
    "unicode": "e65d",
    "unicode_decimal": 58973 },

  {
    "icon_id": "24855890",
    "name": "circle-filled",
    "font_class": "circle-filled",
    "unicode": "e65e",
    "unicode_decimal": 58974 },

  {
    "icon_id": "24855891",
    "name": "flag",
    "font_class": "flag",
    "unicode": "e65f",
    "unicode_decimal": 58975 },

  {
    "icon_id": "24855892",
    "name": "flag-filled",
    "font_class": "flag-filled",
    "unicode": "e660",
    "unicode_decimal": 58976 },

  {
    "icon_id": "24855893",
    "name": "gear-filled",
    "font_class": "gear-filled",
    "unicode": "e661",
    "unicode_decimal": 58977 },

  {
    "icon_id": "24855894",
    "name": "home",
    "font_class": "home",
    "unicode": "e662",
    "unicode_decimal": 58978 },

  {
    "icon_id": "24855895",
    "name": "home-filled",
    "font_class": "home-filled",
    "unicode": "e663",
    "unicode_decimal": 58979 },

  {
    "icon_id": "24855896",
    "name": "gear",
    "font_class": "gear",
    "unicode": "e664",
    "unicode_decimal": 58980 },

  {
    "icon_id": "24855897",
    "name": "smallcircle-filled",
    "font_class": "smallcircle-filled",
    "unicode": "e665",
    "unicode_decimal": 58981 },

  {
    "icon_id": "24855898",
    "name": "map-filled",
    "font_class": "map-filled",
    "unicode": "e666",
    "unicode_decimal": 58982 },

  {
    "icon_id": "24855899",
    "name": "map",
    "font_class": "map",
    "unicode": "e667",
    "unicode_decimal": 58983 },

  {
    "icon_id": "24855825",
    "name": "refresh-filled",
    "font_class": "refresh-filled",
    "unicode": "e656",
    "unicode_decimal": 58966 },

  {
    "icon_id": "24855826",
    "name": "refresh",
    "font_class": "refresh",
    "unicode": "e657",
    "unicode_decimal": 58967 },

  {
    "icon_id": "24855808",
    "name": "cloud-upload",
    "font_class": "cloud-upload",
    "unicode": "e645",
    "unicode_decimal": 58949 },

  {
    "icon_id": "24855809",
    "name": "cloud-download-filled",
    "font_class": "cloud-download-filled",
    "unicode": "e646",
    "unicode_decimal": 58950 },

  {
    "icon_id": "24855810",
    "name": "cloud-download",
    "font_class": "cloud-download",
    "unicode": "e647",
    "unicode_decimal": 58951 },

  {
    "icon_id": "24855811",
    "name": "cloud-upload-filled",
    "font_class": "cloud-upload-filled",
    "unicode": "e648",
    "unicode_decimal": 58952 },

  {
    "icon_id": "24855813",
    "name": "redo",
    "font_class": "redo",
    "unicode": "e64a",
    "unicode_decimal": 58954 },

  {
    "icon_id": "24855814",
    "name": "images-filled",
    "font_class": "images-filled",
    "unicode": "e64b",
    "unicode_decimal": 58955 },

  {
    "icon_id": "24855815",
    "name": "undo-filled",
    "font_class": "undo-filled",
    "unicode": "e64c",
    "unicode_decimal": 58956 },

  {
    "icon_id": "24855816",
    "name": "more",
    "font_class": "more",
    "unicode": "e64d",
    "unicode_decimal": 58957 },

  {
    "icon_id": "24855817",
    "name": "more-filled",
    "font_class": "more-filled",
    "unicode": "e64e",
    "unicode_decimal": 58958 },

  {
    "icon_id": "24855818",
    "name": "undo",
    "font_class": "undo",
    "unicode": "e64f",
    "unicode_decimal": 58959 },

  {
    "icon_id": "24855819",
    "name": "images",
    "font_class": "images",
    "unicode": "e650",
    "unicode_decimal": 58960 },

  {
    "icon_id": "24855821",
    "name": "paperclip",
    "font_class": "paperclip",
    "unicode": "e652",
    "unicode_decimal": 58962 },

  {
    "icon_id": "24855822",
    "name": "settings",
    "font_class": "settings",
    "unicode": "e653",
    "unicode_decimal": 58963 },

  {
    "icon_id": "24855823",
    "name": "search",
    "font_class": "search",
    "unicode": "e654",
    "unicode_decimal": 58964 },

  {
    "icon_id": "24855824",
    "name": "redo-filled",
    "font_class": "redo-filled",
    "unicode": "e655",
    "unicode_decimal": 58965 },

  {
    "icon_id": "24841702",
    "name": "list",
    "font_class": "list",
    "unicode": "e644",
    "unicode_decimal": 58948 },

  {
    "icon_id": "24841489",
    "name": "mail-open-filled",
    "font_class": "mail-open-filled",
    "unicode": "e63a",
    "unicode_decimal": 58938 },

  {
    "icon_id": "24841491",
    "name": "hand-thumbsdown-filled",
    "font_class": "hand-down-filled",
    "unicode": "e63c",
    "unicode_decimal": 58940 },

  {
    "icon_id": "24841492",
    "name": "hand-thumbsdown",
    "font_class": "hand-down",
    "unicode": "e63d",
    "unicode_decimal": 58941 },

  {
    "icon_id": "24841493",
    "name": "hand-thumbsup-filled",
    "font_class": "hand-up-filled",
    "unicode": "e63e",
    "unicode_decimal": 58942 },

  {
    "icon_id": "24841494",
    "name": "hand-thumbsup",
    "font_class": "hand-up",
    "unicode": "e63f",
    "unicode_decimal": 58943 },

  {
    "icon_id": "24841496",
    "name": "heart-filled",
    "font_class": "heart-filled",
    "unicode": "e641",
    "unicode_decimal": 58945 },

  {
    "icon_id": "24841498",
    "name": "mail-open",
    "font_class": "mail-open",
    "unicode": "e643",
    "unicode_decimal": 58947 },

  {
    "icon_id": "24841488",
    "name": "heart",
    "font_class": "heart",
    "unicode": "e639",
    "unicode_decimal": 58937 },

  {
    "icon_id": "24839963",
    "name": "loop",
    "font_class": "loop",
    "unicode": "e633",
    "unicode_decimal": 58931 },

  {
    "icon_id": "24839866",
    "name": "pulldown",
    "font_class": "pulldown",
    "unicode": "e632",
    "unicode_decimal": 58930 },

  {
    "icon_id": "24813798",
    "name": "scan",
    "font_class": "scan",
    "unicode": "e62a",
    "unicode_decimal": 58922 },

  {
    "icon_id": "24813786",
    "name": "bars",
    "font_class": "bars",
    "unicode": "e627",
    "unicode_decimal": 58919 },

  {
    "icon_id": "24813788",
    "name": "cart-filled",
    "font_class": "cart-filled",
    "unicode": "e629",
    "unicode_decimal": 58921 },

  {
    "icon_id": "24813790",
    "name": "checkbox",
    "font_class": "checkbox",
    "unicode": "e62b",
    "unicode_decimal": 58923 },

  {
    "icon_id": "24813791",
    "name": "checkbox-filled",
    "font_class": "checkbox-filled",
    "unicode": "e62c",
    "unicode_decimal": 58924 },

  {
    "icon_id": "24813794",
    "name": "shop",
    "font_class": "shop",
    "unicode": "e62f",
    "unicode_decimal": 58927 },

  {
    "icon_id": "24813795",
    "name": "headphones",
    "font_class": "headphones",
    "unicode": "e630",
    "unicode_decimal": 58928 },

  {
    "icon_id": "24813796",
    "name": "cart",
    "font_class": "cart",
    "unicode": "e631",
    "unicode_decimal": 58929 }] };exports.default = _default;

/***/ }),

/***/ 16:
/*!******************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/ajax/api sync .js$ ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": 15,
	"./interface/common.js": 17,
	"./interface/home.js": 19,
	"./interface/user_login.js": 20
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 16;

/***/ }),

/***/ 161:
/*!******************************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/uni_modules/uni-forms/components/uni-forms/validate.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });Object.defineProperty(subClass, "prototype", { writable: false });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;} else if (call !== void 0) {throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _regeneratorRuntime() {"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return generator._invoke = function (innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}(innerFn, self, context), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;this._invoke = function (method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();};}function maybeInvokeDelegate(delegate, context) {var method = delegate.iterator[context.method];if (undefined === method) {if (context.delegate = null, "throw" === context.method) {if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (object) {var keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, catch: function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}var pattern = { email: /^\S+?@\S+?\.\S+?$/,
  idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  url: new RegExp(
  "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
  'i') };


var FORMAT_MAPPING = {
  "int": 'integer',
  "bool": 'boolean',
  "double": 'number',
  "long": 'number',
  "password": 'string'
  // "fileurls": 'array'
};

function formatMessage(args) {var resources = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var defaultMessage = ['label'];
  defaultMessage.forEach(function (item) {
    if (args[item] === undefined) {
      args[item] = '';
    }
  });

  var str = resources;
  for (var key in args) {
    var reg = new RegExp('{' + key + '}');
    str = str.replace(reg, args[key]);
  }
  return str;
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (typeof value === 'string' && !value) {
    return true;
  }

  if (Array.isArray(value) && !value.length) {
    return true;
  }

  if (type === 'object' && !Object.keys(value).length) {
    return true;
  }

  return false;
}

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  string: function string(value) {
    return typeof value === 'string';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  "boolean": function boolean(value) {
    return typeof value === 'boolean';
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  date: function date(value) {
    return value instanceof Date;
  },
  timestamp: function timestamp(value) {
    if (!this.integer(value) || Math.abs(value).toString().length > 16) {
      return false;
    }
    return true;
  },
  file: function file(value) {
    return typeof value.url === 'string';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  pattern: function pattern(reg, value) {
    try {
      return new RegExp(reg).test(value);
    } catch (e) {
      return false;
    }
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  idcard: function idcard(value) {
    return typeof value === 'string' && !!value.match(pattern.idcard);
  },
  'url-https': function urlHttps(value) {
    return this.url(value) && value.startsWith('https://');
  },
  'url-scheme': function urlScheme(value) {
    return value.startsWith('://');
  },
  'url-web': function urlWeb(value) {
    return false;
  } };var


RuleValidator = /*#__PURE__*/function () {

  function RuleValidator(message) {_classCallCheck(this, RuleValidator);
    this._message = message;
  }_createClass(RuleValidator, [{ key: "validateRule", value: function () {var _validateRule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(

      function _callee(fieldKey, fieldValue, value, data, allData) {var result, rules, hasRequired, message, i, rule, vt, now, resultExpr;return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                result = null;

                rules = fieldValue.rules;

                hasRequired = rules.findIndex(function (item) {
                  return item.required;
                });if (!(
                hasRequired < 0)) {_context.next = 8;break;}if (!(
                value === null || value === undefined)) {_context.next = 6;break;}return _context.abrupt("return",
                result);case 6:if (!(

                typeof value === 'string' && !value.length)) {_context.next = 8;break;}return _context.abrupt("return",
                result);case 8:



                message = this._message;if (!(

                rules === undefined)) {_context.next = 11;break;}return _context.abrupt("return",
                message['default']);case 11:


                i = 0;case 12:if (!(i < rules.length)) {_context.next = 35;break;}
                rule = rules[i];
                vt = this._getValidateType(rule);

                Object.assign(rule, {
                  label: fieldValue.label || "[\"".concat(fieldKey, "\"]") });if (!


                RuleValidatorHelper[vt]) {_context.next = 20;break;}
                result = RuleValidatorHelper[vt](rule, value, message);if (!(
                result != null)) {_context.next = 20;break;}return _context.abrupt("break", 35);case 20:if (!




                rule.validateExpr) {_context.next = 26;break;}
                now = Date.now();
                resultExpr = rule.validateExpr(value, allData, now);if (!(
                resultExpr === false)) {_context.next = 26;break;}
                result = this._getMessage(rule, rule.errorMessage || this._message['default']);return _context.abrupt("break", 35);case 26:if (!




                rule.validateFunction) {_context.next = 32;break;}_context.next = 29;return (
                  this.validateFunction(rule, value, data, allData, vt));case 29:result = _context.sent;if (!(
                result !== null)) {_context.next = 32;break;}return _context.abrupt("break", 35);case 32:i++;_context.next = 12;break;case 35:





                if (result !== null) {
                  result = message.TAG + result;
                }return _context.abrupt("return",

                result);case 37:case "end":return _context.stop();}}}, _callee, this);}));function validateRule(_x, _x2, _x3, _x4, _x5) {return _validateRule.apply(this, arguments);}return validateRule;}() }, { key: "validateFunction", value: function () {var _validateFunction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(


      function _callee2(rule, value, data, allData, vt) {var result, callbackMessage, res;return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                result = null;_context2.prev = 1;

                callbackMessage = null;_context2.next = 5;return (
                  rule.validateFunction(rule, value, allData || data, function (message) {
                    callbackMessage = message;
                  }));case 5:res = _context2.sent;
                if (callbackMessage || typeof res === 'string' && res || res === false) {
                  result = this._getMessage(rule, callbackMessage || res, vt);
                }_context2.next = 12;break;case 9:_context2.prev = 9;_context2.t0 = _context2["catch"](1);

                result = this._getMessage(rule, _context2.t0.message, vt);case 12:return _context2.abrupt("return",

                result);case 13:case "end":return _context2.stop();}}}, _callee2, this, [[1, 9]]);}));function validateFunction(_x6, _x7, _x8, _x9, _x10) {return _validateFunction.apply(this, arguments);}return validateFunction;}() }, { key: "_getMessage", value:


    function _getMessage(rule, message, vt) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message['default']);
    } }, { key: "_getValidateType", value:

    function _getValidateType(rule) {
      var result = '';
      if (rule.required) {
        result = 'required';
      } else if (rule.format) {
        result = 'format';
      } else if (rule.arrayType) {
        result = 'arrayTypeFormat';
      } else if (rule.range) {
        result = 'range';
      } else if (rule.maximum !== undefined || rule.minimum !== undefined) {
        result = 'rangeNumber';
      } else if (rule.maxLength !== undefined || rule.minLength !== undefined) {
        result = 'rangeLength';
      } else if (rule.pattern) {
        result = 'pattern';
      } else if (rule.validateFunction) {
        result = 'validateFunction';
      }
      return result;
    } }]);return RuleValidator;}();


var RuleValidatorHelper = {
  required: function required(rule, value, message) {
    if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
      return formatMessage(rule, rule.errorMessage || message.required);
    }

    return null;
  },

  range: function range(rule, value, message) {
    var
    range =

    rule.range,errorMessage = rule.errorMessage;

    var list = new Array(range.length);
    for (var i = 0; i < range.length; i++) {
      var item = range[i];
      if (types.object(item) && item.value !== undefined) {
        list[i] = item.value;
      } else {
        list[i] = item;
      }
    }

    var result = false;
    if (Array.isArray(value)) {
      result = new Set(value.concat(list)).size === list.length;
    } else {
      if (list.indexOf(value) > -1) {
        result = true;
      }
    }

    if (!result) {
      return formatMessage(rule, errorMessage || message['enum']);
    }

    return null;
  },

  rangeNumber: function rangeNumber(rule, value, message) {
    if (!types.number(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }

    var
    minimum =



    rule.minimum,maximum = rule.maximum,exclusiveMinimum = rule.exclusiveMinimum,exclusiveMaximum = rule.exclusiveMaximum;
    var min = exclusiveMinimum ? value <= minimum : value < minimum;
    var max = exclusiveMaximum ? value >= maximum : value > maximum;

    if (minimum !== undefined && min) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMinimum ?
      'exclusiveMinimum' : 'minimum']);

    } else if (maximum !== undefined && max) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMaximum ?
      'exclusiveMaximum' : 'maximum']);

    } else if (minimum !== undefined && maximum !== undefined && (min || max)) {
      return formatMessage(rule, rule.errorMessage || message['number'].range);
    }

    return null;
  },

  rangeLength: function rangeLength(rule, value, message) {
    if (!types.string(value) && !types.array(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }

    var min = rule.minLength;
    var max = rule.maxLength;
    var val = value.length;

    if (min !== undefined && val < min) {
      return formatMessage(rule, rule.errorMessage || message['length'].minLength);
    } else if (max !== undefined && val > max) {
      return formatMessage(rule, rule.errorMessage || message['length'].maxLength);
    } else if (min !== undefined && max !== undefined && (val < min || val > max)) {
      return formatMessage(rule, rule.errorMessage || message['length'].range);
    }

    return null;
  },

  pattern: function pattern(rule, value, message) {
    if (!types['pattern'](rule.pattern, value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }

    return null;
  },

  format: function format(rule, value, message) {
    var customTypes = Object.keys(types);
    var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;

    if (customTypes.indexOf(format) > -1) {
      if (!types[format](value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
    }

    return null;
  },

  arrayTypeFormat: function arrayTypeFormat(rule, value, message) {
    if (!Array.isArray(value)) {
      return formatMessage(rule, rule.errorMessage || message.typeError);
    }

    for (var i = 0; i < value.length; i++) {
      var element = value[i];
      var formatResult = this.format(rule, element, message);
      if (formatResult !== null) {
        return formatResult;
      }
    }

    return null;
  } };var


SchemaValidator = /*#__PURE__*/function (_RuleValidator) {_inherits(SchemaValidator, _RuleValidator);var _super = _createSuper(SchemaValidator);

  function SchemaValidator(schema, options) {var _this;_classCallCheck(this, SchemaValidator);
    _this = _super.call(this, SchemaValidator.message);

    _this._schema = schema;
    _this._options = options || null;return _this;
  }_createClass(SchemaValidator, [{ key: "updateSchema", value:

    function updateSchema(schema) {
      this._schema = schema;
    } }, { key: "validate", value: function () {var _validate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(

      function _callee3(data, allData) {var result;return _regeneratorRuntime().wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                result = this._checkFieldInSchema(data);if (
                result) {_context3.next = 5;break;}_context3.next = 4;return (
                  this.invokeValidate(data, false, allData));case 4:result = _context3.sent;case 5:return _context3.abrupt("return",

                result.length ? result[0] : null);case 6:case "end":return _context3.stop();}}}, _callee3, this);}));function validate(_x11, _x12) {return _validate.apply(this, arguments);}return validate;}() }, { key: "validateAll", value: function () {var _validateAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(


      function _callee4(data, allData) {var result;return _regeneratorRuntime().wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                result = this._checkFieldInSchema(data);if (
                result) {_context4.next = 5;break;}_context4.next = 4;return (
                  this.invokeValidate(data, true, allData));case 4:result = _context4.sent;case 5:return _context4.abrupt("return",

                result);case 6:case "end":return _context4.stop();}}}, _callee4, this);}));function validateAll(_x13, _x14) {return _validateAll.apply(this, arguments);}return validateAll;}() }, { key: "validateUpdate", value: function () {var _validateUpdate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(


      function _callee5(data, allData) {var result;return _regeneratorRuntime().wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                result = this._checkFieldInSchema(data);if (
                result) {_context5.next = 5;break;}_context5.next = 4;return (
                  this.invokeValidateUpdate(data, false, allData));case 4:result = _context5.sent;case 5:return _context5.abrupt("return",

                result.length ? result[0] : null);case 6:case "end":return _context5.stop();}}}, _callee5, this);}));function validateUpdate(_x15, _x16) {return _validateUpdate.apply(this, arguments);}return validateUpdate;}() }, { key: "invokeValidate", value: function () {var _invokeValidate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(


      function _callee6(data, all, allData) {var result, schema, key, value, errorMessage;return _regeneratorRuntime().wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                result = [];
                schema = this._schema;_context6.t0 = _regeneratorRuntime().keys(
                schema);case 3:if ((_context6.t1 = _context6.t0()).done) {_context6.next = 15;break;}key = _context6.t1.value;
                value = schema[key];_context6.next = 8;return (
                  this.validateRule(key, value, data[key], data, allData));case 8:errorMessage = _context6.sent;if (!(
                errorMessage != null)) {_context6.next = 13;break;}
                result.push({
                  key: key,
                  errorMessage: errorMessage });if (

                all) {_context6.next = 13;break;}return _context6.abrupt("break", 15);case 13:_context6.next = 3;break;case 15:return _context6.abrupt("return",


                result);case 16:case "end":return _context6.stop();}}}, _callee6, this);}));function invokeValidate(_x17, _x18, _x19) {return _invokeValidate.apply(this, arguments);}return invokeValidate;}() }, { key: "invokeValidateUpdate", value: function () {var _invokeValidateUpdate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(


      function _callee7(data, all, allData) {var result, key, errorMessage;return _regeneratorRuntime().wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                result = [];_context7.t0 = _regeneratorRuntime().keys(
                data);case 2:if ((_context7.t1 = _context7.t0()).done) {_context7.next = 13;break;}key = _context7.t1.value;_context7.next = 6;return (
                  this.validateRule(key, this._schema[key], data[key], data, allData));case 6:errorMessage = _context7.sent;if (!(
                errorMessage != null)) {_context7.next = 11;break;}
                result.push({
                  key: key,
                  errorMessage: errorMessage });if (

                all) {_context7.next = 11;break;}return _context7.abrupt("break", 13);case 11:_context7.next = 2;break;case 13:return _context7.abrupt("return",


                result);case 14:case "end":return _context7.stop();}}}, _callee7, this);}));function invokeValidateUpdate(_x20, _x21, _x22) {return _invokeValidateUpdate.apply(this, arguments);}return invokeValidateUpdate;}() }, { key: "_checkFieldInSchema", value:


    function _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return '';
      }

      var noExistFields = keys.filter(function (key) {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields) },
      SchemaValidator.message.TAG + SchemaValidator.message['defaultInvalid']);
      return [{
        key: 'invalid',
        errorMessage: errorMessage }];

    } }]);return SchemaValidator;}(RuleValidator);


function Message() {
  return {
    TAG: "",
    default: '验证错误',
    defaultInvalid: '提交的字段{field}在数据库中并不存在',
    validateFunction: '验证无效',
    required: '{label}必填',
    'enum': '{label}超出范围',
    timestamp: '{label}格式无效',
    whitespace: '{label}不能为空',
    typeError: '{label}类型无效',
    date: {
      format: '{label}日期{value}格式无效',
      parse: '{label}日期无法解析,{value}无效',
      invalid: '{label}日期{value}无效' },

    length: {
      minLength: '{label}长度不能少于{minLength}',
      maxLength: '{label}长度不能超过{maxLength}',
      range: '{label}必须介于{minLength}和{maxLength}之间' },

    number: {
      minimum: '{label}不能小于{minimum}',
      maximum: '{label}不能大于{maximum}',
      exclusiveMinimum: '{label}不能小于等于{minimum}',
      exclusiveMaximum: '{label}不能大于等于{maximum}',
      range: '{label}必须介于{minimum}and{maximum}之间' },

    pattern: {
      mismatch: '{label}格式不匹配' } };


}


SchemaValidator.message = new Message();var _default =

SchemaValidator;exports.default = _default;

/***/ }),

/***/ 162:
/*!***************************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/uni_modules/uni-forms/components/uni-forms/utils.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.typeFilter = exports.type = exports.setDataValue = exports.realName = exports.rawData = exports.objSet = exports.objGet = exports.name2arr = exports.isRequiredField = exports.isRealName = exports.isNumber = exports.isEqual = exports.isBoolean = exports.getValue = exports.getDataValueType = exports.getDataValue = exports.deepCopy = void 0; /**
 * 简单处理对象拷贝
 * @param {Obejct} 被拷贝对象
 * @@return {Object} 拷贝对象
 */
var deepCopy = function deepCopy(val) {
  return JSON.parse(JSON.stringify(val));
};
/**
 * 过滤数字类型
 * @param {String} format 数字类型
 * @@return {Boolean} 返回是否为数字类型
 */exports.deepCopy = deepCopy;
var typeFilter = function typeFilter(format) {
  return format === 'int' || format === 'double' || format === 'number' || format === 'timestamp';
};

/**
 * 把 value 转换成指定的类型，用于处理初始值，原因是初始值需要入库不能为 undefined
 * @param {String} key 字段名
 * @param {any} value 字段值
 * @param {Object} rules 表单校验规则
 */exports.typeFilter = typeFilter;
var getValue = function getValue(key, value, rules) {
  var isRuleNumType = rules.find(function (val) {return val.format && typeFilter(val.format);});
  var isRuleBoolType = rules.find(function (val) {return val.format && val.format === 'boolean' || val.format === 'bool';});
  // 输入类型为 number
  if (!!isRuleNumType) {
    if (!value && value !== 0) {
      value = null;
    } else {
      value = isNumber(Number(value)) ? Number(value) : value;
    }
  }

  // 输入类型为 boolean
  if (!!isRuleBoolType) {
    value = isBoolean(value) ? value : false;
  }

  return value;
};

/**
 * 获取表单数据
 * @param {String|Array} name 真实名称，需要使用 realName 获取
 * @param {Object} data 原始数据
 * @param {any} value  需要设置的值
 */exports.getValue = getValue;
var setDataValue = function setDataValue(field, formdata, value) {
  formdata[field] = value;
  return value || '';
};

/**
 * 获取表单数据
 * @param {String|Array} field 真实名称，需要使用 realName 获取
 * @param {Object} data 原始数据
 */exports.setDataValue = setDataValue;
var getDataValue = function getDataValue(field, data) {
  return objGet(data, field);
};

/**
 * 获取表单类型
 * @param {String|Array} field 真实名称，需要使用 realName 获取
 */exports.getDataValue = getDataValue;
var getDataValueType = function getDataValueType(field, data) {
  var value = getDataValue(field, data);
  return {
    type: type(value),
    value: value };

};

/**
 * 获取表单可用的真实name
 * @param {String|Array} name 表单name
 * @@return {String} 表单可用的真实name
 */exports.getDataValueType = getDataValueType;
var realName = function realName(name) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var base_name = _basePath(name);
  if (typeof base_name === 'object' && Array.isArray(base_name) && base_name.length > 1) {
    var realname = base_name.reduce(function (a, b) {return a += "#".concat(b);}, '_formdata_');
    return realname;
  }
  return base_name[0] || name;
};

/**
 * 判断是否表单可用的真实name
 * @param {String|Array} name 表单name
 * @@return {String} 表单可用的真实name
 */exports.realName = realName;
var isRealName = function isRealName(name) {
  var reg = /^_formdata_#*/;
  return reg.test(name);
};

/**
 * 获取表单数据的原始格式
 * @@return {Object|Array} object 需要解析的数据
 */exports.isRealName = isRealName;
var rawData = function rawData() {var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var name = arguments.length > 1 ? arguments[1] : undefined;
  var newData = JSON.parse(JSON.stringify(object));
  var formData = {};
  for (var i in newData) {
    var path = name2arr(i);
    objSet(formData, path, newData[i]);
  }
  return formData;
};

/**
 * 真实name还原为 array
 * @param {*} name 
 */exports.rawData = rawData;
var name2arr = function name2arr(name) {
  var field = name.replace('_formdata_#', '');
  field = field.split('#').map(function (v) {return isNumber(v) ? Number(v) : v;});
  return field;
};

/**
 * 对象中设置值
 * @param {Object|Array} object 源数据
 * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']
 * @param {String} value 需要设置的值
 */exports.name2arr = name2arr;
var objSet = function objSet(object, path, value) {
  if (typeof object !== 'object') return object;
  _basePath(path).reduce(function (o, k, i, _) {
    if (i === _.length - 1) {
      // 若遍历结束直接赋值
      o[k] = value;
      return null;
    } else if (k in o) {
      // 若存在对应路径，则返回找到的对象，进行下一次遍历
      return o[k];
    } else {
      // 若不存在对应路径，则创建对应对象，若下一路径是数字，新对象赋值为空数组，否则赋值为空对象
      o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {};
      return o[k];
    }
  }, object);
  // 返回object
  return object;
};

// 处理 path， path有三种形式：'a[0].b.c'、'a.0.b.c' 和 ['a','0','b','c']，需要统一处理成数组，便于后续使用
exports.objSet = objSet;function _basePath(path) {
  // 若是数组，则直接返回
  if (Array.isArray(path)) return path;
  // 若有 '[',']'，则替换成将 '[' 替换成 '.',去掉 ']'
  return path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

/**
 * 从对象中获取值
 * @param {Object|Array} object 源数据
 * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']
 * @param {String} defaultVal 如果无法从调用链中获取值的默认值
 */
var objGet = function objGet(object, path) {var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'undefined';
  // 先将path处理成统一格式
  var newPath = _basePath(path);
  // 递归处理，返回最后结果
  var val = newPath.reduce(function (o, k) {
    return (o || {})[k];
  }, object);
  return !val || val !== undefined ? val : defaultVal;
};


/**
 * 是否为 number 类型 
 * @param {any} num 需要判断的值
 * @return {Boolean} 是否为 number
 */exports.objGet = objGet;
var isNumber = function isNumber(num) {
  return !isNaN(Number(num));
};

/**
 * 是否为 boolean 类型 
 * @param {any} bool 需要判断的值
 * @return {Boolean} 是否为 boolean
 */exports.isNumber = isNumber;
var isBoolean = function isBoolean(bool) {
  return typeof bool === 'boolean';
};
/**
 * 是否有必填字段
 * @param {Object} rules 规则
 * @return {Boolean} 是否有必填字段
 */exports.isBoolean = isBoolean;
var isRequiredField = function isRequiredField(rules) {
  var isNoField = false;
  for (var i = 0; i < rules.length; i++) {
    var ruleData = rules[i];
    if (ruleData.required) {
      isNoField = true;
      break;
    }
  }
  return isNoField;
};


/**
 * 获取数据类型
 * @param {Any} obj 需要获取数据类型的值
 */exports.isRequiredField = isRequiredField;
var type = function type(obj) {
  var class2type = {};

  // 生成class2type映射
  "Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function (item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
  });
  if (obj == null) {
    return obj + "";
  }
  return typeof obj === "object" || typeof obj === "function" ?
  class2type[Object.prototype.toString.call(obj)] || "object" :
  typeof obj;
};

/**
 * 判断两个值是否相等
 * @param {any} a 值  
 * @param {any} b 值  
 * @return {Boolean} 是否相等
 */exports.type = type;
var isEqual = function isEqual(a, b) {
  //如果a和b本来就全等
  if (a === b) {
    //判断是否为0和-0
    return a !== 0 || 1 / a === 1 / b;
  }
  //判断是否为null和undefined
  if (a == null || b == null) {
    return a === b;
  }
  //接下来判断a和b的数据类型
  var classNameA = toString.call(a),
  classNameB = toString.call(b);
  //如果数据类型不相等，则返回false
  if (classNameA !== classNameB) {
    return false;
  }
  //如果数据类型相等，再根据不同数据类型分别判断
  switch (classNameA) {
    case '[object RegExp]':
    case '[object String]':
      //进行字符串转换比较
      return '' + a === '' + b;
    case '[object Number]':
      //进行数字转换比较,判断是否为NaN
      if (+a !== +a) {
        return +b !== +b;
      }
      //判断是否为0或-0
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b;}

  //如果是对象类型
  if (classNameA == '[object Object]') {
    //获取a和b的属性长度
    var propsA = Object.getOwnPropertyNames(a),
    propsB = Object.getOwnPropertyNames(b);
    if (propsA.length != propsB.length) {
      return false;
    }
    for (var i = 0; i < propsA.length; i++) {
      var propName = propsA[i];
      //如果对应属性对应值不相等，则返回false
      if (a[propName] !== b[propName]) {
        return false;
      }
    }
    return true;
  }
  //如果是数组类型
  if (classNameA == '[object Array]') {
    if (a.toString() == b.toString()) {
      return true;
    }
    return false;
  }
};exports.isEqual = isEqual;

/***/ }),

/***/ 17:
/*!****************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/ajax/api/interface/common.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.get_current_version = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! ../../http.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

//获取应用版本
var get_current_version = function get_current_version(data) {return (0, _http.default)({
    name: "get_current_version",
    data: data });};exports.get_current_version = get_current_version;

/***/ }),

/***/ 18:
/*!************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/ajax/http.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, uniCloud) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = function _default(_ref) {var name = _ref.name,_ref$data = _ref.data,data = _ref$data === void 0 ? {} : _ref$data;
  return new Promise(function (resolve, reject) {
    var loading = data.isLoading;
    delete data.isLoading;
    //打开loading弹窗
    !loading && uni.showLoading({});

    uniCloud.callFunction({
      name: name,
      data: data,
      success: function success(_ref2)

      {var result = _ref2.result;
        if (result.code === 0) {
          resolve(result.data);
        } else {//没有查询到数据
          uni.showToast({
            icon: "none",
            title: result.msg });

        }
      },
      fail: function fail(err) {//请求失败
        reject(err);
      },
      complete: function complete() {
        //关闭弹窗
        !loading && uni.hideLoading();
      } });

  });
};exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 6)["default"]))

/***/ }),

/***/ 19:
/*!**************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/ajax/api/interface/home.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.update_save_like = exports.update_label_ids = exports.update_comment = exports.get_search_list = exports.get_label_list = exports.get_comments = exports.get_article_detail = exports.get_artcile_list = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! ../../http.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

//获取导航信息
var get_label_list = function get_label_list(data) {return (0, _http.default)({
    name: "get_label_list",
    data: data });};


//获取文章信息
exports.get_label_list = get_label_list;var get_artcile_list = function get_artcile_list(data) {return (0, _http.default)({
    name: "get_artcile_list",
    data: data });};


//收藏或取消收藏文章
exports.get_artcile_list = get_artcile_list;var update_save_like = function update_save_like(data) {return (0, _http.default)({
    name: "update_save_like",
    data: data });};


//获取搜索内容
exports.update_save_like = update_save_like;var get_search_list = function get_search_list(data) {return (0, _http.default)({
    name: "get_search_list",
    data: data });};


//修改用户收藏
exports.get_search_list = get_search_list;var update_label_ids = function update_label_ids(data) {return (0, _http.default)({
    name: "update_label_ids",
    data: data });};


//获取文章内容
exports.update_label_ids = update_label_ids;var get_article_detail = function get_article_detail(data) {return (0, _http.default)({
    name: "get_article_detail",
    data: data });};


//发布评论
exports.get_article_detail = get_article_detail;var update_comment = function update_comment(data) {return (0, _http.default)({
    name: "update_comment",
    data: data });};


//获取评论
exports.update_comment = update_comment;var get_comments = function get_comments(data) {return (0, _http.default)({
    name: "get_comments",
    data: data });};exports.get_comments = get_comments;

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 20:
/*!********************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/ajax/api/interface/user_login.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.user_login = exports.update_user_avatar = exports.update_ompliments = exports.update_follow_author = exports.update_feedback = exports.get_my_article_list = exports.get_follow_author = exports.get_follow_article = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! ../../http.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

//用户登录
var user_login = function user_login(data) {return (0, _http.default)({
    name: "user_login",
    data: data });};


//关注作者
exports.user_login = user_login;var update_follow_author = function update_follow_author(data) {return (0, _http.default)({
    name: "update_follow_author",
    data: data });};


//点赞文章
exports.update_follow_author = update_follow_author;var update_ompliments = function update_ompliments(data) {return (0, _http.default)({
    name: "update_ompliments",
    data: data });};


//获取用户收藏的文章
exports.update_ompliments = update_ompliments;var get_follow_article = function get_follow_article(data) {return (0, _http.default)({
    name: "get_follow_article",
    data: data });};


//获取用户关注的作者
exports.get_follow_article = get_follow_article;var get_follow_author = function get_follow_author(data) {return (0, _http.default)({
    name: "get_follow_author",
    data: data });};


//获取用户发布过的文章
exports.get_follow_author = get_follow_author;var get_my_article_list = function get_my_article_list(data) {return (0, _http.default)({
    name: "get_my_article_list",
    data: data });};


//用户提交意见反馈
exports.get_my_article_list = get_my_article_list;var update_feedback = function update_feedback(data) {return (0, _http.default)({
    name: "update_feedback",
    data: data });};


//修改用户头像
exports.update_feedback = update_feedback;var update_user_avatar = function update_user_avatar(data) {return (0, _http.default)({
    name: "update_user_avatar",
    data: data });};exports.update_user_avatar = update_user_avatar;

/***/ }),

/***/ 21:
/*!********************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/common/rulesMixin.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  install: function install(Vue) {
    Vue.mixin({
      data: function data() {
        return {
          phoneReg: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
          userRules: {
            loginName: {
              rules: [{
                required: true,
                'errorMessage': '账户名不能为空' },
              {
                validateFunction: this.validateLoginName }] },


            password: {
              rules: [{
                required: true,
                'errorMessage': '密码不能为空' }] },


            phone: {
              rules: [{
                required: true,
                'errorMessage': '手机号不能为空' },
              {
                validateFunction: this.validatePhone }] },


            vCode: {
              rules: [{
                required: true,
                'errorMessage': '验证码不能为空' },
              {
                validateFunction: this.validateCode }] } } };




      },
      methods: {
        //用户名验证
        validateLoginName: function validateLoginName(rule, val, data, callback) {
          switch (true) {
            case val.length < 5:
              callback('用户名长度不正确');
            default:
              return true;}

        },
        //手机号验证
        validatePhone: function validatePhone(rule, val, data, callback) {
          switch (true) {
            case !this.phoneReg.test(val):
              callback('手机号格式不正确');
            default:
              return true;}

        },
        validateCode: function validateCode() {
          return true;
        } } });


  } };exports.default = _default;

/***/ }),

/***/ 210:
/*!************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/components/u-parse/libs/html2json.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













var _wxDiscode = _interopRequireDefault(__webpack_require__(/*! ./wxDiscode */ 211));
var _htmlparser = _interopRequireDefault(__webpack_require__(/*! ./htmlparser */ 212));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
 * html2Json 改造来自: https://github.com/Jxck/html2json
 *
 *
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 *
 * github地址: https://github.com/icindy/wxParse
 *
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */function makeMap(str) {var obj = {};var items = str.split(',');for (var i = 0; i < items.length; i += 1) {obj[items[i]] = true;}return obj;} // Block Elements - HTML 5
var block = makeMap('br,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video'); // Inline Elements - HTML 5
var inline = makeMap('a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var');
// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr');

function removeDOCTYPE(html) {
  var isDocument = /<body.*>([^]*)<\/body>/.test(html);
  return isDocument ? RegExp.$1 : html;
}

function trimHtml(html) {
  return html.
  replace(/<!--.*?-->/gi, '').
  replace(/\/\*.*?\*\//gi, '').
  replace(/[ ]+</gi, '<').
  replace(/<script[^]*<\/script>/gi, '').
  replace(/<style[^]*<\/style>/gi, '');
}

function getScreenInfo() {
  var screen = {};
  wx.getSystemInfo({
    success: function success(res) {
      screen.width = res.windowWidth;
      screen.height = res.windowHeight;
    } });

  return screen;
}

function html2json(html, customHandler, imageProp, host) {
  // 处理字符串
  html = removeDOCTYPE(html);
  html = trimHtml(html);
  html = _wxDiscode.default.strDiscode(html);
  // 生成node节点
  var bufArray = [];
  var results = {
    nodes: [],
    imageUrls: [] };


  var screen = getScreenInfo();
  function Node(tag) {
    this.node = 'element';
    this.tag = tag;

    this.$screen = screen;
  }

  (0, _htmlparser.default)(html, {
    start: function start(tag, attrs, unary) {
      // node for this element
      var node = new Node(tag);

      if (bufArray.length !== 0) {
        var parent = bufArray[0];
        if (parent.nodes === undefined) {
          parent.nodes = [];
        }
      }

      if (block[tag]) {
        node.tagType = 'block';
      } else if (inline[tag]) {
        node.tagType = 'inline';
      } else if (closeSelf[tag]) {
        node.tagType = 'closeSelf';
      }

      node.attr = attrs.reduce(function (pre, attr) {
        var name = attr.name;
        var value = attr.value;
        if (name === 'class') {
          node.classStr = value;
        }
        // has multi attibutes
        // make it array of attribute
        if (name === 'style') {
          node.styleStr = value;
        }
        if (value.match(/ /)) {
          value = value.split(' ');
        }

        // if attr already exists
        // merge it
        if (pre[name]) {
          if (Array.isArray(pre[name])) {
            // already array, push to last
            pre[name].push(value);
          } else {
            // single value, make it array
            pre[name] = [pre[name], value];
          }
        } else {
          // not exist, put it
          pre[name] = value;
        }

        return pre;
      }, {});

      // 优化样式相关属性
      if (node.classStr) {
        node.classStr += " ".concat(node.tag);
      } else {
        node.classStr = node.tag;
      }
      if (node.tagType === 'inline') {
        node.classStr += ' inline';
      }

      // 对img添加额外数据
      if (node.tag === 'img') {
        var imgUrl = node.attr.src;
        imgUrl = _wxDiscode.default.urlToHttpUrl(imgUrl, imageProp.domain);
        Object.assign(node.attr, imageProp, {
          src: imgUrl || '' });

        if (imgUrl) {
          results.imageUrls.push(imgUrl);
        }
      }

      // 处理a标签属性
      if (node.tag === 'a') {
        node.attr.href = node.attr.href || '';
      }

      // 处理font标签样式属性
      if (node.tag === 'font') {
        var fontSize = [
        'x-small',
        'small',
        'medium',
        'large',
        'x-large',
        'xx-large',
        '-webkit-xxx-large'];

        var styleAttrs = {
          color: 'color',
          face: 'font-family',
          size: 'font-size' };

        if (!node.styleStr) node.styleStr = '';
        Object.keys(styleAttrs).forEach(function (key) {
          if (node.attr[key]) {
            var value = key === 'size' ? fontSize[node.attr[key] - 1] : node.attr[key];
            node.styleStr += "".concat(styleAttrs[key], ": ").concat(value, ";");
          }
        });
      }

      // 临时记录source资源
      if (node.tag === 'source') {
        results.source = node.attr.src;
      }

      if (customHandler.start) {
        customHandler.start(node, results);
      }

      if (unary) {
        // if this tag doesn't have end tag
        // like <img src="hoge.png"/>
        // add to parents
        var _parent = bufArray[0] || results;
        if (_parent.nodes === undefined) {
          _parent.nodes = [];
        }
        _parent.nodes.push(node);
      } else {
        bufArray.unshift(node);
      }
    },
    end: function end(tag) {
      // merge into parent tag
      var node = bufArray.shift();
      if (node.tag !== tag) {
        console.error('invalid state: mismatch end tag');
      }

      // 当有缓存source资源时于于video补上src资源
      if (node.tag === 'video' && results.source) {
        node.attr.src = results.source;
        delete results.source;
      }

      if (customHandler.end) {
        customHandler.end(node, results);
      }

      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];
        if (!parent.nodes) {
          parent.nodes = [];
        }
        parent.nodes.push(node);
      }
    },
    chars: function chars(text) {
      if (!text.trim()) return;

      var node = {
        node: 'text',
        text: text };


      if (customHandler.chars) {
        customHandler.chars(node, results);
      }

      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];
        if (parent.nodes === undefined) {
          parent.nodes = [];
        }
        parent.nodes.push(node);
      }
    } });


  return results;
}var _default =

html2json;exports.default = _default;

/***/ }),

/***/ 211:
/*!************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/components/u-parse/libs/wxDiscode.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // HTML 支持的数学符号
function strNumDiscode(str) {
  str = str.replace(/&forall;/g, '∀');
  str = str.replace(/&part;/g, '∂');
  str = str.replace(/&exist;/g, '∃');
  str = str.replace(/&empty;/g, '∅');
  str = str.replace(/&nabla;/g, '∇');
  str = str.replace(/&isin;/g, '∈');
  str = str.replace(/&notin;/g, '∉');
  str = str.replace(/&ni;/g, '∋');
  str = str.replace(/&prod;/g, '∏');
  str = str.replace(/&sum;/g, '∑');
  str = str.replace(/&minus;/g, '−');
  str = str.replace(/&lowast;/g, '∗');
  str = str.replace(/&radic;/g, '√');
  str = str.replace(/&prop;/g, '∝');
  str = str.replace(/&infin;/g, '∞');
  str = str.replace(/&ang;/g, '∠');
  str = str.replace(/&and;/g, '∧');
  str = str.replace(/&or;/g, '∨');
  str = str.replace(/&cap;/g, '∩');
  str = str.replace(/&cup;/g, '∪');
  str = str.replace(/&int;/g, '∫');
  str = str.replace(/&there4;/g, '∴');
  str = str.replace(/&sim;/g, '∼');
  str = str.replace(/&cong;/g, '≅');
  str = str.replace(/&asymp;/g, '≈');
  str = str.replace(/&ne;/g, '≠');
  str = str.replace(/&le;/g, '≤');
  str = str.replace(/&ge;/g, '≥');
  str = str.replace(/&sub;/g, '⊂');
  str = str.replace(/&sup;/g, '⊃');
  str = str.replace(/&nsub;/g, '⊄');
  str = str.replace(/&sube;/g, '⊆');
  str = str.replace(/&supe;/g, '⊇');
  str = str.replace(/&oplus;/g, '⊕');
  str = str.replace(/&otimes;/g, '⊗');
  str = str.replace(/&perp;/g, '⊥');
  str = str.replace(/&sdot;/g, '⋅');
  return str;
}

// HTML 支持的希腊字母
function strGreeceDiscode(str) {
  str = str.replace(/&Alpha;/g, 'Α');
  str = str.replace(/&Beta;/g, 'Β');
  str = str.replace(/&Gamma;/g, 'Γ');
  str = str.replace(/&Delta;/g, 'Δ');
  str = str.replace(/&Epsilon;/g, 'Ε');
  str = str.replace(/&Zeta;/g, 'Ζ');
  str = str.replace(/&Eta;/g, 'Η');
  str = str.replace(/&Theta;/g, 'Θ');
  str = str.replace(/&Iota;/g, 'Ι');
  str = str.replace(/&Kappa;/g, 'Κ');
  str = str.replace(/&Lambda;/g, 'Λ');
  str = str.replace(/&Mu;/g, 'Μ');
  str = str.replace(/&Nu;/g, 'Ν');
  str = str.replace(/&Xi;/g, 'Ν');
  str = str.replace(/&Omicron;/g, 'Ο');
  str = str.replace(/&Pi;/g, 'Π');
  str = str.replace(/&Rho;/g, 'Ρ');
  str = str.replace(/&Sigma;/g, 'Σ');
  str = str.replace(/&Tau;/g, 'Τ');
  str = str.replace(/&Upsilon;/g, 'Υ');
  str = str.replace(/&Phi;/g, 'Φ');
  str = str.replace(/&Chi;/g, 'Χ');
  str = str.replace(/&Psi;/g, 'Ψ');
  str = str.replace(/&Omega;/g, 'Ω');

  str = str.replace(/&alpha;/g, 'α');
  str = str.replace(/&beta;/g, 'β');
  str = str.replace(/&gamma;/g, 'γ');
  str = str.replace(/&delta;/g, 'δ');
  str = str.replace(/&epsilon;/g, 'ε');
  str = str.replace(/&zeta;/g, 'ζ');
  str = str.replace(/&eta;/g, 'η');
  str = str.replace(/&theta;/g, 'θ');
  str = str.replace(/&iota;/g, 'ι');
  str = str.replace(/&kappa;/g, 'κ');
  str = str.replace(/&lambda;/g, 'λ');
  str = str.replace(/&mu;/g, 'μ');
  str = str.replace(/&nu;/g, 'ν');
  str = str.replace(/&xi;/g, 'ξ');
  str = str.replace(/&omicron;/g, 'ο');
  str = str.replace(/&pi;/g, 'π');
  str = str.replace(/&rho;/g, 'ρ');
  str = str.replace(/&sigmaf;/g, 'ς');
  str = str.replace(/&sigma;/g, 'σ');
  str = str.replace(/&tau;/g, 'τ');
  str = str.replace(/&upsilon;/g, 'υ');
  str = str.replace(/&phi;/g, 'φ');
  str = str.replace(/&chi;/g, 'χ');
  str = str.replace(/&psi;/g, 'ψ');
  str = str.replace(/&omega;/g, 'ω');
  str = str.replace(/&thetasym;/g, 'ϑ');
  str = str.replace(/&upsih;/g, 'ϒ');
  str = str.replace(/&piv;/g, 'ϖ');
  str = str.replace(/&middot;/g, '·');
  return str;
}

function strcharacterDiscode(str) {
  // 加入常用解析
  str = str.replace(/&nbsp;/g, ' ');
  str = str.replace(/&ensp;/g, ' ');
  str = str.replace(/&emsp;/g, '　');
  str = str.replace(/&quot;/g, "'");
  str = str.replace(/&amp;/g, '&');
  str = str.replace(/&lt;/g, '<');
  str = str.replace(/&gt;/g, '>');
  str = str.replace(/&#8226;/g, '•');

  return str;
}

// HTML 支持的其他实体
function strOtherDiscode(str) {
  str = str.replace(/&OElig;/g, 'Œ');
  str = str.replace(/&oelig;/g, 'œ');
  str = str.replace(/&Scaron;/g, 'Š');
  str = str.replace(/&scaron;/g, 'š');
  str = str.replace(/&Yuml;/g, 'Ÿ');
  str = str.replace(/&fnof;/g, 'ƒ');
  str = str.replace(/&circ;/g, 'ˆ');
  str = str.replace(/&tilde;/g, '˜');
  str = str.replace(/&ensp;/g, '');
  str = str.replace(/&emsp;/g, '');
  str = str.replace(/&thinsp;/g, '');
  str = str.replace(/&zwnj;/g, '');
  str = str.replace(/&zwj;/g, '');
  str = str.replace(/&lrm;/g, '');
  str = str.replace(/&rlm;/g, '');
  str = str.replace(/&ndash;/g, '–');
  str = str.replace(/&mdash;/g, '—');
  str = str.replace(/&lsquo;/g, '‘');
  str = str.replace(/&rsquo;/g, '’');
  str = str.replace(/&sbquo;/g, '‚');
  str = str.replace(/&ldquo;/g, '“');
  str = str.replace(/&rdquo;/g, '”');
  str = str.replace(/&bdquo;/g, '„');
  str = str.replace(/&dagger;/g, '†');
  str = str.replace(/&Dagger;/g, '‡');
  str = str.replace(/&bull;/g, '•');
  str = str.replace(/&hellip;/g, '…');
  str = str.replace(/&permil;/g, '‰');
  str = str.replace(/&prime;/g, '′');
  str = str.replace(/&Prime;/g, '″');
  str = str.replace(/&lsaquo;/g, '‹');
  str = str.replace(/&rsaquo;/g, '›');
  str = str.replace(/&oline;/g, '‾');
  str = str.replace(/&euro;/g, '€');
  str = str.replace(/&trade;/g, '™');

  str = str.replace(/&larr;/g, '←');
  str = str.replace(/&uarr;/g, '↑');
  str = str.replace(/&rarr;/g, '→');
  str = str.replace(/&darr;/g, '↓');
  str = str.replace(/&harr;/g, '↔');
  str = str.replace(/&crarr;/g, '↵');
  str = str.replace(/&lceil;/g, '⌈');
  str = str.replace(/&rceil;/g, '⌉');

  str = str.replace(/&lfloor;/g, '⌊');
  str = str.replace(/&rfloor;/g, '⌋');
  str = str.replace(/&loz;/g, '◊');
  str = str.replace(/&spades;/g, '♠');
  str = str.replace(/&clubs;/g, '♣');
  str = str.replace(/&hearts;/g, '♥');

  str = str.replace(/&diams;/g, '♦');
  str = str.replace(/&#39;/g, "'");
  return str;
}

function strDiscode(str) {
  str = strNumDiscode(str);
  str = strGreeceDiscode(str);
  str = strcharacterDiscode(str);
  str = strOtherDiscode(str);
  return str;
}

function urlToHttpUrl(url, domain) {
  if (/^\/\//.test(url)) {
    return "https:".concat(url);
  } else if (/^\//.test(url)) {
    return "https://".concat(domain).concat(url);
  }
  return url;
}var _default =

{
  strDiscode: strDiscode,
  urlToHttpUrl: urlToHttpUrl };exports.default = _default;

/***/ }),

/***/ 212:
/*!*************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/components/u-parse/libs/htmlparser.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
 *
 * htmlParser改造自: https://github.com/blowsie/Pure-JavaScript-HTML5-Parser
 *
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 *
 * github地址: https://github.com/icindy/wxParse
 *
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */
// Regular Expressions for parsing tags and attributes

var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z0-9_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attr = /([a-zA-Z0-9_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

function makeMap(str) {
  var obj = {};
  var items = str.split(',');
  for (var i = 0; i < items.length; i += 1) {obj[items[i]] = true;}
  return obj;
}

// Empty Elements - HTML 5
var empty = makeMap('area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr');

// Block Elements - HTML 5
var block = makeMap('address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video');

// Inline Elements - HTML 5
var inline = makeMap('a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var');

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr');

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected');

function HTMLParser(html, handler) {
  var index;
  var chars;
  var match;
  var last = html;
  var stack = [];

  stack.last = function () {return stack[stack.length - 1];};

  function parseEndTag(tag, tagName) {
    // If no tag name is provided, clean shop
    var pos;
    if (!tagName) {
      pos = 0;
    } else {
      // Find the closest opened tag of the same type
      tagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos -= 1) {
        if (stack[pos] === tagName) break;
      }
    }
    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i -= 1) {
        if (handler.end) handler.end(stack[i]);
      }

      // Remove the open elements from the stack
      stack.length = pos;
    }
  }

  function parseStartTag(tag, tagName, rest, unary) {
    tagName = tagName.toLowerCase();

    if (block[tagName]) {
      while (stack.last() && inline[stack.last()]) {
        parseEndTag('', stack.last());
      }
    }

    if (closeSelf[tagName] && stack.last() === tagName) {
      parseEndTag('', tagName);
    }

    unary = empty[tagName] || !!unary;

    if (!unary) stack.push(tagName);

    if (handler.start) {
      var attrs = [];

      rest.replace(attr, function genAttr(matches, name) {
        var value = arguments[2] || arguments[3] || arguments[4] || (fillAttrs[name] ? name : '');

        attrs.push({
          name: name,
          value: value,
          escaped: value.replace(/(^|[^\\])"/g, '$1\\"') // "
        });
      });

      if (handler.start) {
        handler.start(tagName, attrs, unary);
      }
    }
  }

  while (html) {
    chars = true;

    if (html.indexOf('</') === 0) {
      match = html.match(endTag);

      if (match) {
        html = html.substring(match[0].length);
        match[0].replace(endTag, parseEndTag);
        chars = false;
      }

      // start tag
    } else if (html.indexOf('<') === 0) {
      match = html.match(startTag);

      if (match) {
        html = html.substring(match[0].length);
        match[0].replace(startTag, parseStartTag);
        chars = false;
      }
    }

    if (chars) {
      index = html.indexOf('<');
      var text = '';
      while (index === 0) {
        text += '<';
        html = html.substring(1);
        index = html.indexOf('<');
      }
      text += index < 0 ? html : html.substring(0, index);
      html = index < 0 ? '' : html.substring(index);

      if (handler.chars) handler.chars(text);
    }

    if (html === last) throw new Error("Parse Error: ".concat(html));
    last = html;
  }

  // Clean up any remaining tags
  parseEndTag();
}var _default =

HTMLParser;exports.default = _default;

/***/ }),

/***/ 218:
/*!****************************************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/uni_modules/uni-load-more/components/uni-load-more/i18n/index.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 219));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 220));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 221));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default };exports.default = _default;

/***/ }),

/***/ 219:
/*!***************************************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/uni_modules/uni-load-more/components/uni-load-more/i18n/en.json ***!
  \***************************************************************************************************************************/
/*! exports provided: uni-load-more.contentdown, uni-load-more.contentrefresh, uni-load-more.contentnomore, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-load-more.contentdown\":\"Pull up to show more\",\"uni-load-more.contentrefresh\":\"loading...\",\"uni-load-more.contentnomore\":\"No more data\"}");

/***/ }),

/***/ 22:
/*!*********************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/common/commonMixin.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vuex = __webpack_require__(/*! vuex */ 23);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);enumerableOnly && (symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;})), keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = null != arguments[i] ? arguments[i] : {};i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {_defineProperty(target, key, source[key]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =

{
  install: function install(Vue) {
    Vue.mixin({
      data: function data() {
        return {};


      },
      methods: _objectSpread({
        //用户是否已经登录	 
        checkedisLogin: function checkedisLogin() {var _this = this;
          return new Promise(function (resolve) {
            if (_this.userInfo) {
              resolve();
            } else {
              uni.navigateTo({
                url: '/pages/userInfo/login/login' });

            }
          });

        } },
      (0, _vuex.mapMutations)(['updateUserInfo'])),

      computed: _objectSpread({},
      (0, _vuex.mapState)(['userInfo'])) });


  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 220:
/*!********************************************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/uni_modules/uni-load-more/components/uni-load-more/i18n/zh-Hans.json ***!
  \********************************************************************************************************************************/
/*! exports provided: uni-load-more.contentdown, uni-load-more.contentrefresh, uni-load-more.contentnomore, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-load-more.contentdown\":\"上拉显示更多\",\"uni-load-more.contentrefresh\":\"正在加载...\",\"uni-load-more.contentnomore\":\"没有更多数据了\"}");

/***/ }),

/***/ 221:
/*!********************************************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/uni_modules/uni-load-more/components/uni-load-more/i18n/zh-Hant.json ***!
  \********************************************************************************************************************************/
/*! exports provided: uni-load-more.contentdown, uni-load-more.contentrefresh, uni-load-more.contentnomore, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-load-more.contentdown\":\"上拉顯示更多\",\"uni-load-more.contentrefresh\":\"正在加載...\",\"uni-load-more.contentnomore\":\"沒有更多數據了\"}");

/***/ }),

/***/ 23:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 236:
/*!*******************************************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/uni_modules/uni-dateformat/components/uni-dateformat/date-format.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.formatDate = formatDate;exports.friendlyDate = friendlyDate; // yyyy-MM-dd hh:mm:ss.SSS 所有支持的类型
function pad(str) {var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  str += '';
  while (str.length < length) {
    str = '0' + str;
  }
  return str.slice(-length);
}

var parser = {
  yyyy: function yyyy(dateObj) {
    return pad(dateObj.year, 4);
  },
  yy: function yy(dateObj) {
    return pad(dateObj.year);
  },
  MM: function MM(dateObj) {
    return pad(dateObj.month);
  },
  M: function M(dateObj) {
    return dateObj.month;
  },
  dd: function dd(dateObj) {
    return pad(dateObj.day);
  },
  d: function d(dateObj) {
    return dateObj.day;
  },
  hh: function hh(dateObj) {
    return pad(dateObj.hour);
  },
  h: function h(dateObj) {
    return dateObj.hour;
  },
  mm: function mm(dateObj) {
    return pad(dateObj.minute);
  },
  m: function m(dateObj) {
    return dateObj.minute;
  },
  ss: function ss(dateObj) {
    return pad(dateObj.second);
  },
  s: function s(dateObj) {
    return dateObj.second;
  },
  SSS: function SSS(dateObj) {
    return pad(dateObj.millisecond, 3);
  },
  S: function S(dateObj) {
    return dateObj.millisecond;
  } };


// 这都n年了iOS依然不认识2020-12-12，需要转换为2020/12/12
function getDate(time) {
  if (time instanceof Date) {
    return time;
  }
  switch (typeof time) {
    case 'string':
      {
        // 2020-12-12T12:12:12.000Z、2020-12-12T12:12:12.000
        if (time.indexOf('T') > -1) {
          return new Date(time);
        }
        return new Date(time.replace(/-/g, '/'));
      }
    default:
      return new Date(time);}

}

function formatDate(date) {var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy/MM/dd hh:mm:ss';
  if (!date && date !== 0) {
    return '';
  }
  date = getDate(date);
  var dateObj = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds() };

  var tokenRegExp = /yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/;
  var flag = true;
  var result = format;
  while (flag) {
    flag = false;
    result = result.replace(tokenRegExp, function (matched) {
      flag = true;
      return parser[matched](dateObj);
    });
  }
  return result;
}

function friendlyDate(time, _ref)



{var _ref$locale = _ref.locale,locale = _ref$locale === void 0 ? 'zh' : _ref$locale,_ref$threshold = _ref.threshold,threshold = _ref$threshold === void 0 ? [60000, 3600000] : _ref$threshold,_ref$format = _ref.format,format = _ref$format === void 0 ? 'yyyy/MM/dd hh:mm:ss' : _ref$format;
  if (time === '-') {
    return time;
  }
  if (!time && time !== 0) {
    return '';
  }
  var localeText = {
    zh: {
      year: '年',
      month: '月',
      day: '天',
      hour: '小时',
      minute: '分钟',
      second: '秒',
      ago: '前',
      later: '后',
      justNow: '刚刚',
      soon: '马上',
      template: '{num}{unit}{suffix}' },

    en: {
      year: 'year',
      month: 'month',
      day: 'day',
      hour: 'hour',
      minute: 'minute',
      second: 'second',
      ago: 'ago',
      later: 'later',
      justNow: 'just now',
      soon: 'soon',
      template: '{num} {unit} {suffix}' } };


  var text = localeText[locale] || localeText.zh;
  var date = getDate(time);
  var ms = date.getTime() - Date.now();
  var absMs = Math.abs(ms);
  if (absMs < threshold[0]) {
    return ms < 0 ? text.justNow : text.soon;
  }
  if (absMs >= threshold[1]) {
    return formatDate(date, format);
  }
  var num;
  var unit;
  var suffix = text.later;
  if (ms < 0) {
    suffix = text.ago;
    ms = -ms;
  }
  var seconds = Math.floor(ms / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var months = Math.floor(days / 30);
  var years = Math.floor(months / 12);
  switch (true) {
    case years > 0:
      num = years;
      unit = text.year;
      break;
    case months > 0:
      num = months;
      unit = text.month;
      break;
    case days > 0:
      num = days;
      unit = text.day;
      break;
    case hours > 0:
      num = hours;
      unit = text.hour;
      break;
    case minutes > 0:
      num = minutes;
      unit = text.minute;
      break;
    default:
      num = seconds;
      unit = text.second;
      break;}


  if (locale === 'en') {
    if (num === 1) {
      num = 'a';
    } else {
      unit += 's';
    }
  }

  return text.template.replace(/{\s*num\s*}/g, num + '').replace(/{\s*unit\s*}/g, unit).replace(/{\s*suffix\s*}/g,
  suffix);
}

/***/ }),

/***/ 24:
/*!**************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/store/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 23));
var _actions = _interopRequireDefault(__webpack_require__(/*! ./actions.js */ 25));
var _mutations = _interopRequireDefault(__webpack_require__(/*! ./mutations */ 26));
var _state = _interopRequireDefault(__webpack_require__(/*! ./state */ 27));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);var _default =

new _vuex.default.Store({
  state: _state.default,
  actions: _actions.default,
  mutations: _mutations.default });exports.default = _default;

/***/ }),

/***/ 25:
/*!****************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/store/actions.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 254:
/*!***********************************************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.createAnimation = createAnimation;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);enumerableOnly && (symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;})), keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = null != arguments[i] ? arguments[i] : {};i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {_defineProperty(target, key, source[key]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;} // const defaultOption = {
// 	duration: 300,
// 	timingFunction: 'linear',
// 	delay: 0,
// 	transformOrigin: '50% 50% 0'
// }
var


MPAnimation = /*#__PURE__*/function () {
  function MPAnimation(options, _this) {_classCallCheck(this, MPAnimation);
    this.options = options;
    this.animation = uni.createAnimation(options);
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;

  }_createClass(MPAnimation, [{ key: "_nvuePushAnimates", value:

    function _nvuePushAnimates(type, args) {
      var aniObj = this.currentStepAnimates[this.next];
      var styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {} };

      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = '';
        }
        var unit = '';
        if (type === 'rotate') {
          unit = 'deg';
        }
        styles.styles.transform += "".concat(type, "(").concat(args + unit, ") ");
      } else {
        styles.styles[type] = "".concat(args);
      }
      this.currentStepAnimates[this.next] = styles;
    } }, { key: "_animateRun", value:
    function _animateRun() {var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ref = this.$.$refs['ani'].ref;
      if (!ref) return;
      return new Promise(function (resolve, reject) {
        nvueAnimation.transition(ref, _objectSpread({
          styles: styles },
        config),
        function (res) {
          resolve();
        });
      });
    } }, { key: "_nvueNextAnimate", value:

    function _nvueNextAnimate(animates) {var _this2 = this;var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var fn = arguments.length > 2 ? arguments[2] : undefined;
      var obj = animates[step];
      if (obj) {
        var
        styles =

        obj.styles,config = obj.config;
        this._animateRun(styles, config).then(function () {
          step += 1;
          _this2._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === 'function' && fn();
        this.isEnd = true;
      }
    } }, { key: "step", value:

    function step() {var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.animation.step(config);






      return this;
    } }, { key: "run", value:

    function run(fn) {

      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(function () {
        typeof fn === 'function' && fn();
      }, this.$.durationTime);








    } }]);return MPAnimation;}();



var animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d',
'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY',
'translateZ'];

var animateTypes2 = ['opacity', 'backgroundColor'];
var animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];
animateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {
  MPAnimation.prototype[type] = function () {var _this$animation;

    (_this$animation = this.animation)[type].apply(_this$animation, arguments);




    return this;
  };
});

function createAnimation(option, _this) {
  if (!_this) return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 26:
/*!******************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/store/mutations.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  updateUserInfo: function updateUserInfo(state, userInfo) {
    uni.setStorageSync('userInfo', userInfo);
    state.userInfo = userInfo;
  },
  //添加历史搜索记录
  setHistory: function setHistory(state, val) {
    var list = state.searchHistory;
    //已存在，不需要重复添加
    if (list.length > 0 && list.findIndex(function (item) {return item === val;}) > -1) return;
    list.unshift(val);
    uni.setStorageSync('searchHistory', list);
    state.searchHistory = list;
  },
  //删除所有历史记录
  removeHistory: function removeHistory(state) {
    state.searchHistory = [];
    uni.removeStorageSync('searchHistory');
  },
  //设置导航栏选项卡
  setLabelList: function setLabelList(state, labelList) {
    uni.setStorageSync('labelList', labelList);
    state.labelList = labelList;
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 27:
/*!**************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/store/state.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  userInfo: uni.getStorageSync('userInfo') || null,
  searchHistory: uni.getStorageSync('searchHistory') || [],
  labelList: uni.getStorageSync('labelList') || [] // 导航栏标签
};exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 28:
/*!*********************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/router.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "RouterMount", { enumerable: true, get: function get() {return _uniSimpleRouter.RouterMount;} });exports.router = void 0;
var _uniSimpleRouter = __webpack_require__(/*! uni-simple-router */ 29);
var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var router = (0, _uniSimpleRouter.createRouter)({
  platform: "mp-weixin",
  routes: _toConsumableArray([{"path":"/pages/index/index","aliasPath":"/"},{"path":"/pages/follow/follow","meta":{"needLogin":true}},{"path":"/pages/self/self"},{"path":"/pages/search/search"},{"path":"/pages/labelAdmin/labelAdmin"},{"path":"/pages/userInfo/login/login","name":"login"},{"path":"/pages/articleDetail/articleDetail"},{"path":"/pages/commentList/commentList"},{"path":"/pages/myArticle/myArticle","meta":{"needLogin":true}},{"path":"/pages/feedback/feedback","meta":{"needLogin":true}}]) });

//全局路由前置守卫
exports.router = router;router.beforeEach(function (to, from, next) {
  if (to.meta.needLogin && !_store.default.state.userInfo) {
    next({
      name: "login",
      NAVTYPE: "push" });

  } else {
    next();
  }

});
// 全局路由后置守卫
router.afterEach(function (to, from) {
  console.log("跳转结束");
});

/***/ }),

/***/ 29:
/*!********************************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/node_modules/uni-simple-router/dist/uni-simple-router.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {!function (e, t) { true ? module.exports = t() : undefined;}(self, function () {return e = { 779: function _(e, t, r) {var o = r(173);e.exports = function e(t, r, n) {return o(r) || (n = r || n, r = []), n = n || {}, t instanceof RegExp ? function (e, t) {var r = e.source.match(/\((?!\?)/g);if (r) for (var o = 0; o < r.length; o++) {t.push({ name: o, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null });}return s(e, t);}(t, r) : o(t) ? function (t, r, o) {for (var n = [], a = 0; a < t.length; a++) {n.push(e(t[a], r, o).source);}return s(new RegExp("(?:" + n.join("|") + ")", p(o)), r);}(t, r, n) : function (e, t, r) {return f(a(e, r), t, r);}(t, r, n);}, e.exports.parse = a, e.exports.compile = function (e, t) {return u(a(e, t), t);}, e.exports.tokensToFunction = u, e.exports.tokensToRegExp = f;var n = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");function a(e, t) {for (var r, o = [], a = 0, i = 0, u = "", s = t && t.delimiter || "/"; null != (r = n.exec(e));) {var p = r[0],f = r[1],h = r.index;if (u += e.slice(i, h), i = h + p.length, f) u += f[1];else {var v = e[i],y = r[2],g = r[3],d = r[4],m = r[5],b = r[6],P = r[7];u && (o.push(u), u = "");var O = null != y && null != v && v !== y,k = "+" === b || "*" === b,w = "?" === b || "*" === b,j = r[2] || s,R = d || m;o.push({ name: g || a++, prefix: y || "", delimiter: j, optional: w, repeat: k, partial: O, asterisk: !!P, pattern: R ? c(R) : P ? ".*" : "[^" + l(j) + "]+?" });}}return i < e.length && (u += e.substr(i)), u && o.push(u), o;}function i(e) {return encodeURI(e).replace(/[\/?#]/g, function (e) {return "%" + e.charCodeAt(0).toString(16).toUpperCase();});}function u(e, t) {for (var r = new Array(e.length), n = 0; n < e.length; n++) {"object" == typeof e[n] && (r[n] = new RegExp("^(?:" + e[n].pattern + ")$", p(t)));}return function (t, n) {for (var a = "", u = t || {}, l = (n || {}).pretty ? i : encodeURIComponent, c = 0; c < e.length; c++) {var s = e[c];if ("string" != typeof s) {var p,f = u[s.name];if (null == f) {if (s.optional) {s.partial && (a += s.prefix);continue;}throw new TypeError('Expected "' + s.name + '" to be defined');}if (o(f)) {if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");if (0 === f.length) {if (s.optional) continue;throw new TypeError('Expected "' + s.name + '" to not be empty');}for (var h = 0; h < f.length; h++) {if (p = l(f[h]), !r[c].test(p)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '", but received `' + JSON.stringify(p) + "`");a += (0 === h ? s.prefix : s.delimiter) + p;}} else {if (p = s.asterisk ? encodeURI(f).replace(/[?#]/g, function (e) {return "%" + e.charCodeAt(0).toString(16).toUpperCase();}) : l(f), !r[c].test(p)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but received "' + p + '"');a += s.prefix + p;}} else a += s;}return a;};}function l(e) {return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");}function c(e) {return e.replace(/([=!:$\/()])/g, "\\$1");}function s(e, t) {return e.keys = t, e;}function p(e) {return e && e.sensitive ? "" : "i";}function f(e, t, r) {o(t) || (r = t || r, t = []);for (var n = (r = r || {}).strict, a = !1 !== r.end, i = "", u = 0; u < e.length; u++) {var c = e[u];if ("string" == typeof c) i += l(c);else {var f = l(c.prefix),h = "(?:" + c.pattern + ")";t.push(c), c.repeat && (h += "(?:" + f + h + ")*"), i += h = c.optional ? c.partial ? f + "(" + h + ")?" : "(?:" + f + "(" + h + "))?" : f + "(" + h + ")";}}var v = l(r.delimiter || "/"),y = i.slice(-v.length) === v;return n || (i = (y ? i.slice(0, -v.length) : i) + "(?:" + v + "(?=$))?"), i += a ? "$" : n && y ? "" : "(?=" + v + "|$)", s(new RegExp("^" + i, p(r)), t);}}, 173: function _(e) {e.exports = Array.isArray || function (e) {return "[object Array]" == Object.prototype.toString.call(e);};}, 844: function _(e, t, r) {"use strict";var o = this && this.__assign || function () {return (o = Object.assign || function (e) {for (var t, r = 1, o = arguments.length; r < o; r++) {for (var n in t = arguments[r]) {Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);}}return e;}).apply(this, arguments);};Object.defineProperty(t, "__esModule", { value: !0 }), t.buildVueRouter = t.buildVueRoutes = void 0;var n = r(366),a = r(883),i = r(789),u = r(169);t.buildVueRoutes = function (e, t) {for (var r = e.routesMap, o = r.pathMap, l = r.finallyPathList, c = Object.keys(t), s = 0; s < c.length; s++) {var p = c[s],f = o[p],h = t[p];if (f) {var v = i.getRoutePath(f, e).finallyPath;if (v instanceof Array) throw new Error("非 vueRouterDev 模式下，alias、aliasPath、path 无法提供数组类型！ " + JSON.stringify(f));null != f.name && (h.name = f.name);var y = h.path,g = h.alias;delete h.alias, h.path = v, "/" === y && null != g && (h.alias = g, h.path = y), f.beforeEnter && (h.beforeEnter = function (t, r, o) {u.onTriggerEachHook(t, r, e, n.hookToggle.enterHooks, o);});} else a.warn(p + " 路由地址在路由表中未找到，确定是否传递漏啦", e, !0);}return l.includes("*") && (t["*"] = o["*"]), t;}, t.buildVueRouter = function (e, t, r) {var n;n = "[object Array]" === i.getDataType(r) ? r : Object.values(r);var a = e.options.h5,u = a.scrollBehavior,l = a.fallback,c = t.options.scrollBehavior;t.options.scrollBehavior = function (e, t, r) {return c && c(e, t, r), u(e, t, r);}, t.fallback = l;var s = new t.constructor(o(o({}, e.options.h5), { base: t.options.base, mode: t.options.mode, routes: n }));t.matcher = s.matcher;};}, 369: function _(e, t, r) {"use strict";Object.defineProperty(t, "__esModule", { value: !0 }), t.addKeepAliveInclude = void 0;var o = r(789),n = ["", ""],a = n[0],i = n[1];t.addKeepAliveInclude = function (e) {var t = getApp(),r = t.keepAliveInclude;if (0 === e.runId && 0 === r.length) {i = t.$route.params.__id__;var n = (a = t.$route.meta.name) + "-" + i;t.keepAliveInclude.push(n);} else if ("" !== a) for (var u = t.keepAliveInclude, l = 0; l < u.length; l++) {n = u[l];var c = new RegExp(a + "-(\\d+)$"),s = a + "-" + i;if (c.test(n) && n !== s) {o.removeSimpleValue(u, s), a = "";break;}}};}, 147: function _(e, t) {"use strict";var _r,o = this && this.__extends || (_r = function r(e, t) {return (_r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var r in t) {Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);}})(e, t);}, function (e, t) {function o() {this.constructor = e;}_r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());});Object.defineProperty(t, "__esModule", { value: !0 }), t.proxyH5Mount = t.proxyEachHook = t.MyArray = void 0;var n = function (e) {function t(r, o, n, a) {var i = e.call(this) || this;return i.router = r, i.vueEachArray = o, i.myEachHook = n, i.hookName = a, Object.setPrototypeOf(i, t.prototype), i;}return o(t, e), t.prototype.push = function (e) {var t = this;this.vueEachArray.push(e);var r = this.length;this[this.length] = function (e, o, n) {r > 0 ? t.vueEachArray[r](e, o, function () {n && n();}) : t.myEachHook(e, o, function (a) {!1 === a ? n(!1) : t.vueEachArray[r](e, o, function (e) {n(a);});}, t.router, !0);};}, t;}(Array);t.MyArray = n, t.proxyEachHook = function (e, t) {for (var r = ["beforeHooks", "afterHooks"], o = 0; o < r.length; o++) {var a = r[o],i = e.lifeCycle[a][0];if (i) {var u = t[a];t[a] = new n(e, u, i, a);}}}, t.proxyH5Mount = function (e) {var t;if (0 === e.mount.length) {if (null === (t = e.options.h5) || void 0 === t ? void 0 : t.vueRouterDev) return;navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && setTimeout(function () {if (document.getElementsByTagName("uni-page").length > 0) return !1;window.location.reload();}, 0);} else e.mount[0].app.$mount(), e.mount = [];};}, 814: function _(e, t) {"use strict";var r = this && this.__assign || function () {return (r = Object.assign || function (e) {for (var t, r = 1, o = arguments.length; r < o; r++) {for (var n in t = arguments[r]) {Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);}}return e;}).apply(this, arguments);};Object.defineProperty(t, "__esModule", { value: !0 }), t.tabIndexSelect = t.HomeNvueSwitchTab = t.runtimeQuit = t.registerLoddingPage = void 0;var o = null,n = null;t.registerLoddingPage = function (e) {var t;if (null === (t = e.options.APP) || void 0 === t ? void 0 : t.registerLoadingPage) {var o = e.options.APP,n = o.loadingPageHook,a = o.loadingPageStyle;n(new plus.nativeObj.View("router-loadding", r({ top: "0px", left: "0px", height: "100%", width: "100%" }, a())));}}, t.runtimeQuit = function (e) {void 0 === e && (e = "再按一次退出应用");var t = +new Date();o ? t - o < 1e3 && plus.runtime.quit() : (o = t, uni.showToast({ title: e, icon: "none", position: "bottom", duration: 1e3 }), setTimeout(function () {o = null;}, 1e3));}, t.HomeNvueSwitchTab = function (e, t, r) {return new Promise(function (t) {return 0 !== e.runId ? t(!1) : __uniConfig.tabBar && Array.isArray(__uniConfig.tabBar.list) ? void r({ url: __uniConfig.entryPagePath, animationDuration: 0, complete: function complete() {return t(!0);} }) : t(!1);});}, t.tabIndexSelect = function (e, t) {if (!__uniConfig.tabBar || !Array.isArray(__uniConfig.tabBar.list)) return !1;for (var r = __uniConfig.tabBar.list, o = [], a = 0, i = 0; i < r.length; i++) {var u = r[i];if ("/" + u.pagePath !== e.path && "/" + u.pagePath !== t.path || (u.pagePath === t.path && (a = i), o.push(u)), 2 === o.length) break;}return 2 === o.length && (null == n && (n = uni.requireNativePlugin("uni-tabview")), n.switchSelect({ index: a }), !0);};}, 334: function _(e, t) {"use strict";Object.defineProperty(t, "__esModule", { value: !0 }), t.getEnterPath = void 0, t.getEnterPath = function (e, t) {switch (t.options.platform) {case "mp-alipay":case "mp-weixin":case "mp-toutiao":case "mp-qq":return e.$options.mpInstance.route;case "mp-baidu":return e.$options.mpInstance.is || e.$options.mpInstance.pageinstance.route;}return e.$options.mpInstance.route;};}, 282: function _(e, t, r) {"use strict";Object.defineProperty(t, "__esModule", { value: !0 }), t.proxyHookName = t.proxyHookDeps = t.lifeCycle = t.baseConfig = t.mpPlatformReg = void 0;var o = r(883),n = r(99);t.mpPlatformReg = "(^mp-weixin$)|(^mp-baidu$)|(^mp-alipay$)|(^mp-toutiao$)|(^mp-qq$)|(^mp-360$)", t.baseConfig = { h5: { paramsToQuery: !1, vueRouterDev: !1, vueNext: !1, mode: "hash", base: "/", linkActiveClass: "router-link-active", linkExactActiveClass: "router-link-exact-active", scrollBehavior: function scrollBehavior(e, t, r) {return { x: 0, y: 0 };}, fallback: !0 }, APP: { registerLoadingPage: !0, loadingPageStyle: function loadingPageStyle() {return JSON.parse('{"backgroundColor":"#FFF"}');}, loadingPageHook: function loadingPageHook(e) {e.show();}, launchedHook: function launchedHook() {plus.navigator.closeSplashscreen();}, animation: {} }, applet: { animationDuration: 300 }, beforeProxyHooks: { onLoad: function onLoad(e, t, r) {var o = e[0];t([n.parseQuery({ query: o }, r)]);} }, platform: "h5", keepUniOriginNav: !1, debugger: !1, routerBeforeEach: function routerBeforeEach(e, t, r) {r();}, routerAfterEach: function routerAfterEach(e, t) {}, routerErrorEach: function routerErrorEach(e, t) {t.$lockStatus = !1, o.err(e, t, !0);}, detectBeforeLock: function detectBeforeLock(e, t, r) {}, routes: [{ path: "/choose-location" }, { path: "/open-location" }, { path: "/preview-image" }] }, t.lifeCycle = { beforeHooks: [], afterHooks: [], routerBeforeHooks: [], routerAfterHooks: [], routerErrorHooks: [] }, t.proxyHookDeps = { resetIndex: [], hooks: {}, options: {} }, t.proxyHookName = ["onLaunch", "onShow", "onHide", "onError", "onInit", "onLoad", "onReady", "onUnload", "onResize", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed"];}, 801: function _(e, t, r) {"use strict";Object.defineProperty(t, "__esModule", { value: !0 }), t.createRouteMap = void 0;var o = r(883),n = r(789);t.createRouteMap = function (e, t) {var r = { finallyPathList: [], finallyPathMap: Object.create(null), aliasPathMap: Object.create(null), pathMap: Object.create(null), vueRouteMap: Object.create(null), nameMap: Object.create(null) };return t.forEach(function (t) {var a = n.getRoutePath(t, e),i = a.finallyPath,u = a.aliasPath,l = a.path;if (null == l) throw new Error("请提供一个完整的路由对象，包括以绝对路径开始的 ‘path’ 字符串 " + JSON.stringify(t));if (i instanceof Array && !e.options.h5.vueRouterDev && "h5" === e.options.platform) throw new Error("非 vueRouterDev 模式下，route.alias 目前无法提供数组类型！ " + JSON.stringify(t));var c = i,s = u;"h5" !== e.options.platform && 0 !== c.indexOf("/") && "*" !== l && o.warn("当前路由对象下，route：" + JSON.stringify(t) + " 是否缺少了前缀 ‘/’", e, !0), r.finallyPathMap[c] || (r.finallyPathMap[c] = t, r.aliasPathMap[s] = t, r.pathMap[l] = t, r.finallyPathList.push(c), null != t.name && (r.nameMap[t.name] = t));}), r;};}, 662: function _(e, t, r) {"use strict";Object.defineProperty(t, "__esModule", { value: !0 }), t.registerEachHooks = t.registerRouterHooks = t.registerHook = void 0;var o = r(366),n = r(169);function a(e, t) {e[0] = t;}t.registerHook = a, t.registerRouterHooks = function (e, t) {return a(e.routerBeforeHooks, function (e, r, o) {t.routerBeforeEach(e, r, o);}), a(e.routerAfterHooks, function (e, r) {t.routerAfterEach(e, r);}), a(e.routerErrorHooks, function (e, r) {t.routerErrorEach(e, r);}), e;}, t.registerEachHooks = function (e, t, r) {a(e.lifeCycle[t], function (e, a, i, u, l) {l ? n.onTriggerEachHook(e, a, u, o.hookToggle[t], i) : r(e, a, i);});};}, 460: function _(e, t, r) {"use strict";var o = this && this.__assign || function () {return (o = Object.assign || function (e) {for (var t, r = 1, o = arguments.length; r < o; r++) {for (var n in t = arguments[r]) {Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);}}return e;}).apply(this, arguments);};Object.defineProperty(t, "__esModule", { value: !0 }), t.initMixins = t.getMixins = void 0;var n = r(801),a = r(844),i = r(147),u = r(814),l = r(845),c = r(890),s = r(789),p = r(334),f = r(282),h = r(925),v = !1,y = !1,g = { app: !1, page: "" };function d(e, t) {var r = t.options.platform;return new RegExp(f.mpPlatformReg, "g").test(r) && (r = "app-lets"), { h5: { beforeCreate: function beforeCreate() {var e;if (h.beforeProxyHook(this, t), this.$options.router) {t.$route = this.$options.router;var r = [];(null === (e = t.options.h5) || void 0 === e ? void 0 : e.vueRouterDev) ? r = t.options.routes : (r = n.createRouteMap(t, this.$options.router.options.routes).finallyPathMap, t.routesMap.vueRouteMap = r, a.buildVueRoutes(t, r)), a.buildVueRouter(t, this.$options.router, r), i.proxyEachHook(t, this.$options.router);}} }, "app-plus": { beforeCreate: function beforeCreate() {h.beforeProxyHook(this, t), v || (v = !0, l.proxyPageHook(this, t, "app"), u.registerLoddingPage(t));} }, "app-lets": { beforeCreate: function beforeCreate() {h.beforeProxyHook(this, t), s.voidFun("UNI-SIMPLE-ROUTER");var e = !0,r = this.$options.mpType;y || ("component" === r ? e = s.assertParentChild(g.page, this) : "page" === r ? (g[r] = p.getEnterPath(this, t), t.enterPath = g[r]) : g[r] = !0, e && l.proxyPageHook(this, t, r));}, onLoad: function onLoad() {s.voidFun("UNI-SIMPLE-ROUTER"), !y && s.assertParentChild(g.page, this) && (y = !0, c.forceGuardEach(t));} } }[r];}t.getMixins = d, t.initMixins = function (e, t) {var r = n.createRouteMap(t, t.options.routes);t.routesMap = r, e.mixin(o({}, d(0, t)));};}, 789: function _(e, t, r) {"use strict";var o = this && this.__assign || function () {return (o = Object.assign || function (e) {for (var t, r = 1, o = arguments.length; r < o; r++) {for (var n in t = arguments[r]) {Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);}}return e;}).apply(this, arguments);},n = this && this.__rest || function (e, t) {var r = {};for (var o in e) {Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);}if (null != e && "function" == typeof Object.getOwnPropertySymbols) {var n = 0;for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) {t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);}}return r;},a = this && this.__spreadArrays || function () {for (var e = 0, t = 0, r = arguments.length; t < r; t++) {e += arguments[t].length;}var o = Array(e),n = 0;for (t = 0; t < r; t++) {for (var a = arguments[t], i = 0, u = a.length; i < u; i++, n++) {o[n] = a[i];}}return o;};Object.defineProperty(t, "__esModule", { value: !0 }), t.deepDecodeQuery = t.resolveAbsolutePath = t.assertParentChild = t.lockDetectWarn = t.deepClone = t.baseClone = t.assertDeepObject = t.paramsToQuery = t.forMatNextToFrom = t.urlToJson = t.getUniCachePage = t.removeSimpleValue = t.copyData = t.getDataType = t.routesForMapRoute = t.notRouteTo404 = t.getWildcardRule = t.assertNewOptions = t.getRoutePath = t.notDeepClearNull = t.mergeConfig = t.timeOut = t.def = t.voidFun = void 0;var i = r(282),u = r(169),l = r(883),c = r(890),s = r(779);function p(e, t) {for (var r = Object.create(null), n = Object.keys(e).concat(["resolveQuery", "parseQuery"]), i = 0; i < n.length; i += 1) {var u = n[i];null != t[u] ? t[u].constructor === Object ? r[u] = o(o({}, e[u]), t[u]) : r[u] = "routes" === u ? a(e[u], t[u]) : t[u] : r[u] = e[u];}return r;}function f(e, t) {var r = e.aliasPath || e.alias || e.path;return "h5" !== t.options.platform && (r = e.path), { finallyPath: r, aliasPath: e.aliasPath || e.path, path: e.path, alias: e.alias };}function h(e, t) {var r = e.routesMap.finallyPathMap["*"];if (r) return r;throw t && u.ERRORHOOK[0](t, e), new Error("当前路由表匹配规则已全部匹配完成，未找到满足的匹配规则。你可以使用 '*' 通配符捕捉最后的异常");}function v(e) {return Object.prototype.toString.call(e);}function y(e, t) {if (null == e) t = e;else for (var r = 0, o = Object.keys(e); r < o.length; r++) {var n = o[r],a = n;e[n] !== e && ("object" == typeof e[n] ? (t[a] = "[object Array]" === v(e[n]) ? [] : {}, t[a] = y(e[n], t[a])) : t[a] = e[n]);}return t;}function g(e) {var t = "[object Array]" === v(e) ? [] : {};return y(e, t), t;}t.voidFun = function () {for (var e = [], t = 0; t < arguments.length; t++) {e[t] = arguments[t];}}, t.def = function (e, t, r) {Object.defineProperty(e, t, { get: function get() {return r();} });}, t.timeOut = function (e) {return new Promise(function (t) {setTimeout(function () {t();}, e);});}, t.mergeConfig = p, t.notDeepClearNull = function (e) {for (var t in e) {null == e[t] && delete e[t];}return e;}, t.getRoutePath = f, t.assertNewOptions = function (e) {var t,r = e.platform,o = e.routes;if (null == r) throw new Error("你在实例化路由时必须传递 'platform'");if (null == o || 0 === o.length) throw new Error("你在实例化路由时必须传递 routes 为空，这是无意义的。");return "h5" === e.platform && (null === (t = e.h5) || void 0 === t ? void 0 : t.vueRouterDev) && (i.baseConfig.routes = []), p(i.baseConfig, e);}, t.getWildcardRule = h, t.notRouteTo404 = function (e, t, r, o) {if ("*" !== t.path) return t;var n = t.redirect;if (void 0 === n) throw new Error(" *  通配符必须配合 redirect 使用。redirect: string | Location | Function");var a = n;return "function" == typeof a && (a = a(r)), c.navjump(a, e, o, void 0, void 0, void 0, !1);}, t.routesForMapRoute = function e(t, r, o, n) {var a;if (void 0 === n && (n = !1), null === (a = t.options.h5) || void 0 === a ? void 0 : a.vueRouterDev) return { path: r };for (var i = r.split("?")[0], u = "", l = t.routesMap, c = 0; c < o.length; c++) {for (var p = l[o[c]], f = 0, y = Object.entries(p); f < y.length; f++) {var g = y[f],d = g[0],m = g[1];if ("*" !== d) {var b = m,P = d;if ("[object Array]" === v(p) && (P = b), null != s(P).exec(i)) return "[object String]" === v(b) ? l.finallyPathMap[b] : b;} else "" === u && (u = "*");}}if (n) return {};if (l.aliasPathMap) {var O = e(t, r, ["aliasPathMap"], !0);if (Object.keys(O).length > 0) return O;}if ("" !== u) return h(t);throw new Error(r + " 路径无法在路由表中找到！检查跳转路径及路由表");}, t.getDataType = v, t.copyData = function (e) {return JSON.parse(JSON.stringify(e));}, t.removeSimpleValue = function (e, t) {for (var r = 0; r < e.length; r++) {if (e[r] === t) return e.splice(r, 1), !0;}return !1;}, t.getUniCachePage = function (e) {var t = getCurrentPages();if (null == e) return t;if (0 === t.length) return t;var r = t.reverse()[e];return null == r ? [] : r;}, t.urlToJson = function (e) {var t = {},r = e.split("?"),o = r[0],n = r[1];if (null != n) for (var a = 0, i = n.split("&"); a < i.length; a++) {var u = i[a].split("=");t[u[0]] = u[1];}return { path: o, query: t };}, t.forMatNextToFrom = function (e, t, r) {var o = [t, r],n = o[0],a = o[1];if ("h5" === e.options.platform) {var i = e.options.h5,u = i.vueNext,l = i.vueRouterDev;u || l || (n = c.createRoute(e, void 0, n), a = c.createRoute(e, void 0, a));} else n = c.createRoute(e, void 0, g(n)), a = c.createRoute(e, void 0, g(a));return { matTo: n, matFrom: a };}, t.paramsToQuery = function (e, t) {var r;if ("h5" === e.options.platform && !(null === (r = e.options.h5) || void 0 === r ? void 0 : r.paramsToQuery)) return t;if ("[object Object]" === v(t)) {var a = t,i = a.name,l = a.params,c = n(a, ["name", "params"]),s = l;if ("h5" !== e.options.platform && null == s && (s = {}), null != i && null != s) {var p = e.routesMap.nameMap[i];null == p && (p = h(e, { type: 2, msg: "命名路由为：" + i + " 的路由，无法在路由表中找到！", toRule: t }));var y = f(p, e).finallyPath;if (!y.includes(":")) return o(o({}, c), { path: y, query: s });u.ERRORHOOK[0]({ type: 2, msg: "动态路由：" + y + " 无法使用 paramsToQuery！", toRule: t }, e);}}return t;}, t.assertDeepObject = function (e) {var t = null;try {t = JSON.stringify(e).match(/\{|\[|\}|\]/g);} catch (e) {l.warnLock("传递的参数解析对象失败。" + e);}return null != t && t.length > 3;}, t.baseClone = y, t.deepClone = g, t.lockDetectWarn = function (e, t, r, o, n, a) {if (void 0 === n && (n = {}), "afterHooks" === a) o();else {var i = e.options.detectBeforeLock;i && i(e, t, r), e.$lockStatus ? e.options.routerErrorEach({ type: 2, msg: "当前页面正在处于跳转状态，请稍后再进行跳转....", NAVTYPE: r, uniActualData: n }, e) : o();}}, t.assertParentChild = function (e, t) {for (; null != t.$parent;) {var r = t.$parent.$mp;if (r.page && r.page.is === e) return !0;t = t.$parent;}try {if (t.$mp.page.is === e || t.$mp.page.route === e) return !0;} catch (e) {return !1;}return !1;}, t.resolveAbsolutePath = function (e, t) {var r = /^\/?([^\?\s]+)(\?.+)?$/,o = e.trim();if (!r.test(o)) throw new Error("【" + e + "】 路径错误，请提供完整的路径(10001)。");var n = o.match(r);if (null == n) throw new Error("【" + e + "】 路径错误，请提供完整的路径(10002)。");var a = n[2] || "";if (/^\.\/[^\.]+/.test(o)) return (t.currentRoute.path + e).replace(/[^\/]+\.\//, "");var i = n[1].replace(/\//g, "\\/").replace(/\.\./g, "[^\\/]+").replace(/\./g, "\\."),u = new RegExp("^\\/" + i + "$"),l = t.options.routes.filter(function (e) {return u.test(e.path);});if (1 !== l.length) throw new Error("【" + e + "】 路径错误，尝试转成绝对路径失败，请手动转成绝对路径(10003)。");return l[0].path + a;}, t.deepDecodeQuery = function e(t) {for (var r = "[object Array]" === v(t) ? [] : {}, o = Object.keys(t), n = 0; n < o.length; n++) {var a = o[n],i = t[a];if ("string" == typeof i) try {var u = JSON.parse(decodeURIComponent(i));"object" != typeof u && (u = i), r[a] = u;} catch (e) {try {r[a] = decodeURIComponent(i);} catch (e) {r[a] = i;}} else if ("object" == typeof i) {var l = e(i);r[a] = l;} else r[a] = i;}return r;};}, 883: function _(e, t) {"use strict";function r(e, t, r, o) {if (void 0 === o && (o = !1), !o) {var n = "[object Object]" === t.toString();if (!1 === t) return !1;if (n && !1 === t[e]) return !1;}return console[e](r), !0;}Object.defineProperty(t, "__esModule", { value: !0 }), t.warnLock = t.log = t.warn = t.err = t.isLog = void 0, t.isLog = r, t.err = function (e, t, o) {r("error", t.options.debugger, e, o);}, t.warn = function (e, t, o) {r("warn", t.options.debugger, e, o);}, t.log = function (e, t, o) {r("log", t.options.debugger, e, o);}, t.warnLock = function (e) {console.warn(e);};}, 607: function _(e, t, r) {"use strict";var o = this && this.__createBinding || (Object.create ? function (e, t, r, o) {void 0 === o && (o = r), Object.defineProperty(e, o, { enumerable: !0, get: function get() {return t[r];} });} : function (e, t, r, o) {void 0 === o && (o = r), e[o] = t[r];}),n = this && this.__exportStar || function (e, t) {for (var r in e) {"default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);}};Object.defineProperty(t, "__esModule", { value: !0 }), t.createRouter = t.RouterMount = t.runtimeQuit = void 0, n(r(366), t), n(r(309), t), n(r(789), t);var a = r(814);Object.defineProperty(t, "runtimeQuit", { enumerable: !0, get: function get() {return a.runtimeQuit;} });var i = r(963);Object.defineProperty(t, "RouterMount", { enumerable: !0, get: function get() {return i.RouterMount;} }), Object.defineProperty(t, "createRouter", { enumerable: !0, get: function get() {return i.createRouter;} });var u = "2.0.8-BETA.4";/[A-Z]/g.test(u) && console.warn("【" + "UNI-SIMPLE-ROUTER".toLocaleLowerCase() + " 提示】：当前版本 " + u.toLocaleLowerCase() + " 此版本为测试版。有BUG请退回正式版，线上正式版本：2.0.7");}, 366: function _(e, t) {"use strict";var r, o, n;Object.defineProperty(t, "__esModule", { value: !0 }), t.rewriteMethodToggle = t.navtypeToggle = t.hookToggle = void 0, (n = t.hookToggle || (t.hookToggle = {})).beforeHooks = "beforeEach", n.afterHooks = "afterEach", n.enterHooks = "beforeEnter", (o = t.navtypeToggle || (t.navtypeToggle = {})).push = "navigateTo", o.replace = "redirectTo", o.replaceAll = "reLaunch", o.pushTab = "switchTab", o.back = "navigateBack", (r = t.rewriteMethodToggle || (t.rewriteMethodToggle = {})).navigateTo = "push", r.navigate = "push", r.redirectTo = "replace", r.reLaunch = "replaceAll", r.switchTab = "pushTab", r.navigateBack = "back";}, 309: function _(e, t) {"use strict";Object.defineProperty(t, "__esModule", { value: !0 });}, 925: function _(e, t, r) {"use strict";Object.defineProperty(t, "__esModule", { value: !0 }), t.beforeProxyHook = void 0;var o = r(789),n = r(883);t.beforeProxyHook = function (e, t) {var r = e.$options,a = t.options.beforeProxyHooks;if (null == r) return !1;if (null == a) return !1;for (var i = Object.keys(a), u = function u(e) {var u = i[e],l = r[u];if (l) for (var c = a[u], s = function s(e) {if (l[e].toString().includes("UNI-SIMPLE-ROUTER")) return "continue";var r = l.splice(e, 1, function () {for (var e = this, n = [], a = 0; a < arguments.length; a++) {n[a] = arguments[a];}var i = "UNI-SIMPLE-ROUTER";o.voidFun(i), c ? c.call(this, n, function (t) {r.apply(e, t);}, t) : r.apply(this, n);})[0];}, p = 0; p < l.length; p++) {s(p);} else n.warn("beforeProxyHooks ===> 当前组件不适合" + u + "，或者 hook: " + u + " 不存在，已为你规避处理，可以忽略。", t);}, l = 0; l < i.length; l++) {u(l);}return !0;};}, 169: function _(e, t, r) {"use strict";var o = this && this.__rest || function (e, t) {var r = {};for (var o in e) {Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);}if (null != e && "function" == typeof Object.getOwnPropertySymbols) {var n = 0;for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) {t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);}}return r;};Object.defineProperty(t, "__esModule", { value: !0 }), t.loopCallHook = t.transitionTo = t.onTriggerEachHook = t.callHook = t.callBeforeRouteLeave = t.HOOKLIST = t.ERRORHOOK = void 0;var n = r(789),a = r(890),i = r(147),u = r(369),l = r(814);function c(e, t, r, o) {var a,i = n.getUniCachePage(0);if (Object.keys(i).length > 0) {var u = void 0;switch ("h5" === e.options.platform ? u = i.$options.beforeRouteLeave : null != i.$vm && (u = i.$vm.$options.beforeRouteLeave), n.getDataType(u)) {case "[object Array]":a = (a = u[0]).bind(i);break;case "[object Function]":a = u.bind(i.$vm);}}return s(a, t, r, e, o);}function s(e, t, r, o, n, a) {void 0 === a && (a = !0), null != e && e instanceof Function ? !0 === a ? e(t, r, n, o, !1) : (e(t, r, function () {}, o, !1), n()) : n();}function p(e, t, r, o, a, i) {var u = n.forMatNextToFrom(e, t, r),l = u.matTo,c = u.matFrom;"h5" === e.options.platform ? f(a, 0, i, e, l, c, o) : f(a.slice(0, 4), 0, function () {i(function () {f(a.slice(4), 0, n.voidFun, e, l, c, o);});}, e, l, c, o);}function f(e, r, i, u, c, s, p) {var h = n.routesForMapRoute(u, c.path, ["finallyPathMap", "pathMap"]);if (e.length - 1 < r) return i();var v = e[r],y = t.ERRORHOOK[0];v(u, c, s, h, function (t) {if ("app-plus" === u.options.platform && (!1 !== t && "string" != typeof t && "object" != typeof t || l.tabIndexSelect(c, s)), !1 === t) "h5" === u.options.platform && i(!1), y({ type: 0, msg: "管道函数传递 false 导航被终止!", matTo: c, matFrom: s, nextTo: t }, u);else if ("string" == typeof t || "object" == typeof t) {var n = p,h = t;if ("object" == typeof t) {var v = t.NAVTYPE;h = o(t, ["NAVTYPE"]), null != v && (n = v);}a.navjump(h, u, n, { from: s, next: i });} else null == t ? (r++, f(e, r, i, u, c, s, p)) : y({ type: 1, msg: "管道函数传递未知类型，无法被识别。导航被终止！", matTo: c, matFrom: s, nextTo: t }, u);});}t.ERRORHOOK = [function (e, t) {return t.lifeCycle.routerErrorHooks[0](e, t);}], t.HOOKLIST = [function (e, t, r, o, n) {return s(e.lifeCycle.routerBeforeHooks[0], t, r, e, n);}, function (e, t, r, o, n) {return c(e, t, r, n);}, function (e, t, r, o, n) {return s(e.lifeCycle.beforeHooks[0], t, r, e, n);}, function (e, t, r, o, n) {return s(o.beforeEnter, t, r, e, n);}, function (e, t, r, o, n) {return s(e.lifeCycle.afterHooks[0], t, r, e, n, !1);}, function (e, t, r, o, n) {return e.$lockStatus = !1, "h5" === e.options.platform && (i.proxyH5Mount(e), u.addKeepAliveInclude(e)), e.runId++, s(e.lifeCycle.routerAfterHooks[0], t, r, e, n, !1);}], t.callBeforeRouteLeave = c, t.callHook = s, t.onTriggerEachHook = function (e, r, o, n, a) {var i = [];switch (n) {case "beforeEach":i = t.HOOKLIST.slice(0, 3);break;case "afterEach":i = t.HOOKLIST.slice(4);break;case "beforeEnter":i = t.HOOKLIST.slice(3, 4);}p(o, e, r, "push", i, a);}, t.transitionTo = p, t.loopCallHook = f;}, 890: function _(e, t, r) {"use strict";var o = this && this.__assign || function () {return (o = Object.assign || function (e) {for (var t, r = 1, o = arguments.length; r < o; r++) {for (var n in t = arguments[r]) {Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);}}return e;}).apply(this, arguments);},n = this && this.__rest || function (e, t) {var r = {};for (var o in e) {Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);}if (null != e && "function" == typeof Object.getOwnPropertySymbols) {var n = 0;for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) {t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);}}return r;};Object.defineProperty(t, "__esModule", { value: !0 }), t.createRoute = t.forceGuardEach = t.backOptionsBuild = t.navjump = t.lockNavjump = void 0;var a = r(366),i = r(99),u = r(789),l = r(169),c = r(845),s = r(169);function p(e, t, r, o, n) {u.lockDetectWarn(t, e, r, function () {"h5" !== t.options.platform && (t.$lockStatus = !0), f(e, t, r, void 0, o, n);}, n);}function f(e, t, r, n, p, f, v) {if (void 0 === v && (v = !0), "back" === r) {var y = 1;if ("string" == typeof e ? y = +e : (y = e.delta || 1, f = o(o({}, f || {}), e)), "h5" === t.options.platform) {t.$route.go(-y);var g = (f || { success: u.voidFun }).success || u.voidFun,d = (f || { complete: u.voidFun }).complete || u.voidFun;return g({ errMsg: "navigateBack:ok" }), void d({ errMsg: "navigateBack:ok" });}e = h(t, y, f);}var m = i.queryPageToMap(e, t).rule;m.type = a.navtypeToggle[r];var b = u.paramsToQuery(t, m),P = i.resolveQuery(b, t);if ("h5" === t.options.platform) {if ("push" !== r && (r = "replace"), null != n) n.next(o({ replace: "push" !== r }, P));else if ("push" === r && Reflect.has(P, "events")) {if (Reflect.has(P, "name")) throw new Error("在h5端上使用 'push'、'navigateTo' 跳转时，如果包含 events 不允许使用 name 跳转，因为 name 实现了动态路由。请更换为 path 或者 url 跳转！");uni.navigateTo(P, !0, u.voidFun, p);} else t.$route[r](P, P.success || u.voidFun, P.fail || u.voidFun);} else {var O = { path: "" };if (null == n) {var k = u.routesForMapRoute(t, P.path, ["finallyPathMap", "pathMap"]);k = u.notRouteTo404(t, k, P, r), P = o(o(o(o({}, k), { params: {} }), P), { path: k.path }), O = c.createToFrom(P, t);} else O = n.from;if (c.createFullPath(P, O), !1 === v) return P;l.transitionTo(t, P, O, r, s.HOOKLIST, function (e) {uni[a.navtypeToggle[r]](P, !0, e, p);});}}function h(e, t, r) {void 0 === r && (r = {});var n = v(e, t, void 0, o({ NAVTYPE: "back" }, r)),a = o(o({}, r), { path: n.path, query: n.query, delta: t });if ("[object Object]" === u.getDataType(r)) {var i = r,l = i.animationDuration,c = i.animationType;null != l && (a.animationDuration = l), null != c && (a.animationType = c);var s = r.from;null != s && (a.BACKTYPE = s);}return a;}function v(e, t, r, l) {void 0 === t && (t = 0), void 0 === l && (l = {});var c = { name: "", meta: {}, path: "", fullPath: "", NAVTYPE: "", query: {}, params: {}, BACKTYPE: (r || { BACKTYPE: "" }).BACKTYPE || "" };if (19970806 === t) return c;if ("h5" === e.options.platform) {var s = { path: "" };s = null != r ? r : e.$route.currentRoute;var p = u.copyData(s.params);delete p.__id__;var f = i.parseQuery(o(o({}, p), u.copyData(s.query)), e);s = o(o({}, s), { query: f }), c.path = s.path, c.fullPath = s.fullPath || "", c.query = u.deepDecodeQuery(s.query || {}), c.NAVTYPE = a.rewriteMethodToggle[s.type || "reLaunch"];} else {var h = {};if (null != r) h = o(o({}, r), { openType: r.type });else {var v = u.getUniCachePage(t);if (0 === Object.keys(v).length) {var y = l.NAVTYPE,g = n(l, ["NAVTYPE"]),d = "不存在的页面栈，请确保有足够的页面可用，当前 level:" + t;throw e.options.routerErrorEach({ type: 3, msg: d, NAVTYPE: y, level: t, uniActualData: g }, e), new Error(d);}var m = v.options || {};h = o(o({}, v.$page || {}), { query: u.deepDecodeQuery(m), fullPath: decodeURIComponent((v.$page || {}).fullPath || "/" + v.route) }), "app-plus" !== e.options.platform && (h.path = "/" + v.route);}var b = h.openType;c.query = h.query, c.path = h.path, c.fullPath = h.fullPath, c.NAVTYPE = a.rewriteMethodToggle[b || "reLaunch"];}var P = u.routesForMapRoute(e, c.path, ["finallyPathMap", "pathMap"]),O = o(o({}, c), P);return O.query = i.parseQuery(O.query, e), O;}t.lockNavjump = p, t.navjump = f, t.backOptionsBuild = h, t.forceGuardEach = function (e, t, r) {if (void 0 === t && (t = "replaceAll"), void 0 === r && (r = !1), "h5" === e.options.platform) throw new Error("在h5端上使用：forceGuardEach 是无意义的，目前 forceGuardEach 仅支持在非h5端上使用");var o = u.getUniCachePage(0);0 === Object.keys(o).length && e.options.routerErrorEach({ type: 3, NAVTYPE: t, uniActualData: {}, level: 0, msg: "不存在的页面栈，请确保有足够的页面可用，当前 level:0" }, e);var n = o,a = n.route,i = n.options;p({ path: "/" + a, query: u.deepDecodeQuery(i || {}) }, e, t, r);}, t.createRoute = v;}, 845: function _(e, t, r) {"use strict";Object.defineProperty(t, "__esModule", { value: !0 }), t.resetPageHook = t.resetAndCallPageHook = t.proxyPageHook = t.createFullPath = t.createToFrom = void 0;var o = r(282),n = r(789),a = r(890),i = r(99);function u(e) {for (var t = e.proxyHookDeps, r = 0, o = Object.entries(t.hooks); r < o.length; r++) {(0, o[r][1].resetHook)();}}t.createToFrom = function (e, t) {var r = n.getUniCachePage(0);return "[object Array]" === n.getDataType(r) ? n.deepClone(e) : a.createRoute(t);}, t.createFullPath = function (e, t) {if (null == e.fullPath) {var r = i.stringifyQuery(e.query);e.fullPath = e.path + r;}null == t.fullPath && (r = i.stringifyQuery(t.query), t.fullPath = t.path + r);}, t.proxyPageHook = function (e, t, r) {for (var n = t.proxyHookDeps, a = e.$options, i = function i(_i) {var u = o.proxyHookName[_i],l = a[u];if (l) for (var c = function c(o) {if (l[o].toString().includes("UNI-SIMPLE-ROUTER")) return "continue";var a = Object.keys(n.hooks).length + 1,i = function i() {for (var e = [], t = 0; t < arguments.length; t++) {e[t] = arguments[t];}n.resetIndex.push(a), n.options[a] = e;},u = l.splice(o, 1, i)[0];n.hooks[a] = { proxyHook: i, callHook: function callHook(o) {if (t.enterPath.replace(/^\//, "") === o.replace(/^\//, "") || "app" === r) {var i = n.options[a];u.apply(e, i);}}, resetHook: function resetHook() {l.splice(o, 1, u);} };}, s = 0; s < l.length; s++) {c(s);}}, u = 0; u < o.proxyHookName.length; u++) {i(u);}}, t.resetAndCallPageHook = function (e, t, r) {void 0 === r && (r = !0);var o = t.trim().match(/^(\/?[^\?\s]+)(\?[\s\S]*$)?$/);if (null == o) throw new Error("还原hook失败。请检查 【" + t + "】 路径是否正确。");t = o[1];for (var n = e.proxyHookDeps, a = n.resetIndex, i = 0; i < a.length; i++) {var l = a[i];(0, n.hooks[l].callHook)(t);}r && u(e);}, t.resetPageHook = u;}, 99: function _(e, t, r) {"use strict";var o = this && this.__assign || function () {return (o = Object.assign || function (e) {for (var t, r = 1, o = arguments.length; r < o; r++) {for (var n in t = arguments[r]) {Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);}}return e;}).apply(this, arguments);};Object.defineProperty(t, "__esModule", { value: !0 }), t.stringifyQuery = t.parseQuery = t.resolveQuery = t.queryPageToMap = void 0;var n = r(789),a = r(169),i = r(883),u = /[!'()*]/g,l = function l(e) {return "%" + e.charCodeAt(0).toString(16);},c = /%2C/g,s = function s(e) {return encodeURIComponent(e).replace(u, l).replace(c, ",");};t.queryPageToMap = function (e, t) {var r = {},i = "",u = e.success,l = e.fail;if ("[object Object]" === n.getDataType(e)) {var c = e;if (null != c.path) {var s = n.urlToJson(c.path),p = s.path,f = s.query;i = n.routesForMapRoute(t, p, ["finallyPathList", "pathMap"]), r = o(o({}, f), e.query || {}), c.path = p, c.query = r, delete e.params;} else null != c.name ? null == (i = t.routesMap.nameMap[c.name]) ? i = n.getWildcardRule(t, { type: 2, msg: "命名路由为：" + c.name + " 的路由，无法在路由表中找到！", toRule: e }) : (r = e.params || {}, delete e.query) : i = n.getWildcardRule(t, { type: 2, msg: e + " 解析失败，请检测当前路由表下是否有包含。", toRule: e });} else e = n.urlToJson(e), i = n.routesForMapRoute(t, e.path, ["finallyPathList", "pathMap"]), r = e.query;if ("h5" === t.options.platform) {n.getRoutePath(i, t).finallyPath.includes(":") && null == e.name && a.ERRORHOOK[0]({ type: 2, msg: "当有设置 alias或者aliasPath 为动态路由时，不允许使用 path 跳转。请使用 name 跳转！", route: i }, t);var h = e.complete,v = e.success,y = e.fail;if ("[object Function]" === n.getDataType(h)) {var g = function g(e, t) {"[object Function]" === n.getDataType(t) && t.apply(this, e), h.apply(this, e);};u = function u() {for (var e = [], t = 0; t < arguments.length; t++) {e[t] = arguments[t];}g.call(this, e, v);}, l = function l() {for (var e = [], t = 0; t < arguments.length; t++) {e[t] = arguments[t];}g.call(this, e, y);};}}var d = e;return "[object Function]" === n.getDataType(d.success) && (d.success = u), "[object Function]" === n.getDataType(d.fail) && (d.fail = l), { rule: d, route: i, query: r };}, t.resolveQuery = function (e, t) {var r = "query";null != e.params && (r = "params"), null != e.query && (r = "query");var o = n.copyData(e[r] || {}),a = t.options.resolveQuery;if (a) {var u = a(o);"[object Object]" !== n.getDataType(u) ? i.warn("请按格式返回参数： resolveQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}", t) : e[r] = u;} else {if (!n.assertDeepObject(o)) return e;var l = JSON.stringify(o);e[r] = { query: l };}return e;}, t.parseQuery = function (e, t) {var r = t.options.parseQuery;if (r) e = r(n.copyData(e)), "[object Object]" !== n.getDataType(e) && i.warn("请按格式返回参数： parseQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}", t);else if (Reflect.get(e, "query")) {var o = Reflect.get(e, "query");if ("string" == typeof o) try {o = JSON.parse(o);} catch (e) {i.warn("尝试解析深度对象失败，按原样输出。" + e, t);}if ("object" == typeof o) return n.deepDecodeQuery(o);}return e;}, t.stringifyQuery = function (e) {var t = e ? Object.keys(e).map(function (t) {var r = e[t];if (void 0 === r) return "";if (null === r) return s(t);if (Array.isArray(r)) {var o = [];return r.forEach(function (e) {void 0 !== e && (null === e ? o.push(s(t)) : o.push(s(t) + "=" + s(e)));}), o.join("&");}return s(t) + "=" + s(r);}).filter(function (e) {return e.length > 0;}).join("&") : null;return t ? "?" + t : "";};}, 314: function _(e, t, r) {"use strict";var o = this && this.__awaiter || function (e, t, r, o) {return new (r || (r = Promise))(function (n, a) {function i(e) {try {l(o.next(e));} catch (e) {a(e);}}function u(e) {try {l(o.throw(e));} catch (e) {a(e);}}function l(e) {var t;e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {e(t);})).then(i, u);}l((o = o.apply(e, t || [])).next());});},n = this && this.__generator || function (e, t) {var r,o,n,a,i = { label: 0, sent: function sent() {if (1 & n[0]) throw n[1];return n[1];}, trys: [], ops: [] };return a = { next: u(0), throw: u(1), return: u(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {return this;}), a;function u(a) {return function (u) {return function (a) {if (r) throw new TypeError("Generator is already executing.");for (; i;) {try {if (r = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;switch (o = 0, n && (a = [2 & a[0], n.value]), a[0]) {case 0:case 1:n = a;break;case 4:return i.label++, { value: a[1], done: !1 };case 5:i.label++, o = a[1], a = [0];continue;case 7:a = i.ops.pop(), i.trys.pop();continue;default:if (!((n = (n = i.trys).length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {i = 0;continue;}if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {i.label = a[1];break;}if (6 === a[0] && i.label < n[1]) {i.label = n[1], n = a;break;}if (n && i.label < n[2]) {i.label = n[2], i.ops.push(a);break;}n[2] && i.ops.pop(), i.trys.pop();continue;}a = t.call(e, i);} catch (e) {a = [6, e], o = 0;} finally {r = n = 0;}}if (5 & a[0]) throw a[1];return { value: a[0] ? a[1] : void 0, done: !0 };}([a, u]);};}};Object.defineProperty(t, "__esModule", { value: !0 }), t.rewriteMethod = void 0;var a = r(366),i = r(789),u = r(883),l = r(809),c = r(814),s = ["navigateTo", "redirectTo", "reLaunch", "switchTab", "navigateBack"],p = { navigateTo: function navigateTo() {}, redirectTo: function redirectTo() {}, reLaunch: function reLaunch() {}, switchTab: function switchTab() {}, navigateBack: function navigateBack() {} };t.rewriteMethod = function (e) {!1 === e.options.keepUniOriginNav && s.forEach(function (t) {var r = uni[t];p[t] = r, uni[t] = function (s, f, h, v) {return void 0 === f && (f = !1), o(this, void 0, void 0, function () {return n(this, function (o) {switch (o.label) {case 0:return f ? "app-plus" !== e.options.platform ? [3, 2] : [4, c.HomeNvueSwitchTab(e, s, p.reLaunch)] : [3, 3];case 1:o.sent(), o.label = 2;case 2:return l.uniOriginJump(e, r, t, s, h, v), [3, 4];case 3:"app-plus" === e.options.platform && 0 === Object.keys(e.appMain).length && (e.appMain = { NAVTYPE: t, path: s.url }), function (e, t, r) {if ("app-plus" === r.options.platform) {var o = null;e && (o = e.openType), null != o && "appLaunch" === o && (t = "reLaunch");}if ("reLaunch" === t && '{"url":"/"}' === JSON.stringify(e) && (u.warn("uni-app 原生方法：reLaunch({url:'/'}) 默认被重写啦！你可以使用 this.$Router.replaceAll() 或者 uni.reLaunch({url:'/?xxx=xxx'})", r), t = "navigateBack", e = { from: "backbutton" }), "navigateBack" === t) {var n = 1;null == e && (e = { delta: 1 }), "[object Number]" === i.getDataType(e.delta) && (n = e.delta), r.back(n, e);} else {var l = a.rewriteMethodToggle[t],c = e.url;if (!c.startsWith("/")) {var s = i.resolveAbsolutePath(c, r);c = s, e.url = s;}if ("switchTab" === t) {var p = i.routesForMapRoute(r, c, ["pathMap", "finallyPathList"]),f = i.getRoutePath(p, r).finallyPath;if ("[object Array]" === i.getDataType(f) && u.warn("uni-app 原生方法跳转路径为：" + c + "。此路为是tab页面时，不允许设置 alias 为数组的情况，并且不能为动态路由！当然你可以通过通配符*解决！", r), "*" === f && u.warn("uni-app 原生方法跳转路径为：" + c + "。在路由表中找不到相关路由表！当然你可以通过通配符*解决！", r), "h5" === r.options.platform) {var h = e.success;e.success = function () {for (var t = [], r = 0; r < arguments.length; r++) {t[r] = arguments[r];}null == h || h.apply(null, t), i.timeOut(150).then(function () {var t = e.detail || {};if (Object.keys(t).length > 0 && Reflect.has(t, "index")) {var r = i.getUniCachePage(0);if (0 === Object.keys(r).length) return !1;var o = r,n = o.$options.onTabItemTap;if (n) for (var a = 0; a < n.length; a++) {n[a].call(o, t);}}});};}c = f;}var v = e,y = v.events,g = v.success,d = v.fail,m = v.complete,b = v.animationType,P = { path: c, events: y, success: g, fail: d, complete: m, animationDuration: v.animationDuration, animationType: b };r[l](i.notDeepClearNull(P));}}(s, t, e), o.label = 4;case 4:return [2];}});});};});};}, 963: function _(e, t, r) {"use strict";var o = this && this.__assign || function () {return (o = Object.assign || function (e) {for (var t, r = 1, o = arguments.length; r < o; r++) {for (var n in t = arguments[r]) {Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);}}return e;}).apply(this, arguments);};Object.defineProperty(t, "__esModule", { value: !0 }), t.createRouter = t.RouterMount = void 0;var n = r(282),a = r(789),i = r(662),u = r(460),l = r(890),c = r(314),s = function s() {},p = new Promise(function (e) {return s = e;});t.createRouter = function (e) {var t = a.assertNewOptions(e),r = { options: t, mount: [], runId: 0, Vue: null, proxyHookDeps: n.proxyHookDeps, appMain: {}, enterPath: "", $route: null, $lockStatus: !1, routesMap: {}, lifeCycle: i.registerRouterHooks(n.lifeCycle, t), push: function push(e) {l.lockNavjump(e, r, "push");}, replace: function replace(e) {l.lockNavjump(e, r, "replace");}, replaceAll: function replaceAll(e) {l.lockNavjump(e, r, "replaceAll");}, pushTab: function pushTab(e) {l.lockNavjump(e, r, "pushTab");}, back: function back(e, t) {void 0 === e && (e = 1), "[object Object]" !== a.getDataType(t) ? t = { from: "navigateBack" } : Reflect.has(t, "from") || (t = o(o({}, t), { from: "navigateBack" })), l.lockNavjump(e + "", r, "back", void 0, t);}, forceGuardEach: function forceGuardEach(e, t) {l.forceGuardEach(r, e, t);}, beforeEach: function beforeEach(e) {i.registerEachHooks(r, "beforeHooks", e);}, afterEach: function afterEach(e) {i.registerEachHooks(r, "afterHooks", e);}, install: function install(e) {r.Vue = e, c.rewriteMethod(this), u.initMixins(e, this), Object.defineProperty(e.prototype, "$Router", { get: function get() {var e = r;return Object.defineProperty(this, "$Router", { value: e, writable: !1, configurable: !1, enumerable: !1 }), Object.seal(e);} }), Object.defineProperty(e.prototype, "$Route", { get: function get() {return l.createRoute(r);} }), Object.defineProperty(e.prototype, "$AppReady", { get: function get() {return "h5" === r.options.platform ? Promise.resolve() : p;}, set: function set(e) {!0 === e && s();} });} };return a.def(r, "currentRoute", function () {return l.createRoute(r);}), r.beforeEach(function (e, t, r) {return r();}), r.afterEach(function () {}), r;}, t.RouterMount = function (e, t, r) {if (void 0 === r && (r = "#app"), "[object Array]" !== a.getDataType(t.mount)) throw new Error("挂载路由失败，router.app 应该为数组类型。当前类型：" + typeof t.mount);if (t.mount.push({ app: e, el: r }), "h5" === t.options.platform) {var o = t.$route;o.replace({ path: o.currentRoute.fullPath });}};}, 809: function _(e, t, r) {"use strict";var o = this && this.__assign || function () {return (o = Object.assign || function (e) {for (var t, r = 1, o = arguments.length; r < o; r++) {for (var n in t = arguments[r]) {Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);}}return e;}).apply(this, arguments);},n = this && this.__awaiter || function (e, t, r, o) {return new (r || (r = Promise))(function (n, a) {function i(e) {try {l(o.next(e));} catch (e) {a(e);}}function u(e) {try {l(o.throw(e));} catch (e) {a(e);}}function l(e) {var t;e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {e(t);})).then(i, u);}l((o = o.apply(e, t || [])).next());});},a = this && this.__generator || function (e, t) {var r,o,n,a,i = { label: 0, sent: function sent() {if (1 & n[0]) throw n[1];return n[1];}, trys: [], ops: [] };return a = { next: u(0), throw: u(1), return: u(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {return this;}), a;function u(a) {return function (u) {return function (a) {if (r) throw new TypeError("Generator is already executing.");for (; i;) {try {if (r = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;switch (o = 0, n && (a = [2 & a[0], n.value]), a[0]) {case 0:case 1:n = a;break;case 4:return i.label++, { value: a[1], done: !1 };case 5:i.label++, o = a[1], a = [0];continue;case 7:a = i.ops.pop(), i.trys.pop();continue;default:if (!((n = (n = i.trys).length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {i = 0;continue;}if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {i.label = a[1];break;}if (6 === a[0] && i.label < n[1]) {i.label = n[1], n = a;break;}if (n && i.label < n[2]) {i.label = n[2], i.ops.push(a);break;}n[2] && i.ops.pop(), i.trys.pop();continue;}a = t.call(e, i);} catch (e) {a = [6, e], o = 0;} finally {r = n = 0;}}if (5 & a[0]) throw a[1];return { value: a[0] ? a[1] : void 0, done: !0 };}([a, u]);};}},i = this && this.__rest || function (e, t) {var r = {};for (var o in e) {Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);}if (null != e && "function" == typeof Object.getOwnPropertySymbols) {var n = 0;for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) {t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);}}return r;};Object.defineProperty(t, "__esModule", { value: !0 }), t.formatOriginURLQuery = t.uniOriginJump = void 0;var u = r(99),l = r(789),c = r(282),s = r(845),p = 0,f = "reLaunch";function h(e, t, r) {var n,a = t.url,i = t.path,c = t.query,s = t.animationType,p = t.animationDuration,f = t.events,h = t.success,v = t.fail,y = t.complete,g = t.delta,d = t.animation,m = u.stringifyQuery(c || {}),b = "" === m ? i || a : (i || a) + m,P = {};return "app-plus" === e.options.platform && "navigateBack" !== r && (P = (null === (n = e.options.APP) || void 0 === n ? void 0 : n.animation) || {}, P = o(o({}, P), d || {})), l.notDeepClearNull({ delta: g, url: b, animationType: s || P.animationType, animationDuration: p || P.animationDuration, events: f, success: h, fail: v, complete: y });}t.uniOriginJump = function (e, t, r, u, v, y) {var g = h(e, u, r),d = g.complete,m = i(g, ["complete"]),b = e.options.platform;null != y && !1 === y ? (0 === p && (p++, "h5" !== b && (s.resetAndCallPageHook(e, m.url), e.Vue.prototype.$AppReady = !0)), d && d.apply(null, { msg: "forceGuardEach强制触发并且不执行跳转" }), v && v.apply(null, { msg: "forceGuardEach强制触发并且不执行跳转" })) : (0 === p && ("app-plus" === b ? s.resetAndCallPageHook(e, m.url) : new RegExp(c.mpPlatformReg, "g").test(b) && s.resetAndCallPageHook(e, m.url, !1)), t(o(o({}, m), { from: u.BACKTYPE, complete: function complete() {for (var t, o, i, u, h = [], y = 0; y < arguments.length; y++) {h[y] = arguments[y];}return n(this, void 0, void 0, function () {var n, y, g;return a(this, function (a) {switch (a.label) {case 0:return 0 === p && (p++, "h5" !== b && (new RegExp(c.mpPlatformReg, "g").test(b) && s.resetPageHook(e), e.Vue.prototype.$AppReady = !0, "app-plus" === b && ((n = plus.nativeObj.View.getViewById("router-loadding")) && n.close(), (y = null === (t = e.options.APP) || void 0 === t ? void 0 : t.launchedHook) && y()))), g = 0, new RegExp(c.mpPlatformReg, "g").test(b) ? g = null === (o = e.options.applet) || void 0 === o ? void 0 : o.animationDuration : "app-plus" === b && "navigateBack" === r && "navigateTo" === f && (g = null === (u = null === (i = e.options.APP) || void 0 === i ? void 0 : i.animation) || void 0 === u ? void 0 : u.animationDuration), "navigateTo" !== r && "navigateBack" !== r || 0 === g ? [3, 2] : [4, l.timeOut(g)];case 1:a.sent(), a.label = 2;case 2:return f = r, d && d.apply(null, h), v && v.apply(null, h), [2];}});});} })));}, t.formatOriginURLQuery = h;} }, t = {}, function r(o) {if (t[o]) return t[o].exports;var n = t[o] = { exports: {} };return e[o].call(n.exports, n, n.exports, r), n.exports;}(607);var e, t;});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 3:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.isString = void 0;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];if (_i == null) return;var _arr = [];var _n = true;var _d = false;var _s, _e;try {for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value:
    function interpolate(message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value:
    function setLocale(locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value:
    function getLocale() {
      return this.locale;
    } }, { key: "watchLocale", value:
    function watchLocale(fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value:
    function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value:
    function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value:
    function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 4:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"article-share","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"article-share","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"article-share","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || (value.$vm && value.$vm._isVue)) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"article-share","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize',
    'onUploadDouyinVideo'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 5:
/*!**********************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/pages.json ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 3);var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];if (_i == null) return;var _arr = [];var _n = true;var _d = false;var _s, _e;try {for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _regeneratorRuntime() {"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return generator._invoke = function (innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}(innerFn, self, context), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;this._invoke = function (method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();};}function maybeInvokeDelegate(delegate, context) {var method = delegate.iterator[context.method];if (undefined === method) {if (context.delegate = null, "throw" === context.method) {if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (object) {var keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, catch: function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e32) {throw _e32;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e33) {didErr = true;err = _e33;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);enumerableOnly && (symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;})), keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = null != arguments[i] ? arguments[i] : {};i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {_defineProperty(target, key, source[key]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });Object.defineProperty(subClass, "prototype", { writable: false });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;} else if (call !== void 0) {throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct.bind();} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function n(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function s(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var r = s(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),s = {},r = s.lib = {},i = r.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },o = r.WordArray = i.extend({ init: function init(e, n) {e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,s = this.sigBytes,r = e.sigBytes;if (this.clamp(), s % 4) for (var i = 0; i < r; i++) {var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;t[s + i >>> 2] |= o << 24 - (s + i) % 4 * 8;} else for (i = 0; i < r; i += 4) {t[s + i >>> 2] = n[i >>> 2];}return this.sigBytes += r, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = i.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, s = [], r = function r(t) {t = t;var n = 987654321,s = 4294967295;return function () {var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);};}, i = 0; i < t; i += 4) {var a = r(4294967296 * (n || e.random()));n = 987654071 * a(), s.push(4294967296 * a() | 0);}return new o.init(s, t);} }),a = s.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push((i >>> 4).toString(16)), s.push((15 & i).toString(16));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s += 2) {n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;}return new o.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push(String.fromCharCode(i));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s++) {n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;}return new o.init(n, t);} },l = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },h = r.BufferedBlockAlgorithm = i.extend({ reset: function reset() {this._data = new o.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,s = n.words,r = n.sigBytes,i = this.blockSize,a = r / (4 * i),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,u = e.min(4 * c, r);if (c) {for (var l = 0; l < c; l += i) {this._doProcessBlock(s, l);}var h = s.splice(0, c);n.sigBytes -= u;}return new o.init(h, u);}, clone: function clone() {var e = i.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 });r.Hasher = h.extend({ cfg: i.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {h.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new d.HMAC.init(e, n).finalize(t);};} });var d = s.algo = {};return s;}(Math), n);}),i = r,o = (s(function (e, t) {var n;e.exports = (n = i, function (e) {var t = n,s = t.lib,r = s.WordArray,i = s.Hasher,o = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = o.MD5 = i.extend({ _doReset: function _doReset() {this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var s = t + n,r = e[s];e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);}var i = this._hash.words,o = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],w = e[t + 8],v = e[t + 9],S = e[t + 10],k = e[t + 11],T = e[t + 12],I = e[t + 13],b = e[t + 14],A = e[t + 15],C = i[0],P = i[1],E = i[2],O = i[3];C = u(C, P, E, O, o, 7, a[0]), O = u(O, C, P, E, c, 12, a[1]), E = u(E, O, C, P, f, 17, a[2]), P = u(P, E, O, C, p, 22, a[3]), C = u(C, P, E, O, g, 7, a[4]), O = u(O, C, P, E, m, 12, a[5]), E = u(E, O, C, P, y, 17, a[6]), P = u(P, E, O, C, _, 22, a[7]), C = u(C, P, E, O, w, 7, a[8]), O = u(O, C, P, E, v, 12, a[9]), E = u(E, O, C, P, S, 17, a[10]), P = u(P, E, O, C, k, 22, a[11]), C = u(C, P, E, O, T, 7, a[12]), O = u(O, C, P, E, I, 12, a[13]), E = u(E, O, C, P, b, 17, a[14]), C = l(C, P = u(P, E, O, C, A, 22, a[15]), E, O, c, 5, a[16]), O = l(O, C, P, E, y, 9, a[17]), E = l(E, O, C, P, k, 14, a[18]), P = l(P, E, O, C, o, 20, a[19]), C = l(C, P, E, O, m, 5, a[20]), O = l(O, C, P, E, S, 9, a[21]), E = l(E, O, C, P, A, 14, a[22]), P = l(P, E, O, C, g, 20, a[23]), C = l(C, P, E, O, v, 5, a[24]), O = l(O, C, P, E, b, 9, a[25]), E = l(E, O, C, P, p, 14, a[26]), P = l(P, E, O, C, w, 20, a[27]), C = l(C, P, E, O, I, 5, a[28]), O = l(O, C, P, E, f, 9, a[29]), E = l(E, O, C, P, _, 14, a[30]), C = h(C, P = l(P, E, O, C, T, 20, a[31]), E, O, m, 4, a[32]), O = h(O, C, P, E, w, 11, a[33]), E = h(E, O, C, P, k, 16, a[34]), P = h(P, E, O, C, b, 23, a[35]), C = h(C, P, E, O, c, 4, a[36]), O = h(O, C, P, E, g, 11, a[37]), E = h(E, O, C, P, _, 16, a[38]), P = h(P, E, O, C, S, 23, a[39]), C = h(C, P, E, O, I, 4, a[40]), O = h(O, C, P, E, o, 11, a[41]), E = h(E, O, C, P, p, 16, a[42]), P = h(P, E, O, C, y, 23, a[43]), C = h(C, P, E, O, v, 4, a[44]), O = h(O, C, P, E, T, 11, a[45]), E = h(E, O, C, P, A, 16, a[46]), C = d(C, P = h(P, E, O, C, f, 23, a[47]), E, O, o, 6, a[48]), O = d(O, C, P, E, _, 10, a[49]), E = d(E, O, C, P, b, 15, a[50]), P = d(P, E, O, C, m, 21, a[51]), C = d(C, P, E, O, T, 6, a[52]), O = d(O, C, P, E, p, 10, a[53]), E = d(E, O, C, P, S, 15, a[54]), P = d(P, E, O, C, c, 21, a[55]), C = d(C, P, E, O, w, 6, a[56]), O = d(O, C, P, E, A, 10, a[57]), E = d(E, O, C, P, y, 15, a[58]), P = d(P, E, O, C, I, 21, a[59]), C = d(C, P, E, O, g, 6, a[60]), O = d(O, C, P, E, k, 10, a[61]), E = d(E, O, C, P, f, 15, a[62]), P = d(P, E, O, C, v, 21, a[63]), i[0] = i[0] + C | 0, i[1] = i[1] + P | 0, i[2] = i[2] + E | 0, i[3] = i[3] + O | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,s = 8 * this._nDataBytes,r = 8 * t.sigBytes;n[r >>> 5] |= 128 << 24 - r % 32;var i = e.floor(s / 4294967296),o = s;n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var l = c[u];c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);}return a;}, clone: function clone() {var e = i.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, s, r, i, o) {var a = e + (t & n | ~t & s) + r + o;return (a << i | a >>> 32 - i) + t;}function l(e, t, n, s, r, i, o) {var a = e + (t & s | n & ~s) + r + o;return (a << i | a >>> 32 - i) + t;}function h(e, t, n, s, r, i, o) {var a = e + (t ^ n ^ s) + r + o;return (a << i | a >>> 32 - i) + t;}function d(e, t, n, s, r, i, o) {var a = e + (n ^ (t | ~s)) + r + o;return (a << i | a >>> 32 - i) + t;}t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);}(Math), n.MD5);}), s(function (e, t) {var n;e.exports = (n = i, void function () {var e = n,t = e.lib.Base,s = e.enc.Utf8;e.algo.HMAC = t.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));var n = e.blockSize,r = 4 * n;t.sigBytes > r && (t = e.finalize(t)), t.clamp();for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), a = i.words, c = o.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}i.sigBytes = o.sigBytes = r, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} });}());}), s(function (e, t) {e.exports = i.HmacMD5;}));var a = "FUNCTION",c = "OBJECT",u = "CLIENT_DB";function l(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}function h(e) {return "object" === l(e);}function d(e) {return e && "string" == typeof e ? JSON.parse(e) : e;}var f = "development" === "development",p = "mp-weixin",g = "true" === undefined || !0 === undefined,m = d(undefined);var y;y = "h5" === p ? "web" : "app-plus" === p ? "app" : p;var _ = d({
    "address": [
        "127.0.0.1",
        "192.168.0.152"
    ],
    "debugPort": 9000,
    "initialLaunchType": "local",
    "servePort": 7000,
    "skipFiles": [
        "<node_internals>/**/*.js",
        "D:/应用软件/HBuilderX/HBuilderX/plugins/unicloud/**/*.js"
    ]
}
),w = d([{"provider":"aliyun","spaceName":"article-share-store","spaceId":"04bd500d-3f75-434e-9ee0-fef27db169ed","clientSecret":"zwBsN5Y5fbNHj3DbVDrapg==","endpoint":"https://api.bspapp.com"}]) || [],v = true;var S = "";try {{var _e2 = __webpack_require__(/*! uni-stat-config */ 8).default || __webpack_require__(/*! uni-stat-config */ 8);S = _e2.appid;}} catch (e) {}var k = {};function T(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var n, s;return n = k, s = e, Object.prototype.hasOwnProperty.call(n, s) || (k[e] = t), k[e];}"app" === y && (k = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});var I = ["invoke", "success", "fail", "complete"],b = T("_globalUniCloudInterceptor");function A(e, t) {b[e] || (b[e] = {}), h(t) && Object.keys(t).forEach(function (n) {I.indexOf(n) > -1 && function (e, t, n) {var s = b[e][t];s || (s = b[e][t] = []), -1 === s.indexOf(n) && "function" == typeof n && s.push(n);}(e, n, t[n]);});}function C(e, t) {b[e] || (b[e] = {}), h(t) ? Object.keys(t).forEach(function (n) {I.indexOf(n) > -1 && function (e, t, n) {var s = b[e][t];if (!s) return;var r = s.indexOf(n);r > -1 && s.splice(r, 1);}(e, n, t[n]);}) : delete b[e];}function P(e, t) {return e && 0 !== e.length ? e.reduce(function (e, n) {return e.then(function () {return n(t);});}, Promise.resolve()) : Promise.resolve();}function E(e, t) {return b[e] && b[e][t] || [];}function O(e) {A("callObject", e);}var R = T("_globalUniCloudListener"),x = "response",U = "needLogin",L = "refreshToken",N = "clientdb",D = "cloudfunction",q = "cloudobject";function F(e) {return R[e] || (R[e] = []), R[e];}function K(e, t) {var n = F(e);n.includes(t) || n.push(t);}function M(e, t) {var n = F(e),s = n.indexOf(t);-1 !== s && n.splice(s, 1);}function j(e, t) {var n = F(e);for (var _e3 = 0; _e3 < n.length; _e3++) {(0, n[_e3])(t);}}var B,$ = !1;function W() {return B || (B = new Promise(function (e) {$ && e(), function t() {if ("function" == typeof getCurrentPages) {var _t2 = getCurrentPages();_t2 && _t2[0] && ($ = !0, e());}$ || setTimeout(function () {t();}, 30);}();}), B);}function z(e, t) {return t ? function (n) {var _this = this;var s = !1;if ("callFunction" === t) {var _e4 = n && n.type || a;s = _e4 !== a;}var r = "callFunction" === t && !s;var i;i = this.isReady ? Promise.resolve() : this.initUniCloud, n = n || {};var o = i.then(function () {return s ? Promise.resolve() : P(E(t, "invoke"), n);}).then(function () {return e.call(_this, n);}).then(function (e) {return s ? Promise.resolve(e) : P(E(t, "success"), e).then(function () {return P(E(t, "complete"), e);}).then(function () {return r && j(x, { type: D, content: e }), Promise.resolve(e);});}, function (e) {return s ? Promise.reject(e) : P(E(t, "fail"), e).then(function () {return P(E(t, "complete"), e);}).then(function () {return j(x, { type: D, content: e }), Promise.reject(e);});});if (!(n.success || n.fail || n.complete)) return o;o.then(function (e) {n.success && n.success(e), n.complete && n.complete(e), r && j(x, { type: D, content: e });}, function (e) {n.fail && n.fail(e), n.complete && n.complete(e), r && j(x, { type: D, content: e });});} : function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var H = /*#__PURE__*/function (_Error) {_inherits(H, _Error);var _super = _createSuper(H);function H(e) {var _this2;_classCallCheck(this, H);var t = e.code || "SYSTEM_ERROR",n = e.message || "unknown system error";_this2 = _super.call(this, n), _this2.errMsg = n, _this2.errCode = _this2.code = t, _this2.requestId = e.requestId;return _this2;}return _createClass(H);}( /*#__PURE__*/_wrapNativeSuper(Error));var J = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} };function V() {return { token: J.getStorageSync("uni_id_token") || J.getStorageSync("uniIdToken"), tokenExpired: J.getStorageSync("uni_id_token_expired") };}function G() {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref.token,t = _ref.tokenExpired;e && J.setStorageSync("uni_id_token", e), t && J.setStorageSync("uni_id_token_expired", t);}function Y() {if (!f || "web" !== y) return;uni.getStorageSync("__LAST_DCLOUD_APPID") !== S && (uni.setStorageSync("__LAST_DCLOUD_APPID", S), console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), J.removeStorageSync("uni_id_token"), J.removeStorageSync("uniIdToken"), J.removeStorageSync("uni_id_token_expired"));}var Q, X;function Z() {return Q || (Q = uni.getSystemInfoSync()), Q;}function ee() {var e, t;try {if (uni.getLaunchOptionsSync) {if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),_n2 = _uni$getLaunchOptions.scene,_s2 = _uni$getLaunchOptions.channel;e = _s2, t = _n2;}} catch (e) {}return { channel: e, scene: t };}function te() {var e = uni.getLocale && uni.getLocale() || "en";if (X) return _objectSpread(_objectSpread({}, X), {}, { locale: e, LOCALE: e });var t = Z(),n = t.deviceId,s = t.osName,r = t.uniPlatform,i = t.appId,o = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];for (var _e5 = 0; _e5 < o.length; _e5++) {delete t[o[_e5]];}return X = _objectSpread(_objectSpread({ PLATFORM: r, OS: s, APPID: i, DEVICEID: n }, ee()), t), _objectSpread(_objectSpread({}, X), {}, { locale: e, LOCALE: e });}var ne = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), o(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, s) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}), f && "web" === y && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return s(new H({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var r = e.data;if (r.error) return s(new H({ code: r.error.code, message: r.error.message, requestId: t }));r.result = r.data, r.requestId = t, delete r.data, n(r);} }));});} },se = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };var _e6 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: se, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: se }, "zh-Hans"),re = _e6.t;var ie = /*#__PURE__*/function () {function ie(e) {_classCallCheck(this, ie);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(re("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = J, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;}_createClass(ie, [{ key: "hasAccessToken", get: function get() {return !!this.accessToken;} }, { key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return ne.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this3 = this;return Promise.resolve().then(function () {return _this3.hasAccessToken ? t ? _this3.requestWrapped(e) : _this3.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this3.getAccessToken();}).then(function () {var t = _this3.rebuildRequest(e);return _this3.request(t, !0);});}) : _this3.getAccessToken().then(function () {var t = _this3.rebuildRequest(e);return _this3.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = ne.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = ne.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: s };} }, { key: "getAccessToken", value: function getAccessToken() {var _this4 = this;if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;this._getAccessTokenPromiseStatus = "pending";return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this4.setAccessToken(e.result.accessToken), _this4._getAccessTokenPromiseStatus = "fulfilled", t(_this4.accessToken)) : (_this4._getAccessTokenPromiseStatus = "rejected", n(new H({ code: "AUTH_FAILED", message: "获取accessToken失败" })));});}, function (e) {return _this4._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);}), this._getAccessTokenPromise;} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref2) {var _this5 = this;var e = _ref2.url,t = _ref2.formData,n = _ref2.name,s = _ref2.filePath,r = _ref2.fileType,i = _ref2.onUploadProgress;return new Promise(function (o, a) {var c = _this5.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? o(e) : a(new H({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new H({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {i({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref3) {var _this6 = this;var e = _ref3.filePath,t = _ref3.cloudPath,_ref3$fileType = _ref3.fileType,n = _ref3$fileType === void 0 ? "image" : _ref3$fileType,s = _ref3.onUploadProgress,r = _ref3.config;if ("string" !== l(t)) throw new H({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });if (!(t = t.trim())) throw new H({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });if (/:\/\//.test(t)) throw new H({ code: "INVALID_PARAM", message: "cloudPath不合法" });var i = r && r.envType || this.config.envType;var o, a;return this.getOSSUploadOptionsFromPath({ env: i, filename: t }).then(function (t) {var r = t.result;o = r.id, a = "https://" + r.cdnDomain + "/" + r.ossPath;var i = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: o, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n };return _this6.uploadFileToOSS(Object.assign({}, i, { onUploadProgress: s }));}).then(function () {return _this6.reportOSSUpload({ id: o });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: a }) : s(new H({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref4) {var e = _ref4.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref5.fileList;return new Promise(function (t, n) {Array.isArray(e) && 0 !== e.length || n(new H({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }]);return ie;}();var oe = { init: function init(e) {var t = new ie(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };var ae = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";var ce;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(ce || (ce = {}));var ue = function ue() {};var le = function le() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t3 = function _t3() {throw new H({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });};return Object.defineProperty(e.promise, "then", { get: _t3 }), Object.defineProperty(e.promise, "catch", { get: _t3 }), e;}var t = new Promise(function (t, n) {e = function e(_e7, s) {return _e7 ? n(_e7) : t(s);};});return e.promise = t, e;};function he(e) {return void 0 === e;}function de(e) {return "[object Null]" === Object.prototype.toString.call(e);}var fe;function pe(e) {var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);var n;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e8 = _step.value;var _t4 = _e8.isMatch,_n3 = _e8.genAdapter,_s3 = _e8.runtime;if (_t4()) return { adapter: _n3(), runtime: _s3 };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(fe || (fe = {}));var ge = { adapter: null, runtime: void 0 },me = ["anonymousUuidKey"];var ye = /*#__PURE__*/function (_ue) {_inherits(ye, _ue);var _super2 = _createSuper(ye);function ye() {var _this7;_classCallCheck(this, ye);_this7 = _super2.call(this), ge.adapter.root.tcbObject || (ge.adapter.root.tcbObject = {});return _this7;}_createClass(ye, [{ key: "setItem", value: function setItem(e, t) {ge.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return ge.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete ge.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete ge.adapter.root.tcbObject;} }]);return ye;}(ue);function _e(e, t) {switch (e) {case "local":return t.localStorage || new ye();case "none":return new ye();default:return t.sessionStorage || new ye();}}var we = /*#__PURE__*/function () {function we(e) {_classCallCheck(this, we);if (!this._storage) {this._persistence = ge.adapter.primaryStorage || e.persistence, this._storage = _e(this._persistence, ge.adapter);var _t5 = "access_token_".concat(e.env),_n4 = "access_token_expire_".concat(e.env),_s4 = "refresh_token_".concat(e.env),_r = "anonymous_uuid_".concat(e.env),_i = "login_type_".concat(e.env),_o = "user_info_".concat(e.env);this.keys = { accessTokenKey: _t5, accessTokenExpireKey: _n4, refreshTokenKey: _s4, anonymousUuidKey: _r, loginTypeKey: _i, userInfoKey: _o };}}_createClass(we, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var n = _e(e, ge.adapter);for (var _e9 in this.keys) {var _s5 = this.keys[_e9];if (t && me.includes(_e9)) continue;var _r2 = this._storage.getItem(_s5);he(_r2) || de(_r2) || (n.setItem(_s5, _r2), this._storage.removeItem(_s5));}this._storage = n;} }, { key: "setStore", value: function setStore(e, t, n) {if (!this._storage) return;var s = { version: n || "localCachev1", content: t },r = JSON.stringify(s);try {this._storage.setItem(e, r);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var n = this._storage.getItem(e);if (!n) return "";if (n.indexOf(t) >= 0) {return JSON.parse(n).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return we;}();var ve = {},Se = {};function ke(e) {return ve[e];}var Te = /*#__PURE__*/_createClass(function Te(e, t) {_classCallCheck(this, Te);this.data = t || null, this.name = e;});var Ie = /*#__PURE__*/function (_Te) {_inherits(Ie, _Te);var _super3 = _createSuper(Ie);function Ie(e, t) {var _this8;_classCallCheck(this, Ie);_this8 = _super3.call(this, "error", { error: e, data: t }), _this8.error = e;return _this8;}return _createClass(Ie);}(Te);var be = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, n) {if (n && n[e]) {var _s6 = n[e].indexOf(t);-1 !== _s6 && n[e].splice(_s6, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof Ie) return console.error(e.error), this;var n = "string" == typeof e ? new Te(e, t || {}) : e;var s = n.name;if (this._listens(s)) {n.target = this;var _e10 = this._listeners[s] ? _toConsumableArray(this._listeners[s]) : [];var _iterator2 = _createForOfIteratorHelper(_e10),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t6 = _step2.value;_t6.call(this, n);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function Ae(e, t) {be.on(e, t);}function Ce(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};be.fire(e, t);}function Pe(e, t) {be.off(e, t);}var Ee = "loginStateChanged",Oe = "loginStateExpire",Re = "loginTypeChanged",xe = "anonymousConverted",Ue = "refreshAccessToken";var Le;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(Le || (Le = {}));var Ne = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],De = { "X-SDK-Version": "1.3.5" };function qe(e, t, n) {var s = e[t];e[t] = function (t) {var r = {},i = {};n.forEach(function (n) {var _n$call = n.call(e, t),s = _n$call.data,o = _n$call.headers;Object.assign(r, s), Object.assign(i, o);});var o = t.data;return o && function () {var e;if (e = o, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, o), r);else for (var _e11 in r) {o.append(_e11, r[_e11]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), i), s.call(e, t);};}function Fe() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, De), {}, { "x-seqid": e }) };}var Ke = /*#__PURE__*/function () {function Ke() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, Ke);var t;this.config = e, this._reqClass = new ge.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = ke(this.config.env), this._localCache = (t = this.config.env, Se[t]), qe(this._reqClass, "post", [Fe]), qe(this._reqClass, "upload", [Fe]), qe(this._reqClass, "download", [Fe]);}_createClass(Ke, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {return _regeneratorRuntime().wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {var e, t;return _regeneratorRuntime().wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {var _this$_cache$keys, e, t, n, s, r, i, o, a, _e12, _e13, _t7, _s7;return _regeneratorRuntime().wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);i = this._cache.getStore(n);if (i) {_context5.next = 5;break;}throw new H({ message: "未登录CloudBase" });case 5:o = { refresh_token: i };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", o);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e12 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e12 || "REFRESH_TOKEN_EXPIRED" === _e12 || "INVALID_REFRESH_TOKEN" === _e12)) {_context5.next = 20;break;}if (!(this._cache.getStore(s) === Le.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e12)) {_context5.next = 19;break;}_e13 = this._cache.getStore(r);_t7 = this._cache.getStore(n);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e13, refresh_token: _t7 });case 17:_s7 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_s7.refresh_token), this._refreshAccessToken()));case 19:Ce(Oe), this._cache.removeStore(n);case 20:throw new H({ code: a.data.code, message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code) });case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (Ce(Ue), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {var _this$_cache$keys2, e, t, n, s, r, i;return _regeneratorRuntime().wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(n)) {_context6.next = 3;break;}throw new H({ message: "refresh token不存在，登录状态异常" });case 3:s = this._cache.getStore(e), r = this._cache.getStore(t), i = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(s, r);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}i = !1;case 12:return _context6.abrupt("return", (!s || !r || r < Date.now()) && i ? this.refreshAccessToken() : { accessToken: s, accessTokenExpire: r });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e, t, n) {var s, r, i, _e14, o, _e15, _e16, a, c, u, l, h, d, f, p, g;return _regeneratorRuntime().wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:s = "x-tcb-trace_".concat(this.config.env);r = "application/x-www-form-urlencoded";i = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === Ne.indexOf(e))) {_context7.next = 10;break;}_e14 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e14);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:i.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {o = new FormData();for (_e15 in o) {o.hasOwnProperty(_e15) && void 0 !== o[_e15] && o.append(_e15, i[_e15]);}r = "multipart/form-data";} else {r = "application/json", o = {};for (_e16 in i) {void 0 !== i[_e16] && (o[_e16] = i[_e16]);}}a = { headers: { "content-type": r } };n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);c = this._localCache.getStore(s);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, l = t.inQuery, h = t.search;d = { env: this.config.env };u && (d.parse = !0), l && (d = _objectSpread(_objectSpread({}, l), d));f = function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var s = /\?/.test(t);var r = "";for (var _e17 in n) {"" === r ? !s && (t += "?") : r += "&", r += "".concat(_e17, "=").concat(encodeURIComponent(n[_e17]));}return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);}(ae, "//tcb-api.tencentcloudapi.com/web", d);h && (f += h);_context7.next = 22;return this.post(_objectSpread({ url: f, data: o }, a));case 22:p = _context7.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(s, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context7.next = 26;break;}throw new H({ code: "NETWORK_ERROR", message: "network request error" });case 26:return _context7.abrupt("return", p);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e) {var t,n,_n5,_args8 = arguments;return _regeneratorRuntime().wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:n = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === Ne.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_n5 = _context8.sent;if (!_n5.data.code) {_context8.next = 12;break;}throw new H({ code: _n5.data.code, message: _n5.data.message });case 12:return _context8.abrupt("return", _n5.data);case 13:if (!n.data.code) {_context8.next = 15;break;}throw new H({ code: n.data.code, message: n.data.message });case 15:return _context8.abrupt("return", n.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,n = _this$_cache$keys3.accessTokenExpireKey,s = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }]);return Ke;}();var Me = {};function je(e) {return Me[e];}var Be = /*#__PURE__*/function () {function Be(e) {_classCallCheck(this, Be);this.config = e, this._cache = ke(e.env), this._request = je(e.env);}_createClass(Be, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,n = _this$_cache$keys4.accessTokenExpireKey,s = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,n = _this$_cache$keys5.accessTokenKey,s = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(n, e), this._cache.setStore(s, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {var _yield$this$_request$, e;return _regeneratorRuntime().wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return Be;}();var $e = /*#__PURE__*/function () {function $e(e) {_classCallCheck(this, $e);if (!e) throw new H({ code: "PARAM_ERROR", message: "envId is not defined" });this._envId = e, this._cache = ke(this._envId), this._request = je(this._envId), this.setUserInfo();}_createClass($e, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new H({ code: "PARAM_ERROR", message: "ticket must be string" });return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new H({ code: "PARAM_ERROR", message: "username must be a string" });return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {var _yield$this$_request$2, e, t, n;return _regeneratorRuntime().wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;n = e.users;return _context10.abrupt("return", (n.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: n, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(e) {var t, n, s, r, i, o, _yield$this$_request$3, a;return _regeneratorRuntime().wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;n = e.gender;s = e.avatarUrl;r = e.province;i = e.country;o = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: n, avatarUrl: s, province: r, country: i, city: o });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {var _yield$this$_request$4, e;return _regeneratorRuntime().wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this9 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this9[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return $e;}();var We = /*#__PURE__*/function () {function We(e) {_classCallCheck(this, We);if (!e) throw new H({ code: "PARAM_ERROR", message: "envId is not defined" });this._cache = ke(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,n = _this$_cache$keys6.accessTokenKey,s = _this$_cache$keys6.accessTokenExpireKey,r = this._cache.getStore(t),i = this._cache.getStore(n),o = this._cache.getStore(s);this.credential = { refreshToken: r, accessToken: i, accessTokenExpire: o }, this.user = new $e(e);}_createClass(We, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === Le.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === Le.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === Le.WECHAT || this.loginType === Le.WECHAT_OPEN || this.loginType === Le.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return We;}();var ze = /*#__PURE__*/function (_Be) {_inherits(ze, _Be);var _super4 = _createSuper(ze);function ze() {_classCallCheck(this, ze);return _super4.apply(this, arguments);}_createClass(ze, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {var _this$_cache$keys7, e, t, n, s, r, _e18;return _regeneratorRuntime().wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;n = this._cache.getStore(e) || void 0;s = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: n, refresh_token: s });case 8:r = _context13.sent;if (!(r.uuid && r.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(r.uuid);this.setRefreshToken(r.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:Ce(Ee);Ce(Re, { env: this.config.env, loginType: Le.ANONYMOUS, persistence: "local" });_e18 = new We(this.config.env);_context13.next = 19;return _e18.user.refresh();case 19:return _context13.abrupt("return", _e18);case 20:throw new H({ message: "匿名登录失败" });case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(e) {var _this$_cache$keys8, t, n, s, r, i;return _regeneratorRuntime().wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;n = _this$_cache$keys8.refreshTokenKey;s = this._cache.getStore(t);r = this._cache.getStore(n);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s, refresh_token: r, ticket: e });case 7:i = _context14.sent;if (!i.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(i.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:Ce(xe, { env: this.config.env });Ce(Re, { loginType: Le.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: i.refresh_token } });case 16:throw new H({ message: "匿名转化失败" });case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,n = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, Le.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return ze;}(Be);var He = /*#__PURE__*/function (_Be2) {_inherits(He, _Be2);var _super5 = _createSuper(He);function He() {_classCallCheck(this, He);return _super5.apply(this, arguments);}_createClass(He, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(e) {var t, n;return _regeneratorRuntime().wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new H({ param: "PARAM_ERROR", message: "ticket must be a string" });case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:n = _context15.sent;if (!n.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(n.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:Ce(Ee);Ce(Re, { env: this.config.env, loginType: Le.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new We(this.config.env));case 15:throw new H({ message: "自定义登录失败" });case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return He;}(Be);var Je = /*#__PURE__*/function (_Be3) {_inherits(Je, _Be3);var _super6 = _createSuper(Je);function Je() {_classCallCheck(this, Je);return _super6.apply(this, arguments);}_createClass(Je, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(e, t) {var n, s, r, i, o;return _regeneratorRuntime().wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new H({ code: "PARAM_ERROR", message: "email must be a string" });case 2:n = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 5:s = _context16.sent;r = s.refresh_token;i = s.access_token;o = s.access_token_expire;if (!r) {_context16.next = 22;break;}this.setRefreshToken(r);if (!(i && o)) {_context16.next = 15;break;}this.setAccessToken(i, o);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:Ce(Ee);Ce(Re, { env: this.config.env, loginType: Le.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new We(this.config.env));case 22:throw s.code ? new H({ code: s.code, message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message) }) : new H({ message: "邮箱登录失败" });case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(e) {return _regeneratorRuntime().wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(e, t) {return _regeneratorRuntime().wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return Je;}(Be);var Ve = /*#__PURE__*/function (_Be4) {_inherits(Ve, _Be4);var _super7 = _createSuper(Ve);function Ve() {_classCallCheck(this, Ve);return _super7.apply(this, arguments);}_createClass(Ve, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(e, t) {var n, s, r, i, o;return _regeneratorRuntime().wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new H({ code: "PARAM_ERROR", message: "username must be a string" });case 2:"string" != typeof t && (t = "", console.warn("password is empty"));n = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: Le.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 6:s = _context19.sent;r = s.refresh_token;i = s.access_token_expire;o = s.access_token;if (!r) {_context19.next = 23;break;}this.setRefreshToken(r);if (!(o && i)) {_context19.next = 16;break;}this.setAccessToken(o, i);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:Ce(Ee);Ce(Re, { env: this.config.env, loginType: Le.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new We(this.config.env));case 23:throw s.code ? new H({ code: s.code, message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message) }) : new H({ message: "用户名密码登录失败" });case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return Ve;}(Be);var Ge = /*#__PURE__*/function () {function Ge(e) {_classCallCheck(this, Ge);this.config = e, this._cache = ke(e.env), this._request = je(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Ae(Re, this._onLoginTypeChanged);}_createClass(Ge, [{ key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }, { key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new ze(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new He(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new Je(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new Ve(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {return _regeneratorRuntime().wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new ze(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(e, t) {return _regeneratorRuntime().wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new Je(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new Ve(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(e) {return _regeneratorRuntime().wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new ze(this.config)), Ae(xe, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {var _this$_cache$keys10, e, t, n, s, r;return _regeneratorRuntime().wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === Le.ANONYMOUS)) {_context23.next = 2;break;}throw new H({ message: "匿名用户不支持登出操作" });case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);if (s) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: s });case 7:r = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), Ce(Ee), Ce(Re, { env: this.config.env, loginType: Le.NULL, persistence: this.config.persistence }), r));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(e, t) {return _regeneratorRuntime().wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(e) {return _regeneratorRuntime().wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this10 = this;Ae(Ee, function () {var t = _this10.hasLoginState();e.call(_this10, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {Ae(Oe, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {Ae(Ue, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {Ae(xe, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this11 = this;Ae(Re, function () {var t = _this11.hasLoginState();e.call(_this11, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {return _regeneratorRuntime().wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new We(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(e) {var _yield$this$_request$5, t;return _regeneratorRuntime().wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new H({ code: "PARAM_ERROR", message: "username must be a string" });case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(e) {return _regeneratorRuntime().wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new He(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,n = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,n = _e$data.persistence,s = _e$data.env;s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }]);return Ge;}();var Ye = function Ye(e, t) {t = t || le();var n = je(this.config.env),s = e.cloudPath,r = e.filePath,i = e.onUploadProgress,_e$fileType = e.fileType,o = _e$fileType === void 0 ? "image" : _e$fileType;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,l = _e$data2.fileId,h = _e$data2.cosFileId,d = e.requestId,f = { key: s, signature: c, "x-cos-meta-fileid": h, success_action_status: "201", "x-cos-security-token": u };n.upload({ url: a, data: f, file: r, name: s, fileType: o, onUploadProgress: i }).then(function (e) {201 === e.statusCode ? t(null, { fileID: l, requestId: d }) : t(new H({ code: "STORAGE_REQUEST_FAIL", message: "STORAGE_REQUEST_FAIL: ".concat(e.data) }));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},Qe = function Qe(e, t) {t = t || le();var n = je(this.config.env),s = e.cloudPath;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},Xe = function Xe(_ref6, t) {var e = _ref6.fileList;if (t = t || le(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t8 = _step3.value;if (!_t8 || "string" != typeof _t8) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var n = { fileid_list: e };return je(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ze = function Ze(_ref7, t) {var e = _ref7.fileList;t = t || le(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });var n = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _s8 = _step4.value;"object" == typeof _s8 ? (_s8.hasOwnProperty("fileID") && _s8.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n.push({ fileid: _s8.fileID, max_age: _s8.maxAge })) : "string" == typeof _s8 ? n.push({ fileid: _s8 }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var s = { file_list: n };return je(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},et = /*#__PURE__*/function () {var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(_ref8, t) {var e, n, s, r;return _regeneratorRuntime().wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref8.fileID;_context29.next = 3;return Ze.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:n = _context29.sent.fileList[0];if (!("SUCCESS" !== n.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(n) : new Promise(function (e) {e(n);}));case 6:s = je(this.config.env);r = n.download_url;if (!(r = encodeURI(r), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", s.download({ url: r }));case 10:_context29.t0 = t;_context29.next = 13;return s.download({ url: r });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function et(_x26, _x27) {return _ref9.apply(this, arguments);};}(),tt = function tt(_ref10, i) {var e = _ref10.name,t = _ref10.data,n = _ref10.query,s = _ref10.parse,r = _ref10.search;var o = i || le();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new H({ code: "PARAM_ERROR", message: "函数名不能为空" }));var c = { inQuery: n, parse: s, search: r, function_name: e, request_data: a };return je(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) o(null, e);else {var _t9 = e.data.response_data;if (s) o(null, { result: _t9, requestId: e.requestId });else try {_t9 = JSON.parse(e.data.response_data), o(null, { result: _t9, requestId: e.requestId });} catch (e) {o(new H({ message: "response data must be json" }));}}return o.promise;}).catch(function (e) {o(e);}), o.promise;},nt = { timeout: 15e3, persistence: "session" },st = {};var rt = /*#__PURE__*/function () {function rt(e) {_classCallCheck(this, rt);this.config = e || this.config, this.authObj = void 0;}_createClass(rt, [{ key: "init", value: function init(e) {switch (ge.adapter || (this.requestClient = new ge.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, nt), e), !0) {case this.config.timeout > 6e5:console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;}return new rt(this.config);} }, { key: "auth", value: function auth() {var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref11.persistence;if (this.authObj) return this.authObj;var t = e || ge.adapter.primaryStorage || nt.persistence;var n;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;ve[t] = new we(e), Se[t] = new we(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), n = this.config, Me[n.env] = new Ke(n), this.authObj = new Ge(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return Ae.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return Pe.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return tt.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return Xe.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return Ze.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return et.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return Ye.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return Qe.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {st[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(e, t) {var n;return _regeneratorRuntime().wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:n = st[e];if (n) {_context30.next = 3;break;}throw new H({ message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C") });case 3:_context30.next = 5;return n.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref12 = pe(e) || {},t = _ref12.adapter,n = _ref12.runtime;t && (ge.adapter = t), n && (ge.runtime = n);} }]);return rt;}();var it = new rt();function ot(e, t, n) {void 0 === n && (n = {});var s = /\?/.test(t),r = "";for (var i in n) {"" === r ? !s && (t += "?") : r += "&", r += i + "=" + encodeURIComponent(n[i]);}return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;}var at = /*#__PURE__*/function () {function at() {_classCallCheck(this, at);}_createClass(at, [{ key: "post", value: function post(e) {var t = e.url,n = e.data,s = e.headers;return new Promise(function (e, r) {J.request({ url: ot("https:", t), data: n, method: "POST", header: s, success: function success(t) {e(t);}, fail: function fail(e) {r(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, n) {var s = e.url,r = e.file,i = e.data,o = e.headers,a = e.fileType,c = J.uploadFile({ url: ot("https:", s), name: "file", formData: Object.assign({}, i), filePath: r, fileType: a, header: o, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), t(n);}, fail: function fail(e) {n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return at;}();var ct = { setItem: function setItem(e, t) {J.setStorageSync(e, t);}, getItem: function getItem(e) {return J.getStorageSync(e);}, removeItem: function removeItem(e) {J.removeStorageSync(e);}, clear: function clear() {J.clearStorageSync();} };var ut = { genAdapter: function genAdapter() {return { root: {}, reqClass: at, localStorage: ct, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };it.useAdapters(ut);var lt = it,ht = lt.init;lt.init = function (e) {e.env = e.spaceId;var t = ht.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;return t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = z(t[e]).bind(t);}), t;}, t.customAuth = t.auth, t;};var dt = lt;var ft = /*#__PURE__*/function (_ie) {_inherits(ft, _ie);var _super8 = _createSuper(ft);function ft() {_classCallCheck(this, ft);return _super8.apply(this, arguments);}_createClass(ft, [{ key: "getAccessToken", value: function getAccessToken() {var _this12 = this;return new Promise(function (e, t) {var n = "Anonymous_Access_token";_this12.setAccessToken(n), e(n);});} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };"auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = ne.sign(n, this.config.clientSecret);var r = te();s["x-client-info"] = encodeURIComponent(JSON.stringify(r));var _V = V(),i = _V.token;return s["x-client-token"] = i, { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: JSON.parse(JSON.stringify(s)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref13) {var _this13 = this;var e = _ref13.url,t = _ref13.formData,n = _ref13.name,s = _ref13.filePath,r = _ref13.fileType,i = _ref13.onUploadProgress;return new Promise(function (o, a) {var c = _this13.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, success: function success(e) {e && e.statusCode < 400 ? o(e) : a(new H({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new H({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {i({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref14) {var _this14 = this;var e = _ref14.filePath,t = _ref14.cloudPath,_ref14$fileType = _ref14.fileType,n = _ref14$fileType === void 0 ? "image" : _ref14$fileType,s = _ref14.onUploadProgress;if (!t) throw new H({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var r;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,i = _t$result.url,o = _t$result.formData,a = _t$result.name;r = t.result.fileUrl;var c = { url: i, formData: o, name: a, filePath: e, fileType: n };return _this14.uploadFileToOSS(Object.assign({}, c, { onUploadProgress: s }));}).then(function () {return _this14.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: r }) : s(new H({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref15) {var e = _ref15.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref16.fileList;var t = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };return this.request(this.setupRequest(t));} }]);return ft;}(ie);var pt = { init: function init(e) {var t = new ft(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };function gt(_ref17) {var e = _ref17.data;var t;t = te();var n = JSON.parse(JSON.stringify(e || {}));if (Object.assign(n, { clientInfo: t }), !n.uniIdToken) {var _V2 = V(),_e19 = _V2.token;_e19 && (n.uniIdToken = _e19);}return n;}function mt() {var _this15 = this;var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref18.name,t = _ref18.data;var _this$__dev__ = this.__dev__,n = _this$__dev__.localAddress,s = _this$__dev__.localPort,r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],i = this.config.spaceId,o = "http://".concat(n, ":").concat(s, "/system/check-function"),a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);return new Promise(function (t, n) {J.request({ method: "POST", url: o, data: { name: e, platform: y, provider: r, spaceId: i }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref19.data;var _ref20 = e || {},t = _ref20.code,n = _ref20.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: n || "SYS_ERR" };}).then(function (_ref21) {var n = _ref21.code,s = _ref21.message;if (0 !== n) {switch (n) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e20 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e20), new Error(_e20);}case "SWITCH_TO_CLOUD":break;default:{var _e21 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e21), new Error(_e21);}}return _this15._callCloudFunction({ name: e, data: t });}return new Promise(function (e, n) {var s = gt.call(_this15, { data: t });J.request({ method: "POST", url: a, data: { provider: r, platform: y, param: s }, success: function success() {var _ref22 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref22.statusCode,s = _ref22.data;return !t || t >= 400 ? n(new H({ code: s.code || "SYS_ERR", message: s.message || "request:fail" })) : e({ result: s });}, fail: function fail(e) {n(new H({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var yt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];var _t = /[\\^$.*+?()[\]{}|]/g,wt = RegExp(_t.source);function vt(e, t, n) {return e.replace(new RegExp((s = t) && wt.test(s) ? s.replace(_t, "\\$&") : s, "g"), n);var s;}var St = "none",kt = "request",Tt = "response",It = "both";var bt = /*#__PURE__*/function () {function bt() {var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref23.secretType,t = _ref23.uniCloudIns;_classCallCheck(this, bt);this.secretType = e || St, this.uniCloudIns = t;var _this$uniCloudIns$con = this.uniCloudIns.config,n = _this$uniCloudIns$con.provider,s = _this$uniCloudIns$con.spaceId;this.provider = n, this.spaceId = s;}_createClass(bt, [{ key: "getSystemInfo", value: function getSystemInfo() {return this._systemInfo || (this._systemInfo = Z()), this._systemInfo;} }, { key: "appId", get: function get() {return this.getSystemInfo().appId;} }, { key: "deviceId", get: function get() {return this.getSystemInfo().deviceId;} }, { key: "encryptData", value: function () {var _encryptData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(e) {return _regeneratorRuntime().wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:return _context31.abrupt("return", this.secretType === St || this.secretType === St ? e : this.platformEncryptData(e));case 1:case "end":return _context31.stop();}}}, _callee31, this);}));function encryptData(_x30) {return _encryptData.apply(this, arguments);}return encryptData;}() }, { key: "decryptResult", value: function () {var _decryptResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(e) {var t;return _regeneratorRuntime().wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:if (!(this.secretType === St)) {_context32.next = 2;break;}return _context32.abrupt("return", e);case 2:t = e.content;return _context32.abrupt("return", t ? this.secretType === kt ? t : this.platformDecryptResult(e) : e);case 4:case "end":return _context32.stop();}}}, _callee32, this);}));function decryptResult(_x31) {return _decryptResult.apply(this, arguments);}return decryptResult;}() }, { key: "wrapVerifyClientCallFunction", value: function wrapVerifyClientCallFunction(e) {var t = this;return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {var _ref25,n,s,_args33 = arguments;return _regeneratorRuntime().wrap(function _callee33$(_context33) {while (1) {switch (_context33.prev = _context33.next) {case 0:_ref25 = _args33.length > 0 && _args33[0] !== undefined ? _args33[0] : {}, n = _ref25.name, s = _ref25.data;_context33.next = 3;return t.prepare();case 3:_context33.next = 5;return t.platformGetSignOption();case 5:(s = JSON.parse(JSON.stringify(s)))._uniCloudOptions = _context33.sent;_context33.next = 8;return e({ name: n, data: s });case 8:return _context33.abrupt("return", _context33.sent);case 9:case "end":return _context33.stop();}}}, _callee33);}));} }, { key: "wrapEncryptDataCallFunction", value: function wrapEncryptDataCallFunction(e) {var t = this;return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {var _ref27,n,s,r,i,_args34 = arguments;return _regeneratorRuntime().wrap(function _callee34$(_context34) {while (1) {switch (_context34.prev = _context34.next) {case 0:_ref27 = _args34.length > 0 && _args34[0] !== undefined ? _args34[0] : {}, n = _ref27.name, s = _ref27.data;_context34.next = 3;return t.prepare();case 3:_context34.next = 5;return t.encryptData(s);case 5:r = _context34.sent;_context34.next = 8;return e({ name: n, data: r });case 8:i = _context34.sent;_context34.next = 11;return t.decryptResult(i.result);case 11:i.result = _context34.sent;return _context34.abrupt("return", i);case 13:case "end":return _context34.stop();}}}, _callee34);}));} }]);return bt;}(); /*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */function At(e) {return parseInt(e) === e;}function Ct(e) {if (!At(e.length)) return !1;for (var t = 0; t < e.length; t++) {if (!At(e[t]) || e[t] < 0 || e[t] > 255) return !1;}return !0;}function Pt(e, t) {if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;if (Array.isArray(e)) {if (!Ct(e)) throw new Error("Array contains invalid value: " + e);return new Uint8Array(e);}if (At(e.length) && Ct(e)) return new Uint8Array(e);throw new Error("unsupported array-like object");}function Et(e) {return new Uint8Array(e);}function Ot(e, t, n, s, r) {null == s && null == r || (e = e.slice ? e.slice(s, r) : Array.prototype.slice.call(e, s, r)), t.set(e, n);}var Rt,xt = { toBytes: function toBytes(e) {var t = [],n = 0;for (e = encodeURI(e); n < e.length;) {var s = e.charCodeAt(n++);37 === s ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(s);}return Pt(t);}, fromBytes: function fromBytes(e) {for (var t = [], n = 0; n < e.length;) {var s = e[n];s < 128 ? (t.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (t.push(String.fromCharCode((31 & s) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & s) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);}return t.join("");} },Ut = (Rt = "0123456789abcdef", { toBytes: function toBytes(e) {for (var t = [], n = 0; n < e.length; n += 2) {t.push(parseInt(e.substr(n, 2), 16));}return t;}, fromBytes: function fromBytes(e) {for (var t = [], n = 0; n < e.length; n++) {var s = e[n];t.push(Rt[(240 & s) >> 4] + Rt[15 & s]);}return t.join("");} }),Lt = { 16: 10, 24: 12, 32: 14 },Nt = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],Dt = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],qt = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],Ft = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],Kt = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],Mt = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],jt = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],Bt = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],$t = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],Wt = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],zt = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],Ht = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],Jt = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],Vt = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],Gt = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];function Yt(e) {for (var t = [], n = 0; n < e.length; n += 4) {t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);}return t;}var Qt = /*#__PURE__*/function () {function Qt(e) {_classCallCheck(this, Qt);if (!(this instanceof Qt)) throw Error("AES must be instanitated with `new`");Object.defineProperty(this, "key", { value: Pt(e, !0) }), this._prepare();}_createClass(Qt, [{ key: "_prepare", value: function _prepare() {var e = Lt[this.key.length];if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");this._Ke = [], this._Kd = [];for (var t = 0; t <= e; t++) {this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);}var n,s = 4 * (e + 1),r = this.key.length / 4,i = Yt(this.key);for (t = 0; t < r; t++) {n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];}for (var o, a = 0, c = r; c < s;) {if (o = i[r - 1], i[0] ^= Dt[o >> 16 & 255] << 24 ^ Dt[o >> 8 & 255] << 16 ^ Dt[255 & o] << 8 ^ Dt[o >> 24 & 255] ^ Nt[a] << 24, a += 1, 8 != r) for (t = 1; t < r; t++) {i[t] ^= i[t - 1];} else {for (t = 1; t < r / 2; t++) {i[t] ^= i[t - 1];}o = i[r / 2 - 1], i[r / 2] ^= Dt[255 & o] ^ Dt[o >> 8 & 255] << 8 ^ Dt[o >> 16 & 255] << 16 ^ Dt[o >> 24 & 255] << 24;for (t = r / 2 + 1; t < r; t++) {i[t] ^= i[t - 1];}}for (t = 0; t < r && c < s;) {u = c >> 2, l = c % 4, this._Ke[u][l] = i[t], this._Kd[e - u][l] = i[t++], c++;}}for (var u = 1; u < e; u++) {for (var l = 0; l < 4; l++) {o = this._Kd[u][l], this._Kd[u][l] = Ht[o >> 24 & 255] ^ Jt[o >> 16 & 255] ^ Vt[o >> 8 & 255] ^ Gt[255 & o];}}} }, { key: "encrypt", value: function encrypt(e) {if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], s = Yt(e), r = 0; r < 4; r++) {s[r] ^= this._Ke[0][r];}for (var i = 1; i < t; i++) {for (r = 0; r < 4; r++) {n[r] = Ft[s[r] >> 24 & 255] ^ Kt[s[(r + 1) % 4] >> 16 & 255] ^ Mt[s[(r + 2) % 4] >> 8 & 255] ^ jt[255 & s[(r + 3) % 4]] ^ this._Ke[i][r];}s = n.slice();}var o,a = Et(16);for (r = 0; r < 4; r++) {o = this._Ke[t][r], a[4 * r] = 255 & (Dt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (Dt[s[(r + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (Dt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (Dt[255 & s[(r + 3) % 4]] ^ o);}return a;} }, { key: "decrypt", value: function decrypt(e) {if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], s = Yt(e), r = 0; r < 4; r++) {s[r] ^= this._Kd[0][r];}for (var i = 1; i < t; i++) {for (r = 0; r < 4; r++) {n[r] = Bt[s[r] >> 24 & 255] ^ $t[s[(r + 3) % 4] >> 16 & 255] ^ Wt[s[(r + 2) % 4] >> 8 & 255] ^ zt[255 & s[(r + 1) % 4]] ^ this._Kd[i][r];}s = n.slice();}var o,a = Et(16);for (r = 0; r < 4; r++) {o = this._Kd[t][r], a[4 * r] = 255 & (qt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (qt[s[(r + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (qt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (qt[255 & s[(r + 1) % 4]] ^ o);}return a;} }]);return Qt;}();var Xt = /*#__PURE__*/function () {function Xt(e) {_classCallCheck(this, Xt);if (!(this instanceof Xt)) throw Error("AES must be instanitated with `new`");this.description = "Electronic Code Block", this.name = "ecb", this._aes = new Qt(e);}_createClass(Xt, [{ key: "encrypt", value: function encrypt(e) {if ((e = Pt(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");for (var t = Et(e.length), n = Et(16), s = 0; s < e.length; s += 16) {Ot(e, n, 0, s, s + 16), Ot(n = this._aes.encrypt(n), t, s);}return t;} }, { key: "decrypt", value: function decrypt(e) {if ((e = Pt(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");for (var t = Et(e.length), n = Et(16), s = 0; s < e.length; s += 16) {Ot(e, n, 0, s, s + 16), Ot(n = this._aes.decrypt(n), t, s);}return t;} }]);return Xt;}();var Zt = /*#__PURE__*/function () {function Zt(e, t) {_classCallCheck(this, Zt);if (!(this instanceof Zt)) throw Error("AES must be instanitated with `new`");if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");} else t = Et(16);this._lastCipherblock = Pt(t, !0), this._aes = new Qt(e);}_createClass(Zt, [{ key: "encrypt", value: function encrypt(e) {if ((e = Pt(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");for (var t = Et(e.length), n = Et(16), s = 0; s < e.length; s += 16) {Ot(e, n, 0, s, s + 16);for (var r = 0; r < 16; r++) {n[r] ^= this._lastCipherblock[r];}this._lastCipherblock = this._aes.encrypt(n), Ot(this._lastCipherblock, t, s);}return t;} }, { key: "decrypt", value: function decrypt(e) {if ((e = Pt(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");for (var t = Et(e.length), n = Et(16), s = 0; s < e.length; s += 16) {Ot(e, n, 0, s, s + 16), n = this._aes.decrypt(n);for (var r = 0; r < 16; r++) {t[s + r] = n[r] ^ this._lastCipherblock[r];}Ot(e, this._lastCipherblock, 0, s, s + 16);}return t;} }]);return Zt;}();var en = /*#__PURE__*/function () {function en(e, t, n) {_classCallCheck(this, en);if (!(this instanceof en)) throw Error("AES must be instanitated with `new`");if (this.description = "Cipher Feedback", this.name = "cfb", t) {if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");} else t = Et(16);n || (n = 1), this.segmentSize = n, this._shiftRegister = Pt(t, !0), this._aes = new Qt(e);}_createClass(en, [{ key: "encrypt", value: function encrypt(e) {if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");for (var t, n = Pt(e, !0), s = 0; s < n.length; s += this.segmentSize) {t = this._aes.encrypt(this._shiftRegister);for (var r = 0; r < this.segmentSize; r++) {n[s + r] ^= t[r];}Ot(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Ot(n, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);}return n;} }, { key: "decrypt", value: function decrypt(e) {if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");for (var t, n = Pt(e, !0), s = 0; s < n.length; s += this.segmentSize) {t = this._aes.encrypt(this._shiftRegister);for (var r = 0; r < this.segmentSize; r++) {n[s + r] ^= t[r];}Ot(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Ot(e, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);}return n;} }]);return en;}();var tn = /*#__PURE__*/function () {function tn(e, t) {_classCallCheck(this, tn);if (!(this instanceof tn)) throw Error("AES must be instanitated with `new`");if (this.description = "Output Feedback", this.name = "ofb", t) {if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");} else t = Et(16);this._lastPrecipher = Pt(t, !0), this._lastPrecipherIndex = 16, this._aes = new Qt(e);}_createClass(tn, [{ key: "encrypt", value: function encrypt(e) {for (var t = Pt(e, !0), n = 0; n < t.length; n++) {16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];}return t;} }, { key: "decrypt", value: function decrypt(e) {return this.encrypt(e);} }]);return tn;}();var nn = /*#__PURE__*/function () {function nn(e) {_classCallCheck(this, nn);if (!(this instanceof nn)) throw Error("Counter must be instanitated with `new`");0 === e || e || (e = 1), "number" == typeof e ? (this._counter = Et(16), this.setValue(e)) : this.setBytes(e);}_createClass(nn, [{ key: "setValue", value: function setValue(e) {if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");for (var t = 15; t >= 0; --t) {this._counter[t] = e % 256, e = parseInt(e / 256);}} }, { key: "setBytes", value: function setBytes(e) {if (16 != (e = Pt(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");this._counter = e;} }, { key: "increment", value: function increment() {for (var e = 15; e >= 0; e--) {if (255 !== this._counter[e]) {this._counter[e]++;break;}this._counter[e] = 0;}} }]);return nn;}();var sn = /*#__PURE__*/function () {function sn(e, t) {_classCallCheck(this, sn);if (!(this instanceof sn)) throw Error("AES must be instanitated with `new`");this.description = "Counter", this.name = "ctr", t instanceof nn || (t = new nn(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new Qt(e);}_createClass(sn, [{ key: "encrypt", value: function encrypt(e) {for (var t = Pt(e, !0), n = 0; n < t.length; n++) {16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];}return t;} }, { key: "decrypt", value: function decrypt(e) {return this.encrypt(e);} }]);return sn;}();var rn = { AES: Qt, Counter: nn, ModeOfOperation: { ecb: Xt, cbc: Zt, cfb: en, ofb: tn, ctr: sn }, utils: { hex: Ut, utf8: xt }, padding: { pkcs7: { pad: function pad(e) {var t = 16 - (e = Pt(e, !0)).length % 16,n = Et(e.length + t);Ot(e, n);for (var s = e.length; s < n.length; s++) {n[s] = t;}return n;}, strip: function strip(e) {if ((e = Pt(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");var t = e[e.length - 1];if (t > 16) throw new Error("PKCS#7 padding byte out of range");for (var n = e.length - t, s = 0; s < t; s++) {if (e[n + s] !== t) throw new Error("PKCS#7 invalid padding byte");}var r = Et(n);return Ot(e, r, 0, 0, n), r;} } }, _arrayTest: { coerceArray: Pt, createArray: Et, copyArray: Ot } };function on(e, t, n) {var s = new Uint8Array(uni.base64ToArrayBuffer(t)),r = rn.utils.utf8.toBytes(n),i = rn.utils.utf8.toBytes(e),o = new rn.ModeOfOperation.cbc(s, r),a = rn.padding.pkcs7.pad(i),c = o.encrypt(a);return uni.arrayBufferToBase64(c);}var an,cn,un = null;var ln = /*#__PURE__*/function (_bt) {_inherits(ln, _bt);var _super9 = _createSuper(ln);function ln(e) {var _this16;_classCallCheck(this, ln);var t;_this16 = _super9.call(this, e), _this16.userEncryptKey = null, _this16.scopedGlobalCache = (t = _this16.uniCloudIns, T("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", t.config.spaceId)));return _this16;}_createClass(ln, [{ key: "isLogin", value: function isLogin() {return !!this.scopedGlobalCache.weixinCode;} }, { key: "prepare", value: function () {var _prepare2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {return _regeneratorRuntime().wrap(function _callee35$(_context35) {while (1) {switch (_context35.prev = _context35.next) {case 0:if (this.isLogin()) {_context35.next = 7;break;}if (this.scopedGlobalCache.initPromise) {_context35.next = 3;break;}throw new Error("`uniCloud.initSecureNetworkByWeixin` has not yet been called");case 3:_context35.next = 5;return this.scopedGlobalCache.initPromise;case 5:if (this.scopedGlobalCache.mpWeixinCode) {_context35.next = 7;break;}throw new Error("uniCloud.initSecureNetworkByWeixin` has not yet been called or successfully excuted");case 7:case "end":return _context35.stop();}}}, _callee35, this);}));function prepare() {return _prepare2.apply(this, arguments);}return prepare;}() }, { key: "getUserEncryptKey", value: function () {var _getUserEncryptKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {var _this17 = this;var e;return _regeneratorRuntime().wrap(function _callee36$(_context36) {while (1) {switch (_context36.prev = _context36.next) {case 0:if (!this.userEncryptKey) {_context36.next = 2;break;}return _context36.abrupt("return", this.userEncryptKey);case 2:if (!(un && un.expireTime)) {_context36.next = 6;break;}e = Date.now();if (!(un.expireTime - e > 0)) {_context36.next = 6;break;}return _context36.abrupt("return", (this.userEncryptKey = un, this.userEncryptKey));case 6:return _context36.abrupt("return", new Promise(function (e, t) {uni.getUserCryptoManager().getLatestUserKey({ success: function success(t) {un = t, _this17.userEncryptKey = t, e(_this17.userEncryptKey);}, fail: function fail(e) {t(new H({ code: e.errCode || "SYSTEM_ERROR", message: e.errMsg }));} });}));case 7:case "end":return _context36.stop();}}}, _callee36, this);}));function getUserEncryptKey() {return _getUserEncryptKey.apply(this, arguments);}return getUserEncryptKey;}() }, { key: "getWxAppId", value: function getWxAppId() {return wx.getAccountInfoSync().miniProgram.appId;} }, { key: "platformGetSignOption", value: function () {var _platformGetSignOption = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {var _yield$this$getUserEn, e, t, n;return _regeneratorRuntime().wrap(function _callee37$(_context37) {while (1) {switch (_context37.prev = _context37.next) {case 0:_context37.next = 2;return this.getUserEncryptKey();case 2:_yield$this$getUserEn = _context37.sent;e = _yield$this$getUserEn.encryptKey;t = _yield$this$getUserEn.iv;n = _yield$this$getUserEn.version;return _context37.abrupt("return", { verifyClientSign: on(JSON.stringify({ data: JSON.stringify({}), appId: this.appId, deviceId: this.deviceId, wxAppId: this.getWxAppId(), simulator: "devtools" === Z().platform, timestamp: Date.now() }), e, t), encryptKeyId: n, mpWeixinCode: this.scopedGlobalCache.mpWeixinCode });case 7:case "end":return _context37.stop();}}}, _callee37, this);}));function platformGetSignOption() {return _platformGetSignOption.apply(this, arguments);}return platformGetSignOption;}() }, { key: "platformEncryptData", value: function () {var _platformEncryptData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(e) {var _yield$this$getUserEn2, t, n, s, r;return _regeneratorRuntime().wrap(function _callee38$(_context38) {while (1) {switch (_context38.prev = _context38.next) {case 0:_context38.next = 2;return this.getUserEncryptKey();case 2:_yield$this$getUserEn2 = _context38.sent;t = _yield$this$getUserEn2.encryptKey;n = _yield$this$getUserEn2.iv;s = _yield$this$getUserEn2.version;r = { secretType: this.secretType, encryptKeyId: s, mpWeixinCode: this.scopedGlobalCache.mpWeixinCode };return _context38.abrupt("return", this.secretType === Tt ? { content: e, _uniCloudOptions: r } : { content: on(JSON.stringify({ data: JSON.stringify(e), appId: this.appId, deviceId: this.deviceId, wxAppId: this.getWxAppId(), simulator: "devtools" === Z().platform, timestamp: Date.now() }), t, n), _uniCloudOptions: r });case 8:case "end":return _context38.stop();}}}, _callee38, this);}));function platformEncryptData(_x32) {return _platformEncryptData.apply(this, arguments);}return platformEncryptData;}() }, { key: "platformDecryptResult", value: function () {var _platformDecryptResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(e) {var t, _yield$this$getUserEn3, n, s;return _regeneratorRuntime().wrap(function _callee39$(_context39) {while (1) {switch (_context39.prev = _context39.next) {case 0:t = e.content;_context39.next = 3;return this.getUserEncryptKey();case 3:_yield$this$getUserEn3 = _context39.sent;n = _yield$this$getUserEn3.encryptKey;s = _yield$this$getUserEn3.iv;return _context39.abrupt("return", JSON.parse(function (e, t, n) {var s = new Uint8Array(uni.base64ToArrayBuffer(e)),r = new Uint8Array(uni.base64ToArrayBuffer(t)),i = rn.utils.utf8.toBytes(n),o = new rn.ModeOfOperation.cbc(r, i),a = rn.padding.pkcs7.strip(o.decrypt(s));return rn.utils.utf8.fromBytes(a);}(t, n, s)));case 7:case "end":return _context39.stop();}}}, _callee39, this);}));function platformDecryptResult(_x33) {return _platformDecryptResult.apply(this, arguments);}return platformDecryptResult;}() }]);return ln;}(bt);function hn(e) {var t = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"],n = {};var _loop = function _loop(_s9) {var r = t[_s9];n[r] = function () {for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {t[_key] = arguments[_key];}return new Promise(function (n, s) {"function" == typeof e[r] ? e[r].apply(e, t.concat([function () {var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref28.type,t = _ref28.data,r = _ref28.message;"success" === e ? n(t) : s(new H({ code: "SYSTEM_ERROR", message: r || "[secureNetwork]failed" }));}])) : s(new Error("[secureNetwork]请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块"));});};};for (var _s9 = 0; _s9 < t.length; _s9++) {_loop(_s9);}return n;}var dn = /*#__PURE__*/function (_bt2) {_inherits(dn, _bt2);var _super10 = _createSuper(dn);function dn(e) {var _this18;_classCallCheck(this, dn);_this18 = _super10.call(this, e), _this18.appUtils = _objectSpread({}, hn(uni.requireNativePlugin("plus"))), _this18.systemInfo = an || (an = Z());return _this18;}_createClass(dn, [{ key: "hasClientKey", value: function () {var _hasClientKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {return _regeneratorRuntime().wrap(function _callee40$(_context40) {while (1) {switch (_context40.prev = _context40.next) {case 0:_context40.t0 = void 0 === this._hasClientKey;if (!_context40.t0) {_context40.next = 5;break;}_context40.next = 4;return this.appUtils.hasClientKey({ provider: this.provider, spaceId: this.spaceId });case 4:this._hasClientKey = _context40.sent;case 5:return _context40.abrupt("return", this._hasClientKey);case 6:case "end":return _context40.stop();}}}, _callee40, this);}));function hasClientKey() {return _hasClientKey.apply(this, arguments);}return hasClientKey;}() }, { key: "getAppClientKey", value: function () {var _getAppClientKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {var _yield$this$appUtils$, e, t, n, s, r;return _regeneratorRuntime().wrap(function _callee41$(_context41) {while (1) {switch (_context41.prev = _context41.next) {case 0:_context41.next = 2;return this.appUtils.encryptGetClientKeyPayload({ data: JSON.stringify({}) });case 2:_yield$this$appUtils$ = _context41.sent;e = _yield$this$appUtils$.data;t = _yield$this$appUtils$.key;_context41.next = 7;return this.uniCloudIns.callFunction({ name: "DCloud-clientDB", data: { redirectTo: "encryption", action: "getAppClientKey", data: e, key: t } });case 7:_context41.t0 = _context41.sent.result;if (_context41.t0) {_context41.next = 10;break;}_context41.t0 = {};case 10:n = _context41.t0;if (!(0 !== n.errCode)) {_context41.next = 13;break;}throw new H({ code: n.errCode || n.code || "SYSTEM_ERROR", message: n.errMsg || n.message });case 13:s = n.clientKey, r = n.key;_context41.next = 16;return this.appUtils.setClientKey({ provider: this.provider, spaceId: this.spaceId, clientKey: s, key: r });case 16:case "end":return _context41.stop();}}}, _callee41, this);}));function getAppClientKey() {return _getAppClientKey.apply(this, arguments);}return getAppClientKey;}() }, { key: "ensureClientKey", value: function () {var _ensureClientKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {return _regeneratorRuntime().wrap(function _callee42$(_context42) {while (1) {switch (_context42.prev = _context42.next) {case 0:_context42.t0 = !0;_context42.next = 3;return this.hasClientKey();case 3:_context42.t1 = _context42.sent;_context42.t2 = _context42.t0 !== _context42.t1;if (!_context42.t2) {_context42.next = 8;break;}_context42.next = 8;return this.getAppClientKey();case 8:case "end":return _context42.stop();}}}, _callee42, this);}));function ensureClientKey() {return _ensureClientKey.apply(this, arguments);}return ensureClientKey;}() }, { key: "prepare", value: function () {var _prepare3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {return _regeneratorRuntime().wrap(function _callee43$(_context43) {while (1) {switch (_context43.prev = _context43.next) {case 0:_context43.next = 2;return this.ensureClientKey();case 2:case "end":return _context43.stop();}}}, _callee43, this);}));function prepare() {return _prepare3.apply(this, arguments);}return prepare;}() }, { key: "platformGetSignOption", value: function () {var _platformGetSignOption2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {var _yield$this$appUtils$2, e, t;return _regeneratorRuntime().wrap(function _callee44$(_context44) {while (1) {switch (_context44.prev = _context44.next) {case 0:_context44.next = 2;return this.appUtils.encrypt({ provider: this.provider, spaceId: this.spaceId, data: JSON.stringify({}) });case 2:_yield$this$appUtils$2 = _context44.sent;e = _yield$this$appUtils$2.data;t = _yield$this$appUtils$2.key;return _context44.abrupt("return", { verifyClientSign: e, encryptKeyId: t });case 6:case "end":return _context44.stop();}}}, _callee44, this);}));function platformGetSignOption() {return _platformGetSignOption2.apply(this, arguments);}return platformGetSignOption;}() }, { key: "platformEncryptData", value: function () {var _platformEncryptData2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45(e) {var _yield$this$appUtils$3, t, n, s;return _regeneratorRuntime().wrap(function _callee45$(_context45) {while (1) {switch (_context45.prev = _context45.next) {case 0:_context45.next = 2;return this.appUtils.encrypt({ provider: this.provider, spaceId: this.spaceId, data: JSON.stringify(e) });case 2:_yield$this$appUtils$3 = _context45.sent;t = _yield$this$appUtils$3.data;n = _yield$this$appUtils$3.key;s = { secretType: this.secretType, encryptKeyId: n };return _context45.abrupt("return", this.secretType === Tt ? { content: e, _uniCloudOptions: s } : { content: t, _uniCloudOptions: s });case 7:case "end":return _context45.stop();}}}, _callee45, this);}));function platformEncryptData(_x34) {return _platformEncryptData2.apply(this, arguments);}return platformEncryptData;}() }, { key: "platformDecryptResult", value: function () {var _platformDecryptResult2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46(e) {var t, _e$_uniCloudOptions, n, s, r;return _regeneratorRuntime().wrap(function _callee46$(_context46) {while (1) {switch (_context46.prev = _context46.next) {case 0:t = e.content;_e$_uniCloudOptions = e._uniCloudOptions;n = _e$_uniCloudOptions === void 0 ? {} : _e$_uniCloudOptions;s = n.encryptKeyId;_context46.next = 6;return this.appUtils.decrypt({ provider: this.provider, spaceId: this.spaceId, data: t, key: s });case 6:r = _context46.sent;return _context46.abrupt("return", JSON.parse(r.data));case 8:case "end":return _context46.stop();}}}, _callee46, this);}));function platformDecryptResult(_x35) {return _platformDecryptResult2.apply(this, arguments);}return platformDecryptResult;}() }]);return dn;}(bt);function fn() {var _ref29 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref29.secretType;return e === kt || e === Tt || e === It;}function pn() {var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref30.name,_ref30$data = _ref30.data,t = _ref30$data === void 0 ? {} : _ref30$data;return "app" === y && "DCloud-clientDB" === e && "encryption" === t.redirectTo && "getAppClientKey" === t.action;}function gn() {var _ref31 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref31.provider,t = _ref31.spaceId,n = _ref31.functionName;var _Z = Z(),s = _Z.appId,r = _Z.uniPlatform,i = _Z.osName;var o = r;"app" === r && (o = i);var a = function () {var _ref32 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref32.provider,t = _ref32.spaceId;var n = m;return n ? (e = function (e) {return "tencent" === e ? "tcb" : e;}(e), n.find(function (n) {return n.provider === e && n.spaceId === t;}).config) : {};}({ provider: e, spaceId: t });if (!a.accessControl || !a.accessControl.enable) return !1;var c = a.accessControl.function || {},u = Object.keys(c);if (0 === u.length) return !0;var l = function (e, t) {var n, s, r;for (var _i2 = 0; _i2 < e.length; _i2++) {var _o2 = e[_i2];_o2 !== t ? "*" !== _o2 ? _o2.split(",").map(function (e) {return e.trim();}).indexOf(t) > -1 && (s = _o2) : r = _o2 : n = _o2;}return n || s || r;}(u, n);if (!l) return !1;if ((c[l] || []).find(function () {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return e.appId === s && (e.platform || "").toLowerCase() === o.toLowerCase();})) return !0;throw console.error("\u6B64\u5E94\u7528[appId: ".concat(s, ", platform: ").concat(o, "]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), new H({ code: "SYSTEM_ERROR", message: "Invalid client" });}function mn(_ref33) {var e = _ref33.functionName,t = _ref33.result,n = _ref33.logPvd;if (this.__dev__.debugLog && t && t.requestId) {var _s10 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t.requestId });console.log("[".concat(n, "-request]").concat(_s10, "[/").concat(n, "-request]"));}}function yn(e) {var t = e.callFunction,n = function n(_n6) {var _this19 = this;var s = _n6.name;_n6.data = gt.call(e, { data: _n6.data });var r = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider],i = fn(_n6),o = pn(_n6),a = i || o;return t.call(this, _n6).then(function (e) {return e.errCode = 0, !a && mn.call(_this19, { functionName: s, result: e, logPvd: r }), Promise.resolve(e);}, function (e) {return !a && mn.call(_this19, { functionName: s, result: e, logPvd: r }), e && e.message && (e.message = function () {var _ref34 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref34$message = _ref34.message,e = _ref34$message === void 0 ? "" : _ref34$message,_ref34$extraInfo = _ref34.extraInfo,t = _ref34$extraInfo === void 0 ? {} : _ref34$extraInfo,_ref34$formatter = _ref34.formatter,n = _ref34$formatter === void 0 ? [] : _ref34$formatter;for (var _s11 = 0; _s11 < n.length; _s11++) {var _n$_s = n[_s11],_r3 = _n$_s.rule,_i3 = _n$_s.content,_o3 = _n$_s.mode,_a = e.match(_r3);if (!_a) continue;var _c = _i3;for (var _e22 = 1; _e22 < _a.length; _e22++) {_c = vt(_c, "{$".concat(_e22, "}"), _a[_e22]);}for (var _e23 in t) {_c = vt(_c, "{".concat(_e23, "}"), t[_e23]);}return "replace" === _o3 ? _c : e + _c;}return e;}({ message: "[".concat(_n6.name, "]: ").concat(e.message), formatter: yt, extraInfo: { functionName: s } })), Promise.reject(e);});};e.callFunction = function (t) {var _e$config = e.config,s = _e$config.provider,r = _e$config.spaceId,i = t.name;var o, a;if (f && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && w ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = mt), o = mt) : o = n, o = o.bind(e), pn(t)) a = n.call(e, t);else if (function (_ref35) {var e = _ref35.name,_ref35$data = _ref35.data,t = _ref35$data === void 0 ? {} : _ref35$data;return "mp-weixin" === y && "uni-id-co" === e && "secureNetworkHandshakeByWeixin" === t.method;}(t)) a = o.call(e, t);else if (fn(t)) {a = new cn({ secretType: t.secretType, uniCloudIns: e }).wrapEncryptDataCallFunction(n.bind(e))(t);} else if (gn({ provider: s, spaceId: r, functionName: i })) {a = new cn({ secretType: t.secretType, uniCloudIns: e }).wrapVerifyClientCallFunction(n.bind(e))(t);} else a = o(t);return Object.defineProperty(a, "result", { get: function get() {return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), a;};}cn = g ? "mp-weixin" === y ? ln : "app" === y ? dn : /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);throw new Error("[SecureNetwork]: Platform ".concat(y, " is not supported"));}return _createClass(_class2);}() : /*#__PURE__*/function () {function _class3() {_classCallCheck(this, _class3);throw new Error("[SecureNetwork]: Platform ".concat(y, " is not enabled"));}return _createClass(_class3);}();var _n = Symbol("CLIENT_DB_INTERNAL");function wn(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = _n, e.inspect = null, e.__ob__ = void 0, new Proxy(e, { get: function get(e, n, s) {if ("_uniClient" === n) return null;if ("symbol" == typeof n) return e[n];if (n in e || "string" != typeof n) {var _t10 = e[n];return "function" == typeof _t10 ? _t10.bind(e) : _t10;}return t.get(e, n, s);} });}function vn(e) {return { on: function on(t, n) {e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);}, off: function off(t, n) {e[t] = e[t] || [];var s = e[t].indexOf(n);-1 !== s && e[t].splice(s, 1);} };}var Sn = ["db.Geo", "db.command", "command.aggregate"];function kn(e, t) {return Sn.indexOf("".concat(e, ".").concat(t)) > -1;}function Tn(e) {switch (l(e)) {case "array":return e.map(function (e) {return Tn(e);});case "object":return e._internalType === _n || Object.keys(e).forEach(function (t) {e[t] = Tn(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}}function In(e) {return e && e.content && e.content.$method;}var bn = /*#__PURE__*/function () {function bn(e, t, n) {_classCallCheck(this, bn);this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;}_createClass(bn, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: Tn(e.$param) };}) };} }, { key: "getAction", value: function getAction() {var e = this.toJSON().$db.find(function (e) {return "action" === e.$method;});return e && e.$param && e.$param[0];} }, { key: "getCommand", value: function getCommand() {return { $db: this.toJSON().$db.filter(function (e) {return "action" !== e.$method;}) };} }, { key: "isAggregate", get: function get() {var e = this;for (; e;) {var t = In(e),_n7 = In(e.prevStage);if ("aggregate" === t && "collection" === _n7 || "pipeline" === t) return !0;e = e.prevStage;}return !1;} }, { key: "isCommand", get: function get() {var e = this;for (; e;) {if ("command" === In(e)) return !0;e = e.prevStage;}return !1;} }, { key: "isAggregateCommand", get: function get() {var e = this;for (; e;) {var t = In(e),_n8 = In(e.prevStage);if ("aggregate" === t && "command" === _n8) return !0;e = e.prevStage;}return !1;} }, { key: "count", get: function get() {if (!this.isAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return An({ $method: "count", $param: Tn(Array.from(arguments)) }, e, this._database);};} }, { key: "remove", get: function get() {if (!this.isCommand) return function () {return this._send("remove", Array.from(arguments));};var e = this;return function () {return An({ $method: "remove", $param: Tn(Array.from(arguments)) }, e, this._database);};} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", get: function get() {if (!this.isCommand) return function () {throw new Error("JQL禁止使用set方法");};var e = this;return function () {return An({ $method: "set", $param: Tn(Array.from(arguments)) }, e, this._database);};} }, { key: "_send", value: function _send(e, t) {var n = this.getAction(),s = this.getCommand();if (s.$db.push({ $method: e, $param: Tn(t) }), f) {var _e24 = s.$db.find(function (e) {return "collection" === e.$method;}),_t11 = _e24 && _e24.$param;_t11 && 1 === _t11.length && "string" == typeof _e24.$param[0] && _e24.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");}return this._database._callCloudFunction({ action: n, command: s });} }]);return bn;}();function An(e, t, n) {return wn(new bn(e, t, n), { get: function get(e, t) {var s = "db";return e && e.content && (s = e.content.$method), kn(s, t) ? An({ $method: t }, e, n) : function () {return An({ $method: t, $param: Tn(Array.from(arguments)) }, e, n);};} });}function Cn(_ref36) {var e = _ref36.path,t = _ref36.method;return /*#__PURE__*/function () {function _class4() {_classCallCheck(this, _class4);this.param = Array.from(arguments);}_createClass(_class4, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class4;}();}function Pn(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};return wn(new e(t), { get: function get(e, t) {return kn("db", t) ? An({ $method: t }, null, e) : function () {return An({ $method: t, $param: Tn(Array.from(arguments)) }, null, e);};} });}var En = /*#__PURE__*/function (_ref37) {_inherits(En, _ref37);var _super11 = _createSuper(En);function En() {_classCallCheck(this, En);return _super11.apply(this, arguments);}_createClass(En, [{ key: "_parseResult", value: function _parseResult(e) {return this._isJQL ? e.result : e;} }, { key: "_callCloudFunction", value: function _callCloudFunction(_ref38) {var _this20 = this;var e = _ref38.action,t = _ref38.command,n = _ref38.multiCommand,s = _ref38.queryList;function r(e, t) {if (n && s) for (var _n9 = 0; _n9 < s.length; _n9++) {var _r4 = s[_n9];_r4.udb && "function" == typeof _r4.udb.setResult && (t ? _r4.udb.setResult(t) : _r4.udb.setResult(e.result.dataList[_n9]));}}var i = this,o = this._isJQL ? "databaseForJQL" : "database";function a(e) {return i._callback("error", [e]), P(E(o, "fail"), e).then(function () {return P(E(o, "complete"), e);}).then(function () {return r(null, e), j(x, { type: N, content: e }), Promise.reject(e);});}var c = P(E(o, "invoke")),l = this._uniClient;return c.then(function () {return l.callFunction({ name: "DCloud-clientDB", type: u, data: { action: e, command: t, multiCommand: n } });}).then(function (e) {var _e$result = e.result,t = _e$result.code,n = _e$result.message,s = _e$result.token,c = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,u = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (u) for (var _e25 = 0; _e25 < u.length; _e25++) {var _u$_e = u[_e25],_t12 = _u$_e.level,_n10 = _u$_e.message,_s12 = _u$_e.detail,_r5 = console["app" === y && "warn" === _t12 ? "error" : _t12] || console.log;var _i4 = "[System Info]" + _n10;_s12 && (_i4 = "".concat(_i4, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s12)), _r5(_i4);}if (t) {return a(new H({ code: t, message: n, requestId: e.requestId }));}e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, s && c && (G({ token: s, tokenExpired: c }), _this20._callbackAuth("refreshToken", [{ token: s, tokenExpired: c }]), _this20._callback("refreshToken", [{ token: s, tokenExpired: c }]), j(L, { token: s, tokenExpired: c }));var l = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];var _loop2 = function _loop2(_t13) {var _l$_t = l[_t13],n = _l$_t.prop,s = _l$_t.tips;if (n in e.result) {var _t14 = e.result[n];Object.defineProperty(e.result, n, { get: function get() {return console.warn(s), _t14;} });}};for (var _t13 = 0; _t13 < l.length; _t13++) {_loop2(_t13);}return function (e) {return P(E(o, "success"), e).then(function () {return P(E(o, "complete"), e);}).then(function () {r(e, null);var t = i._parseResult(e);return j(x, { type: N, content: t }), Promise.resolve(t);});}(e);}, function (e) {/fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");return a(new H({ code: e.code || "SYSTEM_ERROR", message: e.message, requestId: e.requestId }));});} }]);return En;}( /*#__PURE__*/function () {function _class5() {var _ref39 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref39$uniClient = _ref39.uniClient,e = _ref39$uniClient === void 0 ? {} : _ref39$uniClient,_ref39$isJQL = _ref39.isJQL,t = _ref39$isJQL === void 0 ? !1 : _ref39$isJQL;_classCallCheck(this, _class5);this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = T("_globalUniCloudDatabaseCallback")), t || (this.auth = vn(this._authCallBacks)), this._isJQL = t, Object.assign(this, vn(this._dbCallBacks)), this.env = wn({}, { get: function get(e, t) {return { $env: t };} }), this.Geo = wn({}, { get: function get(e, t) {return Cn({ path: ["Geo"], method: t });} }), this.serverDate = Cn({ path: [], method: "serverDate" }), this.RegExp = Cn({ path: [], method: "RegExp" });}_createClass(_class5, [{ key: "getCloudEnv", value: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");return { $env: e.replace("$cloudEnv_", "") };} }, { key: "_callback", value: function _callback(e, t) {var n = this._dbCallBacks;n[e] && n[e].forEach(function (e) {e.apply(void 0, _toConsumableArray(t));});} }, { key: "_callbackAuth", value: function _callbackAuth(e, t) {var n = this._authCallBacks;n[e] && n[e].forEach(function (e) {e.apply(void 0, _toConsumableArray(t));});} }, { key: "multiSend", value: function multiSend() {var e = Array.from(arguments),t = e.map(function (e) {var t = e.getAction(),n = e.getCommand();if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");return { action: t, command: n };});return this._callCloudFunction({ multiCommand: t, queryList: e });} }]);return _class5;}());var On = "token无效，跳转登录页面",Rn = "token过期，跳转登录页面",xn = { TOKEN_INVALID_TOKEN_EXPIRED: Rn, TOKEN_INVALID_INVALID_CLIENTID: On, TOKEN_INVALID: On, TOKEN_INVALID_WRONG_TOKEN: On, TOKEN_INVALID_ANONYMOUS_USER: On },Un = { "uni-id-token-expired": Rn, "uni-id-check-token-failed": On, "uni-id-token-not-exist": On, "uni-id-check-device-feature-failed": On };function Ln(e, t) {var n = "";return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");}function Nn() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";var n = [],s = [];return e.forEach(function (e) {!0 === e.needLogin ? n.push(Ln(t, e.path)) : !1 === e.needLogin && s.push(Ln(t, e.path));}), { needLoginPage: n, notNeedLoginPage: s };}function Dn(e) {return e.split("?")[0].replace(/^\//, "");}function qn() {return function (e) {var t = e && e.$page && e.$page.fullPath || "";return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t;}(function () {var e = getCurrentPages();return e[e.length - 1];}());}function Fn() {return Dn(qn());}function Kn() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};if (!e) return !1;if (!(t && t.list && t.list.length)) return !1;var n = t.list,s = Dn(e);return n.some(function (e) {return e.pagePath === s;});}var Mn = !!_pages.default.uniIdRouter;var _ref40 = function () {var _ref24 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,_ref24$pages = _ref24.pages,e = _ref24$pages === void 0 ? [] : _ref24$pages,_ref24$subPackages = _ref24.subPackages,n = _ref24$subPackages === void 0 ? [] : _ref24$subPackages,_ref24$uniIdRouter = _ref24.uniIdRouter,s = _ref24$uniIdRouter === void 0 ? {} : _ref24$uniIdRouter,_ref24$tabBar = _ref24.tabBar,r = _ref24$tabBar === void 0 ? {} : _ref24$tabBar;var i = s.loginPage,_s$needLogin = s.needLogin,o = _s$needLogin === void 0 ? [] : _s$needLogin,_s$resToLogin = s.resToLogin,a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,_Nn = Nn(e),c = _Nn.needLoginPage,u = _Nn.notNeedLoginPage,_ref26 = function () {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var t = [],n = [];return e.forEach(function (e) {var s = e.root,_e$pages = e.pages,r = _e$pages === void 0 ? [] : _e$pages,_Nn2 = Nn(r, s),i = _Nn2.needLoginPage,o = _Nn2.notNeedLoginPage;t.push.apply(t, _toConsumableArray(i)), n.push.apply(n, _toConsumableArray(o));}), { needLoginPage: t, notNeedLoginPage: n };}(n),l = _ref26.needLoginPage,h = _ref26.notNeedLoginPage;return { loginPage: i, routerNeedLogin: o, resToLogin: a, needLoginPage: [].concat(_toConsumableArray(c), _toConsumableArray(l)), notNeedLoginPage: [].concat(_toConsumableArray(u), _toConsumableArray(h)), loginPageInTabBar: Kn(i, r) };}(),jn = _ref40.loginPage,Bn = _ref40.routerNeedLogin,$n = _ref40.resToLogin,Wn = _ref40.needLoginPage,zn = _ref40.notNeedLoginPage,Hn = _ref40.loginPageInTabBar;if (Wn.indexOf(jn) > -1) throw new Error("Login page [".concat(jn, "] should not be \"needLogin\", please check your pages.json"));function Jn(e) {var t = Fn();if ("/" === e.charAt(0)) return e;var _e$split = e.split("?"),_e$split2 = _slicedToArray(_e$split, 2),n = _e$split2[0],s = _e$split2[1],r = n.replace(/^\//, "").split("/"),i = t.split("/");i.pop();for (var _e26 = 0; _e26 < r.length; _e26++) {var _t15 = r[_e26];".." === _t15 ? i.pop() : "." !== _t15 && i.push(_t15);}return "" === i[0] && i.shift(), "/" + i.join("/") + (s ? "?" + s : "");}function Vn(e) {var t = Dn(Jn(e));return !(zn.indexOf(t) > -1) && (Wn.indexOf(t) > -1 || Bn.some(function (t) {return function (e, t) {return new RegExp(t).test(e);}(e, t);}));}function Gn(_ref41) {var e = _ref41.redirect;var t = Dn(e),n = Dn(jn);return Fn() !== n && t !== n;}function Yn() {var _ref42 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref42.api,t = _ref42.redirect;if (!t || !Gn({ redirect: t })) return;var n = function (e, t) {return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;}(jn, t);Hn ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo"), setTimeout(function () {uni[e]({ url: n });});}function Qn() {var _ref43 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref43.url;var t = { abortLoginPageJump: !1, autoToLoginPage: !1 },n = function () {var _V3 = V(),e = _V3.token,t = _V3.tokenExpired;var n;if (e) {if (t < Date.now()) {var _e27 = "uni-id-token-expired";n = { errCode: _e27, errMsg: Un[_e27] };}} else {var _e28 = "uni-id-check-token-failed";n = { errCode: _e28, errMsg: Un[_e28] };}return n;}();if (Vn(e) && n) {n.uniIdRedirectUrl = e;if (F(U).length > 0) return setTimeout(function () {j(U, n);}, 0), t.abortLoginPageJump = !0, t;t.autoToLoginPage = !0;}return t;}function Xn() {!function () {var e = qn(),_Qn = Qn({ url: e }),t = _Qn.abortLoginPageJump,n = _Qn.autoToLoginPage;t || n && Yn({ api: "redirectTo", redirect: e });}();var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];var _loop3 = function _loop3(_t16) {var n = e[_t16];uni.addInterceptor(n, { invoke: function invoke(e) {var _Qn2 = Qn({ url: e.url }),t = _Qn2.abortLoginPageJump,s = _Qn2.autoToLoginPage;return t ? e : s ? (Yn({ api: n, redirect: Jn(e.url) }), !1) : e;} });};for (var _t16 = 0; _t16 < e.length; _t16++) {_loop3(_t16);}}function Zn() {this.onResponse(function (e) {var t = e.type,n = e.content;var s = !1;switch (t) {case "cloudobject":s = function (e) {var t = e.errCode;return t in Un;}(n);break;case "clientdb":s = function (e) {var t = e.errCode;return t in xn;}(n);}s && function () {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var t = F(U);W().then(function () {var n = qn();if (n && Gn({ redirect: n })) return t.length > 0 ? j(U, Object.assign({ uniIdRedirectUrl: n }, e)) : void (jn && Yn({ api: "navigateTo", redirect: n }));});}(n);});}function es(e) {!function (e) {e.onResponse = function (e) {K(x, e);}, e.offResponse = function (e) {M(x, e);};}(e), function (e) {e.onNeedLogin = function (e) {K(U, e);}, e.offNeedLogin = function (e) {M(U, e);}, Mn && (T("_globalUniCloudStatus").needLoginInit || (T("_globalUniCloudStatus").needLoginInit = !0, W().then(function () {Xn.call(e);}), $n && Zn.call(e)));}(e), function (e) {e.onRefreshToken = function (e) {K(L, e);}, e.offRefreshToken = function (e) {M(L, e);};}(e);}var ts;var ns = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ss = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;function rs() {var e = V().token || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var n;try {n = JSON.parse((s = t[1], decodeURIComponent(ts(s).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);}var s;return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;}ts = "function" != typeof atob ? function (e) {if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ss.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");var t;e += "==".slice(2 - (3 & e.length));for (var n, s, r = "", i = 0; i < e.length;) {t = ns.indexOf(e.charAt(i++)) << 18 | ns.indexOf(e.charAt(i++)) << 12 | (n = ns.indexOf(e.charAt(i++))) << 6 | (s = ns.indexOf(e.charAt(i++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);}return r;} : atob;var is = s(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var n = "chooseAndUploadFile:ok",s = "chooseAndUploadFile:fail";function r(e, t) {return e.tempFiles.forEach(function (e, n) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function i(e, t, _ref44) {var s = _ref44.onChooseFile,r = _ref44.onUploadProgress;return t.then(function (e) {if (s) {var _t17 = s(e);if (void 0 !== _t17) return Promise.resolve(_t17).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: n, tempFilePaths: [], tempFiles: [] } : function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var r = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = n;var i = t.tempFiles,o = i.length;var a = 0;return new Promise(function (n) {for (; a < s;) {c();}function c() {var s = a++;if (s >= o) return void (!i.find(function (e) {return !e.url && !e.errMsg;}) && n(t));var u = i[s];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);} }).then(function (e) {u.url = e.fileID, s < o && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, s < o && c();});}});}(e, t, 5, r);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? i(e, function (e) {var t = e.count,n = e.sizeType,_e$sourceType = e.sourceType,i = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,o = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: n, sourceType: i, extension: o, success: function success(t) {e(r(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", s) });} });});}(t), t) : "video" === t.type ? i(e, function (e) {var t = e.camera,n = e.compressed,i = e.maxDuration,_e$sourceType2 = e.sourceType,o = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: n, maxDuration: i, sourceType: o, extension: a, success: function success(t) {var n = t.tempFilePath,s = t.duration,i = t.size,o = t.height,a = t.width;e(r({ errMsg: "chooseVideo:ok", tempFilePaths: [n], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: n, size: i, type: t.tempFile && t.tempFile.type || "", width: a, height: o, duration: s, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", s) });} });});}(t), t) : i(e, function (e) {var t = e.count,n = e.extension;return new Promise(function (e, i) {var o = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o = wx.chooseMessageFile), "function" != typeof o) return i({ errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });o({ type: "all", count: t, extension: n, success: function success(t) {e(r(t));}, fail: function fail(e) {i({ errMsg: e.errMsg.replace("chooseFile:fail", s) });} });});}(t), t);};};}),os = n(is);var as = "manual";function cs(e) {return { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, spaceInfo: { type: Object, default: function _default() {return {};} }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this21 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this21[t]);}), e;}, function (e, t) {if (_this21.loadtime === as) return;var n = !1;var s = [];for (var _r6 = 2; _r6 < e.length; _r6++) {e[_r6] !== t[_r6] && (s.push(e[_r6]), n = !0);}e[0] !== t[0] && (_this21.mixinDatacomPage.current = _this21.pageCurrent), _this21.mixinDatacomPage.size = _this21.pageSize, _this21.onMixinDatacomPropsChange(n, s);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this22 = this;var _ref45 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref45$getone = _ref45.getone,e = _ref45$getone === void 0 ? !1 : _ref45$getone,t = _ref45.success,n = _ref45.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {_this22.mixinDatacomLoading = !1;var _n$result = n.result,s = _n$result.data,r = _n$result.count;_this22.getcount && (_this22.mixinDatacomPage.count = r), _this22.mixinDatacomHasMore = s.length < _this22.pageSize;var i = e ? s.length ? s[0] : void 0 : s;_this22.mixinDatacomResData = i, t && t(i);}).catch(function (e) {_this22.mixinDatacomLoading = !1, _this22.mixinDatacomErrorMessage = e, n && n(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var _n11;var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var n = e.database(this.spaceInfo);var s = t.action || this.action;s && (n = n.action(s));var r = t.collection || this.collection;n = Array.isArray(r) ? (_n11 = n).collection.apply(_n11, _toConsumableArray(r)) : n.collection(r);var i = t.where || this.where;i && Object.keys(i).length && (n = n.where(i));var o = t.field || this.field;o && (n = n.field(o));var a = t.foreignKey || this.foreignKey;a && (n = n.foreignKey(a));var c = t.groupby || this.groupby;c && (n = n.groupBy(c));var u = t.groupField || this.groupField;u && (n = n.groupField(u));!0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());var l = t.orderby || this.orderby;l && (n = n.orderBy(l));var h = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (h - 1)).limit(d).get(m), n;} } };}function us(e) {return function (t) {var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};n = function (e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == typeof t.secretMethods && (e.secretMethods = t.secretMethods), e;}({ customUI: !1, loadingOptions: { title: "加载中...", mask: !0 }, errorOptions: { type: "modal", retry: !1 } }, n);var _n12 = n,s = _n12.customUI,r = _n12.loadingOptions,i = _n12.errorOptions,o = _n12.parseSystemError,a = !s;return new Proxy({}, { get: function get(s, u) {return function () {var _ref46 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref46.fn,t = _ref46.interceptorName,n = _ref46.getCallbackArgs;return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {var _len2,s,_key2,r,i,o,_args = arguments;return _regeneratorRuntime().wrap(function _callee47$(_context47) {while (1) {switch (_context47.prev = _context47.next) {case 0:for (_len2 = _args.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {s[_key2] = _args[_key2];}r = n ? n({ params: s }) : {};_context47.prev = 2;_context47.next = 5;return P(E(t, "invoke"), _objectSpread({}, r));case 5:_context47.next = 7;return e.apply(void 0, s);case 7:i = _context47.sent;_context47.next = 10;return P(E(t, "success"), _objectSpread(_objectSpread({}, r), {}, { result: i }));case 10:return _context47.abrupt("return", i);case 13:_context47.prev = 13;_context47.t0 = _context47["catch"](2);o = _context47.t0;_context47.next = 18;return P(E(t, "fail"), _objectSpread(_objectSpread({}, r), {}, { error: o }));case 18:throw o;case 19:_context47.prev = 19;_context47.next = 22;return P(E(t, "complete"), o ? _objectSpread(_objectSpread({}, r), {}, { error: o }) : _objectSpread(_objectSpread({}, r), {}, { result: i }));case 22:return _context47.finish(19);case 23:case "end":return _context47.stop();}}}, _callee47, null, [[2, 13, 19, 23]]);}));}({ fn: function () {var _s13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {var h,_len3,l,_key3,d,_ref48,f,p,g,_e29,_yield,_t18,_n13,_args3 = arguments;return _regeneratorRuntime().wrap(function _callee49$(_context49) {while (1) {switch (_context49.prev = _context49.next) {case 0:a && uni.showLoading({ title: r.title, mask: r.mask });for (_len3 = _args3.length, l = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {l[_key3] = _args3[_key3];}d = { name: t, type: c, data: { method: u, params: l } };"object" == typeof n.secretMethods && function (e, t) {var n = t.data.method,s = e.secretMethods || {},r = s[n] || s["*"];r && (t.secretType = r);}(n, d);_context49.prev = 4;_context49.next = 7;return e.callFunction(d);case 7:h = _context49.sent;_context49.next = 13;break;case 10:_context49.prev = 10;_context49.t0 = _context49["catch"](4);h = { result: _context49.t0 };case 13:_ref48 = h.result || {}, f = _ref48.errCode, p = _ref48.errMsg, g = _ref48.newToken;if (!(a && uni.hideLoading(), g && g.token && g.tokenExpired && (G(g), j(L, _objectSpread({}, g))), f)) {_context49.next = 38;break;}_e29 = p;if (!o) {_context49.next = 23;break;}_context49.next = 19;return o({ objectName: t, methodName: u, params: l, errCode: f, errMsg: p });case 19:_context49.t1 = _context49.sent.errMsg;if (_context49.t1) {_context49.next = 22;break;}_context49.t1 = p;case 22:_e29 = _context49.t1;case 23:if (!a) {_context49.next = 36;break;}if (!("toast" === i.type)) {_context49.next = 28;break;}uni.showToast({ title: _e29, icon: "none" });_context49.next = 36;break;case 28:if (!("modal" !== i.type)) {_context49.next = 30;break;}throw new Error("Invalid errorOptions.type: ".concat(i.type));case 30:_context49.next = 32;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {var _ref50,e,t,n,s,r,_args2 = arguments;return _regeneratorRuntime().wrap(function _callee48$(_context48) {while (1) {switch (_context48.prev = _context48.next) {case 0:_ref50 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref50.title, t = _ref50.content, n = _ref50.showCancel, s = _ref50.cancelText, r = _ref50.confirmText;return _context48.abrupt("return", new Promise(function (i, o) {uni.showModal({ title: e, content: t, showCancel: n, cancelText: s, confirmText: r, success: function success(e) {i(e);}, fail: function fail() {i({ confirm: !1, cancel: !0 });} });}));case 2:case "end":return _context48.stop();}}}, _callee48);}))({ title: "提示", content: _e29, showCancel: i.retry, cancelText: "取消", confirmText: i.retry ? "重试" : "确定" });case 32:_yield = _context49.sent;_t18 = _yield.confirm;if (!(i.retry && _t18)) {_context49.next = 36;break;}return _context49.abrupt("return", s.apply(void 0, l));case 36:_n13 = new H({ code: f, message: p, requestId: h.requestId });throw _n13.detail = h.result, j(x, { type: q, content: _n13 }), _n13;case 38:return _context49.abrupt("return", (j(x, { type: q, content: h.result }), h.result));case 39:case "end":return _context49.stop();}}}, _callee49, null, [[4, 10]]);}));function s() {return _s13.apply(this, arguments);}return s;}(), interceptorName: "callObject", getCallbackArgs: function getCallbackArgs() {var _ref51 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref51.params;return { objectName: t, methodName: u, params: e };} });} });};}function ls(e) {return T("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));}function hs() {return _hs.apply(this, arguments);}function _hs() {_hs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {var _ref55,_ref55$callLoginByWei,e,t,n,s,_args5 = arguments;return _regeneratorRuntime().wrap(function _callee51$(_context51) {while (1) {switch (_context51.prev = _context51.next) {case 0:_ref55 = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {}, _ref55$callLoginByWei = _ref55.callLoginByWeixin, e = _ref55$callLoginByWei === void 0 ? !1 : _ref55$callLoginByWei;t = ls(this);if (!("mp-weixin" !== y)) {_context51.next = 4;break;}throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(y, "`"));case 4:_context51.next = 6;return new Promise(function (e, t) {uni.login({ success: function success(t) {e(t.code);}, fail: function fail(e) {t(new Error(e.errMsg));} });});case 6:n = _context51.sent;s = this.importObject("uni-id-co", { customUI: !0 });_context51.next = 10;return s.secureNetworkHandshakeByWeixin({ code: n, callLoginByWeixin: e });case 10:t.mpWeixinCode = n;return _context51.abrupt("return", { code: n });case 12:case "end":return _context51.stop();}}}, _callee51, this);}));return _hs.apply(this, arguments);}function ds(_x36) {return _ds.apply(this, arguments);}function _ds() {_ds = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52(e) {var t;return _regeneratorRuntime().wrap(function _callee52$(_context52) {while (1) {switch (_context52.prev = _context52.next) {case 0:t = ls(this);return _context52.abrupt("return", (t.initPromise || (t.initPromise = hs.call(this, e)), t.initPromise));case 2:case "end":return _context52.stop();}}}, _callee52, this);}));return _ds.apply(this, arguments);}function fs(e) {return function () {var _ref52 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref52$callLoginByWei = _ref52.callLoginByWeixin,t = _ref52$callLoginByWei === void 0 ? !1 : _ref52$callLoginByWei;return ds.call(e, { callLoginByWeixin: t });};}function ps(_x37, _x38) {return _ps.apply(this, arguments);}function _ps() {_ps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee53(e, t) {var n, _e31, s;return _regeneratorRuntime().wrap(function _callee53$(_context53) {while (1) {switch (_context53.prev = _context53.next) {case 0:n = "http://".concat(e, ":").concat(t, "/system/ping");_context53.prev = 1;_context53.next = 4;return s = { url: n, timeout: 500 }, new Promise(function (e, t) {J.request(_objectSpread(_objectSpread({}, s), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e31 = _context53.sent;return _context53.abrupt("return", !(!_e31.data || 0 !== _e31.data.code));case 8:_context53.prev = 8;_context53.t0 = _context53["catch"](1);return _context53.abrupt("return", !1);case 11:case "end":return _context53.stop();}}}, _callee53, null, [[1, 8]]);}));return _ps.apply(this, arguments);}function gs(e) {if (e.initUniCloudStatus && "rejected" !== e.initUniCloudStatus) return;var t = Promise.resolve();var n;n = 1, t = new Promise(function (e) {setTimeout(function () {e();}, n);}), e.isReady = !1, e.isDefault = !1;var s = e.auth();e.initUniCloudStatus = "pending", e.initUniCloud = t.then(function () {return s.getLoginState();}).then(function (e) {return e ? Promise.resolve() : s.signInAnonymously();}).then(function () {if (!f) return Promise.resolve();if ("app" === y) {var _Z2 = Z(),_e30 = _Z2.osName,_t19 = _Z2.osVersion;"ios" === _e30 && function (e) {if (!e || "string" != typeof e) return 0;var t = e.match(/^(\d+)./);return t && t[1] ? parseInt(t[1]) : 0;}(_t19) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");}if (f && e.__dev__.debugInfo) {var _e$__dev__$debugInfo = e.__dev__.debugInfo,_t20 = _e$__dev__$debugInfo.address,_n14 = _e$__dev__$debugInfo.servePort;return function () {var _ref53 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50(e, t) {var n, _s14, _r7;return _regeneratorRuntime().wrap(function _callee50$(_context50) {while (1) {switch (_context50.prev = _context50.next) {case 0:_s14 = 0;case 1:if (!(_s14 < e.length)) {_context50.next = 11;break;}_r7 = e[_s14];_context50.next = 5;return ps(_r7, t);case 5:if (!_context50.sent) {_context50.next = 8;break;}n = _r7;return _context50.abrupt("break", 11);case 8:_s14++;_context50.next = 1;break;case 11:return _context50.abrupt("return", { address: n, port: t });case 12:case "end":return _context50.stop();}}}, _callee50);}));return function (_x39, _x40) {return _ref53.apply(this, arguments);};}()(_t20, _n14);}}).then(function () {var _ref54 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref54.address,n = _ref54.port;if (!f) return Promise.resolve();var s = console["app" === y ? "error" : "warn"];if (t) e.__dev__.localAddress = t, e.__dev__.localPort = n;else if (e.__dev__.debugInfo) {var _t21 = "";"remote" === e.__dev__.debugInfo.initialLaunchType ? (e.__dev__.debugInfo.forceRemote = !0, _t21 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs") : _t21 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs", "web" === y && (_t21 += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === y.indexOf("mp-") && (_t21 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), s(_t21);}}).then(function () {Y(), e.isReady = !0, e.initUniCloudStatus = "fulfilled";}).catch(function (t) {console.error(t), e.initUniCloudStatus = "rejected";});}var ms = { tcb: dt, tencent: dt, aliyun: oe, private: pt };var ys = new ( /*#__PURE__*/function () {function _class6() {_classCallCheck(this, _class6);}_createClass(_class6, [{ key: "init", value: function init(e) {var t = {};var n = ms[e.provider];if (!n) throw new Error("未提供正确的provider参数");t = n.init(e), t.__dev__ = {}, t.__dev__.debugLog = f && ("web" === y && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === y);var s = _;f && s && !s.code && (t.__dev__.debugInfo = s), gs(t), t.reInit = function () {gs(this);}, yn(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {return t.call(this, e);};}(t), function (e) {e.database = function (t) {if (t && Object.keys(t).length > 0) return e.init(t).database();if (this._database) return this._database;var n = Pn(En, { uniClient: e });return this._database = n, n;}, e.databaseForJQL = function (t) {if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();if (this._databaseForJQL) return this._databaseForJQL;var n = Pn(En, { uniClient: e, isJQL: !0 });return this._databaseForJQL = n, n;};}(t), function (e) {e.getCurrentUserInfo = rs, e.chooseAndUploadFile = os.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() {return cs(e);} }), e.importObject = us(e), e.initSecureNetworkByWeixin = fs(e);}(t);return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {if (!t[e]) return;var n = t[e];t[e] = function () {return t.reInit(), n.apply(t, Array.from(arguments));}, t[e] = z(t[e], e).bind(t);}), t.init = this.init, t;} }]);return _class6;}())();(function () {var e = w;var t = {};if (e && 1 === e.length) t = e[0], ys = ys.init(t), ys.isDefault = !0;else {var _t22 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];var _n15;_n15 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : v ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t22.forEach(function (e) {ys[e] = function () {return console.error(_n15), Promise.reject(new H({ code: "SYS_ERR", message: _n15 }));};});}Object.assign(ys, { get mixinDatacom() {return cs(ys);} }), es(ys), ys.addInterceptor = A, ys.removeInterceptor = C, ys.interceptObject = O, f && "web" === y && (window.uniCloud = ys);})();var _s = ys;exports.default = _s;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 7:
/*!***************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/pages.json?{"type":"origin-pages-json"} ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": [{ "path": "pages/index/index", "style": { "navigationStyle": "custom" } }, { "path": "pages/follow/follow", "style": { "navigationBarTitleText": "关注", "enablePullDownRefresh": false }, "meta": { "needLogin": true } }, { "path": "pages/self/self", "style": { "navigationBarTitleText": "我的", "enablePullDownRefresh": false } }, { "path": "pages/search/search", "style": { "navigationStyle": "custom" } }, { "path": "pages/labelAdmin/labelAdmin", "style": { "navigationBarTitleText": "标签管理", "enablePullDownRefresh": false } }, { "path": "pages/userInfo/login/login", "style": { "navigationBarTitleText": "登录", "enablePullDownRefresh": false }, "name": "login" }, { "path": "pages/articleDetail/articleDetail", "style": { "navigationBarTitleText": "文章详情", "enablePullDownRefresh": false } }, { "path": "pages/commentList/commentList", "style": { "navigationBarTitleText": "评论详情", "enablePullDownRefresh": false } }, { "path": "pages/myArticle/myArticle", "style": { "navigationBarTitleText": "我的文章", "enablePullDownRefresh": false }, "meta": { "needLogin": true } }, { "path": "pages/feedback/feedback", "style": { "navigationBarTitleText": "意见反馈", "enablePullDownRefresh": false }, "meta": { "needLogin": true } }], "globalStyle": { "navigationBarTextStyle": "white", "navigationBarTitleText": "渡一教育", "navigationBarBackgroundColor": "#f25037", "backgroundColor": "#F8F8F8" }, "tabBar": { "color": "#666", "selectedColor": "#f25037", "backgroundColor": "#fff", "list": [{ "pagePath": "pages/index/index", "iconPath": "static/img/home.png", "selectedIconPath": "static/img/home-active.png", "text": "首页" }, { "pagePath": "pages/follow/follow", "iconPath": "static/img/follow.png", "selectedIconPath": "static/img/follow-active.png", "text": "关注" }, { "pagePath": "pages/self/self", "iconPath": "static/img/my.png", "selectedIconPath": "static/img/my-active.png", "text": "我的" }] }, "condition": { "current": 0, "list": [{ "name": "", "path": "", "query": "" }] } };exports.default = _default;

/***/ }),

/***/ 8:
/*!**************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/pages.json?{"type":"stat"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__11054F2" };exports.default = _default;

/***/ }),

/***/ 86:
/*!*************************************************************************************************!*\
  !*** D:/常用/文档/GitHub/article-share-uniapp-/article-share/node_modules/marked/lib/marked.umd.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

(function (global, factory) {
   true ? factory(exports) :
  undefined;
})(this, function (exports) {'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false });

    return Constructor;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}
    return arr2;
  }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true };

        return {
          done: false,
          value: o[i++] };

      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function getDefaults() {
    return {
      async: false,
      baseUrl: null,
      breaks: false,
      extensions: null,
      gfm: true,
      headerIds: true,
      headerPrefix: '',
      highlight: null,
      langPrefix: 'language-',
      mangle: true,
      pedantic: false,
      renderer: null,
      sanitize: false,
      sanitizer: null,
      silent: false,
      smartypants: false,
      tokenizer: null,
      walkTokens: null,
      xhtml: false };

  }
  exports.defaults = getDefaults();
  function changeDefaults(newDefaults) {
    exports.defaults = newDefaults;
  }

  /**
   * Helpers
   */
  var escapeTest = /[&<>"']/;
  var escapeReplace = /[&<>"']/g;
  var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
  var escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;' };

  var getEscapeReplacement = function getEscapeReplacement(ch) {
    return escapeReplacements[ch];
  };
  function escape(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }
    return html;
  }
  var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

  /**
   * @param {string} html
   */
  function unescape(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(unescapeTest, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';
      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }
      return '';
    });
  }
  var caret = /(^|[^\[])\^/g;

  /**
   * @param {string | RegExp} regex
   * @param {string} opt
   */
  function edit(regex, opt) {
    regex = typeof regex === 'string' ? regex : regex.source;
    opt = opt || '';
    var obj = {
      replace: function replace(name, val) {
        val = val.source || val;
        val = val.replace(caret, '$1');
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: function getRegex() {
        return new RegExp(regex, opt);
      } };

    return obj;
  }
  var nonWordAndColonTest = /[^\w:]/g;
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

  /**
   * @param {boolean} sanitize
   * @param {string} base
   * @param {string} href
   */
  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      var prot;
      try {
        prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
      } catch (e) {
        return null;
      }
      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return null;
      }
    }
    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }
    try {
      href = encodeURI(href).replace(/%25/g, '%');
    } catch (e) {
      return null;
    }
    return href;
  }
  var baseUrls = {};
  var justDomain = /^[^:]+:\/*[^/]*$/;
  var protocol = /^([^:]+:)[\s\S]*$/;
  var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

  /**
   * @param {string} base
   * @param {string} href
   */
  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      // we can ignore everything in base after the last slash of its path component,
      // but we might need to add _that_
      // https://tools.ietf.org/html/rfc3986#section-3
      if (justDomain.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = rtrim(base, '/', true);
      }
    }
    base = baseUrls[' ' + base];
    var relativeBase = base.indexOf(':') === -1;
    if (href.substring(0, 2) === '//') {
      if (relativeBase) {
        return href;
      }
      return base.replace(protocol, '$1') + href;
    } else if (href.charAt(0) === '/') {
      if (relativeBase) {
        return href;
      }
      return base.replace(domain, '$1') + href;
    } else {
      return base + href;
    }
  }
  var noopTest = {
    exec: function noopTest() {} };

  function merge(obj) {
    var i = 1,
    target,
    key;
    for (; i < arguments.length; i++) {
      target = arguments[i];
      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }
    return obj;
  }
  function splitCells(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false,
      curr = offset;
      while (--curr >= 0 && str[curr] === '\\') {
        escaped = !escaped;
      }
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
    var i = 0;

    // First/last cell in a row cannot be empty if it has no leading/trailing pipe
    if (!cells[0].trim()) {
      cells.shift();
    }
    if (cells.length > 0 && !cells[cells.length - 1].trim()) {
      cells.pop();
    }
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) {
        cells.push('');
      }
    }
    for (; i < cells.length; i++) {
      // leading or trailing whitespace is ignored per the gfm spec
      cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }
    return cells;
  }

  /**
   * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
   * /c*$/ is vulnerable to REDOS.
   *
   * @param {string} str
   * @param {string} c
   * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
   */
  function rtrim(str, c, invert) {
    var l = str.length;
    if (l === 0) {
      return '';
    }

    // Length of suffix matching the invert condition.
    var suffLen = 0;

    // Step left until we fail to match the invert condition.
    while (suffLen < l) {
      var currChar = str.charAt(l - suffLen - 1);
      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }
    return str.slice(0, l - suffLen);
  }
  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }
    var l = str.length;
    var level = 0,
    i = 0;
    for (; i < l; i++) {
      if (str[i] === '\\') {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;
        if (level < 0) {
          return i;
        }
      }
    }
    return -1;
  }
  function checkSanitizeDeprecation(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    }
  }

  // copied from https://stackoverflow.com/a/5450113/806777
  /**
   * @param {string} pattern
   * @param {number} count
   */
  function repeatString(pattern, count) {
    if (count < 1) {
      return '';
    }
    var result = '';
    while (count > 1) {
      if (count & 1) {
        result += pattern;
      }
      count >>= 1;
      pattern += pattern;
    }
    return result + pattern;
  }

  function outputLink(cap, link, raw, lexer) {
    var href = link.href;
    var title = link.title ? escape(link.title) : null;
    var text = cap[1].replace(/\\([\[\]])/g, '$1');
    if (cap[0].charAt(0) !== '!') {
      lexer.state.inLink = true;
      var token = {
        type: 'link',
        raw: raw,
        href: href,
        title: title,
        text: text,
        tokens: lexer.inlineTokens(text) };

      lexer.state.inLink = false;
      return token;
    }
    return {
      type: 'image',
      raw: raw,
      href: href,
      title: title,
      text: escape(text) };

  }
  function indentCodeCompensation(raw, text) {
    var matchIndentToCode = raw.match(/^(\s+)(?:```)/);
    if (matchIndentToCode === null) {
      return text;
    }
    var indentToCode = matchIndentToCode[1];
    return text.split('\n').map(function (node) {
      var matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }
      var indentInNode = matchIndentInNode[0];
      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }
      return node;
    }).join('\n');
  }

  /**
   * Tokenizer
   */
  var Tokenizer = /*#__PURE__*/function () {
    function Tokenizer(options) {
      this.options = options || exports.defaults;
    }
    var _proto = Tokenizer.prototype;
    _proto.space = function space(src) {
      var cap = this.rules.block.newline.exec(src);
      if (cap && cap[0].length > 0) {
        return {
          type: 'space',
          raw: cap[0] };

      }
    };
    _proto.code = function code(src) {
      var cap = this.rules.block.code.exec(src);
      if (cap) {
        var text = cap[0].replace(/^ {1,4}/gm, '');
        return {
          type: 'code',
          raw: cap[0],
          codeBlockStyle: 'indented',
          text: !this.options.pedantic ? rtrim(text, '\n') : text };

      }
    };
    _proto.fences = function fences(src) {
      var cap = this.rules.block.fences.exec(src);
      if (cap) {
        var raw = cap[0];
        var text = indentCodeCompensation(raw, cap[3] || '');
        return {
          type: 'code',
          raw: raw,
          lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, '$1') : cap[2],
          text: text };

      }
    };
    _proto.heading = function heading(src) {
      var cap = this.rules.block.heading.exec(src);
      if (cap) {
        var text = cap[2].trim();

        // remove trailing #s
        if (/#$/.test(text)) {
          var trimmed = rtrim(text, '#');
          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            // CommonMark requires space before trailing #s
            text = trimmed.trim();
          }
        }
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[1].length,
          text: text,
          tokens: this.lexer.inline(text) };

      }
    };
    _proto.hr = function hr(src) {
      var cap = this.rules.block.hr.exec(src);
      if (cap) {
        return {
          type: 'hr',
          raw: cap[0] };

      }
    };
    _proto.blockquote = function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);
      if (cap) {
        var text = cap[0].replace(/^ *>[ \t]?/gm, '');
        return {
          type: 'blockquote',
          raw: cap[0],
          tokens: this.lexer.blockTokens(text, []),
          text: text };

      }
    };
    _proto.list = function list(src) {
      var cap = this.rules.block.list.exec(src);
      if (cap) {
        var raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
        var bull = cap[1].trim();
        var isordered = bull.length > 1;
        var list = {
          type: 'list',
          raw: '',
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : '',
          loose: false,
          items: [] };

        bull = isordered ? "\\d{1,9}\\" + bull.slice(-1) : "\\" + bull;
        if (this.options.pedantic) {
          bull = isordered ? bull : '[*+-]';
        }

        // Get next list item
        var itemRegex = new RegExp("^( {0,3}" + bull + ")((?:[\t ][^\\n]*)?(?:\\n|$))");

        // Check if current bullet point can start a new List Item
        while (src) {
          endEarly = false;
          if (!(cap = itemRegex.exec(src))) {
            break;
          }
          if (this.rules.block.hr.test(src)) {
            // End list if bullet was actually HR (possibly move into itemRegex?)
            break;
          }
          raw = cap[0];
          src = src.substring(raw.length);
          line = cap[2].split('\n', 1)[0];
          nextLine = src.split('\n', 1)[0];
          if (this.options.pedantic) {
            indent = 2;
            itemContents = line.trimLeft();
          } else {
            indent = cap[2].search(/[^ ]/); // Find first non-space char
            indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
            itemContents = line.slice(indent);
            indent += cap[1].length;
          }
          blankLine = false;
          if (!line && /^ *$/.test(nextLine)) {
            // Items begin with at most one blank line
            raw += nextLine + '\n';
            src = src.substring(nextLine.length + 1);
            endEarly = true;
          }
          if (!endEarly) {
            var nextBulletRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))");
            var hrRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)");
            var fencesBeginRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:```|~~~)");
            var headingBeginRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}#");

            // Check if following lines should be included in List Item
            while (src) {
              rawLine = src.split('\n', 1)[0];
              line = rawLine;

              // Re-align to follow commonmark nesting rules
              if (this.options.pedantic) {
                line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
              }

              // End list item if found code fences
              if (fencesBeginRegex.test(line)) {
                break;
              }

              // End list item if found start of new heading
              if (headingBeginRegex.test(line)) {
                break;
              }

              // End list item if found start of new bullet
              if (nextBulletRegex.test(line)) {
                break;
              }

              // Horizontal rule found
              if (hrRegex.test(src)) {
                break;
              }
              if (line.search(/[^ ]/) >= indent || !line.trim()) {
                // Dedent if possible
                itemContents += '\n' + line.slice(indent);
              } else if (!blankLine) {
                // Until blank line, item doesn't need indentation
                itemContents += '\n' + line;
              } else {
                // Otherwise, improper indentation ends this item
                break;
              }
              if (!blankLine && !line.trim()) {
                // Check if current line is blank
                blankLine = true;
              }
              raw += rawLine + '\n';
              src = src.substring(rawLine.length + 1);
            }
          }
          if (!list.loose) {
            // If the previous item ended with a blank line, the list is loose
            if (endsWithBlankLine) {
              list.loose = true;
            } else if (/\n *\n *$/.test(raw)) {
              endsWithBlankLine = true;
            }
          }

          // Check for task list items
          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.exec(itemContents);
            if (istask) {
              ischecked = istask[0] !== '[ ] ';
              itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
            }
          }
          list.items.push({
            type: 'list_item',
            raw: raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents });

          list.raw += raw;
        }

        // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
        list.items[list.items.length - 1].raw = raw.trimRight();
        list.items[list.items.length - 1].text = itemContents.trimRight();
        list.raw = list.raw.trimRight();
        var l = list.items.length;

        // Item child tokens handled here at end because we needed to have the final item to trim it first
        for (i = 0; i < l; i++) {
          this.lexer.state.top = false;
          list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
          var spacers = list.items[i].tokens.filter(function (t) {
            return t.type === 'space';
          });
          var hasMultipleLineBreaks = spacers.every(function (t) {
            var chars = t.raw.split('');
            var lineBreaks = 0;
            for (var _iterator = _createForOfIteratorHelperLoose(chars), _step; !(_step = _iterator()).done;) {
              var _char = _step.value;
              if (_char === '\n') {
                lineBreaks += 1;
              }
              if (lineBreaks > 1) {
                return true;
              }
            }
            return false;
          });
          if (!list.loose && spacers.length && hasMultipleLineBreaks) {
            // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
            list.loose = true;
            list.items[i].loose = true;
          }
        }
        return list;
      }
    };
    _proto.html = function html(src) {
      var cap = this.rules.block.html.exec(src);
      if (cap) {
        var token = {
          type: 'html',
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: cap[0] };

        if (this.options.sanitize) {
          var text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
          token.type = 'paragraph';
          token.text = text;
          token.tokens = this.lexer.inline(text);
        }
        return token;
      }
    };
    _proto.def = function def(src) {
      var cap = this.rules.block.def.exec(src);
      if (cap) {
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        return {
          type: 'def',
          tag: tag,
          raw: cap[0],
          href: cap[2] ? cap[2].replace(this.rules.inline._escapes, '$1') : cap[2],
          title: cap[3] ? cap[3].replace(this.rules.inline._escapes, '$1') : cap[3] };

      }
    };
    _proto.table = function table(src) {
      var cap = this.rules.block.table.exec(src);
      if (cap) {
        var item = {
          type: 'table',
          header: splitCells(cap[1]).map(function (c) {
            return {
              text: c };

          }),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : [] };

        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          var l = item.align.length;
          var i, j, k, row;
          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }
          l = item.rows.length;
          for (i = 0; i < l; i++) {
            item.rows[i] = splitCells(item.rows[i], item.header.length).map(function (c) {
              return {
                text: c };

            });
          }

          // parse child tokens inside headers and cells

          // header child tokens
          l = item.header.length;
          for (j = 0; j < l; j++) {
            item.header[j].tokens = this.lexer.inline(item.header[j].text);
          }

          // cell child tokens
          l = item.rows.length;
          for (j = 0; j < l; j++) {
            row = item.rows[j];
            for (k = 0; k < row.length; k++) {
              row[k].tokens = this.lexer.inline(row[k].text);
            }
          }
          return item;
        }
      }
    };
    _proto.lheading = function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);
      if (cap) {
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1],
          tokens: this.lexer.inline(cap[1]) };

      }
    };
    _proto.paragraph = function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);
      if (cap) {
        var text = cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1];
        return {
          type: 'paragraph',
          raw: cap[0],
          text: text,
          tokens: this.lexer.inline(text) };

      }
    };
    _proto.text = function text(src) {
      var cap = this.rules.block.text.exec(src);
      if (cap) {
        return {
          type: 'text',
          raw: cap[0],
          text: cap[0],
          tokens: this.lexer.inline(cap[0]) };

      }
    };
    _proto.escape = function escape$1(src) {
      var cap = this.rules.inline.escape.exec(src);
      if (cap) {
        return {
          type: 'escape',
          raw: cap[0],
          text: escape(cap[1]) };

      }
    };
    _proto.tag = function tag(src) {
      var cap = this.rules.inline.tag.exec(src);
      if (cap) {
        if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
          this.lexer.state.inLink = false;
        }
        if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }
        return {
          type: this.options.sanitize ? 'text' : 'html',
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0] };

      }
    };
    _proto.link = function link(src) {
      var cap = this.rules.inline.link.exec(src);
      if (cap) {
        var trimmedUrl = cap[2].trim();
        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          // commonmark requires matching angle brackets
          if (!/>$/.test(trimmedUrl)) {
            return;
          }

          // ending angle bracket cannot be escaped
          var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          // find closing parenthesis
          var lastParenIndex = findClosingBracket(cap[2], '()');
          if (lastParenIndex > -1) {
            var start = cap[0].indexOf('!') === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }
        }
        var href = cap[2];
        var title = '';
        if (this.options.pedantic) {
          // split pedantic href and title
          var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
          if (link) {
            href = link[1];
            title = link[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }
        href = href.trim();
        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            // pedantic allows starting angle bracket without ending angle bracket
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }
        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
          title: title ? title.replace(this.rules.inline._escapes, '$1') : title },
        cap[0], this.lexer);
      }
    };
    _proto.reflink = function reflink(src, links) {
      var cap;
      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = links[link.toLowerCase()];
        if (!link || !link.href) {
          var text = cap[0].charAt(0);
          return {
            type: 'text',
            raw: text,
            text: text };

        }
        return outputLink(cap, link, cap[0], this.lexer);
      }
    };
    _proto.emStrong = function emStrong(src, maskedSrc, prevChar) {
      if (prevChar === void 0) {
        prevChar = '';
      }
      var match = this.rules.inline.emStrong.lDelim.exec(src);
      if (!match) return;

      // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
      if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) return;
      var nextChar = match[1] || match[2] || '';
      if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
        var lLength = match[0].length - 1;
        var rDelim,
        rLength,
        delimTotal = lLength,
        midDelimTotal = 0;
        var endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
        endReg.lastIndex = 0;

        // Clip maskedSrc to same section of string as src (move to lexer?)
        maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim) continue; // skip single * in __abc*abc__

          rLength = rDelim.length;
          if (match[3] || match[4]) {
            // found another Left Delim
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            // either Left or Right Delim
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue; // CommonMark Emphasis Rules 9-10
            }
          }

          delimTotal -= rLength;
          if (delimTotal > 0) continue; // Haven't found enough closing delimiters

          // Remove extra characters. *a*** -> *a*
          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
          var raw = src.slice(0, lLength + match.index + (match[0].length - rDelim.length) + rLength);

          // Create `em` if smallest delimiter has odd char count. *a***
          if (Math.min(lLength, rLength) % 2) {
            var _text = raw.slice(1, -1);
            return {
              type: 'em',
              raw: raw,
              text: _text,
              tokens: this.lexer.inlineTokens(_text) };

          }

          // Create 'strong' if smallest delimiter has even char count. **a***
          var text = raw.slice(2, -2);
          return {
            type: 'strong',
            raw: raw,
            text: text,
            tokens: this.lexer.inlineTokens(text) };

        }
      }
    };
    _proto.codespan = function codespan(src) {
      var cap = this.rules.inline.code.exec(src);
      if (cap) {
        var text = cap[2].replace(/\n/g, ' ');
        var hasNonSpaceChars = /[^ ]/.test(text);
        var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }
        text = escape(text, true);
        return {
          type: 'codespan',
          raw: cap[0],
          text: text };

      }
    };
    _proto.br = function br(src) {
      var cap = this.rules.inline.br.exec(src);
      if (cap) {
        return {
          type: 'br',
          raw: cap[0] };

      }
    };
    _proto.del = function del(src) {
      var cap = this.rules.inline.del.exec(src);
      if (cap) {
        return {
          type: 'del',
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2]) };

      }
    };
    _proto.autolink = function autolink(src, mangle) {
      var cap = this.rules.inline.autolink.exec(src);
      if (cap) {
        var text, href;
        if (cap[2] === '@') {
          text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
          href = 'mailto:' + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }
        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text }] };


      }
    };
    _proto.url = function url(src, mangle) {
      var cap;
      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;
        if (cap[2] === '@') {
          text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          var prevCapZero;
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);
          text = escape(cap[0]);
          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }
        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text }] };


      }
    };
    _proto.inlineText = function inlineText(src, smartypants) {
      var cap = this.rules.inline.text.exec(src);
      if (cap) {
        var text;
        if (this.lexer.state.inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
        } else {
          text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
        }
        return {
          type: 'text',
          raw: cap[0],
          text: text };

      }
    };
    return Tokenizer;
  }();

  /**
   * Block-Level Grammar
   */
  var block = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
    html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
    def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
    table: noopTest,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    // regex template, placeholders will be replaced according to different paragraph
    // interruption rules of commonmark and the original markdown spec:
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    text: /^[^\n]+/ };

  block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
  block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  block.listItemStart = edit(/^( *)(bull) */).replace('bull', block.bullet).getRegex();
  block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
  block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
  block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
  block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
  block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();

  /**
   * Normal Block Grammar
   */

  block.normal = merge({}, block);

  /**
   * GFM Block Grammar
   */

  block.gfm = merge({}, block.normal, {
    table: '^ *([^\\n ].*\\|.*)\\n' // Header
    + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
  });

  block.gfm.table = edit(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  block.gfm.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('table', block.gfm.table) // interrupt paragraphs with table
  .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
  /**
   * Pedantic grammar (original John Gruber's loose markdown specification)
   */

  block.pedantic = merge({}, block.normal, {
    html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest,
    // fences not supported
    paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex() });


  /**
   * Inline-Level Grammar
   */
  var inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest,
    tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    // CDATA section
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
      //          () Skip orphan inside strong                                      () Consume to delim     (1) #***                (2) a***#, a***                             (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
      rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
      rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
    },

    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/ };


  // list of punctuation marks from CommonMark spec
  // without * and _ to handle the different emphasis markers * and _
  inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
  inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();

  // sequences em should skip over [title](link), `code`, <html>
  inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
  // lookbehind is not available on Safari as of version 16
  // inline.escapedEmSt = /(?<=(?:^|[^\\)(?:\\[^])*)\\[*_]/g;
  inline.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
  inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();
  inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
  inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g').replace(/punct/g, inline._punctuation).getRegex();
  inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g').replace(/punct/g, inline._punctuation).getRegex();
  inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline.tag = edit(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
  inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
  inline.reflink = edit(inline.reflink).replace('label', inline._label).replace('ref', block._label).getRegex();
  inline.nolink = edit(inline.nolink).replace('ref', block._label).getRegex();
  inline.reflinkSearch = edit(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();

  /**
   * Normal Inline Grammar
   */

  inline.normal = merge({}, inline);

  /**
   * Pedantic Inline Grammar
   */

  inline.pedantic = merge({}, inline.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g },

    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g },

    link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex() });


  /**
   * GFM Inline Grammar
   */

  inline.gfm = merge({}, inline.normal, {
    escape: edit(inline.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ });

  inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline.breaks = merge({}, inline.gfm, {
    br: edit(inline.br).replace('{2,}', '*').getRegex(),
    text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex() });


  /**
   * smartypants text replacement
   * @param {string} text
   */
  function smartypants(text) {
    return text
    // em-dashes
    .replace(/---/g, "\u2014")
    // en-dashes
    .replace(/--/g, "\u2013")
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018")
    // closing singles & apostrophes
    .replace(/'/g, "\u2019")
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C")
    // closing doubles
    .replace(/"/g, "\u201D")
    // ellipses
    .replace(/\.{3}/g, "\u2026");
  }

  /**
   * mangle email addresses
   * @param {string} text
   */
  function mangle(text) {
    var out = '',
    i,
    ch;
    var l = text.length;
    for (i = 0; i < l; i++) {
      ch = text.charCodeAt(i);
      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }
      out += '&#' + ch + ';';
    }
    return out;
  }

  /**
   * Block Lexer
   */
  var Lexer = /*#__PURE__*/function () {
    function Lexer(options) {
      this.tokens = [];
      this.tokens.links = Object.create(null);
      this.options = options || exports.defaults;
      this.options.tokenizer = this.options.tokenizer || new Tokenizer();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      this.tokenizer.lexer = this;
      this.inlineQueue = [];
      this.state = {
        inLink: false,
        inRawBlock: false,
        top: true };

      var rules = {
        block: block.normal,
        inline: inline.normal };

      if (this.options.pedantic) {
        rules.block = block.pedantic;
        rules.inline = inline.pedantic;
      } else if (this.options.gfm) {
        rules.block = block.gfm;
        if (this.options.breaks) {
          rules.inline = inline.breaks;
        } else {
          rules.inline = inline.gfm;
        }
      }
      this.tokenizer.rules = rules;
    }

    /**
     * Expose Rules
     */
    /**
     * Static Lex Method
     */
    Lexer.lex = function lex(src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    }

    /**
     * Static Lex Inline Method
     */;
    Lexer.lexInline = function lexInline(src, options) {
      var lexer = new Lexer(options);
      return lexer.inlineTokens(src);
    }

    /**
     * Preprocessing
     */;
    var _proto = Lexer.prototype;
    _proto.lex = function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n');
      this.blockTokens(src, this.tokens);
      var next;
      while (next = this.inlineQueue.shift()) {
        this.inlineTokens(next.src, next.tokens);
      }
      return this.tokens;
    }

    /**
     * Lexing
     */;
    _proto.blockTokens = function blockTokens(src, tokens) {
      var _this = this;
      if (tokens === void 0) {
        tokens = [];
      }
      if (this.options.pedantic) {
        src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
      } else {
        src = src.replace(/^( *)(\t+)/gm, function (_, leading, tabs) {
          return leading + '    '.repeat(tabs.length);
        });
      }
      var token, lastToken, cutSrc, lastParagraphClipped;
      while (src) {
        if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function (extTokenizer) {
          if (token = extTokenizer.call({
            lexer: _this },
          src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }

        // newline
        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);
          if (token.raw.length === 1 && tokens.length > 0) {
            // if there's a single \n as a spacer, it's terminating the last line,
            // so move it there so that we don't get unecessary paragraph tags
            tokens[tokens.length - 1].raw += '\n';
          } else {
            tokens.push(token);
          }
          continue;
        }

        // code
        if (token = this.tokenizer.code(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          // An indented code block cannot interrupt a paragraph.
          if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }

        // fences
        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // heading
        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // hr
        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // blockquote
        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // list
        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // html
        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // def
        if (token = this.tokenizer.def(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.raw;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title };

          }
          continue;
        }

        // table (gfm)
        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // lheading
        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // top-level paragraph
        // prevent paragraph consuming extensions by clipping 'src' to extension start
        cutSrc = src;
        if (this.options.extensions && this.options.extensions.startBlock) {
          (function () {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart = void 0;
            _this.options.extensions.startBlock.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: this },
              tempSrc);
              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          })();
        }
        if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
          lastToken = tokens[tokens.length - 1];
          if (lastParagraphClipped && lastToken.type === 'paragraph') {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          lastParagraphClipped = cutSrc.length !== src.length;
          src = src.substring(token.raw.length);
          continue;
        }

        // text
        if (token = this.tokenizer.text(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === 'text') {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      this.state.top = true;
      return tokens;
    };
    _proto.inline = function inline(src, tokens) {
      if (tokens === void 0) {
        tokens = [];
      }
      this.inlineQueue.push({
        src: src,
        tokens: tokens });

      return tokens;
    }

    /**
     * Lexing/Compiling
     */;
    _proto.inlineTokens = function inlineTokens(src, tokens) {
      var _this2 = this;
      if (tokens === void 0) {
        tokens = [];
      }
      var token, lastToken, cutSrc;

      // String with links masked to avoid interference with em and strong
      var maskedSrc = src;
      var match;
      var keepPrevChar, prevChar;

      // Mask out reflinks
      if (this.tokens.links) {
        var links = Object.keys(this.tokens.links);
        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      }
      // Mask out other blocks
      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }

      // Mask out escaped em & strong delimiters
      while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index + match[0].length - 2) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
        this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
      }
      while (src) {
        if (!keepPrevChar) {
          prevChar = '';
        }
        keepPrevChar = false;

        // extensions
        if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function (extTokenizer) {
          if (token = extTokenizer.call({
            lexer: _this2 },
          src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }

        // escape
        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // tag
        if (token = this.tokenizer.tag(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === 'text' && lastToken.type === 'text') {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }

        // link
        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // reflink, nolink
        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === 'text' && lastToken.type === 'text') {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }

        // em & strong
        if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // code
        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // br
        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // del (gfm)
        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // autolink
        if (token = this.tokenizer.autolink(src, mangle)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // url (gfm)
        if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        // text
        // prevent inlineText consuming extensions by clipping 'src' to extension start
        cutSrc = src;
        if (this.options.extensions && this.options.extensions.startInline) {
          (function () {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart = void 0;
            _this2.options.extensions.startInline.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: this },
              tempSrc);
              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          })();
        }
        if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
          src = src.substring(token.raw.length);
          if (token.raw.slice(-1) !== '_') {
            // Track prevChar before string of ____ started
            prevChar = token.raw.slice(-1);
          }
          keepPrevChar = true;
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === 'text') {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      return tokens;
    };
    _createClass(Lexer, null, [{
      key: "rules",
      get: function get() {
        return {
          block: block,
          inline: inline };

      } }]);

    return Lexer;
  }();

  /**
   * Renderer
   */
  var Renderer = /*#__PURE__*/function () {
    function Renderer(options) {
      this.options = options || exports.defaults;
    }
    var _proto = Renderer.prototype;
    _proto.code = function code(_code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];
      if (this.options.highlight) {
        var out = this.options.highlight(_code, lang);
        if (out != null && out !== _code) {
          escaped = true;
          _code = out;
        }
      }
      _code = _code.replace(/\n$/, '') + '\n';
      if (!lang) {
        return '<pre><code>' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
      }
      return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
    }

    /**
     * @param {string} quote
     */;
    _proto.blockquote = function blockquote(quote) {
      return "<blockquote>\n" + quote + "</blockquote>\n";
    };
    _proto.html = function html(_html) {
      return _html;
    }

    /**
     * @param {string} text
     * @param {string} level
     * @param {string} raw
     * @param {any} slugger
     */;
    _proto.heading = function heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        var id = this.options.headerPrefix + slugger.slug(raw);
        return "<h" + level + " id=\"" + id + "\">" + text + "</h" + level + ">\n";
      }

      // ignore IDs
      return "<h" + level + ">" + text + "</h" + level + ">\n";
    };
    _proto.hr = function hr() {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };
    _proto.list = function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
      startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    }

    /**
     * @param {string} text
     */;
    _proto.listitem = function listitem(text) {
      return "<li>" + text + "</li>\n";
    };
    _proto.checkbox = function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
    }

    /**
     * @param {string} text
     */;
    _proto.paragraph = function paragraph(text) {
      return "<p>" + text + "</p>\n";
    }

    /**
     * @param {string} header
     * @param {string} body
     */;
    _proto.table = function table(header, body) {
      if (body) body = "<tbody>" + body + "</tbody>";
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    }

    /**
     * @param {string} content
     */;
    _proto.tablerow = function tablerow(content) {
      return "<tr>\n" + content + "</tr>\n";
    };
    _proto.tablecell = function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? "<" + type + " align=\"" + flags.align + "\">" : "<" + type + ">";
      return tag + content + ("</" + type + ">\n");
    }

    /**
     * span level renderer
     * @param {string} text
     */;
    _proto.strong = function strong(text) {
      return "<strong>" + text + "</strong>";
    }

    /**
     * @param {string} text
     */;
    _proto.em = function em(text) {
      return "<em>" + text + "</em>";
    }

    /**
     * @param {string} text
     */;
    _proto.codespan = function codespan(text) {
      return "<code>" + text + "</code>";
    };
    _proto.br = function br() {
      return this.options.xhtml ? '<br/>' : '<br>';
    }

    /**
     * @param {string} text
     */;
    _proto.del = function del(text) {
      return "<del>" + text + "</del>";
    }

    /**
     * @param {string} href
     * @param {string} title
     * @param {string} text
     */;
    _proto.link = function link(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }
      var out = '<a href="' + escape(href) + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += '>' + text + '</a>';
      return out;
    }

    /**
     * @param {string} href
     * @param {string} title
     * @param {string} text
     */;
    _proto.image = function image(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }
      var out = "<img src=\"" + href + "\" alt=\"" + text + "\"";
      if (title) {
        out += " title=\"" + title + "\"";
      }
      out += this.options.xhtml ? '/>' : '>';
      return out;
    };
    _proto.text = function text(_text) {
      return _text;
    };
    return Renderer;
  }();

  /**
   * TextRenderer
   * returns only the textual part of the token
   */
  var TextRenderer = /*#__PURE__*/function () {
    function TextRenderer() {}
    var _proto = TextRenderer.prototype;
    // no need for block level renderers
    _proto.strong = function strong(text) {
      return text;
    };
    _proto.em = function em(text) {
      return text;
    };
    _proto.codespan = function codespan(text) {
      return text;
    };
    _proto.del = function del(text) {
      return text;
    };
    _proto.html = function html(text) {
      return text;
    };
    _proto.text = function text(_text) {
      return _text;
    };
    _proto.link = function link(href, title, text) {
      return '' + text;
    };
    _proto.image = function image(href, title, text) {
      return '' + text;
    };
    _proto.br = function br() {
      return '';
    };
    return TextRenderer;
  }();

  /**
   * Slugger generates header id
   */
  var Slugger = /*#__PURE__*/function () {
    function Slugger() {
      this.seen = {};
    }

    /**
     * @param {string} value
     */
    var _proto = Slugger.prototype;
    _proto.serialize = function serialize(value) {
      return value.toLowerCase().trim()
      // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '')
      // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
    }

    /**
     * Finds the next safe (unique) slug to use
     * @param {string} originalSlug
     * @param {boolean} isDryRun
     */;
    _proto.getNextSafeSlug = function getNextSafeSlug(originalSlug, isDryRun) {
      var slug = originalSlug;
      var occurenceAccumulator = 0;
      if (this.seen.hasOwnProperty(slug)) {
        occurenceAccumulator = this.seen[originalSlug];
        do {
          occurenceAccumulator++;
          slug = originalSlug + '-' + occurenceAccumulator;
        } while (this.seen.hasOwnProperty(slug));
      }
      if (!isDryRun) {
        this.seen[originalSlug] = occurenceAccumulator;
        this.seen[slug] = 0;
      }
      return slug;
    }

    /**
     * Convert string to unique id
     * @param {object} [options]
     * @param {boolean} [options.dryrun] Generates the next unique slug without
     * updating the internal accumulator.
     */;
    _proto.slug = function slug(value, options) {
      if (options === void 0) {
        options = {};
      }
      var slug = this.serialize(value);
      return this.getNextSafeSlug(slug, options.dryrun);
    };
    return Slugger;
  }();

  /**
   * Parsing & Compiling
   */
  var Parser = /*#__PURE__*/function () {
    function Parser(options) {
      this.options = options || exports.defaults;
      this.options.renderer = this.options.renderer || new Renderer();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.textRenderer = new TextRenderer();
      this.slugger = new Slugger();
    }

    /**
     * Static Parse Method
     */
    Parser.parse = function parse(tokens, options) {
      var parser = new Parser(options);
      return parser.parse(tokens);
    }

    /**
     * Static Parse Inline Method
     */;
    Parser.parseInline = function parseInline(tokens, options) {
      var parser = new Parser(options);
      return parser.parseInline(tokens);
    }

    /**
     * Parse Loop
     */;
    var _proto = Parser.prototype;
    _proto.parse = function parse(tokens, top) {
      if (top === void 0) {
        top = true;
      }
      var out = '',
      i,
      j,
      k,
      l2,
      l3,
      row,
      cell,
      header,
      body,
      token,
      ordered,
      start,
      loose,
      itemBody,
      item,
      checked,
      task,
      checkbox,
      ret;
      var l = tokens.length;
      for (i = 0; i < l; i++) {
        token = tokens[i];

        // Run any renderer extensions
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({
            parser: this },
          token);
          if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
            out += ret || '';
            continue;
          }
        }
        switch (token.type) {
          case 'space':
            {
              continue;
            }
          case 'hr':
            {
              out += this.renderer.hr();
              continue;
            }
          case 'heading':
            {
              out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
              continue;
            }
          case 'code':
            {
              out += this.renderer.code(token.text, token.lang, token.escaped);
              continue;
            }
          case 'table':
            {
              header = '';

              // header
              cell = '';
              l2 = token.header.length;
              for (j = 0; j < l2; j++) {
                cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                  header: true,
                  align: token.align[j] });

              }
              header += this.renderer.tablerow(cell);
              body = '';
              l2 = token.rows.length;
              for (j = 0; j < l2; j++) {
                row = token.rows[j];
                cell = '';
                l3 = row.length;
                for (k = 0; k < l3; k++) {
                  cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                    header: false,
                    align: token.align[k] });

                }
                body += this.renderer.tablerow(cell);
              }
              out += this.renderer.table(header, body);
              continue;
            }
          case 'blockquote':
            {
              body = this.parse(token.tokens);
              out += this.renderer.blockquote(body);
              continue;
            }
          case 'list':
            {
              ordered = token.ordered;
              start = token.start;
              loose = token.loose;
              l2 = token.items.length;
              body = '';
              for (j = 0; j < l2; j++) {
                item = token.items[j];
                checked = item.checked;
                task = item.task;
                itemBody = '';
                if (item.task) {
                  checkbox = this.renderer.checkbox(checked);
                  if (loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                      item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: 'text',
                        text: checkbox });

                    }
                  } else {
                    itemBody += checkbox;
                  }
                }
                itemBody += this.parse(item.tokens, loose);
                body += this.renderer.listitem(itemBody, task, checked);
              }
              out += this.renderer.list(body, ordered, start);
              continue;
            }
          case 'html':
            {
              // TODO parse inline content if parameter markdown=1
              out += this.renderer.html(token.text);
              continue;
            }
          case 'paragraph':
            {
              out += this.renderer.paragraph(this.parseInline(token.tokens));
              continue;
            }
          case 'text':
            {
              body = token.tokens ? this.parseInline(token.tokens) : token.text;
              while (i + 1 < l && tokens[i + 1].type === 'text') {
                token = tokens[++i];
                body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
              }
              out += top ? this.renderer.paragraph(body) : body;
              continue;
            }
          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }}

      }
      return out;
    }

    /**
     * Parse Inline Tokens
     */;
    _proto.parseInline = function parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      var out = '',
      i,
      token,
      ret;
      var l = tokens.length;
      for (i = 0; i < l; i++) {
        token = tokens[i];

        // Run any renderer extensions
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({
            parser: this },
          token);
          if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
            out += ret || '';
            continue;
          }
        }
        switch (token.type) {
          case 'escape':
            {
              out += renderer.text(token.text);
              break;
            }
          case 'html':
            {
              out += renderer.html(token.text);
              break;
            }
          case 'link':
            {
              out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
              break;
            }
          case 'image':
            {
              out += renderer.image(token.href, token.title, token.text);
              break;
            }
          case 'strong':
            {
              out += renderer.strong(this.parseInline(token.tokens, renderer));
              break;
            }
          case 'em':
            {
              out += renderer.em(this.parseInline(token.tokens, renderer));
              break;
            }
          case 'codespan':
            {
              out += renderer.codespan(token.text);
              break;
            }
          case 'br':
            {
              out += renderer.br();
              break;
            }
          case 'del':
            {
              out += renderer.del(this.parseInline(token.tokens, renderer));
              break;
            }
          case 'text':
            {
              out += renderer.text(token.text);
              break;
            }
          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }}

      }
      return out;
    };
    return Parser;
  }();

  /**
   * Marked
   */
  function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }
    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }
    if (typeof opt === 'function') {
      callback = opt;
      opt = null;
    }
    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);
    if (callback) {
      var highlight = opt.highlight;
      var tokens;
      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return callback(e);
      }
      var done = function done(err) {
        var out;
        if (!err) {
          try {
            if (opt.walkTokens) {
              marked.walkTokens(tokens, opt.walkTokens);
            }
            out = Parser.parse(tokens, opt);
          } catch (e) {
            err = e;
          }
        }
        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };
      if (!highlight || highlight.length < 3) {
        return done();
      }
      delete opt.highlight;
      if (!tokens.length) return done();
      var pending = 0;
      marked.walkTokens(tokens, function (token) {
        if (token.type === 'code') {
          pending++;
          setTimeout(function () {
            highlight(token.text, token.lang, function (err, code) {
              if (err) {
                return done(err);
              }
              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }
              pending--;
              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });
      if (pending === 0) {
        done();
      }
      return;
    }
    function onError(e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';
      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }
      throw e;
    }
    try {
      var _tokens = Lexer.lex(src, opt);
      if (opt.walkTokens) {
        if (opt.async) {
          return Promise.all(marked.walkTokens(_tokens, opt.walkTokens)).then(function () {
            return Parser.parse(_tokens, opt);
          })["catch"](onError);
        }
        marked.walkTokens(_tokens, opt.walkTokens);
      }
      return Parser.parse(_tokens, opt);
    } catch (e) {
      onError(e);
    }
  }

  /**
   * Options
   */

  marked.options = marked.setOptions = function (opt) {
    merge(marked.defaults, opt);
    changeDefaults(marked.defaults);
    return marked;
  };
  marked.getDefaults = getDefaults;
  marked.defaults = exports.defaults;

  /**
   * Use Extension
   */

  marked.use = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var opts = merge.apply(void 0, [{}].concat(args));
    var extensions = marked.defaults.extensions || {
      renderers: {},
      childTokens: {} };

    var hasExtensions;
    args.forEach(function (pack) {
      // ==-- Parse "addon" extensions --== //
      if (pack.extensions) {
        hasExtensions = true;
        pack.extensions.forEach(function (ext) {
          if (!ext.name) {
            throw new Error('extension name required');
          }
          if (ext.renderer) {
            // Renderer extensions
            var prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
            if (prevRenderer) {
              // Replace extension with func to run new extension but fall back if false
              extensions.renderers[ext.name] = function () {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }
                var ret = ext.renderer.apply(this, args);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if (ext.tokenizer) {
            // Tokenizer Extensions
            if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            if (extensions[ext.level]) {
              extensions[ext.level].unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              // Function to check for start of token
              if (ext.level === 'block') {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === 'inline') {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if (ext.childTokens) {
            // Child tokens to be visited by walkTokens
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
      }

      // ==-- Parse "overwrite" extensions --== //
      if (pack.renderer) {
        (function () {
          var renderer = marked.defaults.renderer || new Renderer();
          var _loop = function _loop(prop) {
            var prevRenderer = renderer[prop];
            // Replace renderer with func to run extension, but fall back if false
            renderer[prop] = function () {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }
              var ret = pack.renderer[prop].apply(renderer, args);
              if (ret === false) {
                ret = prevRenderer.apply(renderer, args);
              }
              return ret;
            };
          };
          for (var prop in pack.renderer) {
            _loop(prop);
          }
          opts.renderer = renderer;
        })();
      }
      if (pack.tokenizer) {
        (function () {
          var tokenizer = marked.defaults.tokenizer || new Tokenizer();
          var _loop2 = function _loop2(prop) {
            var prevTokenizer = tokenizer[prop];
            // Replace tokenizer with func to run extension, but fall back if false
            tokenizer[prop] = function () {
              for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
              }
              var ret = pack.tokenizer[prop].apply(tokenizer, args);
              if (ret === false) {
                ret = prevTokenizer.apply(tokenizer, args);
              }
              return ret;
            };
          };
          for (var prop in pack.tokenizer) {
            _loop2(prop);
          }
          opts.tokenizer = tokenizer;
        })();
      }

      // ==-- Parse WalkTokens extensions --== //
      if (pack.walkTokens) {
        var _walkTokens = marked.defaults.walkTokens;
        opts.walkTokens = function (token) {
          var values = [];
          values.push(pack.walkTokens.call(this, token));
          if (_walkTokens) {
            values = values.concat(_walkTokens.call(this, token));
          }
          return values;
        };
      }
      if (hasExtensions) {
        opts.extensions = extensions;
      }
      marked.setOptions(opts);
    });
  };

  /**
   * Run callback for every token
   */

  marked.walkTokens = function (tokens, callback) {
    var values = [];
    var _loop3 = function _loop3() {
      var token = _step.value;
      values = values.concat(callback.call(marked, token));
      switch (token.type) {
        case 'table':
          {
            for (var _iterator2 = _createForOfIteratorHelperLoose(token.header), _step2; !(_step2 = _iterator2()).done;) {
              var cell = _step2.value;
              values = values.concat(marked.walkTokens(cell.tokens, callback));
            }
            for (var _iterator3 = _createForOfIteratorHelperLoose(token.rows), _step3; !(_step3 = _iterator3()).done;) {
              var row = _step3.value;
              for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
                var _cell = _step4.value;
                values = values.concat(marked.walkTokens(_cell.tokens, callback));
              }
            }
            break;
          }
        case 'list':
          {
            values = values.concat(marked.walkTokens(token.items, callback));
            break;
          }
        default:
          {
            if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
              // Walk any extensions
              marked.defaults.extensions.childTokens[token.type].forEach(function (childTokens) {
                values = values.concat(marked.walkTokens(token[childTokens], callback));
              });
            } else if (token.tokens) {
              values = values.concat(marked.walkTokens(token.tokens, callback));
            }
          }}

    };
    for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
      _loop3();
    }
    return values;
  };

  /**
   * Parse Inline
   * @param {string} src
   */
  marked.parseInline = function (src, opt) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked.parseInline(): input parameter is undefined or null');
    }
    if (typeof src !== 'string') {
      throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }
    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);
    try {
      var tokens = Lexer.lexInline(src, opt);
      if (opt.walkTokens) {
        marked.walkTokens(tokens, opt.walkTokens);
      }
      return Parser.parseInline(tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';
      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }
      throw e;
    }
  };

  /**
   * Expose
   */
  marked.Parser = Parser;
  marked.parser = Parser.parse;
  marked.Renderer = Renderer;
  marked.TextRenderer = TextRenderer;
  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;
  marked.Tokenizer = Tokenizer;
  marked.Slugger = Slugger;
  marked.parse = marked;
  var options = marked.options;
  var setOptions = marked.setOptions;
  var use = marked.use;
  var walkTokens = marked.walkTokens;
  var parseInline = marked.parseInline;
  var parse = marked;
  var parser = Parser.parse;
  var lexer = Lexer.lex;

  exports.Lexer = Lexer;
  exports.Parser = Parser;
  exports.Renderer = Renderer;
  exports.Slugger = Slugger;
  exports.TextRenderer = TextRenderer;
  exports.Tokenizer = Tokenizer;
  exports.getDefaults = getDefaults;
  exports.lexer = lexer;
  exports.marked = marked;
  exports.options = options;
  exports.parse = parse;
  exports.parseInline = parseInline;
  exports.parser = parser;
  exports.setOptions = setOptions;
  exports.use = use;
  exports.walkTokens = walkTokens;

  Object.defineProperty(exports, '__esModule', { value: true });

});

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map