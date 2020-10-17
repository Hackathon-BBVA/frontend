!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},o=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${o}--\x3e`,a=new RegExp(`${o}|${r}`);class l{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let r=0,l=-1,d=0;const{strings:u,values:{length:m}}=t;for(;d<m;){const t=n.nextNode();if(null!==t){if(l++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)c(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=u[d],s=h.exec(e)[2],i=s.toLowerCase()+"$lit$",n=t.getAttribute(i);t.removeAttribute(i);const o=n.split(a);this.parts.push({type:"attribute",index:l,name:s,strings:o}),d+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(o)>=0){const i=t.parentNode,n=e.split(a),o=n.length-1;for(let e=0;e<o;e++){let s,o=n[e];if(""===o)s=p();else{const t=h.exec(o);null!==t&&c(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(o)}i.insertBefore(s,t),this.parts.push({type:"node",index:++l})}""===n[o]?(i.insertBefore(p(),t),s.push(t)):t.data=n[o],d+=o}}else if(8===t.nodeType)if(t.data===o){const e=t.parentNode;null!==t.previousSibling&&l!==r||(l++,e.insertBefore(p(),t)),r=l,this.parts.push({type:"node",index:l}),null===t.nextSibling?t.data="":(s.push(t),l--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(o,e+1));)this.parts.push({type:"node",index:-1}),d++}}else n.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const c=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},d=t=>-1!==t.index,p=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,133,null,!1);let o=g(i),r=i[o],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,o=g(i,o),r=i[o]}c.forEach(t=>t.parentNode.removeChild(t))}const m=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},g=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(d(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const b=new WeakMap,f=t=>"function"==typeof t&&b.has(t),y={},x={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class w{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,r=0,a=0,l=n.nextNode();for(;r<s.length;)if(o=s[r],d(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=e.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return i&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),_=` ${o} `;class S{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===t.indexOf("--\x3e",n+1);const a=h.exec(t);e+=null===a?t+(s?_:r):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+o}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const k=t=>null===t||!("object"==typeof t||"function"==typeof t),A=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class E{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!A(t))return t}let i="";for(let n=0;n<e;n++){i+=t[n];const e=s[n];if(void 0!==e){const t=e.value;if(k(t)||!A(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===y||k(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=y,t(this)}this.value!==y&&this.committer.commit()}}class P{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(p()),this.endNode=t.appendChild(p())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=p()),t.__insert(this.endNode=p())}insertAfterPart(t){t.__insert(this.startNode=p()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}const t=this.__pendingValue;t!==y&&(k(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):A(t)?this.__commitIterable(t):t===x?(this.value=x,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof w&&this.value.template===e)this.value.update(t.values);else{const s=new w(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new P(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class T{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}if(this.__pendingValue===y)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=y}}class N extends E{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends C{}let z=!1;(()=>{try{const t={get capture(){return z=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class R{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}if(this.__pendingValue===y)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=V(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=y}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const V=t=>t&&(z?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function L(t){let e=M.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},M.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(o);return s=e.keyString.get(i),void 0===s&&(s=new l(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const M=new Map,U=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const j=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new N(t,e.slice(1),s).parts}if("@"===n)return[new R(t,e.slice(1),i.eventContext)];if("?"===n)return[new T(t,e.slice(1),s)];return new E(t,e,s).parts}handleTextExpression(t){return new P(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const I=(t,...e)=>new S(t,e,"html",j),q=(t,e)=>`${t}--${e}`;let $=!0;void 0===window.ShadyCSS?$=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),$=!1);const F=t=>e=>{const s=q(e.type,t);let i=M.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},M.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(o);if(n=i.keyString.get(r),void 0===n){const s=e.getTemplateElement();$&&window.ShadyCSS.prepareTemplateDom(s,t),n=new l(e,s),i.keyString.set(r,n)}return i.stringsArray.set(e.strings,n),n},H=["html","svg"],B=new Set,D=(t,e,s)=>{B.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{H.forEach(e=>{const s=M.get(q(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),u(t,s)})})})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const o=document.createTreeWalker(i,133,null,!1);let r=g(n),a=0,l=-1;for(;o.nextNode();){l++;for(o.currentNode===s&&(a=m(e),s.parentNode.insertBefore(e,s));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=g(n,r);return}r=g(n,r)}}}(s,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),u(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:J};class K extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=G){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdateInternal(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||G}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=J){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||W,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||W.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=G){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let i=!0;if(void 0!==t){const n=this.constructor;s=s||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}K.finalized=!0;const Q=Element.prototype;Q.msMatchesSelector||Q.webkitMatchesSelector;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const X=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol();class Z{constructor(t,e){if(e!==Y)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(X?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof Z)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new Z(s,Y)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class st extends K{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),i=[];s.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!X){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new Z(String(e),Y)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?X?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return et}}st.finalized=!0,st.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,o=U.has(e),r=$&&11===e.nodeType&&!!e.host,a=r&&!B.has(i),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let i=U.get(e);void 0===i&&(n(e,e.firstChild),U.set(e,i=new P(Object.assign({templateFactory:L},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:F(i)},s)),a){const t=U.get(l);U.delete(l);const s=t.value instanceof w?t.value.template:void 0;D(i,l,s),n(e,e.firstChild),e.appendChild(l),U.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)};customElements.define("land-menu",class extends st{static get properties(){return{options:{type:String},optionsArray:{type:Array},optionsHREF:{type:String},optionsHREFArray:{type:String},background:{type:String},stateLoad:{type:Boolean}}}constructor(){super(),this.stateLoad=!1}firstUpdated(){this.optionsArray=this.options.split(","),this.optionsHREFArray=this.optionsHREF.split(","),this.stateLoad=!0}render(){return I`
            <nav class="menu" style="background-color: ${this.background}">
                <button class="btnAction" @click="${this.actionMenu}" action="open" style="background-color: ${this.background}">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="options">
                    ${this.stateLoad?this.optionsArray.map((t,e)=>I`<li><a href="${this.optionsHREFArray[e]}" @click="${this.actionMenu}" action="close">${t}</a></li>`):""}
                </ul>
            </nav>
        `}actionMenu(){const t=this.shadowRoot.querySelector(".menu"),e=this.shadowRoot.querySelector(".btnAction"),s=e.getAttribute("action"),i=this.shadowRoot.querySelectorAll("a");try{"open"==s?(e.disabled=!0,e.classList.add("active"),e.setAttribute("action","close"),t.classList.add("active"),setTimeout(()=>{this.actionsOptions(i,0,"show")},800)):(e.disabled=!0,this.actionsOptions(i,i.length-1,"close"),setTimeout(()=>{e.classList.remove("active"),e.setAttribute("action","open"),t.classList.remove("active")},500))}catch(t){console.log(t)}finally{setTimeout(()=>{e.disabled=!1},1500)}}actionsOptions(t,e,s){"show"==s?e<t.length&&(t[e].classList.add("active"),setTimeout(()=>{this.actionsOptions(t,e+1,"show")},100)):e>=0&&(t[e].classList.remove("active"),setTimeout(()=>{this.actionsOptions(t,e-1,"close")},100))}static get styles(){return[tt`
        *{
            padding: 0;
            margin: 0;
            outline: 0;
            border: none;
            box-sizing: border-box;
            text-decoration: none;
            list-style: none;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .menu{
            width: 70px;
            height: 70px;
            position: fixed;
            top: 0;
            right: 0;
            z-index: 99;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-transition: width .5s, height .5s .5s;
            transition: width .5s, height .5s .5s;
            overflow: hidden;
        }
        .menu:hover{
            width: 80px;
        }
        .menu.active{
            width: 100%;
            height: 100vh;
        }
        .btnAction{
            width: 70px;
            height: 70px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            position: absolute;
            top: 0;
            right: 0;
            background-color: transparent;
            color: #ddd;
            cursor: pointer;
            z-index: 99;
        }
        .btnAction span{
            width: 40px;
            height: 3px;
            margin: 4px;
            background-color: #ddd; 
            -webkit-transition: margin .5s .5s, opacity .2s, -webkit-transform .5s .0s; 
            transition: margin .5s .5s, opacity .2s, -webkit-transform .5s .0s; 
            transition: margin .5s .5s, opacity .2s, transform .5s .0s; 
            transition: margin .5s .5s, opacity .2s, transform .5s .0s, -webkit-transform .5s .0s;
        }
        .btnAction.active span:first-child{
            margin-bottom: -8px;
            -webkit-transform: rotate(40deg);
                    transform: rotate(40deg);
            -webkit-transition: margin .5s .0s, opacity .2s, -webkit-transform .5s .5s;
            transition: margin .5s .0s, opacity .2s, -webkit-transform .5s .5s;
            transition: margin .5s .0s, opacity .2s, transform .5s .5s;
            transition: margin .5s .0s, opacity .2s, transform .5s .5s, -webkit-transform .5s .5s;
        }
        .btnAction.active span:nth-child(2){
            opacity: 0;
        }
        .btnAction.active span:last-child{
            margin-top: -6px;
            -webkit-transform: rotate(-40deg);
                    transform: rotate(-40deg);
            -webkit-transition: margin .5s .0s, opacity .2s, -webkit-transform .5s .5s;
            transition: margin .5s .0s, opacity .2s, -webkit-transform .5s .5s;
            transition: margin .5s .0s, opacity .2s, transform .5s .5s;
            transition: margin .5s .0s, opacity .2s, transform .5s .5s, -webkit-transform .5s .5s;
        }
        .options{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            position: relative;
            z-index: 90;
        }
        .options li a{
            color: #ddd;
            font-size: 2em;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            border-bottom: 2px solid transparent;
            -webkit-transition: border .3s, opacity .4s;
            transition: border .3s, opacity .4s;
            opacity: 0;
        }
        .options li a.active{
            opacity: 1;
            -webkit-transition: border .3s, opacity 1s;
            transition: border .3s, opacity 1s;
        }
        .options li a:hover{
            border-bottom: 2px solid #ddd;
        }
        .options li{
            margin: .3em;
        }
        `]}});customElements.define("land-page",class extends st{render(){return I`
        <!--<link rel="stylesheet" href="../../css/style.css">-->
        <div id="container">
            <div id="header"></div>
            <nav>
                <img src="images/img_logo.png" alt="BBBVA smartspeech" id="headerlogo" />
        
                <ul>
                    <li><a id="inicio" class="elemento" href="#">Especificaciones</a></li>
                    <li><a id="socios" class="elemento" href="#">Equipo</a></li>
                    <li><a id="galeria" class="elemento" href="#">Contacto</a></li>
                </ul>
            </nav>
            <div id="start">
                <img src="images/img_1.png" id="workIMG" />
                <span id="p2">
                    <p id="p1">Convertimos <br />la información de tus usuarios</p>
                    en valor agregado
                </span>
        
                <form name="form" id="login" onsubmit="validar();">
                    <ul>
                        <li>
                            <label for="user">Usuario</label><br /><br />
                            <input type="text" id="user" name="user" />
                        </li>
        
                        <li>
                            <label for="password">Contraseña</label><br /><br />
                            <input type="password" id="password" name="password" />
                        </li>
                        <li>
                            <input type="checkbox" id="saveLogin" />
                            <span id="remember">Recordarme</span>
        
                            <a id="forget" class="elemento" href="#">¿Olvidaste tu contraseña?</a>
                        </li>
                        <li>
                            <button id="send" type="submit">¡Empecemos!</button><br />
                            <a id="register" href="#">Nuevo usuario</a>
                        </li>
                    </ul>
                </form>
            </div>
        
            <div id="features">
                <span id="featuresText">LLEVAMOS TUS DATOS DE VOZ
                    <span id="anotherLevel">A OTRO NIVEL</span></span>
                <div class="articles">
                    <article class="featuresBox">
                        <img src="images/ai.png" />
        
                        <h1>Audio a texto</h1>
                        <pre>
        Transcribe automáticaticamente
        grabaciones.</pre>
                    </article>
        
                    <article class="featuresBox">
                        <img src="images/search.png" />
        
                        <h1>Analiza el diálogo</h1>
                        <pre>
        Inspecciona y categoriza las
        lamadas con nuestro
        sistema.
                        </pre>
                    </article>
                </div>
                <div class="articles">
                    <article class="featuresBox">
                        <img src="images/ai.png" />
        
                        <h1>Tono y sentimientos</h1>
                        <pre>
        Detecta métricas
            paralingüisticas para conocer
            mejor a tus usuarios</pre>
                    </article>
        
                    <article class="featuresBox">
                        <img src="images/search.png" />
        
                        <h1>Predicciones IA</h1>
                        <pre>Prediga comportamientos
          complejos mediante el
          aprendizaje automático
                    </pre>
                    </article>
                </div>
            </div>
            <div id='learnMore'>
                <span id="learnText">CONOCE MÁS
                    <span id="aboutProject">SOBRE EL PROYECTO</span></span>
        
                <iframe id='video' width="500" height="315" src="https://www.youtube.com/embed/jFkjLq8LLnM">
                </iframe>
        
        
            </div>
        </div>
        `}static get styles(){return[tt`
        /* http://meyerweb.com/eric/tools/css/reset/
   v2.0-modified | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}


/* make sure to set some focus styles for accessibility */

:focus {
    outline: 0;
}


/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    -moz-appearance: none;
}

