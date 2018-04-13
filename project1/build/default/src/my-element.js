import './reverse-frame';


import {PolymerElement, html} from '@polymer/polymer/polymer-element';


class MyElement extends PolymerElement {
  static get template() {
    return html `
        <reverse-frame></reverse-frame>
        `;
  }
}

customElements.define('my-element', MyElement);