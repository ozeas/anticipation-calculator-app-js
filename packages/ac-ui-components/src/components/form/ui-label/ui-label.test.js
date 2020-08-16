import { beforeTest, afterTest, waitForElement } from 'ac-utils';

import './ui-label';

let container = null;
let uiLabel = null;

describe('ui-label', () => {
  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterAll(() => {
    container.remove();
    container = null;
  });

  beforeEach(async () => {
    container.innerHTML = `<ui-label>test</ui-label>`;
    await waitForElement('ui-label');
    uiLabel = container.querySelector('ui-label');
  });

  it('should not have a for value', () => {
    expect(uiLabel.for).toEqual('');
  });
});