input[type=search] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
}

textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
}




audio,
canvas,
video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    max-width: 100%;
}




audio:not([controls]) {
    display: none;
    height: 0;
}


/**
 * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.
 * Known issue: no IE 6 support.
 */

[hidden] {
    display: none;
}




html {
    font-size: 100%;
    /* 1 */
    -webkit-text-size-adjust: 100%;
    /* 2 */
    -ms-text-size-adjust: 100%;
    /* 2 */
}



a:focus {
    outline: thin dotted;
}


/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */

a:active,
a:hover {
    outline: 0;
}




img {
    border: 0;
    /* 1 */
    -ms-interpolation-mode: bicubic;
    /* 2 */
}


/**
 * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.
 */

figure {
    margin: 0;
}


/**
 * Correct margin displayed oddly in IE 6/7.
 */

form {
    margin: 0;
}


/**
 * Define consistent border, margin, and padding.
 */

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}


/**
 * 1. Correct color not being inherited in IE 6/7/8/9.
 * 2. Correct text not wrapping in Firefox 3.
 * 3. Correct alignment displayed oddly in IE 6/7.
 */

legend {
    border: 0;
    /* 1 */
    padding: 0;
    white-space: normal;
    /* 2 */
    *margin-left: -7px;
    /* 3 */
}


