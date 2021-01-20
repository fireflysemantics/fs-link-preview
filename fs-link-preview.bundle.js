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
const o="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,o,i=null)=>{for(;o!==i;){const i=o.nextSibling;t.removeChild(o),o=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,e=`\x3c!--${s}--\x3e`,n=new RegExp(`${s}|${e}`);class a{constructor(t,o){this.parts=[],this.element=o;const i=[],e=[],a=document.createTreeWalker(o.content,133,null,!1);let c=0,h=-1,m=0;const{strings:u,values:{length:w}}=t;for(;m<w;){const t=a.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const o=t.attributes,{length:i}=o;let s=0;for(let t=0;t<i;t++)r(o[t].name,"$lit$")&&s++;for(;s-- >0;){const o=u[m],i=l.exec(o)[2],s=i.toLowerCase()+"$lit$",e=t.getAttribute(s);t.removeAttribute(s);const a=e.split(n);this.parts.push({type:"attribute",index:h,name:i,strings:a}),m+=a.length-1}}"TEMPLATE"===t.tagName&&(e.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const o=t.data;if(o.indexOf(s)>=0){const s=t.parentNode,e=o.split(n),a=e.length-1;for(let o=0;o<a;o++){let i,n=e[o];if(""===n)i=f();else{const t=l.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(n)}s.insertBefore(i,t),this.parts.push({type:"node",index:++h})}""===e[a]?(s.insertBefore(f(),t),i.push(t)):t.data=e[a],m+=a}}else if(8===t.nodeType)if(t.data===s){const o=t.parentNode;null!==t.previousSibling&&h!==c||(h++,o.insertBefore(f(),t)),c=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(i.push(t),h--),m++}else{let o=-1;for(;-1!==(o=t.data.indexOf(s,o+1));)this.parts.push({type:"node",index:-1}),m++}}else a.currentNode=e.pop()}for(const t of i)t.parentNode.removeChild(t)}}const r=(t,o)=>{const i=t.length-o.length;return i>=0&&t.slice(i)===o},c=t=>-1!==t.index,f=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,o){const{element:{content:i},parts:s}=t,e=document.createTreeWalker(i,133,null,!1);let n=u(s),a=s[n],r=-1,c=0;const f=[];let l=null;for(;e.nextNode();){r++;const t=e.currentNode;for(t.previousSibling===l&&(l=null),o.has(t)&&(f.push(t),null===l&&(l=t)),null!==l&&c++;void 0!==a&&a.index===r;)a.index=null!==l?-1:a.index-c,n=u(s,n),a=s[n]}f.forEach(t=>t.parentNode.removeChild(t))}const m=t=>{let o=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)o++;return o},u=(t,o=-1)=>{for(let i=o+1;i<t.length;i++){const o=t[i];if(c(o))return i}return-1};
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
const w=new WeakMap,d=t=>"function"==typeof t&&w.has(t),p={},y={};
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
class g{constructor(t,o,i){this.t=[],this.template=t,this.processor=o,this.options=i}update(t){let o=0;for(const i of this.t)void 0!==i&&i.setValue(t[o]),o++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,e=document.createTreeWalker(t,133,null,!1);let n,a=0,r=0,f=e.nextNode();for(;a<s.length;)if(n=s[a],c(n)){for(;r<n.index;)r++,"TEMPLATE"===f.nodeName&&(i.push(f),e.currentNode=f.content),null===(f=e.nextNode())&&(e.currentNode=i.pop(),f=e.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(f.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(f,n.name,n.strings,this.options));a++}else this.t.push(void 0),a++;return o&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
     */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),S=` ${s} `;class b{constructor(t,o,i,s){this.strings=t,this.values=o,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let o="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],a=t.lastIndexOf("\x3c!--");i=(a>-1||i)&&-1===t.indexOf("--\x3e",a+1);const r=l.exec(t);o+=null===r?t+(i?S:e):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+s}return o+=this.strings[t],o}getTemplateElement(){const t=document.createElement("template");let o=this.getHTML();return void 0!==v&&(o=v.createHTML(o)),t.innerHTML=o,t}}
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
     */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),M=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class Y{constructor(t,o,i){this.dirty=!0,this.element=t,this.name=o,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new _(this)}_getValue(){const t=this.strings,o=t.length-1,i=this.parts;if(1===o&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!M(t))return t}let s="";for(let e=0;e<o;e++){s+=t[e];const o=i[e];if(void 0!==o){const t=o.value;if(x(t)||!M(t))s+="string"==typeof t?t:String(t);else for(const o of t)s+="string"==typeof o?o:String(o)}}return s+=t[o],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class _{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===p||x(t)&&t===this.value||(this.value=t,d(t)||(this.committer.dirty=!0))}commit(){for(;d(this.value);){const t=this.value;this.value=p,t(this)}this.value!==p&&this.committer.commit()}}class U{constructor(t){this.value=void 0,this.o=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.i(this.startNode=f()),t.i(this.endNode=f())}insertAfterPart(t){t.i(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.o=t}commit(){if(null===this.startNode.parentNode)return;for(;d(this.o);){const t=this.o;this.o=p,t(this)}const t=this.o;t!==p&&(x(t)?t!==this.value&&this.s(t):t instanceof b?this.l(t):t instanceof Node?this.h(t):M(t)?this.m(t):t===y?(this.value=y,this.clear()):this.s(t))}i(t){this.endNode.parentNode.insertBefore(t,this.endNode)}h(t){this.value!==t&&(this.clear(),this.i(t),this.value=t)}s(t){const o=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);o===this.endNode.previousSibling&&3===o.nodeType?o.data=i:this.h(document.createTextNode(i)),this.value=t}l(t){const o=this.options.templateFactory(t);if(this.value instanceof g&&this.value.template===o)this.value.update(t.values);else{const i=new g(o,t.processor,this.options),s=i._clone();i.update(t.values),this.h(s),this.value=i}}m(t){Array.isArray(this.value)||(this.value=[],this.clear());const o=this.value;let i,s=0;for(const e of t)i=o[s],void 0===i&&(i=new U(this.options),o.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(o[s-1])),i.setValue(e),i.commit(),s++;s<o.length&&(o.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,o,i){if(this.value=void 0,this.o=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=o,this.strings=i}setValue(t){this.o=t}commit(){for(;d(this.o);){const t=this.o;this.o=p,t(this)}if(this.o===p)return;const t=!!this.o;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.o=p}}class B extends Y{constructor(t,o,i){super(t,o,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new R(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class R extends _{}let H=!1;(()=>{try{const t={get capture(){return H=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class K{constructor(t,o,i){this.value=void 0,this.o=void 0,this.element=t,this.eventName=o,this.eventContext=i,this.u=t=>this.handleEvent(t)}setValue(t){this.o=t}commit(){for(;d(this.o);){const t=this.o;this.o=p,t(this)}if(this.o===p)return;const t=this.o,o=this.value,i=null==t||null!=o&&(t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive),s=null!=t&&(null==o||i);i&&this.element.removeEventListener(this.eventName,this.u,this.p),s&&(this.p=F(t),this.element.addEventListener(this.eventName,this.u,this.p)),this.value=t,this.o=p}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const F=t=>t&&(H?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;function j(t){let o=k.get(t.type);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},k.set(t.type,o));let i=o.stringsArray.get(t.strings);if(void 0!==i)return i;const e=t.strings.join(s);return i=o.keyString.get(e),void 0===i&&(i=new a(t,t.getTemplateElement()),o.keyString.set(e,i)),o.stringsArray.set(t.strings,i),i}const k=new Map,N=new WeakMap;
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
     */const A=new
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
class{handleAttributeExpressions(t,o,i,s){const e=o[0];if("."===e){return new B(t,o.slice(1),i).parts}if("@"===e)return[new K(t,o.slice(1),s.eventContext)];if("?"===e)return[new E(t,o.slice(1),i)];return new Y(t,o,i).parts}handleTextExpression(t){return new U(t)}};
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
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const L=(t,...o)=>new b(t,o,"html",A)
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
     */,P=(t,o)=>`${t}--${o}`;let Q=!0;void 0===window.ShadyCSS?Q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Q=!1);const I=t=>o=>{const i=P(o.type,t);let e=k.get(i);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},k.set(i,e));let n=e.stringsArray.get(o.strings);if(void 0!==n)return n;const r=o.strings.join(s);if(n=e.keyString.get(r),void 0===n){const i=o.getTemplateElement();Q&&window.ShadyCSS.prepareTemplateDom(i,t),n=new a(o,i),e.keyString.set(r,n)}return e.stringsArray.set(o.strings,n),n},W=["html","svg"],T=new Set,D=(t,o,i)=>{T.add(t);const s=i?i.element:document.createElement("template"),e=o.querySelectorAll("style"),{length:n}=e;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const a=document.createElement("style");for(let t=0;t<n;t++){const o=e[t];o.parentNode.removeChild(o),a.textContent+=o.textContent}(t=>{W.forEach(o=>{const i=k.get(P(o,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:o}}=t,i=new Set;Array.from(o.querySelectorAll("style")).forEach(t=>{i.add(t)}),h(t,i)})})})(t);const r=s.content;i?function(t,o,i=null){const{element:{content:s},parts:e}=t;if(null==i)return void s.appendChild(o);const n=document.createTreeWalker(s,133,null,!1);let a=u(e),r=0,c=-1;for(;n.nextNode();){c++;for(n.currentNode===i&&(r=m(o),i.parentNode.insertBefore(o,i));-1!==a&&e[a].index===c;){if(r>0){for(;-1!==a;)e[a].index+=r,a=u(e,a);return}a=u(e,a)}}}(i,a,r.firstChild):r.insertBefore(a,r.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const c=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)o.insertBefore(c.cloneNode(!0),o.firstChild);else if(i){r.insertBefore(a,r.firstChild);const t=new Set;t.add(a),h(i,t)}};window.JSCompiler_renameProperty=(t,o)=>t;const G={toAttribute(t,o){switch(o){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,o){switch(o){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},C=(t,o)=>o!==t&&(o==o||t==t),$={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:C};class O extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((o,i)=>{const s=this._attributeNameForProperty(i,o);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,o)=>this._classProperties.set(o,t))}}static createProperty(t,o=$){if(this._ensureClassProperties(),this._classProperties.set(t,o),o.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,o);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,o,i){return{get(){return this[o]},set(s){const e=this[t];this[o]=s,this.requestUpdateInternal(t,e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||$}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,o=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of o)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,o){const i=o.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,o,i=C){return i(t,o)}static _propertyValueFromAttribute(t,o){const i=o.type,s=o.converter||G,e="function"==typeof s?s:s.fromAttribute;return e?e(t,i):t}static _propertyValueToAttribute(t,o){if(void 0===o.reflect)return;const i=o.type,s=o.converter;return(s&&s.toAttribute||G.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,o)=>{if(this.hasOwnProperty(o)){const t=this[o];delete this[o],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(o,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,o)=>this[o]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,o,i){o!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,o,i=$){const s=this.constructor,e=s._attributeNameForProperty(t,i);if(void 0!==e){const t=s._propertyValueToAttribute(o,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(e):this.setAttribute(e,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,o){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(o,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,o,i){let s=!0;if(void 0!==t){const e=this.constructor;i=i||e.getPropertyOptions(t),e._valueHasChanged(this[t],o,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,o),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,o){return this.requestUpdateInternal(t,o),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const o=this._changedProperties;try{t=this.shouldUpdate(o),t?this.update(o):this._markUpdated()}catch(o){throw t=!1,this._markUpdated(),o}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(o)),this.updated(o))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,o)=>this._propertyToAttribute(o,this[o],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}O.finalized=!0;
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
const Z=(t,o)=>"method"===o.kind&&o.descriptor&&!("value"in o.descriptor)?Object.assign(Object.assign({},o),{finisher(i){i.createProperty(o.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof o.initializer&&(this[o.key]=o.initializer.call(this))},finisher(i){i.createProperty(o.key,t)}};function X(t){return(o,i)=>void 0!==i?((t,o,i)=>{o.constructor.createProperty(i,t)})(t,o,i):Z(t,o)}
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */const J=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol();class V{constructor(t,o){if(o!==q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(J?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const z={};class tt extends O{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const o=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?o(i,t):(t.add(i),t),i),i=o(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!J){const o=Array.prototype.slice.call(t.cssRules).reduce((t,o)=>t+o.cssText,"");return new V(String(o),q)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?J?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const o=this.render();super.update(t),o!==z&&this.constructor.render(o,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const o=document.createElement("style");o.textContent=t.cssText,this.renderRoot.appendChild(o)}))}render(){return z}}tt.finalized=!0,tt.render=(t,o,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const e=s.scopeName,n=N.has(o),a=Q&&11===o.nodeType&&!!o.host,r=a&&!T.has(e),c=r?document.createDocumentFragment():o;if(((t,o,s)=>{let e=N.get(o);void 0===e&&(i(o,o.firstChild),N.set(o,e=new U(Object.assign({templateFactory:j},s))),e.appendInto(o)),e.setValue(t),e.commit()})(t,c,Object.assign({templateFactory:I(e)},s)),r){const t=N.get(c);N.delete(c);const s=t.value instanceof g?t.value.template:void 0;D(e,c,s),i(o,o.firstChild),o.appendChild(c),N.set(o,t)}!n&&a&&window.ShadyCSS.styleElement(o.host)};var ot,it=function(t,o,i,s){for(var e,n=arguments.length,a=n<3?o:null===s?s=Object.getOwnPropertyDescriptor(o,i):s,r=t.length-1;r>=0;r--)(e=t[r])&&(a=(n<3?e(a):n>3?e(o,i,a):e(o,i))||a);return n>3&&a&&Object.defineProperty(o,i,a),a};t.FSLinkPreviewElement=class extends tt{constructor(){super(),this.url="",this.imageURL="",this.domain="",this.description="",this.height="",this.width=""}firstUpdated(){}render(){return L`
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
`}},t.FSLinkPreviewElement.styles=((t,...o)=>{const i=o.reduce((o,i,s)=>o+(t=>{if(t instanceof V)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new V(i,q)})`
@font-face {
          font-family: Saira;
          font-style: normal;
          font-weight: 100;
          src: local("Saira Thin"),local(Saira-Thin),url(//fonts.gstatic.com/s/saira/v5/mem-Ya2wxmKQyNFEfZ81Uw.eot?#) format("eot"),url(//fonts.gstatic.com/s/saira/v5/mem-Ya2wxmKQyNFEfZE1Vw.woff2) format("woff2"),url(//fonts.gstatic.com/s/saira/v5/mem-Ya2wxmKQyNFEfZ81UQ.woff) format("woff");
}
@font-face {
          font-family: Saira;
          font-style: normal;
          font-weight: 200;
          src: local("Saira ExtraLight"),local(Saira-ExtraLight),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNHobIYccrw.eot?#) format("eot"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNHobIYScrg.woff2) format("woff2"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNHobIYccr4.woff) format("woff");
}
@font-face {
          font-family: Saira;
          font-style: normal;
          font-weight: 300;
          src: local("Saira Light"),local(Saira-Light),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNGMb4Yccrw.eot?#) format("eot"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNGMb4YScrg.woff2) format("woff2"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNGMb4Yccr4.woff) format("woff");
}
@font-face {
          font-family: Saira;
          font-style: normal;
          font-weight: 400;
          src: local("Saira Regular"),local(Saira-Regular),url(//fonts.gstatic.com/s/saira/v5/memwYa2wxmKQyNkpTZc.eot?#) format("eot"),url(//fonts.gstatic.com/s/saira/v5/memwYa2wxmKQyNknTZM.woff2) format("woff2"),url(//fonts.gstatic.com/s/saira/v5/memwYa2wxmKQyNkpTZU.woff) format("woff");
}
@font-face {
          font-family: Saira;
          font-style: normal;
          font-weight: 500;
          src: local("Saira Medium"),local(Saira-Medium),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNHUboYccrw.eot?#) format("eot"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNHUboYScrg.woff2) format("woff2"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNHUboYccr4.woff) format("woff");
}
@font-face {
          font-family: Saira;
          font-style: normal;
          font-weight: 600;
          src: local("Saira SemiBold"),local(Saira-SemiBold),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNH4aYYccrw.eot?#) format("eot"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNH4aYYScrg.woff2) format("woff2"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNH4aYYccr4.woff) format("woff");
}
@font-face {
          font-family: Saira;
          font-style: normal;
          font-weight: 700;
          src: local("Saira Bold"),local(Saira-Bold),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNGcaIYccrw.eot?#) format("eot"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNGcaIYScrg.woff2) format("woff2"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNGcaIYccr4.woff) format("woff");
}
@font-face {
          font-family: Saira;
          font-style: normal;
          font-weight: 800;
          src: local("Saira ExtraBold"),local(Saira-ExtraBold),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNGAa4Yccrw.eot?#) format("eot"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNGAa4YScrg.woff2) format("woff2"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNGAa4Yccr4.woff) format("woff");
}
@font-face {
          font-family: Saira;
          font-style: normal;
          font-weight: 900;
          src: local("Saira Black"),local(Saira-Black),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNGkaoYccrw.eot?#) format("eot"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNGkaoYScrg.woff2) format("woff2"),url(//fonts.gstatic.com/s/saira/v5/mem9Ya2wxmKQyNGkaoYccr4.woff) format("woff");
}
@font-face {
          font-family: "Space Mono";
          font-style: italic;
          font-weight: 400;
          src: local("Space Mono Italic"),local(SpaceMono-Italic),url(//fonts.gstatic.com/s/spacemono/v6/i7dNIFZifjKcF5UAWdDRYERMSXK7.eot?#) format("eot"),url(//fonts.gstatic.com/s/spacemono/v6/i7dNIFZifjKcF5UAWdDRYERMR3K_.woff2) format("woff2"),url(//fonts.gstatic.com/s/spacemono/v6/i7dNIFZifjKcF5UAWdDRYERMSXK5.woff) format("woff");
}
@font-face {
          font-family: "Space Mono";
          font-style: italic;
          font-weight: 700;
          src: local("Space Mono Bold Italic"),local(SpaceMono-BoldItalic),url(//fonts.gstatic.com/s/spacemono/v6/i7dSIFZifjKcF5UAWdDRYERE_FeqEiSV.eot?#) format("eot"),url(//fonts.gstatic.com/s/spacemono/v6/i7dSIFZifjKcF5UAWdDRYERE_FeqHCSR.woff2) format("woff2"),url(//fonts.gstatic.com/s/spacemono/v6/i7dSIFZifjKcF5UAWdDRYERE_FeqEiSX.woff) format("woff");
}
@font-face {
          font-family: "Space Mono";
          font-style: normal;
          font-weight: 400;
          src: local("Space Mono"),local(SpaceMono-Regular),url(//fonts.gstatic.com/s/spacemono/v6/i7dPIFZifjKcF5UAWdDRYE98QQ.eot?#) format("eot"),url(//fonts.gstatic.com/s/spacemono/v6/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2) format("woff2"),url(//fonts.gstatic.com/s/spacemono/v6/i7dPIFZifjKcF5UAWdDRYE98Qw.woff) format("woff");
}
@font-face {
          font-family: "Space Mono";
          font-style: normal;
          font-weight: 700;
          src: local("Space Mono Bold"),local(SpaceMono-Bold),url(//fonts.gstatic.com/s/spacemono/v6/i7dMIFZifjKcF5UAWdDRaPpZUFuaGg.eot?#) format("eot"),url(//fonts.gstatic.com/s/spacemono/v6/i7dMIFZifjKcF5UAWdDRaPpZUFWaHg.woff2) format("woff2"),url(//fonts.gstatic.com/s/spacemono/v6/i7dMIFZifjKcF5UAWdDRaPpZUFuaGA.woff) format("woff");
}
@font-face {
          font-family: BioRhyme;
          font-style: normal;
          font-weight: 200;
          src: local("BioRhyme ExtraLight"),local(BioRhyme-ExtraLight),url(//fonts.gstatic.com/s/biorhyme/v5/1cX3aULHBpDMsHYW_ESOjkGJocE.eot?#) format("eot"),url(//fonts.gstatic.com/s/biorhyme/v5/1cX3aULHBpDMsHYW_ESOjkGHocU.woff2) format("woff2"),url(//fonts.gstatic.com/s/biorhyme/v5/1cX3aULHBpDMsHYW_ESOjkGJocM.woff) format("woff");
}
@font-face {
          font-family: BioRhyme;
          font-style: normal;
          font-weight: 300;
          src: local("BioRhyme Light"),local(BioRhyme-Light),url(//fonts.gstatic.com/s/biorhyme/v5/1cX3aULHBpDMsHYW_ETqjUGJocE.eot?#) format("eot"),url(//fonts.gstatic.com/s/biorhyme/v5/1cX3aULHBpDMsHYW_ETqjUGHocU.woff2) format("woff2"),url(//fonts.gstatic.com/s/biorhyme/v5/1cX3aULHBpDMsHYW_ETqjUGJocM.woff) format("woff");
}
@font-face {
          font-family: BioRhyme;
          font-style: normal;
          font-weight: 400;
          src: local(BioRhyme),local(BioRhyme-Regular),url(//fonts.gstatic.com/s/biorhyme/v5/1cXwaULHBpDMsHYW_ExPr1A.eot?#) format("eot"),url(//fonts.gstatic.com/s/biorhyme/v5/1cXwaULHBpDMsHYW_ExBr1Q.woff2) format("woff2"),url(//fonts.gstatic.com/s/biorhyme/v5/1cXwaULHBpDMsHYW_ExPr1I.woff) format("woff");
}
@font-face {
          font-family: BioRhyme;
          font-style: normal;
          font-weight: 700;
          src: local("BioRhyme Bold"),local(BioRhyme-Bold),url(//fonts.gstatic.com/s/biorhyme/v5/1cX3aULHBpDMsHYW_ET6ikGJocE.eot?#) format("eot"),url(//fonts.gstatic.com/s/biorhyme/v5/1cX3aULHBpDMsHYW_ET6ikGHocU.woff2) format("woff2"),url(//fonts.gstatic.com/s/biorhyme/v5/1cX3aULHBpDMsHYW_ET6ikGJocM.woff) format("woff");
}
@font-face {
          font-family: BioRhyme;
          font-style: normal;
          font-weight: 800;
          src: local("BioRhyme ExtraBold"),local(BioRhyme-ExtraBold),url(//fonts.gstatic.com/s/biorhyme/v5/1cX3aULHBpDMsHYW_ETmiUGJocE.eot?#) format("eot"),url(//fonts.gstatic.com/s/biorhyme/v5/1cX3aULHBpDMsHYW_ETmiUGHocU.woff2) format("woff2"),url(//fonts.gstatic.com/s/biorhyme/v5/1cX3aULHBpDMsHYW_ETmiUGJocM.woff) format("woff");
}
.u-font-biorhyme-200 {
          font-family: 'BioRhyme' !important;
          font-weight: 200 !important;
}
.u-font-biorhyme-300 {
          font-family: 'BioRhyme' !important;
          font-weight: 300 !important;
}
.u-font-biorhyme-400 {
          font-family: 'BioRhyme' !important;
          font-weight: 400 !important;
}
.u-font-biorhyme-700 {
          font-family: 'BioRhyme' !important;
          font-weight: 700 !important;
}
.u-font-biorhyme-800 {
          font-family: 'BioRhyme' !important;
          font-weight: 800 !important;
}
.u-font-space-mono-400 {
          font-family: 'Space Mono' !important;
          font-weight: 400 !important;
}
.u-font-space-mono-400-italic {
        font-family: 'Space Mono' !important;
        font-weight: 400 !important;
        font-style: italic !important;
}
.u-font-space-mono-700 {
          font-family: 'Space Mono' !important;
          font-weight: 700 !important;
}
.u-font-space-mono-700-italic {
        font-family: 'Space Mono' !important;
        font-weight: 700 !important;
        font-style: italic !important;
}
.u-font-saira-100 {
          font-family: 'Saira' !important;
          font-weight: 100 !important;
}
.u-font-saira-200 {
          font-family: 'Saira' !important;
          font-weight: 200 !important;
}
.u-font-saira-300 {
          font-family: 'Saira' !important;
          font-weight: 300 !important;
}
.u-font-saira-400 {
          font-family: 'Saira' !important;
          font-weight: 400 !important;
}
.u-font-saira-500 {
          font-family: 'Saira' !important;
          font-weight: 500 !important;
}
.u-font-saira-600 {
          font-family: 'Saira' !important;
          font-weight: 600 !important;
}
.u-font-saira-700 {
          font-family: 'Saira' !important;
          font-weight: 700 !important;
}
.u-font-saira-800 {
          font-family: 'Saira' !important;
          font-weight: 800 !important;
}
.u-font-saira-900 {
          font-family: 'Saira' !important;
          font-weight: 900 !important;
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
            font-size: 16px;
        }

        .LinkPreviewMeta_domain {
            font-family: saira;
            font-weight: 400;
            font-size: 16px;
        }
`,it([X()],t.FSLinkPreviewElement.prototype,"url",void 0),it([X()],t.FSLinkPreviewElement.prototype,"imageURL",void 0),it([X()],t.FSLinkPreviewElement.prototype,"domain",void 0),it([X()],t.FSLinkPreviewElement.prototype,"description",void 0),it([X()],t.FSLinkPreviewElement.prototype,"height",void 0),it([X()],t.FSLinkPreviewElement.prototype,"width",void 0),t.FSLinkPreviewElement=it([(ot="fs-link-preview",t=>"function"==typeof t?((t,o)=>(window.customElements.define(t,o),o))(ot,t):((t,o)=>{const{kind:i,elements:s}=o;return{kind:i,elements:s,finisher(o){window.customElements.define(t,o)}}})(ot,t))],t.FSLinkPreviewElement),Object.defineProperty(t,"g",{value:!0})}({});
//# sourceMappingURL=fs-link-preview.bundle.js.map
