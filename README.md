# fs-link-preview

Web component for rendering link-previews in html content.

## Installation

`npm i @fireflysemantics/fs-link-preview`

## CDN 

<script src="https://unpkg.com/@fireflysemantics/fs-link-preview"></script>

## Usage

Include `fs-link-preview` via CDN like this in your html page:

```
<fs-link-preview imageURL="https://raw.githubusercontent.com/fireflysemantics/slice/master/logoslicelogo.png"
  title="@fireflysemantics/slice"
  description="Lightweight Web Application State Management"
  domain="www.npmjs.com"
  url="https://help-service-parts.fireflysemantics.com/guidesguides--fixed-parameter-optimization-guide">
</fs-link-preview>
```

[Stackblitz Demo](https://stackblitz.com/edit/typescript-fs-link-preview)

## Development

### Baseline

The project baseline is based on the [Lit Element Typescript Starter Project](https://fireflysemantics.medium.com/lit-element-resources-94038d5f2506).

### Package

This project uses the build configuration
from the [rollup starter app](https://github.com/rollup/rollup-starter-app/blob/master/package.json) as well as the `rollup.config.js` example configuration found in the [Lit Element Typescript Starter Project](https://fireflysemantics.medium.com/lit-element-resources-94038d5f2506).
