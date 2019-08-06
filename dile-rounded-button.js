import { LitElement, html, css } from 'lit-element';

export class DileRoundedButton  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      button {
        border-color: transparent;
        border-radius: 30px;
        border-style: solid;
        border-width: 1px;
        box-sizing: inherit;
        cursor: pointer;
        display: inline-block;
        line-height: normal;
        margin: 0;
        padding-left: var(--dile-rounded-button-padding-x, 20px);
        padding-right: var(--dile-rounded-button-padding-x, 20px);
        padding-top: var(--dile-rounded-button-padding-y, 5px);
        padding-bottom: var(--dile-rounded-button-padding-y, 5px);

        position: relative;
        text-decoration: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border-radius: var(--dile-rounded-button-height, 30px);
        font-size: var(--dile-rounded-button-font-size, 1em);
        text-transform: var(--dile-rounded-button-text-transform, uppercase);
        height: var(--dile-rounded-button-height, 30px);
        text-align: center;
        transition: all var(--dile-rounded-button-animation-time, 0.3s) ease;
        background-color: var(--dile-rounded-button-background-color, #e74c3c);
        color: var(--dile-rounded-button-text-color, #fff);
      }
      button:hover {
        background-color: var(--dile-rounded-button-hover-background-color, #303030);
        color: var(--dile-rounded-button-hover-text-color, #fff);
      }
      button[disabled] {
        cursor: default;
        opacity: 0.6;
        background-color: var(--dile-rounded-button-background-color, #e74c3c);
        color: var(--dile-rounded-button-text-color, #fff);
      }
    `;
  }

  static get properties() {
    return {
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.disabled = false;
  }

  render() {
    return html`
      <button @click="${this.onClick}" ?disabled="${this.disabled}"><slot></slot></button>
    `;
  }

  onClick(e) {
    this.dispatchEvent(new CustomEvent('dile-rounded-button-click'));
  }
}

customElements.define('dile-rounded-button', DileRoundedButton);