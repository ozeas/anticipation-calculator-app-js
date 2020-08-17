import { fontSizes, colors } from 'ac-style-tokens';
import { createTemplate, createStyle } from 'ac-utils';

(() => {
  const template = createTemplate();
  template.innerHTML = `<slot></slot>`;

  const styled = createStyle(
    template,
    'ui-label',
    `
    :host {
      color: ${colors.text[2]};
      display: inline;
      font-size: ${fontSizes[1]}px;
      font-weight: normal;
      line-height: 18px;
    }
    `
  );

  class UILabel extends HTMLElement {
    static get observedAttributes() {
      return ['for'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.adoptedStyleSheets = [styled];
      this.addEventListener('click', this._onClick);
    }

    connectedCallback() {
      ShadyCSS.styleElement(this);
    }

    get for() {
      const value = this.getAttribute('for');
      return value === null ? '' : value;
    }

    set for(value) {
      this.setAttribute('for', value);
    }

    _onClick(event) {
      const el = this._currentLabelTarget();
      if (el && event.target !== el) {
        el.focus();
        el.click();
      }
    }

    _currentLabelTarget() {
      if (!this.for) {
        return null;
      }
      const scope = this.getRootNode();
      return scope.querySelector(`[id=${this.for}]`);
    }
  }

  customElements.define('ui-label', UILabel);
})();
