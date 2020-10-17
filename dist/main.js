!function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);
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
const o="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},r=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${r}--\x3e`,a=new RegExp(`${r}|${s}`);class l{constructor(e,t){this.parts=[],this.element=t;const i=[],o=[],n=document.createTreeWalker(t.content,133,null,!1);let s=0,l=-1,d=0;const{strings:h,values:{length:g}}=e;for(;d<g;){const e=n.nextNode();if(null!==e){if(l++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let o=0;for(let e=0;e<i;e++)c(t[e].name,"$lit$")&&o++;for(;o-- >0;){const t=h[d],i=u.exec(t)[2],o=i.toLowerCase()+"$lit$",n=e.getAttribute(o);e.removeAttribute(o);const r=n.split(a);this.parts.push({type:"attribute",index:l,name:i,strings:r}),d+=r.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const o=e.parentNode,n=t.split(a),r=n.length-1;for(let t=0;t<r;t++){let i,r=n[t];if(""===r)i=p();else{const e=u.exec(r);null!==e&&c(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(r)}o.insertBefore(i,e),this.parts.push({type:"node",index:++l})}""===n[r]?(o.insertBefore(p(),e),i.push(e)):e.data=n[r],d+=r}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&l!==s||(l++,t.insertBefore(p(),e)),s=l,this.parts.push({type:"node",index:l}),null===e.nextSibling?e.data="":(i.push(e),l--),d++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1}),d++}}else n.currentNode=o.pop()}for(const e of i)e.parentNode.removeChild(e)}}const c=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},d=e=>-1!==e.index,p=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:i},parts:o}=e,n=document.createTreeWalker(i,133,null,!1);let r=b(o),s=o[r],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,r=b(o,r),s=o[r]}c.forEach(e=>e.parentNode.removeChild(e))}const g=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},b=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(d(t))return i}return-1};
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
const m=new WeakMap,f=e=>"function"==typeof e&&m.has(e),x={},y={};
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
class w{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r,s=0,a=0,l=n.nextNode();for(;s<i.length;)if(r=i[s],d(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=t.pop(),l=n.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),k=` ${r} `;class _{constructor(e,t,i,o){this.strings=e,this.values=t,this.type=i,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let o=0;o<e;o++){const e=this.strings[o],n=e.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===e.indexOf("--\x3e",n+1);const a=u.exec(e);t+=null===a?e+(i?k:s):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+r}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==v&&(t=v.createHTML(t)),e.innerHTML=t,e}}
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
const S=e=>null===e||!("object"==typeof e||"function"==typeof e),z=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class P{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new T(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!z(e))return e}let o="";for(let n=0;n<t;n++){o+=e[n];const t=i[n];if(void 0!==t){const e=t.value;if(S(e)||!z(e))o+="string"==typeof e?e:String(e);else for(const t of e)o+="string"==typeof t?t:String(t)}}return o+=e[t],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class T{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===x||S(e)&&e===this.value||(this.value=e,f(e)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const e=this.value;this.value=x,e(this)}this.value!==x&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(p()),this.endNode=e.appendChild(p())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=p()),e.__insert(this.endNode=p())}insertAfterPart(e){e.__insert(this.startNode=p()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=x,e(this)}const e=this.__pendingValue;e!==x&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof _?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):z(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof w&&this.value.template===t)this.value.update(e.values);else{const i=new w(t,e.processor,this.options),o=i._clone();i.update(e.values),this.__commitNode(o),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,o=0;for(const n of e)i=t[o],void 0===i&&(i=new C(this.options),t.push(i),0===o?i.appendIntoPart(this):i.insertAfterPart(t[o-1])),i.setValue(n),i.commit(),o++;o<t.length&&(t.length=o,this.clear(i&&i.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=x,e(this)}if(this.__pendingValue===x)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=x}}class A extends P{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends T{}let q=!1;(()=>{try{const e={get capture(){return q=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class O{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=x,e(this)}if(this.__pendingValue===x)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=V(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=x}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const V=e=>e&&(q?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function j(e){let t=M.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},M.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(r);return i=t.keyString.get(o),void 0===i&&(i=new l(e,e.getTemplateElement()),t.keyString.set(o,i)),t.stringsArray.set(e.strings,i),i}const M=new Map,U=new WeakMap;
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
 */const R=new
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
class{handleAttributeExpressions(e,t,i,o){const n=t[0];if("."===n){return new A(e,t.slice(1),i).parts}if("@"===n)return[new O(e,t.slice(1),o.eventContext)];if("?"===n)return[new E(e,t.slice(1),i)];return new P(e,t,i).parts}handleTextExpression(e){return new C(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const L=(e,...t)=>new _(e,t,"html",R),I=(e,t)=>`${e}--${t}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const $=e=>t=>{const i=I(t.type,e);let o=M.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},M.set(i,o));let n=o.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(r);if(n=o.keyString.get(s),void 0===n){const i=t.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(i,e),n=new l(t,i),o.keyString.set(s,n)}return o.stringsArray.set(t.strings,n),n},F=["html","svg"],H=new Set,D=(e,t,i)=>{H.add(e);const o=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(o,e);const s=document.createElement("style");for(let e=0;e<r;e++){const t=n[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{F.forEach(t=>{const i=M.get(I(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),h(e,i)})})})(e);const a=o.content;i?function(e,t,i=null){const{element:{content:o},parts:n}=e;if(null==i)return void o.appendChild(t);const r=document.createTreeWalker(o,133,null,!1);let s=b(n),a=0,l=-1;for(;r.nextNode();){l++;for(r.currentNode===i&&(a=g(t),i.parentNode.insertBefore(t,i));-1!==s&&n[s].index===l;){if(a>0){for(;-1!==s;)n[s].index+=a,s=b(n,s);return}s=b(n,s)}}}(i,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),h(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const G={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:W};class Q extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const o=this._attributeNameForProperty(i,t);void 0!==o&&(this._attributeToPropertyMap.set(o,i),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const n=this[e];this[t]=o,this.requestUpdateInternal(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||J}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=W){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,o=t.converter||G,n="function"==typeof o?o:o.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,o=t.converter;return(o&&o.toAttribute||G.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=J){const o=this.constructor,n=o._attributeNameForProperty(e,i);if(void 0!==n){const e=o._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(e);if(void 0!==o){const e=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let o=!0;if(void 0!==e){const n=this.constructor;i=i||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Q.finalized=!0;const K=Element.prototype;K.msMatchesSelector||K.webkitMatchesSelector;
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
const Y=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol();class X{constructor(e,t){if(t!==Z)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const i=t.reduce((t,i,o)=>t+(e=>{if(e instanceof X)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[o+1],e[0]);return new X(i,Z)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const te={};class ie extends Q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),o=[];i.forEach(e=>o.unshift(e)),this._styles=o}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!Y){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new X(String(t),Z)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}ie.finalized=!0,ie.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,r=U.has(t),s=B&&11===t.nodeType&&!!t.host,a=s&&!H.has(o),l=a?document.createDocumentFragment():t;if(((e,t,i)=>{let o=U.get(t);void 0===o&&(n(t,t.firstChild),U.set(t,o=new C(Object.assign({templateFactory:j},i))),o.appendInto(t)),o.setValue(e),o.commit()})(e,l,Object.assign({templateFactory:$(o)},i)),a){const e=U.get(l);U.delete(l);const i=e.value instanceof w?e.value.template:void 0;D(o,l,i),n(t,t.firstChild),t.appendChild(l),U.set(t,e)}!r&&s&&window.ShadyCSS.styleElement(t.host)};customElements.define("section-login",class extends ie{render(){return L`
        <section>
    <div id="start">
        <img src="../../images/img_1.png" id="workIMG" />
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
</section>
        `}static get styles(){return[ee`
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

:focus {
    outline: 0;
}

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

[hidden] {
    display: none;
}

html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

a:focus {
    outline: thin dotted;
}

a:active,
a:hover {
    outline: 0;
}

img {
    border: 0;
    -ms-interpolation-mode: bicubic;
}

figure {
    margin: 0;
}

form {
    margin: 0;
}

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}

legend {
    border: 0;
    padding: 0;
    white-space: normal;
    *margin-left: -7px;
}

button,
input,
select,
textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    *vertical-align: middle;
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
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
    *overflow: visible;
}

button[disabled],
html input[disabled] {
    cursor: default;
}

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
    *height: 13px;
    *width: 13px;
}

input[type="search"] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}

textarea {
    overflow: auto;
    vertical-align: top;
}

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
            `]}});customElements.define("section-features",class extends ie{render(){return L`
        <section>
    <div id="features">
        <span id="featuresText">LLEVAMOS TUS DATOS DE VOZ
        <span id="anotherLevel">A OTRO NIVEL</span></span>
        <div class="articles">
            <article class="featuresBox">
                <img src="../../images/ai.png" />

                <h1>Audio a texto</h1>
                <pre>
Transcribe automáticaticamente
grabaciones.</pre>
            </article>

            <article class="featuresBox">
                <img src="../../images/search.png" />

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
                <img src="../../images/ai.png" />

                <h1>Tono y sentimientos</h1>
                <pre>
Detecta métricas
paralingüisticas para conocer
mejor a tus usuarios</pre>
            </article>

            <article class="featuresBox">
                <img src="../../images/search.png" />

                <h1>Predicciones IA</h1>
                <pre>Prediga comportamientos
complejos mediante el
aprendizaje automático
        </pre>
            </article>
        </div>
    </div>
</section>
        `}static get styles(){return[ee`
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

:focus {
    outline: 0;
}

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

[hidden] {
    display: none;
}

html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

a:focus {
    outline: thin dotted;
}

a:active,
a:hover {
    outline: 0;
}

img {
    border: 0;
    -ms-interpolation-mode: bicubic;
}

figure {
    margin: 0;
}

form {
    margin: 0;
}

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}

legend {
    border: 0;
    padding: 0;
    white-space: normal;
    *margin-left: -7px;
}

button,
input,
select,
textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    *vertical-align: middle;
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
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
    *overflow: visible;
}

button[disabled],
html input[disabled] {
    cursor: default;
}

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
    *height: 13px;
    *width: 13px;
}

input[type="search"] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}

textarea {
    overflow: auto;
    vertical-align: top;
}

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
            `]}});customElements.define("section-video",class extends ie{render(){return L`
        <section>
            <div id='learnMore'>
                <span id="learnText">CONOCE MÁS
                    <span id="aboutProject">SOBRE EL PROYECTO</span></span>
        
                <iframe id='video' width="500" height="315" src="https://www.youtube.com/embed/jFkjLq8LLnM">
                </iframe>
            </div>
        </section>
        `}static get styles(){return[ee`
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

:focus {
    outline: 0;
}

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

[hidden] {
    display: none;
}

html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

a:focus {
    outline: thin dotted;
}

a:active,
a:hover {
    outline: 0;
}

img {
    border: 0;
    -ms-interpolation-mode: bicubic;
}

figure {
    margin: 0;
}

form {
    margin: 0;
}

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}

