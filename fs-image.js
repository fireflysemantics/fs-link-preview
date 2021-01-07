var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright (c) 2020 Firefly Semantics Corporation.  All rights reserved.
 * This code may only be used under the MIT license found at
 * https://github.com/fireflysemantics/fs-gist/blob/main/LICENSE
 */
import { LitElement, html, customElement, property, css, query } from 'lit-element';
/**
 * An element for including github gists in html documents.
 */
let FSImageElement = class FSImageElement extends LitElement {
    constructor() {
        super();
        this.scale = '100%';
        /**
         * The width of the image.
         */
        this.width = '100%';
        /**
         * The height of the image
         */
        this.height = '100%';
        /**
         * THe image URL
         */
        this.url = '';
    }
    firstUpdated() { }
    render() {
        return html `
    <style>
      :host {
        display: flex;
        background-image: url("${this.url}");
        width: ${this.width ? this.width : '100%'} !important;
        height: ${this.height ? this.height : '100%'} !important;  
        background-size: ${this.scale ? this.scale : '100%'} !important;
      }
    </style>    
    <div></div>
    `;
    }
};
FSImageElement.styles = css `
    :host {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;    
    }
  `;
__decorate([
    property()
], FSImageElement.prototype, "scale", void 0);
__decorate([
    property()
], FSImageElement.prototype, "width", void 0);
__decorate([
    property()
], FSImageElement.prototype, "height", void 0);
__decorate([
    property()
], FSImageElement.prototype, "url", void 0);
__decorate([
    query('iframe')
], FSImageElement.prototype, "iframe", void 0);
FSImageElement = __decorate([
    customElement('fs-image')
], FSImageElement);
export { FSImageElement };
//# sourceMappingURL=fs-image.js.map