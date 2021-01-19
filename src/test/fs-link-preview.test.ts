import {FSLinkPreviewElement} from '../fs-link-preview.js';
//import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('fs-image', () => {
  test('is defined', () => {
    const el = document.createElement('fs-image');
    assert.instanceOf(el, FSLinkPreviewElement);
  });
});