/**
 * 1. Correct font size not being inherited in all browsers.
 * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,
 *    and Chrome.
 * 3. Improve appearance and consistency in all browsers.
 */

button,
input,
select,
textarea {
    font-size: 100%;
    /* 1 */
    margin: 0;
    /* 2 */
    vertical-align: baseline;
    /* 3 */
    *vertical-align: middle;
    /* 3 */
}




button,
input {
    line-height: normal;
}




button,
select {
    text-transform: none;
}




button,
html input[type="button"],

/* 1 */

input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    /* 2 */
    cursor: pointer;
    /* 3 */
    *overflow: visible;
    /* 4 */
}


/**
 * Re-set default cursor for disabled elements.
 */

button[disabled],
html input[disabled] {
    cursor: default;
}


/**
 * 1. Address box sizing set to content-box in IE 8/9.
 * 2. Remove excess padding in IE 8/9.
 * 3. Remove excess padding in IE 7.
 *    Known issue: excess padding remains in IE 6.
 */

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box;
    /* 1 */
    padding: 0;
    /* 2 */
    *height: 13px;
    /* 3 */
    *width: 13px;
    /* 3 */
}




input[type="search"] {
    -webkit-appearance: textfield;
    /* 1 */
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    /* 2 */
    box-sizing: content-box;
}


