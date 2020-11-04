
import '@vaadin/vaadin-combo-box/vaadin-combo-box';
import '@vaadin/vaadin-date-picker/vaadin-date-picker';
import '@vaadin/vaadin-grid-pro/vaadin-grid-pro';
import '@vaadin/vaadin-grid-pro/vaadin-grid-pro-edit-column';
import '@vaadin/vaadin-grid/all-imports';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('list-view')
export class ListView extends LitElement {

  static get styles() {
    return [css`
        :host {
          display: block;
          height: 100%;
        }
        vaadin-grid-pro {
          height: 100%;
        }
        vaadin-grid-filter {
          width: 100%;
        }
        vaadin-grid-pro vaadin-horizontal-layout {
          align-items: center;
        }
        vaadin-grid-pro img {
          border-radius: 50%;
          flex-shrink: 0;
          height: var(--lumo-size-m);
          width: var(--lumo-size-m);
        }
        .name {
          overflow: hidden;
          text-overflow: ellipsis;
        }
    `];
  }  

  render() {
    return html`
      <vaadin-grid-pro id="grid" theme="no-border column-borders" .items="${this.items}">
        <vaadin-grid-selection-column auto-select></vaadin-grid-selection-column>
        <vaadin-grid-column-group id="idColumnGroup" .headerRenderer="${this.idColumnGroupHeaderRenderer}">
          <vaadin-grid-column id="idColumn" flex-grow="0" path="id" width="120px" .headerRenderer="${this.idColumnHeaderRenderer}"></vaadin-grid-column>
        </vaadin-grid-column-group>
        <vaadin-grid-column-group id="clientColumnGroup" .headerRenderer="${this.clientColumnGroupHeaderRenderer}">
          <vaadin-grid-column id="clientColumn" path="client" .headerRenderer="${this.clientColumnHeaderRenderer}" .renderer="${this.clientColumnRenderer.bind(this)}">
          </vaadin-grid-column>
        </vaadin-grid-column-group>
        <vaadin-grid-column-group id="amountColumnGroup" .headerRenderer="${this.amountColumnGroupHeaderRenderer}">
          <vaadin-grid-pro-edit-column id="amountColumn" path="amount" .headerRenderer="${this.amountColumnHeaderRenderer}" .renderer="${this.amountColumnRenderer.bind(this)}">
          </vaadin-grid-pro-edit-column>
        </vaadin-grid-column-group>
        <vaadin-grid-column-group id="statusColumnGroup" .headerRenderer="${this.statusColumnGroupHeaderRenderer}">
          <vaadin-grid-pro-edit-column id="statusColumn" editor-type="select" path="status" .editorOptions = "${['Pending', 'Success', 'Error']}" .headerRenderer="${this.dateColumnHeaderRenderer}" .renderer="${this.statusColumnRenderer.bind(this)}">
          </vaadin-grid-pro-edit-column>
        </vaadin-grid-column-group>
        <vaadin-grid-column-group id="dateColumnGroup" .headerRenderer=${this.dateColumnGroupHeaderRenderer}>
          <vaadin-grid-column id="dateColumn" flex-grow="0" path="date" width="180px" .headerRenderer="${this.dateColumnHeaderRenderer}" .renderer="${this.dateColumnRenderer.bind(this)}">
          </vaadin-grid-column>
        </vaadin-grid-column-group>
      </vaadin-grid-pro>
    `;
  }

  currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  dateFormatter = new Intl.DateTimeFormat('en-US')

  @property()
  items!: any[];

  clientColumnRenderer(root: HTMLElement, _column: any, data: any) {
    root.innerHTML = `
      <vaadin-horizontal-layout theme="spacing">
        <img src="${data.item.img}" />
        <span class="name">${data.item.client}</span>
      </vaadin-horizontal-layout>
    `;
  }
  amountColumnRenderer(root: HTMLElement, _column: any, data: any) {
    root.innerHTML = `
      <span>${this._getAmount(data.item.amount)}</span>
    `;
  }
  statusColumnRenderer(root: HTMLElement, _column: any, data: any) {
    root.innerHTML = `
    <span theme$="${this._getTheme(data.item.status)}">${data.item.status}</span>
    `;
  }
  dateColumnRenderer(root: HTMLElement, _column: any, data: any) {
    root.innerHTML = `
    <span${this._getDate(data.item.date)}</span>
    `;
  }

