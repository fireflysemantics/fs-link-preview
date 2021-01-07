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
@customElement('fs-image')
export class FSImageElement extends LitElement {

  static styles = css`
    :host {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;    
    }
  `;

  @property()
  scale: string = '100%';
  /** 
   * The width of the image.
   */
  @property()
  width: string = '100%';

  /**
   * The height of the image
   */
  @property()
  height: string = '100%'


  /**
   * THe image URL
   */
  @property()
  url: string = ''


  @query('iframe')
  iframe!: HTMLIFrameElement;


  firstUpdated() {}

  constructor() {
    super()
  }

  render() {
    return html`
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
}
declare global {
  interface HTMLElementTagNameMap {
    'fs-image': FSImageElement;
  }
}