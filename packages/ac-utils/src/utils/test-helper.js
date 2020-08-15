export const waitForElement = async (name) => customElements.whenDefined(name);

let container = null;
export const beforeTest = () => () => {
  container = document.createElement('div');
  document.body.appendChild(container);
};

export const afterTest = () => () => {
  container.remove();
  container = null;
};