legend {
    border: 0;
    padding: 0;
    white-space: normal;
    *margin-left: -7px;
}

button,
input,
select,
textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    *vertical-align: middle;
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
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
    *overflow: visible;
}

button[disabled],
html input[disabled] {
    cursor: default;
}

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
    *height: 13px;
    *width: 13px;
}

input[type="search"] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}

textarea {
    overflow: auto;
    vertical-align: top;
}

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
            `]}});customElements.define("section-equipo",class extends ie{render(){return L`
<section>
    <span id="learnText">EQUIPO
                    <span id="anotherLevel">LEITMOTIV</span></span>

    <div class="articles">
        <article class="featuresBox">
            <img src="../../images/ai.png" />
            <span>Karla Vega</span>
            <p>Frontend</p>
        </article>
        <article class="featuresBox">
            <img src="../../images/ai.png" />
            <span>Ana Lucía Quispe</span>
            <p>Frontend</p>
        </article>
        <article class="featuresBox">
            <img src="../../images/ai.png" />
            <span>Carlo Raúl Martínez</span>
            <p>Frontend</p>
        </article>
        <article class="featuresBox">
            <img src="../../images/ai.png" />
            <span>Jordan King Rodríguez</span>
            <p>Frontend</p>
        </article>
        <article class="featuresBox">
            <img src="../../images/ai.png" />
            <span>Carlos Eduardo Ramírez</span>
            <p>Frontend</p>
        </article>
    </div>
