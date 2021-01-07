# fs-image

Web component for embedding background rendered images in html content.

## Installation

`npm i @fireflysemantics/fs-image`

## Usage

Include `fs-image` via CDN like this in your html page:

```
<script src="https://unpkg.com/@fireflysemantics/fs-image"></script>
```
  <fs-image height="10rem;" scale="50%" url="https://fireflysemantics.github.io/i/404/crash-5435071_1920.png">
  </fs-image>
```

[Stackblitz Demo](https://stackblitz.com/edit/typescript-fs-image?file=index.html)

## Development

## Design

The image is rendered with this CSS:

```
  static styles = css`
    :host {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;    
    }
  `;

```

### Baseline

The project baseline is based on the [Lit Element Typescript Starter Project](https://fireflysemantics.medium.com/lit-element-resources-94038d5f2506).

### Package

This project uses the build configuration
from the [rollup starter app](https://github.com/rollup/rollup-starter-app/blob/master/package.json) as well as the `rollup.config.js` example configuration found in the [Lit Element Typescript Starter Project](https://fireflysemantics.medium.com/lit-element-resources-94038d5f2506).