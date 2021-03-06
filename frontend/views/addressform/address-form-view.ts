import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import '@vaadin/vaadin-form-layout/src/vaadin-form-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import { css, customElement, html, LitElement } from 'lit-element';

@customElement('address-form-view')
export class AddressFormView extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          margin: 0 auto;
          max-width: 1024px;
          padding: 0 var(--lumo-space-l);
        }      
    `]
  }


  render() {
    return html`
      <h3>Address</h3>
      <vaadin-form-layout style="width: 100%;">
      <vaadin-text-field label="Street address" id="streetAddress" colspan="2"></vaadin-text-field>
      <vaadin-text-field label="Postal code" id="postalCode" pattern="\\d*" prevent-invalid-input></vaadin-text-field>
      <vaadin-text-field label="City" id="city"></vaadin-text-field>
      <vaadin-combo-box label="State" id="state"></vaadin-combo-box>
      <vaadin-combo-box label="Country" id="country"></vaadin-combo-box>
      </vaadin-form-layout>
      <vaadin-horizontal-layout style="margin-top: var(--lumo-space-m); margin-bottom: var(--lumo-space-l);" theme="spacing">
      <vaadin-button theme="primary" id="save">
        Save
      </vaadin-button>
      <vaadin-button id="cancel">
        Cancel
      </vaadin-button>
      </vaadin-horizontal-layout>
    `;
  }

}
