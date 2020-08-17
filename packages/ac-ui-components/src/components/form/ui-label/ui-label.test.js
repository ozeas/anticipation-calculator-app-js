import { beforeTest, afterTest, waitForElement } from 'ac-utils';

import './ui-label';

let uiLabel = null;

describe('ui-label', () => {
  const component = async (forValue = '') => {
    window.container.innerHTML = `<ui-label for="${forValue}">test</ui-label>`;
    await waitForElement('ui-label');
    uiLabel = window.container.querySelector('ui-label');
  };

  beforeAll(beforeTest());

  afterAll(afterTest());

  beforeEach(async () => {
    await component();
  });

  it('should define component', () => {
    expect(uiLabel).not.toBeNull();
  });

  it('should not have a for value', () => {
    expect(uiLabel.for).toEqual('');
  });

  it('should have a for value', async () => {
    await component('id-test');

    expect(uiLabel.for).toEqual('id-test');
  });

  it('should focus on input when clicked label', async () => {
    window.container.innerHTML = `
      <ui-label for="id-test">test</ui-label>
      <input id="id-test" type="text" />
    `;
    await waitForElement('ui-label');
    uiLabel = window.container.querySelector('ui-label');
    const input = window.container.querySelector('input');

    uiLabel.click();

    expect(document.activeElement).toBe(input);
  });
});