/**
 * Remove inner padding and search cancel button in Safari 5 and Chrome
 * on OS X.
 */

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}


/**
 * Remove inner padding and border in Firefox 3+.
 */

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}


/**
 * 1. Remove default vertical scrollbar in IE 6/7/8/9.
 * 2. Improve readability and alignment in all browsers.
 */

textarea {
    overflow: auto;
    /* 1 */
    vertical-align: top;
    /* 2 */
}


/**
 * Remove most spacing between table cells.
 */

table {
    border-collapse: collapse;
    border-spacing: 0;
}

html,
button,
input,
select,
textarea {
    color: #222;
}

::-moz-selection {
    background: #b3d4fc;
    text-shadow: none;
}

::selection {
    background: #b3d4fc;
    text-shadow: none;
}

img {
    vertical-align: middle;
}

fieldset {
    border: 0;
    margin: 0;
    padding: 0;
}

textarea {
    resize: vertical;
}

.chromeframe {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
}


/* ---------------------------------------*/

body {
    background: lightgray;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: white;
}

nav {
    width: 100%;
    background: white;
    margin-bottom: 20px;
}

#headerlogo {
    width: 22%;
    float: left;
    margin-left: 17%;
}

nav ul {
    list-style: none;
    margin-right: 20%;
    display: flex;
    justify-content: flex-end;
}

