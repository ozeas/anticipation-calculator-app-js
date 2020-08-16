import { storiesOf } from '@storybook/web-components';

import './ui-label';

storiesOf('UILabel', module).add('default view', () => {
  const el = document.createElement('ui-label');
  el.for = 'test';
  el.innerHTML = 'test';
  return el;
});
