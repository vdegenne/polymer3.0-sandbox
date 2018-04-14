import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import * as async from '@polymer/polymer/lib/utils/async.js';
import { Debouncer } from '@polymer/polymer/lib/utils/debounce.js';



class ReverseFrame extends PolymerElement {
  static get properties() {
    return { input: { type: String, value: 'reverse text' } }
  }

  static get template() {
    return html`
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
        <input type="search" value="{{input::keyup}}" placeholder="reverse text..">
        <p>output: [[reverse(input)]]</p>
      `;
  }

  reverse(input) {
    this._debouncer = Debouncer.debounce(
      this._debouncer,
      async.timeOut.after(2000),
      () => {
        fetch('/api', {
          method: 'POST',
          body: 'text=adsf',
          headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded" })
        }).then(result => {
          return result.result;
        })
      }
    )
  }
}

export { ReverseFrame };

customElements.define('reverse-frame', ReverseFrame);