nav ul a {
    text-decoration: none;
    color: #808080;
    padding: 1em;
    display: inline-flex;
    font-size: 0.9em;
}

#start {
    width: 100%;
    padding-left: 17%;
    background-color: white;
    margin-bottom: 82px;
}

#p1 {
    color: #004481;
}

#p2 {
    color: #18b3ff;
    padding-top: 20px;
    font-weight: 700;
}

#workIMG {
    width: 338px;
    float: right;
    margin-right: 40%;
    vertical-align: top;
}

#login {
    margin-top: 20px;
    margin-left: 20px;
}

#login ul li {
    list-style: none;
    margin-bottom: 20px;
    font-size: 0.7em;
}

#user,
#password {
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid black;
    padding-right: 45px;
}

#remember {
    font-size: 9px;
    color: rgb(190, 188, 188);
    vertical-align: text-top;
}

#forget {
    margin-left: 15px;
    font-size: 9px;
    text-decoration: none;
    color: rgb(190, 188, 188);
    vertical-align: text-top;
}

#send {
    background-color: #1d73b2;
    color: white;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 13px;
    border: 1px;
    margin-left: 45px;
}

#register {
    font-size: 9px;
    text-decoration: none;
    color: rgb(179, 175, 175);
    margin-left: 62px;
    text-decoration: underline;
}

#features {
    background-color: #072146;
    padding: 25px;
    text-align: center;
}

#featuresText {
    color: white;
    font-weight: bold;
    font-size: 19px;
}

#anotherLevel {
    color: #f8cd51;
    font-weight: 100;
}

#features img {
    margin-top: 20px;
    width: 60px;
    ;
}

#features h1 {
    color: #f8cd51;
    font-size: 13px;
}

#features pre {
    color: white;
    font-size: 10px;
}

.articles {
    display: flex;
    align-self: flex-start;
    flex-flow: row wrap;
    margin-left: 40%;
}

.featuresBox {
    margin: 20px;
}

#learnMore {
    background-color: white;
    text-align: center;
    margin: 20px;
}

#learnText {
    color: #004481;
    font-size: 19px;
    font-weight: bold;
}

#aboutProject {
    color: #18b3ff;
    font-size: 19px;
}

