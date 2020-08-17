import { createTemplate } from 'ac-utils';

import styled from './styled';

(() => {
  const template = createTemplate();
  template.innerHTML = `<slot></slot>`;

  ShadyCSS.prepareTemplate(template, 'ui-tip');

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
