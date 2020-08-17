import { beforeTest, afterTest, waitForElement } from 'ac-utils';

import './ui-tip';

let uiTip = null;

describe('ui-tip', () => {
  beforeAll(beforeTest());

  afterAll(afterTest());

  beforeEach(async () => {
    window.container.innerHTML = `<ui-tip>input tip</ui-tip>`;
    await waitForElement('ui-tip');
    uiTip = window.container.querySelector('ui-tip');
  });

  it('should define component', () => {
    expect(uiTip).not.toBeNull();
  });

  it('should has a text', () => {
    expect(uiTip.innerHTML).toBe('input tip');
  });
});