#video {
    display: block;
    margin: 25px auto;
}
        `]}});customElements.define("leit-landing",class extends st{static get properties(){return{background:{type:String}}}constructor(){super()}render(){return I`
        <div style="background-color: ${this.background}"}'>
            <land-menu 
                options="Nosotros,Video,Try me" 
                optionsHREF="#nosotros,#video,#tryme"
                background="#18b3ff">
            </land-menu>

            <land-page></land-page>
        </div> 
        `}});customElements.define("app-home",class extends st{static get properties(){return{options:{type:Object},dashboard:{type:String}}}constructor(){super(),this.options={url:"https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/953ae31e-2158-4d08-9b83-9bf7b094a307",container:this.shadowRoot.getElementById("embeddingContainer"),parameters:{country:"United States",states:["California","Washington"]},scrolling:"no",height:"700px",width:"1000px",locale:"en-US",footerPaddingEnabled:!0}}render(){return I`
        <script src=></script>
        
        <!--<iframe title="Dasboards" src="https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/953ae31e-2158-4d08-9b83-9bf7b094a307"></iframe>-->
        <a href="https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/953ae31e-2158-4d08-9b83-9bf7b094a307"><h1>Home Dashboard</h1></a>
        <div id="embeddingContainer"></div> 
        `}showDashboard(){console.log("mostrando dashboard");let t=document.createElement("script");return t.onload=this.show2.bind(this),t.src="https://unpkg.com/amazon-quicksight-embedding-sdk@1.0.11/dist/quicksight-embedding-js-sdk.min.js",t}show2(){console.log("mostrando 2...")}show3(){console.log("mostrando 3..."),this.dashboard=QuickSightEmbedding.embedDashboard(this.options),this.dashboard.on("error",onError),this.dashboard.on("load",onDashboardLoad)}});customElements.define("app-status",class extends st{render(){return I`
        <h1>Server Status</h1>
        `}});customElements.define("app-batch",class extends st{render(){return I`
        <h1>Batch Process</h1>
        `}});customElements.define("app-menu",class extends st{static get properties(){return{options:{type:String},optionsArray:{type:Array},optionsHREF:{type:String},optionsHREFArray:{type:String},background:{type:String},stateLoad:{type:Boolean},currentOption:{type:String}}}constructor(){super(),this.stateLoad=!1,this.currentOption="#home"}firstUpdated(){this.optionsArray=this.options.split(","),this.optionsHREFArray=this.optionsHREF.split(","),this.stateLoad=!0}showCurrentView(){switch(this.currentOption){case"#home":return I`<app-home></app-home>`;case"#status":return I`<app-status></app-status>`;case"#batch":return I`<app-batch></app-batch>`}}render(){return I`
            <nav class="menu" style="background-color: ${this.background}">
                <button class="btnAction" @click="${this.actionMenu}" action="open" style="background-color: ${this.background}">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="options">
                    ${this.stateLoad?this.optionsArray.map((t,e)=>I`<li @click="${()=>{this.currentOption=this.optionsHREFArray[e],this.actionMenu()}}"
                                action="close">${t}</li>`):""}
                </ul>
            </nav>

            <div style="background-color: ${this.background}">${this.showCurrentView()}</div>
        `}actionMenu(){const t=this.shadowRoot.querySelector(".menu"),e=this.shadowRoot.querySelector(".btnAction"),s=e.getAttribute("action"),i=this.shadowRoot.querySelectorAll("li");try{"open"==s?(e.disabled=!0,e.classList.add("active"),e.setAttribute("action","close"),t.classList.add("active"),setTimeout(()=>{this.actionsOptions(i,0,"show")},800)):(e.disabled=!0,this.actionsOptions(i,i.length-1,"close"),setTimeout(()=>{e.classList.remove("active"),e.setAttribute("action","open"),t.classList.remove("active")},500))}catch(t){console.log(t)}finally{setTimeout(()=>{e.disabled=!1},1500)}}actionsOptions(t,e,s){"show"==s?e<t.length&&(t[e].classList.add("active"),setTimeout(()=>{this.actionsOptions(t,e+1,"show")},100)):e>=0&&(t[e].classList.remove("active"),setTimeout(()=>{this.actionsOptions(t,e-1,"close")},100))}static get styles(){return[tt`
        *{
            padding: 0;
            margin: 0;
            outline: 0;
            border: none;
            box-sizing: border-box;
            text-decoration: none;
            list-style: none;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .menu{
            width: 70px;
            height: 70px;
            position: fixed;
            top: 0;
            right: 0;
            z-index: 99;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-transition: width .5s, height .5s .5s;
            transition: width .5s, height .5s .5s;
            overflow: hidden;
        }
        .menu:hover{
            width: 80px;
        }
        .menu.active{
            width: 100%;
            height: 100vh;
        }
        .btnAction{
            width: 70px;
            height: 70px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            position: absolute;
            top: 0;
            right: 0;
            background-color: transparent;
            color: #ddd;
            cursor: pointer;
            z-index: 99;
        }
        .btnAction span{
            width: 40px;
            height: 3px;
            margin: 4px;
            background-color: #ddd; 
            -webkit-transition: margin .5s .5s, opacity .2s, -webkit-transform .5s .0s; 
            transition: margin .5s .5s, opacity .2s, -webkit-transform .5s .0s; 
            transition: margin .5s .5s, opacity .2s, transform .5s .0s; 
            transition: margin .5s .5s, opacity .2s, transform .5s .0s, -webkit-transform .5s .0s;
        }
        .btnAction.active span:first-child{
            margin-bottom: -8px;
            -webkit-transform: rotate(40deg);
                    transform: rotate(40deg);
            -webkit-transition: margin .5s .0s, opacity .2s, -webkit-transform .5s .5s;
            transition: margin .5s .0s, opacity .2s, -webkit-transform .5s .5s;
            transition: margin .5s .0s, opacity .2s, transform .5s .5s;
            transition: margin .5s .0s, opacity .2s, transform .5s .5s, -webkit-transform .5s .5s;
        }
        .btnAction.active span:nth-child(2){
            opacity: 0;
        }
        .btnAction.active span:last-child{
            margin-top: -6px;
            -webkit-transform: rotate(-40deg);
                    transform: rotate(-40deg);
            -webkit-transition: margin .5s .0s, opacity .2s, -webkit-transform .5s .5s;
            transition: margin .5s .0s, opacity .2s, -webkit-transform .5s .5s;
            transition: margin .5s .0s, opacity .2s, transform .5s .5s;
            transition: margin .5s .0s, opacity .2s, transform .5s .5s, -webkit-transform .5s .5s;
        }
        .options{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            position: relative;
            z-index: 90;
        }
        .options li a{
            color: #ddd;
            font-size: 2em;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            border-bottom: 2px solid transparent;
            -webkit-transition: border .3s, opacity .4s;
            transition: border .3s, opacity .4s;
            opacity: 0;
        }
        .options li a.active{
            opacity: 1;
            -webkit-transition: border .3s, opacity 1s;
            transition: border .3s, opacity 1s;
        }
        .options li a:hover{
            border-bottom: 2px solid #ddd;
        }
        .options li{
            margin: .3em;
        }
        `]}});customElements.define("leit-app",class extends st{static get properties(){return{currentView:{type:String},background:{type:String}}}constructor(){super(),this.currentView="#status"}showCurrentView(){switch(this.currentOption){case"#home":return I`<app-home></app-home>`;case"#status":return I`<app-status></app-status>`;case"#batch":return I`<app-batch></app-batch>`}}render(){return I`
        <div style="background-color: ${this.background}"}'>
            <app-menu id='menu'
                options="Home,Server(DB) Status,Batch,-Discover,-Configuration,-Log Out" 
                optionsHREF="#home,#status,#batch,#discover,#config,#logout"
                background="#18b3ff">
            </app-menu>

            <div>${this.showCurrentView()}</div>
        </div> 
        `}})}]);