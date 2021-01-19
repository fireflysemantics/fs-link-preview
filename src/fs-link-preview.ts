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