</section>
`}static get styles(){return[ee`
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

:focus {
    outline: 0;
}

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

[hidden] {
    display: none;
}

html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

a:focus {
    outline: thin dotted;
}

a:active,
a:hover {
    outline: 0;
}

img {
    border: 0;
    -ms-interpolation-mode: bicubic;
}

figure {
    margin: 0;
}

form {
    margin: 0;
}

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}

legend {
    border: 0;
    padding: 0;
    white-space: normal;
    *margin-left: -7px;
}

button,
input,
select,
textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    *vertical-align: middle;
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
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
    *overflow: visible;
}

button[disabled],
html input[disabled] {
    cursor: default;
}

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
    *height: 13px;
    *width: 13px;
}

input[type="search"] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}

textarea {
    overflow: auto;
    vertical-align: top;
}

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
            `]}});customElements.define("section-info",class extends ie{render(){return L`
        <section>
    <div id="start">
        <img src="../../images/img_1.png" id="workIMG" />
        <span id="p2">¿DESEAS MÁS
            <span id="p1">INFORMACIÓN?</span></span>

        <form name="form" id="login" onsubmit="validar();">
            <ul>
                <li>
                    <label for="user">Nombre</label><br /><br />
                    <input type="text" id="user" name="user" />
                </li>

                <li>
                    <label for="password">Apellido</label><br /><br />
                    <input type="password" id="password" name="password" />
                </li>
                <li>
                    <label for="user">Email</label><br /><br />
                    <input type="text" id="user" name="user" />
                </li>

                <li>
                    <label for="password">Cargo</label><br /><br />
                    <input type="password" id="password" name="password" />
                </li>
                <li>
                    <input type="text" id="motivo" name="password" placeholder="motivoContacto" />
                </li>

                <li>
                    <button id="send" type="submit">ENVIAR</button><br />
                </li>
            </ul>
        </form>
    </div>
