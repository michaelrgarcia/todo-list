(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var c=n.length-1;c>-1&&!e;)e=n[c--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=function(t){let e=document.createElement("img");return e.src=t,e.classList.add("svg"),e};const r=t.p+"svgs/format-list-bulleted-square..svg",n=t.p+"svgs/information-variant-circle-outline..svg",c=function(){const t=document.createElement("header"),c=e(r),o=document.createElement("p");o.id="header-text",o.textContent="To-Do List";const i=e(n);return t.append(c,o,i),t}();document.getElementById("content").append(c)})();