export const waitForElement = async (name) => customElements.whenDefined(name);

export const beforeTest = () => () => {
  window.container = document.createElement('div');
  document.body.appendChild(window.container);
};

export const afterTest = () => () => {
  window.container.remove();
  window.container = null;
};
