import '@vaadin/vaadin-split-layout/vaadin-split-layout.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-column.js';
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-form-layout/vaadin-form-item.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-date-picker';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import { css, customElement, html, LitElement } from 'lit-element';

@customElement('master-detail-view')
export class MasterDetailView extends LitElement {
  static get styles() {
    return [css`
        :host {
          display: block;
          height: 100%;
        }    
    `];
  }

  render() {
    return html`
      <vaadin-split-layout style="width: 100%; height: 100%;">
        <div style="flex-grow:1;width:100%;" id="grid-wrapper">
          <slot name="grid"></slot>
        </div>
        <div style="width:400px;display:flex;flex-direction:column;">
          <div style="padding:var(--lumo-space-l);flex-grow:1;">
            <vaadin-form-layout>
              <vaadin-form-item>
                <label slot="label">First name</label>
                <vaadin-text-field class="full-width" value="" id="firstName"></vaadin-text-field>
              </vaadin-form-item>
              <vaadin-form-item>
                <label slot="label">Last name</label>
                <vaadin-text-field class="full-width" value="" id="lastName"></vaadin-text-field>
              </vaadin-form-item>
              <vaadin-form-item>
                <label slot="label">Email</label>
                <vaadin-text-field class="full-width" value="" id="email"></vaadin-text-field>
              </vaadin-form-item>
              <vaadin-form-item>
                <label slot="label">Phone</label>
                <vaadin-text-field class="full-width" value="" id="phone"></vaadin-text-field>
              </vaadin-form-item>
              <vaadin-form-item>
                <label slot="label">Date of birth</label>
                <vaadin-date-picker class="full-width" value="" id="dateOfBirth"></vaadin-date-picker>
              </vaadin-form-item>
              <vaadin-form-item>
                <label slot="label">Occupation</label>
                <vaadin-text-field class="full-width" value="" id="occupation"></vaadin-text-field>
              </vaadin-form-item>
            </vaadin-form-layout>
          </div>
          <vaadin-horizontal-layout
            style="flex-wrap:wrap;width:100%;background-color:var(--lumo-contrast-5pct);padding:var(--lumo-space-s) var(--lumo-space-l);"
            theme="spacing"
          >
            <vaadin-button theme="primary" id="save">
              Save
            </vaadin-button>
            <vaadin-button theme="tertiary" slot="" id="cancel">
              Cancel
            </vaadin-button>
          </vaadin-horizontal-layout>
        </div>
      </vaadin-split-layout>
    `;
  }
}