</section>
        `}static get styles(){return[ee`
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

:focus {
    outline: 0;
}

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

[hidden] {
    display: none;
}

html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

a:focus {
    outline: thin dotted;
}

a:active,
a:hover {
    outline: 0;
}

img {
    border: 0;
    -ms-interpolation-mode: bicubic;
}

figure {
    margin: 0;
}

form {
    margin: 0;
}

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}

legend {
    border: 0;
    padding: 0;
    white-space: normal;
    *margin-left: -7px;
}

button,
input,
select,
textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    *vertical-align: middle;
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
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
    *overflow: visible;
}

button[disabled],
html input[disabled] {
    cursor: default;
}

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
    *height: 13px;
    *width: 13px;
}

input[type="search"] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}

textarea {
    overflow: auto;
    vertical-align: top;
}

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
            `]}});customElements.define("leit-landing",class extends ie{static get properties(){return{background:{type:String}}}constructor(){super()}render(){return L`
        <!--<div style="background-color: ${this.background}"}'>-->
        <link rel="stylesheet" href="../css/style.css">
        <div id="container">
            
        <!--nav-->
        <nav>
            <img src="images/img_logo.png" alt="BBVA smartspeech" id="headerlogo" />
        
            <ul>
                <li><a id="inicio" class="elemento" href="#">Sobre el proyecto</a></li>
                <li><a id="socios" class="elemento" href="#">Equipo Leitmotiv</a></li>
                <li><a id="galeria" class="elemento" href="#">Soporte</a></li>
            </ul>
        </nav>

        <!--login-->
        <section-login></section-login>
        <!--features-->
        <section-features></section-features>
        <!--video-->
        <section-video></section-video>
        <!--equipo-->
        <section-equipo></section-equipo>
        <!--info-->
        <section-info></section-info>
            
        </div>
        </div> 
        `}});customElements.define("app-home",class extends ie{static get properties(){return{options:{type:Object},dashboard:{type:String}}}constructor(){super(),this.options={url:"https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/953ae31e-2158-4d08-9b83-9bf7b094a307",container:this.shadowRoot.getElementById("embeddingContainer"),parameters:{country:"United States",states:["California","Washington"]},scrolling:"no",height:"700px",width:"1000px",locale:"en-US",footerPaddingEnabled:!0}}render(){return L`
        <script src=></script>
        
        <!--<iframe title="Dasboards" src="https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/953ae31e-2158-4d08-9b83-9bf7b094a307"></iframe>-->
        <a href="https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/953ae31e-2158-4d08-9b83-9bf7b094a307"><h1>Home Dashboard</h1></a>
        <div id="embeddingContainer"></div> 
        `}showDashboard(){console.log("mostrando dashboard");let e=document.createElement("script");return e.onload=this.show2.bind(this),e.src="https://unpkg.com/amazon-quicksight-embedding-sdk@1.0.11/dist/quicksight-embedding-js-sdk.min.js",e}show2(){console.log("mostrando 2...")}show3(){console.log("mostrando 3..."),this.dashboard=QuickSightEmbedding.embedDashboard(this.options),this.dashboard.on("error",onError),this.dashboard.on("load",onDashboardLoad)}});customElements.define("app-status",class extends ie{render(){return L`
        <h1>Server Status</h1>
        `}});customElements.define("app-batch",class extends ie{render(){return L`
        <h1>Batch Process</h1>
        `}});customElements.define("app-menu",class extends ie{static get properties(){return{options:{type:String},optionsArray:{type:Array},optionsHREF:{type:String},optionsHREFArray:{type:String},background:{type:String},stateLoad:{type:Boolean},currentOption:{type:String}}}constructor(){super(),this.stateLoad=!1,this.currentOption="#home"}firstUpdated(){this.optionsArray=this.options.split(","),this.optionsHREFArray=this.optionsHREF.split(","),this.stateLoad=!0}showCurrentView(){switch(this.currentOption){case"#home":return L`<app-home></app-home>`;case"#status":return L`<app-status></app-status>`;case"#batch":return L`<app-batch></app-batch>`}}render(){return L`
        <link rel="stylesheet" href="../css/app-menu.css">
            <nav class="menu" style="background-color: ${this.background}">
                <button class="btnAction" @click="${this.actionMenu}" action="open" style="background-color: ${this.background}">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="options">
                    ${this.stateLoad?this.optionsArray.map((e,t)=>L`<li @click="${()=>{this.currentOption=this.optionsHREFArray[t],this.actionMenu()}}"
                                action="close">${e}</li>`):""}
                </ul>
            </nav>

            <div style="background-color: ${this.background}">${this.showCurrentView()}</div>
        `}actionMenu(){const e=this.shadowRoot.querySelector(".menu"),t=this.shadowRoot.querySelector(".btnAction"),i=t.getAttribute("action"),o=this.shadowRoot.querySelectorAll("li");try{"open"==i?(t.disabled=!0,t.classList.add("active"),t.setAttribute("action","close"),e.classList.add("active"),setTimeout(()=>{this.actionsOptions(o,0,"show")},800)):(t.disabled=!0,this.actionsOptions(o,o.length-1,"close"),setTimeout(()=>{t.classList.remove("active"),t.setAttribute("action","open"),e.classList.remove("active")},500))}catch(e){console.log(e)}finally{setTimeout(()=>{t.disabled=!1},1500)}}actionsOptions(e,t,i){"show"==i?t<e.length&&(e[t].classList.add("active"),setTimeout(()=>{this.actionsOptions(e,t+1,"show")},100)):t>=0&&(e[t].classList.remove("active"),setTimeout(()=>{this.actionsOptions(e,t-1,"close")},100))}static get styles(){return[ee`
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
        `]}});customElements.define("leit-app",class extends ie{static get properties(){return{currentView:{type:String},background:{type:String}}}constructor(){super(),this.currentView="#status"}showCurrentView(){switch(this.currentOption){case"#home":return L`<app-home></app-home>`;case"#status":return L`<app-status></app-status>`;case"#batch":return L`<app-batch></app-batch>`}}render(){return L`
        <div style="background-color: ${this.background}"}'>
            <app-menu id='menu'
                options="Home,Server(DB) Status,Batch,-Discover,-Configuration,-Log Out" 
                optionsHREF="#home,#status,#batch,#discover,#config,#logout"
                background="#18b3ff">
            </app-menu>

            <div>${this.showCurrentView()}</div>
        </div> 
        `}})}]);