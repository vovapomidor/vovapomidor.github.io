!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("iframeAppBiContext",[],t):"object"==typeof exports?exports.iframeAppBiContext=t():e.iframeAppBiContext=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.p="undefined"!=typeof window&&window.__STATICS_BASE_URL__||n.p,n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={_msid:function(e){return e.Utils.getInstanceValue("metaSiteId")},_appId:function(e){return e.Utils.getInstanceValue("appDefId")},_instanceId:function(e){return e.Utils.getInstanceId()},_siteOwnerId:function(e){return e.Utils.getSiteOwnerId()},_siteMemberId:function(e){return e.Utils.getUid()||""},_visitorId:function(e){return e.Utils.getInstanceValue("aid")},_viewMode:function(e){return e.Utils.getViewMode()}};t.getBiContext=function(e){return Object.keys(r).reduce(function(t,n){return t[n]=r[n](e),t},{})}}])});
//# sourceMappingURL=app.bundle.min.js.map