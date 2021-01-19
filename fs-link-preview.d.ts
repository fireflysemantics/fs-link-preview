/**
 * @license
 * Copyright (c) 2020 Firefly Semantics Corporation.  All rights reserved.
 * This code may only be used under the MIT license found at
 * https://github.com/fireflysemantics/fs-link-preview/blob/main/LICENSE
 */
import { LitElement } from 'lit-element';
/**
 * An element for performing link preview rendering.
 */
export declare class FSLinkPreviewElement extends LitElement {
    /**
     * THe link URL
     */
    url: string;
    imageURL: string;
    domain: string;
    description: string;
    /**
     * THe height
     */
    height: string;
    /**
     * THe width
     */
    width: string;
    firstUpdated(): void;
    constructor();
    static styles: import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'fs-link-preview': FSLinkPreviewElement;
    }
}
//# sourceMappingURL=fs-link-preview.d.ts.map