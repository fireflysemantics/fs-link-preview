!function(t){
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
const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,i,s=null)=>{for(;i!==s;){const s=i.nextSibling;t.removeChild(i),i=s}},e=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${e}--\x3e`,o=new RegExp(`${e}|${n}`);class r{constructor(t,i){this.parts=[],this.element=i;const s=[],n=[],r=document.createTreeWalker(i.content,133,null,!1);let c=0,f=-1,u=0;const{strings:d,values:{length:p}}=t;for(;u<p;){const t=r.nextNode();if(null!==t){if(f++,1===t.nodeType){if(t.hasAttributes()){const i=t.attributes,{length:s}=i;let e=0;for(let t=0;t<s;t++)h(i[t].name,"$lit$")&&e++;for(;e-- >0;){const i=d[u],s=l.exec(i)[2],e=s.toLowerCase()+"$lit$",n=t.getAttribute(e);t.removeAttribute(e);const r=n.split(o);this.parts.push({type:"attribute",index:f,name:s,strings:r}),u+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const i=t.data;if(i.indexOf(e)>=0){const e=t.parentNode,n=i.split(o),r=n.length-1;for(let i=0;i<r;i++){let s,o=n[i];if(""===o)s=a();else{const t=l.exec(o);null!==t&&h(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(o)}e.insertBefore(s,t),this.parts.push({type:"node",index:++f})}""===n[r]?(e.insertBefore(a(),t),s.push(t)):t.data=n[r],u+=r}}else if(8===t.nodeType)if(t.data===e){const i=t.parentNode;null!==t.previousSibling&&f!==c||(f++,i.insertBefore(a(),t)),c=f,this.parts.push({type:"node",index:f}),null===t.nextSibling?t.data="":(s.push(t),f--),u++}else{let i=-1;for(;-1!==(i=t.data.indexOf(e,i+1));)this.parts.push({type:"node",index:-1}),u++}}else r.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const h=(t,i)=>{const s=t.length-i.length;return s>=0&&t.slice(s)===i},c=t=>-1!==t.index,a=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function f(t,i){const{element:{content:s},parts:e}=t,n=document.createTreeWalker(s,133,null,!1);let o=d(e),r=e[o],h=-1,c=0;const a=[];let l=null;for(;n.nextNode();){h++;const t=n.currentNode;for(t.previousSibling===l&&(l=null),i.has(t)&&(a.push(t),null===l&&(l=t)),null!==l&&c++;void 0!==r&&r.index===h;)r.index=null!==l?-1:r.index-c,o=d(e,o),r=e[o]}a.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let i=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)i++;return i},d=(t,i=-1)=>{for(let s=i+1;s<t.length;s++){const i=t[s];if(c(i))return s}return-1};
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
const p=new WeakMap,m=t=>"function"==typeof t&&p.has(t),w={},y={};
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
class v{constructor(t,i,s){this.t=[],this.template=t,this.processor=i,this.options=s}update(t){let i=0;for(const s of this.t)void 0!==s&&s.setValue(t[i]),i++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],e=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,r=0,h=0,a=n.nextNode();for(;r<e.length;)if(o=e[r],c(o)){for(;h<o.index;)h++,"TEMPLATE"===a.nodeName&&(s.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=s.pop(),a=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return i&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
     */const g=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),b=` ${e} `;class S{constructor(t,i,s,e){this.strings=t,this.values=i,this.type=s,this.processor=e}getHTML(){const t=this.strings.length-1;let i="",s=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===t.indexOf("--\x3e",r+1);const h=l.exec(t);i+=null===h?t+(s?b:n):t.substr(0,h.index)+h[1]+h[2]+"$lit$"+h[3]+e}return i+=this.strings[t],i}getTemplateElement(){const t=document.createElement("template");let i=this.getHTML();return void 0!==g&&(i=g.createHTML(i)),t.innerHTML=i,t}}
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
     */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),_=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class M{constructor(t,i,s){this.dirty=!0,this.element=t,this.name=i,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,i=t.length-1,s=this.parts;if(1===i&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!_(t))return t}let e="";for(let n=0;n<i;n++){e+=t[n];const i=s[n];if(void 0!==i){const t=i.value;if(x(t)||!_(t))e+="string"==typeof t?t:String(t);else for(const i of t)e+="string"==typeof i?i:String(i)}}return e+=t[i],e}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===w||x(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=w,t(this)}this.value!==w&&this.committer.commit()}}class k{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(a()),this.endNode=t.appendChild(a())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=a()),t.s(this.endNode=a())}insertAfterPart(t){t.s(this.startNode=a()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.i);){const t=this.i;this.i=w,t(this)}const t=this.i;t!==w&&(x(t)?t!==this.value&&this.o(t):t instanceof S?this.h(t):t instanceof Node?this.l(t):_(t)?this.u(t):t===y?(this.value=y,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const i=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);i===this.endNode.previousSibling&&3===i.nodeType?i.data=s:this.l(document.createTextNode(s)),this.value=t}h(t){const i=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===i)this.value.update(t.values);else{const s=new v(i,t.processor,this.options),e=s._clone();s.update(t.values),this.l(e),this.value=s}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const i=this.value;let s,e=0;for(const n of t)s=i[e],void 0===s&&(s=new k(this.options),i.push(s),0===e?s.appendIntoPart(this):s.insertAfterPart(i[e-1])),s.setValue(n),s.commit(),e++;e<i.length&&(i.length=e,this.clear(s&&s.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class j{constructor(t,i,s){if(this.value=void 0,this.i=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=i,this.strings=s}setValue(t){this.i=t}commit(){for(;m(this.i);){const t=this.i;this.i=w,t(this)}if(this.i===w)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=w}}class A extends M{constructor(t,i,s){super(t,i,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new U(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class U extends P{}let R=!1;(()=>{try{const t={get capture(){return R=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class C{constructor(t,i,s){this.value=void 0,this.i=void 0,this.element=t,this.eventName=i,this.eventContext=s,this.p=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;m(this.i);){const t=this.i;this.i=w,t(this)}if(this.i===w)return;const t=this.i,i=this.value,s=null==t||null!=i&&(t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive),e=null!=t&&(null==i||s);s&&this.element.removeEventListener(this.eventName,this.p,this.m),e&&(this.m=E(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.i=w}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(R?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;function $(t){let i=F.get(t.type);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},F.set(t.type,i));let s=i.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(e);return s=i.keyString.get(n),void 0===s&&(s=new r(t,t.getTemplateElement()),i.keyString.set(n,s)),i.stringsArray.set(t.strings,s),s}const F=new Map,T=new WeakMap;
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
     */const I=new
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
class{handleAttributeExpressions(t,i,s,e){const n=i[0];if("."===n){return new A(t,i.slice(1),s).parts}if("@"===n)return[new C(t,i.slice(1),e.eventContext)];if("?"===n)return[new j(t,i.slice(1),s)];return new M(t,i,s).parts}handleTextExpression(t){return new k(t)}};
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
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const O=(t,...i)=>new S(t,i,"html",I)
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
     */,L=(t,i)=>`${t}--${i}`;let N=!0;void 0===window.ShadyCSS?N=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),N=!1);const W=t=>i=>{const s=L(i.type,t);let n=F.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},F.set(s,n));let o=n.stringsArray.get(i.strings);if(void 0!==o)return o;const h=i.strings.join(e);if(o=n.keyString.get(h),void 0===o){const s=i.getTemplateElement();N&&window.ShadyCSS.prepareTemplateDom(s,t),o=new r(i,s),n.keyString.set(h,o)}return n.stringsArray.set(i.strings,o),o},K=["html","svg"],Y=new Set,D=(t,i,s)=>{Y.add(t);const e=s?s.element:document.createElement("template"),n=i.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(e,t);const r=document.createElement("style");for(let t=0;t<o;t++){const i=n[t];i.parentNode.removeChild(i),r.textContent+=i.textContent}(t=>{K.forEach(i=>{const s=F.get(L(i,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:i}}=t,s=new Set;Array.from(i.querySelectorAll("style")).forEach(t=>{s.add(t)}),f(t,s)})})})(t);const h=e.content;s?function(t,i,s=null){const{element:{content:e},parts:n}=t;if(null==s)return void e.appendChild(i);const o=document.createTreeWalker(e,133,null,!1);let r=d(n),h=0,c=-1;for(;o.nextNode();){c++;for(o.currentNode===s&&(h=u(i),s.parentNode.insertBefore(i,s));-1!==r&&n[r].index===c;){if(h>0){for(;-1!==r;)n[r].index+=h,r=d(n,r);return}r=d(n,r)}}}(s,r,h.firstChild):h.insertBefore(r,h.firstChild),window.ShadyCSS.prepareTemplateStyles(e,t);const c=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)i.insertBefore(c.cloneNode(!0),i.firstChild);else if(s){h.insertBefore(r,h.firstChild);const t=new Set;t.add(r),f(s,t)}};window.JSCompiler_renameProperty=(t,i)=>t;const B={toAttribute(t,i){switch(i){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){switch(i){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},H=(t,i)=>i!==t&&(i==i||t==t),z={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:H};class V extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((i,s)=>{const e=this._attributeNameForProperty(s,i);void 0!==e&&(this._attributeToPropertyMap.set(e,s),t.push(e))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,i)=>this._classProperties.set(i,t))}}static createProperty(t,i=z){if(this._ensureClassProperties(),this._classProperties.set(t,i),i.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdateInternal(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||z}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,i=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of i)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,i,s=H){return s(t,i)}static _propertyValueFromAttribute(t,i){const s=i.type,e=i.converter||B,n="function"==typeof e?e:e.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,i){if(void 0===i.reflect)return;const s=i.type,e=i.converter;return(e&&e.toAttribute||B.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,i)=>{if(this.hasOwnProperty(i)){const t=this[i];delete this[i],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(i,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,i)=>this[i]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,i,s){i!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,i,s=z){const e=this.constructor,n=e._attributeNameForProperty(t,s);if(void 0!==n){const t=e._propertyValueToAttribute(i,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,i){if(8&this._updateState)return;const s=this.constructor,e=s._attributeToPropertyMap.get(t);if(void 0!==e){const t=s.getPropertyOptions(e);this._updateState=16|this._updateState,this[e]=s._propertyValueFromAttribute(i,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,i,s){let e=!0;if(void 0!==t){const n=this.constructor;s=s||n.getPropertyOptions(t),n._valueHasChanged(this[t],i,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,i),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):e=!1}!this._hasRequestedUpdate&&e&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,i){return this.requestUpdateInternal(t,i),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const i=this._changedProperties;try{t=this.shouldUpdate(i),t?this.update(i):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(i)),this.updated(i))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,i)=>this._propertyToAttribute(i,this[i],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}V.finalized=!0;
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
const Z=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?Object.assign(Object.assign({},i),{finisher(s){s.createProperty(i.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};function Q(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):Z(t,i)}
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */const q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class X{constructor(t,i){if(i!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const G={};class tt extends V{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const i=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?i(s,t):(t.add(s),t),s),s=i(t,new Set),e=[];s.forEach(t=>e.unshift(t)),this._styles=e}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!q){const i=Array.prototype.slice.call(t.cssRules).reduce((t,i)=>t+i.cssText,"");return new X(String(i),J)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?q?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const i=this.render();super.update(t),i!==G&&this.constructor.render(i,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const i=document.createElement("style");i.textContent=t.cssText,this.renderRoot.appendChild(i)}))}render(){return G}}tt.finalized=!0,tt.render=(t,i,e)=>{if(!e||"object"!=typeof e||!e.scopeName)throw new Error("The `scopeName` option is required.");const n=e.scopeName,o=T.has(i),r=N&&11===i.nodeType&&!!i.host,h=r&&!Y.has(n),c=h?document.createDocumentFragment():i;if(((t,i,e)=>{let n=T.get(i);void 0===n&&(s(i,i.firstChild),T.set(i,n=new k(Object.assign({templateFactory:$},e))),n.appendInto(i)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:W(n)},e)),h){const t=T.get(c);T.delete(c);const e=t.value instanceof v?t.value.template:void 0;D(n,c,e),s(i,i.firstChild),i.appendChild(c),T.set(i,t)}!o&&r&&window.ShadyCSS.styleElement(i.host)};var it,st=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(n=t[h])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};t.FSLinkPreviewElement=class extends tt{constructor(){super(),this.url="",this.imageURL="",this.domain="",this.description="",this.height="",this.width=""}firstUpdated(){}render(){return O`
<a href="${this.url}">
  <section class="LinkPreviewMeta">
    <div class="LinkPreviewMeta_title">${this.title}</div>
    <div class="LinkPreviewMeta_description">${this.description}</div>
    <div class="LinkPreviewMeta_domain">${this.domain}</div>
  </section>
  <div class="ImageContainer">
    <img src="${this.imageURL}">
  </div>
