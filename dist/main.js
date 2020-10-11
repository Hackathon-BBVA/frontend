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
const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},r=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${r}--\x3e`,a=new RegExp(`${r}|${o}`);class c{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let o=0,c=-1,p=0;const{strings:u,values:{length:m}}=t;for(;p<m;){const t=n.nextNode();if(null!==t){if(c++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)l(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=u[p],s=h.exec(e)[2],i=s.toLowerCase()+"$lit$",n=t.getAttribute(i);t.removeAttribute(i);const r=n.split(a);this.parts.push({type:"attribute",index:c,name:s,strings:r}),p+=r.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const i=t.parentNode,n=e.split(a),r=n.length-1;for(let e=0;e<r;e++){let s,r=n[e];if(""===r)s=d();else{const t=h.exec(r);null!==t&&l(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(r)}i.insertBefore(s,t),this.parts.push({type:"node",index:++c})}""===n[r]?(i.insertBefore(d(),t),s.push(t)):t.data=n[r],p+=r}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&c!==o||(c++,e.insertBefore(d(),t)),o=c,this.parts.push({type:"node",index:c}),null===t.nextSibling?t.data="":(s.push(t),c--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),p++}}else n.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const l=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},p=t=>-1!==t.index,d=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,133,null,!1);let r=g(i),o=i[r],a=-1,c=0;const l=[];let p=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(l.push(t),null===p&&(p=t)),null!==p&&c++;void 0!==o&&o.index===a;)o.index=null!==p?-1:o.index-c,r=g(i,r),o=i[r]}l.forEach(t=>t.parentNode.removeChild(t))}const m=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},g=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(p(e))return s}return-1};
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
const f=new WeakMap,y=t=>"function"==typeof t&&f.has(t),b={},w={};
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
class v{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,c=n.nextNode();for(;o<s.length;)if(r=s[o],p(r)){for(;a<r.index;)a++,"TEMPLATE"===c.nodeName&&(e.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=e.pop(),c=n.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return i&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const _=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),x=` ${r} `;class S{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===t.indexOf("--\x3e",n+1);const a=h.exec(t);e+=null===a?t+(s?x:o):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+r}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==_&&(e=_.createHTML(e)),t.innerHTML=e,t}}
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
const k=t=>null===t||!("object"==typeof t||"function"==typeof t),A=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!A(t))return t}let i="";for(let n=0;n<e;n++){i+=t[n];const e=s[n];if(void 0!==e){const t=e.value;if(k(t)||!A(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===b||k(t)&&t===this.value||(this.value=t,y(t)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const t=this.value;this.value=b,t(this)}this.value!==b&&this.committer.commit()}}class E{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;y(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}const t=this.__pendingValue;t!==b&&(k(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):A(t)?this.__commitIterable(t):t===w?(this.value=w,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const s=new v(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new E(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;y(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}if(this.__pendingValue===b)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=b}}class T extends P{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends C{}let V=!1;(()=>{try{const t={get capture(){return V=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class R{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;y(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}if(this.__pendingValue===b)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=L(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=b}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const L=t=>t&&(V?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function M(t){let e=U.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},U.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(r);return s=e.keyString.get(i),void 0===s&&(s=new c(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const U=new Map,$=new WeakMap;
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
class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new T(t,e.slice(1),s).parts}if("@"===n)return[new R(t,e.slice(1),i.eventContext)];if("?"===n)return[new N(t,e.slice(1),s)];return new P(t,e,s).parts}handleTextExpression(t){return new E(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const H=(t,...e)=>new S(t,e,"html",j),F=(t,e)=>`${t}--${e}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const q=t=>e=>{const s=F(e.type,t);let i=U.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},U.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(r);if(n=i.keyString.get(o),void 0===n){const s=e.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(s,t),n=new c(e,s),i.keyString.set(o,n)}return i.stringsArray.set(e.strings,n),n},z=["html","svg"],I=new Set,D=(t,e,s)=>{I.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{z.forEach(e=>{const s=U.get(F(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),u(t,s)})})})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const r=document.createTreeWalker(i,133,null,!1);let o=g(n),a=0,c=-1;for(;r.nextNode();){c++;for(r.currentNode===s&&(a=m(e),s.parentNode.insertBefore(e,s));-1!==o&&n[o].index===c;){if(a>0){for(;-1!==o;)n[o].index+=a,o=g(n,o);return}o=g(n,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),u(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:J};class Y extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=G){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdateInternal(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||G}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=J){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||W,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||W.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=G){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let i=!0;if(void 0!==t){const n=this.constructor;s=s||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Y.finalized=!0;const Z=Element.prototype;Z.msMatchesSelector||Z.webkitMatchesSelector;
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
const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new X(s,Q)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class st extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),i=[];s.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new X(String(e),Q)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return et}}st.finalized=!0,st.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,r=$.has(e),o=B&&11===e.nodeType&&!!e.host,a=o&&!I.has(i),c=a?document.createDocumentFragment():e;if(((t,e,s)=>{let i=$.get(e);void 0===i&&(n(e,e.firstChild),$.set(e,i=new E(Object.assign({templateFactory:M},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,c,Object.assign({templateFactory:q(i)},s)),a){const t=$.get(c);$.delete(c);const s=t.value instanceof v?t.value.template:void 0;D(i,c,s),n(e,e.firstChild),e.appendChild(c),$.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};customElements.define("land-menu",class extends st{static get properties(){return{options:{type:String},optionsArray:{type:Array},optionsHREF:{type:String},optionsHREFArray:{type:String},background:{type:String},stateLoad:{type:Boolean}}}constructor(){super(),this.stateLoad=!1}firstUpdated(){this.optionsArray=this.options.split(","),this.optionsHREFArray=this.optionsHREF.split(","),this.stateLoad=!0}render(){return H`
            <nav class="menu" style="background-color: ${this.background}">
                <button class="btnAction" @click="${this.actionMenu}" action="open" style="background-color: ${this.background}">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="options">
                    ${this.stateLoad?this.optionsArray.map((t,e)=>H`<li><a href="${this.optionsHREFArray[e]}" @click="${this.actionMenu}" action="close">${t}</a></li>`):""}
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
        `]}});customElements.define("land-page",class extends st{render(){return H`
        <link rel="stylesheet" href="../../css/style.css">
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
        `}});customElements.define("leit-landing",class extends st{static get properties(){return{background:{type:String}}}constructor(){super()}render(){return H`
        <div style="background-color: ${this.background}"}'>
            <land-menu 
                options="Nosotros,Video,Try me" 
                optionsHREF="#nosotros,#video,#tryme"
                background="#18b3ff">
            </land-menu>

            <land-page></land-page>
        </div> 
        `}});customElements.define("app-home",class extends st{render(){return H`
        <h1>Home Dashboard</h1>
        `}});customElements.define("app-status",class extends st{render(){return H`
        <h1>Server Status</h1>
        `}});customElements.define("app-batch",class extends st{render(){return H`
        <h1>Batch Process</h1>
        `}});customElements.define("app-menu",class extends st{static get properties(){return{options:{type:String},optionsArray:{type:Array},optionsHREF:{type:String},optionsHREFArray:{type:String},background:{type:String},stateLoad:{type:Boolean},currentOption:{type:String}}}constructor(){super(),this.stateLoad=!1,this.currentOption="#home"}firstUpdated(){this.optionsArray=this.options.split(","),this.optionsHREFArray=this.optionsHREF.split(","),this.stateLoad=!0}showCurrentView(){switch(this.currentOption){case"#home":return H`<app-home></app-home>`;case"#status":return H`<app-status></app-status>`;case"#batch":return H`<app-batch></app-batch>`}}render(){return H`
            <nav class="menu" style="background-color: ${this.background}">
                <button class="btnAction" @click="${this.actionMenu}" action="open" style="background-color: ${this.background}">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="options">
                    ${this.stateLoad?this.optionsArray.map((t,e)=>H`<li @click="${()=>{this.currentOption=this.optionsHREFArray[e],this.actionMenu()}}"
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
        `]}});customElements.define("leit-app",class extends st{static get properties(){return{currentView:{type:String},background:{type:String}}}constructor(){super(),this.currentView="#status"}showCurrentView(){switch(this.currentOption){case"#home":return H`<app-home></app-home>`;case"#status":return H`<app-status></app-status>`;case"#batch":return H`<app-batch></app-batch>`}}render(){return H`
        <div style="background-color: ${this.background}"}'>
            <app-menu id='menu'
                options="Home,Server(DB) Status,Batch,-Discover,-Configuration,-Log Out" 
                optionsHREF="#home,#status,#batch,#discover,#config,#logout"
                background="#18b3ff">
            </app-menu>

            <div>${this.showCurrentView()}</div>
        </div> 
        `}})}]);