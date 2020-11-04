import { customElement, html, LitElement } from 'lit-element';

@customElement('about-view')
export class AboutView extends LitElement {
  render () {
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
