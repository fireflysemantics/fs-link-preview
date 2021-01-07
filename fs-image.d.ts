/**
 * @license
 * Copyright (c) 2020 Firefly Semantics Corporation.  All rights reserved.
 * This code may only be used under the MIT license found at
 * https://github.com/fireflysemantics/fs-gist/blob/main/LICENSE
 */
import { LitElement } from 'lit-element';
/**
 * An element for including github gists in html documents.
 */
export declare class FSImageElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    scale: string;
    /**
     * The width of the image.
     */
    width: string;
    /**
     * The height of the image
     */
    height: string;
    /**
     * THe image URL
     */
    url: string;
    iframe: HTMLIFrameElement;
    firstUpdated(): void;
    constructor();
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'fs-image': FSImageElement;
    }
}
//# sourceMappingURL=fs-image.d.ts.map