  /* Column sorting */
  idColumnGroupHeaderRenderer(root: HTMLElement) {
    root.innerHTML = '<vaadin-grid-sorter path="id">ID</vaadin-grid-sorter>';
  };
  clientColumnGroupHeaderRenderer(root: HTMLElement) {
    root.innerHTML = '<vaadin-grid-sorter path="client">Client</vaadin-grid-sorter>';
  };
  amountColumnGroupHeaderRenderer(root: HTMLElement) {
    root.innerHTML = '<vaadin-grid-sorter path="amount">Amount</vaadin-grid-sorter>';
  };
  statusColumnGroupHeaderRenderer(root: HTMLElement) {
    root.innerHTML = '<vaadin-grid-sorter path="status">Status</vaadin-grid-sorter>';
  };
  dateColumnGroupHeaderRenderer(root: HTMLElement) {
    root.innerHTML = '<vaadin-grid-sorter path="date">Date</vaadin-grid-sorter>';
  };

  /* Column filters */
  idColumnHeaderRenderer (root: HTMLElement) {
    root.innerHTML = `
      <vaadin-grid-filter path="id">
        <vaadin-number-field clear-button-visible placeholder="Filter" slot="filter" style="width: 100%"></vaadin-number-field>
      </vaadin-grid-filter>
      `;
    root.querySelector('vaadin-number-field')?.addEventListener('value-changed', (event: any) => {
      (root.querySelector('vaadin-grid-filter') as any).value = event.detail.value;
    });
  };
  clientColumnHeaderRenderer (root: HTMLElement) {
    root.innerHTML = `
      <vaadin-grid-filter path="client">
        <vaadin-text-field clear-button-visible placeholder="Filter" slot="filter" style="width: 100%"></vaadin-text-field>
      </vaadin-grid-filter>
      `;
    root.querySelector('vaadin-text-field')?.addEventListener('value-changed', (event: any) => {
      (root.querySelector('vaadin-grid-filter') as any).value = event.detail.value;
    });
  };
  amountColumnHeaderRenderer (root: HTMLElement) {
    root.innerHTML = `
      <vaadin-grid-filter path="amount">
        <vaadin-text-field clear-button-visible placeholder="Filter" slot="filter" style="width: 100%"></vaadin-text-field>
      </vaadin-grid-filter>
      `;
    root.querySelector('vaadin-text-field')?.addEventListener('value-changed', (event: any) => {
      (root.querySelector('vaadin-grid-filter') as any).value = event.detail.value;
    });
  };
  statusColumnHeaderRenderer (root: HTMLElement) {
    root.innerHTML = `
      <vaadin-grid-filter path="status">
        <vaadin-combo-box clear-button-visible placeholder="Filter" slot="filter" style="width: 100%"></vaadin-combo-box>
      </vaadin-grid-filter>
      `;
    (root.querySelector('vaadin-combo-box') as any).items = ['Pending', 'Success', 'Error'];
    root.querySelector('vaadin-combo-box')?.addEventListener('value-changed', (event: any) => {
      (root.querySelector('vaadin-grid-filter') as any).value = event.detail.value;
    });
  };
  dateColumnHeaderRenderer (root: HTMLElement) {
    root.innerHTML = `
      <vaadin-grid-filter path="date">
        <vaadin-date-picker clear-button-visible placeholder="Filter" slot="filter" style="width: 100%"></vaadin-date-picker>
      </vaadin-grid-filter>
      `;
    root.querySelector('vaadin-date-picker')?.addEventListener('value-changed', (event: any) => {
      (root.querySelector('vaadin-grid-filter') as any).value = event.detail.value;
    });
  };

  _getAmount(amount: number) {
    return this.currencyFormatter.format(amount);
  }

  _getDate(date: string) {
    return this.dateFormatter.format(Date.parse(date));
  }

  _getTheme(status: string) {
    return 'badge ' + status.toLowerCase();
  }

}
