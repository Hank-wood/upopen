define(function(){function r(r,t){for(var e in t)r[e]=t[e];return r}function t(r){for(var t,e=Array.prototype.slice.call(arguments,1);t=e.shift();)for(var n in t)r[n]=t[n];return r}function e(r){return"[object array]"==Object.prototype.toString.call(r).toLowerCase()}return String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s*/,"").replace(/\s*$/,"")},{extend:r,apply:t,isArray:e}});