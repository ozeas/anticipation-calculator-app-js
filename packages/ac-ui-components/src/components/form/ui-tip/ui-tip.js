import { fontSizes, colors } from 'ac-style-tokens';
import { createTemplate, createStyle } from 'ac-utils';

(() => {
  const template = createTemplate();
  template.innerHTML = `<slot></slot>`;

  const styled = createStyle(
    template,
    'ui-tip',
    `
    :host {
      color: ${colors.text[3]};
      display: inline;
      font-size: ${fontSizes[0]}px;
      font-weight: bold;
      line-height: 14px;
    }
    `
  );

  class UITip extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.adoptedStyleSheets = [styled];
    }

    connectedCallback() {
      ShadyCSS.styleElement(this);
    }
  }

  customElements.define('ui-tip', UITip);
})();
