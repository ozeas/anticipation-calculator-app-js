export const waitForElement = async (name) => customElements.whenDefined(name);

export const beforeTest = () => () => {
  this.container = document.createElement('div');
  document.body.appendChild(this.container);
};

export const afterTest = () => () => {
  this.container.remove();
  this.container = null;
};
