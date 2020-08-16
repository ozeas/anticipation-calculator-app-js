(() => {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      :host {
        cursor: pointer;
        display: block;
      }
    </style>
    <slot></slot>
  `;

  ShadyCSS.prepareTemplate(template, 'ui-label');

  class UILabel extends HTMLElement {
    static get observedAttributes() {
      return ['for'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
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
