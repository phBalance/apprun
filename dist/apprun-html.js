!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.apprun=t():e.apprun=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";(function(e){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._events={}}return e.prototype.on=function(e,t,n){void 0===n&&(n={}),this._events[e]=this._events[e]||[],this._events[e].push({fn:t,options:n})},e.prototype.off=function(e,t){var n=this._events[e];n&&((n=n.filter(function(e){return e.fn!==t})).length?this._events[e]=n:delete this._events[e])},e.prototype.run=function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this._events[e];return console.assert(!!o,"No subscriber for event: "+e),o&&((o=o.filter(function(r){var o=r.fn,i=r.options;return i.delay?t.delay(e,o,n,i):o.apply(t,n),!r.options.once})).length?this._events[e]=o:delete this._events[e]),o?o.length:0},e.prototype.once=function(e,t,r){void 0===r&&(r={}),this.on(e,t,n({},r,{once:!0}))},e.prototype.delay=function(e,t,n,r){var o=this;r._t&&clearTimeout(r._t),r._t=setTimeout(function(){clearTimeout(r._t),t.apply(o,n)},r.delay)},e}();t.App=r;var o,i="object"==typeof self&&self.self===self&&self||"object"==typeof e&&e.global===e&&e;i.app&&i._AppRunVersions?o=i.app:(o=new r,i.app=o,i._AppRunVersions="AppRun-1"),t.default=o}).call(this,n(3))},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(0));t.app=i.default;var a=n(5),u=n(7);t.Component=u.Component;var s=n(2);t.on=s.on,t.update=s.update,t.event=s.update;var l=n(9);t.ROUTER_EVENT=l.ROUTER_EVENT,t.ROUTER_404_EVENT=l.ROUTER_404_EVENT,i.default.createElement=a.createElement,i.default.render=a.render,i.default.Fragment=a.Fragment,i.default.start=function(e,t,n,o,i){var a=r({},i,{render:!0,global_event:!0}),s=new u.Component(t,n,o);return i&&i.rendered&&(s.rendered=i.rendered),s.mount(e,a),s};var f=function(e){};i.default.on("$",f),i.default.on("debug",function(e){return f}),i.default.on(l.ROUTER_EVENT,f),i.default.on("#",f),i.default.route=l.route,i.default.on("route",function(e){return i.default.route&&i.default.route(e)}),"object"==typeof document&&document.addEventListener("DOMContentLoaded",function(){i.default.route===l.route&&(window.onpopstate=function(){return l.route(location.hash)},l.route(location.hash))}),t.default=i.default,"object"==typeof window&&(window.Component=u.Component,window.React=i.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Reflect={meta:new WeakMap,defineMetadata:function(e,t,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[e]=t},getMetadataKeys:function(e){return e=Object.getPrototypeOf(e),this.meta.get(e)?Object.keys(this.meta.get(e)):[]},getMetadata:function(e,t){return t=Object.getPrototypeOf(t),this.meta.get(t)?this.meta.get(t)[e]:null}},t.update=function(e,n){return void 0===n&&(n={}),function(r,o,i){var a=e?e.toString():o;return t.Reflect.defineMetadata("apprun-update:"+a,{name:a,key:o,options:n},r),i}},t.on=function(e,n){return void 0===n&&(n={}),function(r,o){var i=e?e.toString():o;t.Reflect.defineMetadata("apprun-update:"+i,{name:i,key:o,options:n},r)}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(6)),i="_props";function a(e){var t=[],n=function(e){null!=e&&""!==e&&!1!==e&&t.push("function"==typeof e||"object"==typeof e?e:""+e)};return e&&e.forEach(function(e){Array.isArray(e)?e.forEach(function(e){return n(e)}):n(e)}),t}t.createElement=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=a(n);if("string"==typeof e)return{tag:e,props:t,children:o};if(Array.isArray(e))return e;if(void 0===e&&n)return o;if(Object.getPrototypeOf(e).__isAppRunComponent)return{tag:e,props:t,children:o};if("function"==typeof e)return e(t,o);throw new Error("Unknown tag in vdom "+e)};var u={};function s(e,t,n){void 0===n&&(n={}),null!=t&&(t=o.default(t,n),e&&(Array.isArray(t)?f(e,t):f(e,[t])))}function l(e,t){console.assert(!!e),function(e,t){var n=e.nodeName,r=""+(t.tag||"");return n.toUpperCase()===r.toUpperCase()}(e,t)?(f(e,t.children),p(e,t.props)):e.parentNode.replaceChild(d(t),e)}function f(e,t){for(var n=Math.min(e.childNodes.length,t.length),r=0;r<n;r++){var o=t[r],i=e.childNodes[r];if(o instanceof HTMLElement)e.insertBefore(o,i);else if("string"==typeof o)i.textContent!==o&&(3===i.nodeType?i.textContent=o:e.replaceChild(c(o),i));else{var a=o.props&&o.props.key;if(a)if(i.key===a)l(e.childNodes[r],o);else{var s=u[a];s?(e.insertBefore(s,i),e.appendChild(i),l(e.childNodes[r],o)):e.insertBefore(d(o),i)}else l(e.childNodes[r],o)}}for(var f=e.childNodes.length;f>n;)e.removeChild(e.lastChild),f--;if(t.length>n){var p=document.createDocumentFragment();for(r=n;r<t.length;r++)p.appendChild(d(t[r]));e.appendChild(p)}}function c(e){if(0===e.indexOf("_html:")){var t=document.createElement("div");return t.insertAdjacentHTML("afterbegin",e.substring(6)),t}return document.createTextNode(e)}function d(e,t){if(void 0===t&&(t=!1),console.assert(null!=e),e instanceof HTMLElement||e instanceof SVGElement)return e;if("string"==typeof e)return c(e);if(!e.tag||"function"==typeof e.tag)return c(JSON.stringify(e));var n=(t=t||"svg"===e.tag)?document.createElementNS("http://www.w3.org/2000/svg",e.tag):document.createElement(e.tag);return p(n,e.props),e.children&&e.children.forEach(function(e){return n.appendChild(d(e,t))}),n}function p(e,t){console.assert(!!e);var n=e[i]||{};for(var r in t=function(e,t){t.class=t.class||t.className,delete t.className;var n={};return e&&Object.keys(e).forEach(function(e){return n[e]=null}),t&&Object.keys(t).forEach(function(e){return n[e]=t[e]}),n}(n,t||{}),e[i]=t,t){var o=t[r];if("style"===r)for(var a in e.style.cssText&&(e.style.cssText=""),o)e.style[a]!==o[a]&&(e.style[a]=o[a]);else if(r.startsWith("data-")){var s=r.substring(5).replace(/-(\w)/g,function(e){return e[1].toUpperCase()});e.dataset[s]!==o&&(o||""===o?e.dataset[s]=o:delete e.dataset[s])}else"id"===r||"class"===r||r.startsWith("role")||r.indexOf("-")>0||e instanceof SVGElement?e.getAttribute(r)!==o&&(o?e.setAttribute(r,o):e.removeAttribute(r)):e[r]!==o&&(e[r]=o);"key"===r&&o&&(u[o]=e)}}t.updateElement=s,t.render=s,t.Fragment=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return a(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.createElement=r.createElement,t.Fragment=r.Fragment,t.render=function(e,t,n){r.updateElement(e,t,n)}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(0));var a=0;t.default=function e(t,n,o){if(void 0===o&&(o=0),0===o&&(a=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(function(t){return e(t,n,a++)});var u=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(u=function(e,t,n){var o=e.tag,a=e.props,u=e.children,s=a&&a.id;s||(s="_"+n+Date.now());var l="_"+n;t.__componentCache||(t.__componentCache={});var f=t.__componentCache[l];f?s=f.__eid:(f=t.__componentCache[l]=new o(r({},a,{children:u})).mount(s)).__eid=s,f.mounted&&f.mounted(a,u);var c=f.state,d="";return c instanceof Promise||!f.view||(d=f._view(c,a),f.rendered&&setTimeout(function(){return f.rendered(c,a)})),i.default.createElement("section",r({},a,{id:s}),d)}(t,n,a++)),u&&Array.isArray(u.children)&&(u.children=u.children.map(function(t){return e(t,n,a++)})),u}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},i=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(n(0)),l=n(2),f=u(n(8)),c={};s.default.on("get-components",function(e){return e.components=c});var d=function(e){return e},p=function(){function e(e,t,n,o){var i=this;this.state=e,this.view=t,this.update=n,this.options=o,this._app=new s.App,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=function(){i._history_idx--,i._history_idx>=0?i.setState(i._history[i._history_idx],{render:!0,history:!1}):i._history_idx=0},this._history_next=function(){i._history_idx++,i._history_idx<i._history.length?i.setState(i._history[i._history_idx],{render:!0,history:!1}):i._history_idx=i._history.length-1},this.start=function(e,t){return void 0===e&&(e=null),void 0===t&&(t={render:!0}),i.mount(e,r({},t,{render:!0}))}}return e.prototype.render=function(e,t){s.default.render(e,t,this)},e.prototype._view=function(e,t){var n=this;if(void 0===t&&(t=null),this.view){var r=s.default.createElement;s.default.createElement=function(e,t){for(var o=[],a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t&&Object.keys(t).forEach(function(r){r.startsWith("$")&&(f.default(r,t,e,n),delete t[r])}),r.apply(void 0,i([e,t],o))};var o=t?this.view(e,t):this.view(e);return s.default.createElement=r,o}},e.prototype.renderState=function(e){var t=this;if(this.view){var n=this._view(e);if(s.default.debug&&s.default.run("debug",{component:this,state:e,vdom:n||"[vdom is null - no render]"}),"object"==typeof document){var r="string"==typeof this.element?document.getElementById(this.element):this.element;if(r){if(this.unload){if(r._component!==this&&(this.tracking_id=(new Date).valueOf().toString(),r.setAttribute("_c",this.tracking_id),"undefined"!=typeof MutationObserver)){var o=new MutationObserver(function(e){var n=e[0],i=n.removedNodes;(n.oldValue===t.tracking_id||Array.from(i).indexOf(r)>=0)&&(t.unload(t.state),o.disconnect())});r.parentNode&&o.observe(r.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["_c"]})}}else r.removeAttribute("_c");r._component=this}this.render(r,n),this.rendered&&this.rendered(this.state)}}},e.prototype.setState=function(e,t){var n=this;if(void 0===t&&(t={render:!0,history:!1}),e instanceof Promise)e.then(function(e){n.setState(e,t)}).catch(function(e){throw console.error(e),e}),this._state=e;else{if(this._state=e,null==e)return;this.state=e,!1!==t.render&&this.renderState(e),!1!==t.history&&this.enable_history&&(this._history=i(this._history,[e]),this._history_idx=this._history.length-1),"function"==typeof t.callback&&t.callback(this.state)}},e.prototype.mount=function(e,t){return void 0===e&&(e=null),console.assert(!this.element,"Component already mounted."),this.options=t=r({},this.options,t),this.element=e,this.global_event=t.global_event,this.enable_history=!!t.history,this.enable_history&&(this.on(t.history.prev||"history-prev",this._history_prev),this.on(t.history.next||"history-next",this._history_next)),this.add_actions(),void 0===this.state&&(this.state=null!=this.model?this.model:{}),t.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),c[e]=c[e]||[],c[e].push(this),this},e.prototype.is_global_event=function(e){return e&&(this.global_event||this._global_events.indexOf(e)>=0||e.startsWith("#")||e.startsWith("/")||e.startsWith("@"))},e.prototype.add_action=function(e,t,n){var r=this;void 0===n&&(n={}),t&&"function"==typeof t&&(n.global&&this._global_events.push(e),this.on(e,function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];var u=t.apply(void 0,i([r.state],o));s.default.debug&&s.default.run("debug",{component:r,event:e,e:o,state:r.state,newState:u,options:n}),r.setState(u,n)},n))},e.prototype.add_actions=function(){var e=this,t=this.update||{};l.Reflect.getMetadataKeys(this).forEach(function(n){if(n.startsWith("apprun-update:")){var r=l.Reflect.getMetadata(n,e);t[r.name]=[e[r.key].bind(e),r.options]}});var n={};Array.isArray(t)?t.forEach(function(e){var t=o(e,3),r=t[0],i=t[1],a=t[2];r.toString().split(",").forEach(function(e){return n[e.trim()]=[i,a]})}):Object.keys(t).forEach(function(e){var r=t[e];("function"==typeof r||Array.isArray(r))&&e.split(",").forEach(function(e){return n[e.trim()]=r})}),n["."]||(n["."]=d),Object.keys(n).forEach(function(t){var r=n[t];"function"==typeof r?e.add_action(t,r):Array.isArray(r)&&e.add_action(t,r[0],r[1])})},e.prototype.run=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=e.toString();return this.is_global_event(o)?s.default.run.apply(s.default,i([o],n)):(t=this._app).run.apply(t,i([o],n))},e.prototype.on=function(e,t,n){var r=e.toString();return this._actions.push({name:r,fn:t}),this.is_global_event(r)?s.default.on(r,t,n):this._app.on(r,t,n)},e.prototype.unmount=function(){var e=this;this._actions.forEach(function(t){var n=t.name,r=t.fn;e.is_global_event(n)?s.default.off(n,r):e._app.off(n,r)})},e.__isAppRunComponent=!0,e}();t.Component=p},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},i=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(0)),s=function(e,t){return(t?e.state[t]:e.state)||""},l=function(e,t,n){if(t){var o=r({},e.state);o[t]=n,e.setState(o)}else e.setState(n)};t.default=function(e,t,n,r){if(e.startsWith("$on")){var a=t[e];if(e=e.substring(1),"boolean"==typeof a)t[e]=function(t){return r.run(e,t)};else if("string"==typeof a)t[e]=function(e){return r.run(a,e)};else if("function"==typeof a)t[e]=function(e){return r.setState(a(r.state,e))};else if(Array.isArray(a)){var f=o(a),c=f[0],d=f.slice(1);"string"==typeof c?t[e]=function(e){return r.run.apply(r,i([c],d,[e]))}:"function"==typeof c&&(t[e]=function(e){return r.setState(c.apply(void 0,i([r.state],d,[e])))})}}else if("$bind"===e){var p=t.type||"text",h="string"==typeof t[e]?t[e]:t.name;if("input"===n)switch(p){case"checkbox":t.checked=s(r,h),t.onclick=function(e){return l(r,h||e.target.name,e.target.checked)};break;case"radio":t.checked=s(r,h)===t.value,t.onclick=function(e){return l(r,h||e.target.name,e.target.value)};break;case"number":case"range":t.value=s(r,h),t.oninput=function(e){return l(r,h||e.target.name,Number(e.target.value))};break;default:t.value=s(r,h),t.oninput=function(e){return l(r,h||e.target.name,e.target.value)}}else"select"===n?(t.value=s(r,h),t.onchange=function(e){e.target.multiple||l(r,h||e.target.name,e.target.value)}):"option"===n&&(t.selected=s(r,h),t.onclick=function(e){return l(r,h||e.target.name,e.target.selected)})}else u.default.run("$",{key:e,tag:n,props:t,component:r})}},function(e,t,n){"use strict";var r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},o=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(0));t.ROUTER_EVENT="//",t.ROUTER_404_EVENT="///",t.route=function(e){if(e||(e="#"),e.startsWith("#")){var n=r(e.split("/")),i=n[0],u=n.slice(1);a.default.run.apply(a.default,o([i],u))||a.default.run.apply(a.default,o([t.ROUTER_404_EVENT,i],u)),a.default.run.apply(a.default,o([t.ROUTER_EVENT,i],u))}else if(e.startsWith("/")){var s=r(e.split("/")),l=(s[0],s[1]);u=s.slice(2);a.default.run.apply(a.default,o(["/"+l],u))||a.default.run.apply(a.default,o([t.ROUTER_404_EVENT,"/"+l],u)),a.default.run.apply(a.default,o([t.ROUTER_EVENT,"/"+l],u))}else a.default.run(e)||a.default.run(t.ROUTER_404_EVENT,e),a.default.run(t.ROUTER_EVENT,e)},t.default=t.route},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1)),i=n(1);t.app=i.app,t.Component=i.Component,t.on=i.on,t.update=i.update,t.event=i.event,t.ROUTER_404_EVENT=i.ROUTER_404_EVENT,t.ROUTER_EVENT=i.ROUTER_EVENT;var a=n(11);o.default.createElement=a.createElement,o.default.render=a.render,o.default.Fragment=a.Fragment,t.default=o.default},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(4);t.createElement=o.createElement,t.Fragment=o.Fragment;var i=r(n(12));t.render=function(e,t,n){if("string"==typeof t)if(t=t.trim(),e.firstChild){var r=e.cloneNode(!1);r.innerHTML=t,i.default(e,r)}else e.innerHTML=t;else o.updateElement(e,t,n)}},function(e,t,n){"use strict";var r;n.r(t);var o="http://www.w3.org/1999/xhtml",i="undefined"==typeof document?void 0:document;function a(e,t){var n=e.nodeName,r=t.nodeName;return n===r||!!(t.actualize&&n.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&n===r.toUpperCase()}function u(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var s={OPTION:function(e,t){var n=e.parentNode;if(n){var r=n.nodeName.toUpperCase();"OPTGROUP"===r&&(r=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==r||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}u(e,t,"selected")},INPUT:function(e,t){u(e,t,"checked"),u(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,r,o=-1,i=0,a=e.firstChild;a;)if("OPTGROUP"===(r=a.nodeName&&a.nodeName.toUpperCase()))a=(n=a).firstChild;else{if("OPTION"===r){if(a.hasAttribute("selected")){o=i;break}i++}!(a=a.nextSibling)&&n&&(a=n.nextSibling,n=null)}e.selectedIndex=o}}},l=1,f=11,c=3,d=8;function p(){}function h(e){return e.id}var v=function(e){return function(t,n,u){if(u||(u={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName){var v=n;(n=i.createElement("html")).innerHTML=v}else _=n,!r&&i.createRange&&(r=i.createRange()).selectNode(i.body),r&&r.createContextualFragment?y=r.createContextualFragment(_):(y=i.createElement("body")).innerHTML=_,n=y.childNodes[0];var _,y,m,g=u.getNodeKey||h,b=u.onBeforeNodeAdded||p,E=u.onNodeAdded||p,O=u.onBeforeElUpdated||p,N=u.onElUpdated||p,T=u.onBeforeNodeDiscarded||p,A=u.onNodeDiscarded||p,C=u.onBeforeElChildrenUpdated||p,w=!0===u.childrenOnly,R={};function S(e){m?m.push(e):m=[e]}function x(e,t,n){!1!==T(e)&&(t&&t.removeChild(e),A(e),function e(t,n){if(t.nodeType===l)for(var r=t.firstChild;r;){var o=void 0;n&&(o=g(r))?S(o):(A(r),r.firstChild&&e(r,n)),r=r.nextSibling}}(e,n))}function j(e){E(e);for(var t=e.firstChild;t;){var n=t.nextSibling,r=g(t);if(r){var o=R[r];o&&a(t,o)&&(t.parentNode.replaceChild(o,t),M(o,t))}j(t),t=n}}function M(r,o,u){var f=g(o);if(f&&delete R[f],!n.isSameNode||!n.isSameNode(t)){if(!u){if(!1===O(r,o))return;if(e(r,o),N(r),!1===C(r,o))return}"TEXTAREA"!==r.nodeName?function(e,t){var n,r,o,u,f,p=t.firstChild,h=e.firstChild;e:for(;p;){for(u=p.nextSibling,n=g(p);h;){if(o=h.nextSibling,p.isSameNode&&p.isSameNode(h)){p=u,h=o;continue e}r=g(h);var v=h.nodeType,_=void 0;if(v===p.nodeType&&(v===l?(n?n!==r&&((f=R[n])?o===f?_=!1:(e.insertBefore(f,h),r?S(r):x(h,e,!0),h=f):_=!1):r&&(_=!1),(_=!1!==_&&a(h,p))&&M(h,p)):v!==c&&v!=d||(_=!0,h.nodeValue!==p.nodeValue&&(h.nodeValue=p.nodeValue))),_){p=u,h=o;continue e}r?S(r):x(h,e,!0),h=o}if(n&&(f=R[n])&&a(f,p))e.appendChild(f),M(f,p);else{var y=b(p);!1!==y&&(y&&(p=y),p.actualize&&(p=p.actualize(e.ownerDocument||i)),e.appendChild(p),j(p))}p=u,h=o}!function(e,t,n){for(;t;){var r=t.nextSibling;(n=g(t))?S(n):x(t,e,!0),t=r}}(e,h,r);var m=s[e.nodeName];m&&m(e,t)}(r,o):s.TEXTAREA(r,o)}}!function e(t){if(t.nodeType===l||t.nodeType===f)for(var n=t.firstChild;n;){var r=g(n);r&&(R[r]=n),e(n),n=n.nextSibling}}(t);var P,U,V=t,k=V.nodeType,D=n.nodeType;if(!w)if(k===l)D===l?a(t,n)||(A(t),V=function(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}(t,(P=n.nodeName,(U=n.namespaceURI)&&U!==o?i.createElementNS(U,P):i.createElement(P)))):V=n;else if(k===c||k===d){if(D===k)return V.nodeValue!==n.nodeValue&&(V.nodeValue=n.nodeValue),V;V=n}if(V===n)A(t);else if(M(V,n,w),m)for(var F=0,L=m.length;F<L;F++){var W=R[m[F]];W&&x(W,W.parentNode,!1)}return!w&&V!==t&&t.parentNode&&(V.actualize&&(V=V.actualize(t.ownerDocument||i)),t.parentNode.replaceChild(V,t)),V}}(function(e,t){var n,r,o,i,a,u=t.attributes;for(n=u.length-1;n>=0;--n)o=(r=u[n]).name,i=r.namespaceURI,a=r.value,i?(o=r.localName||o,e.getAttributeNS(i,o)!==a&&e.setAttributeNS(i,o,a)):e.getAttribute(o)!==a&&e.setAttribute(o,a);for(n=(u=e.attributes).length-1;n>=0;--n)!1!==(r=u[n]).specified&&(o=r.name,(i=r.namespaceURI)?(o=r.localName||o,t.hasAttributeNS(i,o)||e.removeAttributeNS(i,o)):t.hasAttribute(o)||e.removeAttribute(o))});t.default=v}])});
//# sourceMappingURL=apprun-html.js.map