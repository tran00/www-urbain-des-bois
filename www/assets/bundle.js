!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t);!function(){for(var e=document.getElementById("toggleMenuVisibility"),t=document.querySelectorAll('.menu a[href^="#"]'),n=0,r=Array.from(t);n<r.length;n++){r[n].addEventListener("click",(function(t){e.checked=!1}))}var o=document.querySelector(".menu");window.addEventListener("scroll",(function(){window.requestAnimationFrame((function(){o.classList.toggle("is-sticky",window.scrollY>350)}))}))}(),function(){var e=document.querySelectorAll(".header__cover"),t=0;function n(t){t<0&&(t=e.length-1),t>e.length-1&&(t=0);for(var n=0;n<e.length;n++)e[n].classList.toggle("is-hidden",n!==t)}n(t),window.setInterval((function(){n(t=(t+1)%e.length)}),3e3)}(),function(){for(var e=document.querySelectorAll(".news__item"),t=document.getElementById("newsDisplayMore"),n=0;n<e.length;n++)e[n].classList.toggle("is-hidden",n>=3);t.addEventListener("click",(function(n){for(var r=0,o=Array.from(e);r<o.length;r++){o[r].classList.remove("is-hidden")}t.remove()}))}(),function(){var e=document.querySelectorAll(".slideshow__slide");r(0);for(var t=function(t){var n=e[t],o=n.querySelector("button[data-action=prev]"),i=n.querySelector("button[data-action=next]");o.addEventListener("click",(function(){return r(t-1)})),i.addEventListener("click",(function(){return r(t+1)}))},n=0;n<e.length;n++)t(n);function r(t){t<0&&(t=e.length-1),t>e.length-1&&(t=0);for(var n=0;n<e.length;n++)e[n].classList.toggle("is-hidden",n!==t)}}()}]);
//# sourceMappingURL=bundle.js.map