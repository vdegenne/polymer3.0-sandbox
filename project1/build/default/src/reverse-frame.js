import {PolymerElement, html} from '@polymer/polymer/polymer-element';



class ReverseFrame extends PolymerElement {
  static get properties() {
    return { input: {type: String, value: ''} }
  }

  static get template() {
    return html `
    <style>
    :host {
      display: block;
      padding: 10px;
      background: #e0e0e0;
      border-radius: 3px;
    }
    p {
      margin: 10px 2px 2px;
    }
    </style>
        <input type="search" value="{{input::keyup}}" placeholder="add something">
        <p>output: [[reverse(input)]]</p>
      `;
  }

  reverse(input) { return input.split('').reverse().join(''); }
}

export {ReverseFrame};

customElements.define('reverse-frame', ReverseFrame);