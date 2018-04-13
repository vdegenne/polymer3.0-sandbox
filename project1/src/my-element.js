import './reverse-frame';
import '@polymer/iron-flex-layout/iron-flex-layout.js';


import {PolymerElement, html} from '@polymer/polymer/polymer-element';


class MyElement extends PolymerElement {
  static get template() {
    return html `
        <style>
        :host {
            @apply(--layout-fit);
            @apply(--layout-horizontal);
            @apply(--layout-center-center);
        }
        </style>
        <reverse-frame></reverse-frame>
        `;
  }
}

customElements.define('my-element', MyElement);