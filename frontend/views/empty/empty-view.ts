import { customElement, html, LitElement } from 'lit-element';

customElement('empty-view')
export class EmptyView extends LitElement {
  render() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>

      <br />
      Content placeholder
    `;
  }
}

