import '@vaadin/vaadin-form-layout/src/vaadin-form-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-text-field/src/vaadin-password-field.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-custom-field/src/vaadin-custom-field.js';
import '@vaadin/vaadin-select/src/vaadin-select.js';
import { css, customElement, html, LitElement } from 'lit-element';

@customElement('credit-card-form-view')
export class CreditCardFormView extends LitElement {
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
      <h3>Credit Card</h3>
      <vaadin-form-layout style="width: 100%;">
      <vaadin-text-field id="creditCardNumber" required placeholder="1234 5678 9123 4567" label="Credit card number" error-message="Please enter a valid credit card number" pattern="[\\d ]*" prevent-invalid-input></vaadin-text-field>
      <vaadin-text-field label="Cardholder name" id="cardholderName" colspan=""></vaadin-text-field>
      <vaadin-custom-field label="Expiration date">
        <vaadin-horizontal-layout theme="spacing">
        <vaadin-select placeholder="Month" id="expirationMonth" style="flex-grow: 1; width: 100px;"></vaadin-select>
        <vaadin-select placeholder="Year" id="expirationYear" style="flex-grow: 1; width: 100px;"></vaadin-select>
        </vaadin-horizontal-layout>
      </vaadin-custom-field>
      <vaadin-password-field id="csc" minlength="3" maxlength="4" label="CSC" error-message="Please enter a valid security code"></vaadin-password-field>
      </vaadin-form-layout>
      <vaadin-horizontal-layout style="margin-top: var(--lumo-space-m); margin-bottom: var(--lumo-space-l);" theme="spacing">
      <vaadin-button theme="primary" id="submit">
        Submit 
      </vaadin-button>
      <vaadin-button id="cancel">
        Cancel 
      </vaadin-button>
      </vaadin-horizontal-layout>
      `;
  }
}
