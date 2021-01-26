/**
 * @license
 * Copyright (c) 2020 Firefly Semantics Corporation.  All rights reserved.
 * This code may only be used under the MIT license found at
 * https://github.com/fireflysemantics/fs-link-preview/blob/main/LICENSE
 */
import { LitElement, html, customElement, property, css } from 'lit-element';

/**
 * An element for performing link preview rendering.
 */
@customElement('fs-link-preview')
export class FSLinkPreviewElement extends LitElement {
  /**
   * THe link URL
   */
  @property()
  url: string = ''

  @property()
  imageURL: string = ''

  @property()
  domain: string = ''

  @property()
  description: string = ''

  /**
   * THe height
   */
  @property()
  height: string = ''

  /**
   * THe width
   */
  @property()
  width: string = ''


  firstUpdated() {
  }

  constructor() {
    super()
  }


  static styles = css`

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
`;

  render() {
    return html`
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
`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fs-link-preview': FSLinkPreviewElement;
  }
}