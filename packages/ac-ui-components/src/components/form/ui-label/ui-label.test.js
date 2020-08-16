import { beforeTest, afterTest, waitForElement } from 'ac-utils';

import './ui-label';

let uiLabel = null;

describe('ui-label', () => {
  beforeAll(beforeTest());

  afterAll(afterTest());

  beforeEach(async () => {
    window.container.innerHTML = `<ui-label>test</ui-label>`;
    await waitForElement('ui-label');
    uiLabel = window.container.querySelector('ui-label');
  });

  it('should not have a for value', () => {
    expect(uiLabel.for).toEqual('');
  });
});
