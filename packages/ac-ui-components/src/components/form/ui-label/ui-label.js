(() => {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      :host {
        cursor: pointer;
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
  }

  customElements.define('ui-label', UILabel);
})();