</a>
`}},t.FSLinkPreviewElement.styles=((t,...i)=>{const s=i.reduce((i,s,e)=>i+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[e+1],t[0]);return new X(s,J)})`

@font-face {
          font-family: Saira;
          font-style: normal;
          font-weight: 400;
          src: local("Saira Regular"),local(Saira-Regular),url(//fonts.gstatic.com/s/saira/v5/memwYa2wxmKQyNkpTZc.eot?#) format("eot"),url(//fonts.gstatic.com/s/saira/v5/memwYa2wxmKQyNknTZM.woff2) format("woff2"),url(//fonts.gstatic.com/s/saira/v5/memwYa2wxmKQyNkpTZU.woff) format("woff");
}


@font-face {
          font-family: "Space Mono";
          font-style: italic;
          font-weight: 400;
          src: local("Space Mono Italic"),local(SpaceMono-Italic),url(//fonts.gstatic.com/s/spacemono/v6/i7dNIFZifjKcF5UAWdDRYERMSXK7.eot?#) format("eot"),url(//fonts.gstatic.com/s/spacemono/v6/i7dNIFZifjKcF5UAWdDRYERMR3K_.woff2) format("woff2"),url(//fonts.gstatic.com/s/spacemono/v6/i7dNIFZifjKcF5UAWdDRYERMSXK5.woff) format("woff");
}

@font-face {
          font-family: "Space Mono";
          font-style: normal;
          font-weight: 400;
          src: local("Space Mono"),local(SpaceMono-Regular),url(//fonts.gstatic.com/s/spacemono/v6/i7dPIFZifjKcF5UAWdDRYE98QQ.eot?#) format("eot"),url(//fonts.gstatic.com/s/spacemono/v6/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2) format("woff2"),url(//fonts.gstatic.com/s/spacemono/v6/i7dPIFZifjKcF5UAWdDRYE98Qw.woff) format("woff");
}

@font-face {
          font-family: BioRhyme;
          font-style: normal;
          font-weight: 400;
          src: local(BioRhyme),local(BioRhyme-Regular),url(//fonts.gstatic.com/s/biorhyme/v5/1cXwaULHBpDMsHYW_ExPr1A.eot?#) format("eot"),url(//fonts.gstatic.com/s/biorhyme/v5/1cXwaULHBpDMsHYW_ExBr1Q.woff2) format("woff2"),url(//fonts.gstatic.com/s/biorhyme/v5/1cXwaULHBpDMsHYW_ExPr1I.woff) format("woff");
}
        * {
            box-sizing: border-box;
        }

        a {
            color:black; 
            text-decoration: none; 
            padding: 2rem;
            border-style: solid;
            border-width: 1px;
            border-color: lightgray;
            width: 100%;
            max-height: 14rem;
            min-height: 14rem;
            border-color: lightgrey;
            text-decoration: none;
            display: flex;
            flex: 0 0 100%;
            justify-content: space-between;
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            margin: 0px;

        }

        .ImageContainer {
            justify-self:right;
            max-width: 200px;
            padding: 0px;
        }

        .LinkPreviewMeta {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .LinkPreviewMeta_title {
            font-family: biorhyme;
            line-height:26px;
            font-weight: bold;
            font-size: 22px;
        }

        .LinkPreviewMeta_description {
            font-family: 'Space Mono';
            font-weight: 400;
            line-height:26px;
            font-size: 16px;
        }

        .LinkPreviewMeta_domain {
            font-family: saira;
            font-weight: 400;
            line-height:26px;
            font-size: 16px;
        }
`,st([Q()],t.FSLinkPreviewElement.prototype,"url",void 0),st([Q()],t.FSLinkPreviewElement.prototype,"imageURL",void 0),st([Q()],t.FSLinkPreviewElement.prototype,"domain",void 0),st([Q()],t.FSLinkPreviewElement.prototype,"description",void 0),st([Q()],t.FSLinkPreviewElement.prototype,"height",void 0),st([Q()],t.FSLinkPreviewElement.prototype,"width",void 0),t.FSLinkPreviewElement=st([(it="fs-link-preview",t=>"function"==typeof t?((t,i)=>(window.customElements.define(t,i),i))(it,t):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(it,t))],t.FSLinkPreviewElement),Object.defineProperty(t,"v",{value:!0})}({});
//# sourceMappingURL=fs-link-preview.bundle.js.map
