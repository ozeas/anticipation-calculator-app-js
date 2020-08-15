import '@webcomponents/webcomponentsjs/webcomponents-bundle';

(() => {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      :host {
        cursor: default;
      }
    </style>
    <slot></slot>
  `;

  ShadyCSS.prepareTemplate(template, 'ui-label');

  class UILabel extends HTMLElement {
    static get observedAttributes() {
      return ['for'];
    }
  }

  customElements.define('ui-label', UILabel);
})();
