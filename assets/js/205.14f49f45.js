"use strict";(self.webpackChunk_lanseria_utools=self.webpackChunk_lanseria_utools||[]).push([[205],{205:(e,n,t)=>{var r;function o(e,n){void 0===n&&(n={});var t=n.registrationOptions;void 0===t&&(t={}),delete n.registrationOptions;var o=function(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];n&&n[e]&&n[e].apply(n,t)};"serviceWorker"in navigator&&r.then((function(){Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))?(function(e,n,t){fetch(e).then((function(r){404===r.status?(n("error",new Error("Service worker not found at "+e)),c()):-1===r.headers.get("content-type").indexOf("javascript")?(n("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),c()):a(e,n,t)})).catch((function(e){return i(n,e)}))}(e,o,t),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return i(o,e)}))):(a(e,o,t),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return i(o,e)})))}))}function i(e,n){navigator.onLine||e("offline"),e("error",n)}function a(e,n,t){navigator.serviceWorker.register(e,t).then((function(e){n("registered",e),e.waiting?n("updated",e):e.onupdatefound=function(){n("updatefound",e);var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?n("updated",e):n("cached",e))}}})).catch((function(e){return i(n,e)}))}function c(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return i(emit,e)}))}t.r(n),t.d(n,{register:()=>o,unregister:()=>c}),"undefined"!=typeof window&&(r="undefined"!=typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})}}]);