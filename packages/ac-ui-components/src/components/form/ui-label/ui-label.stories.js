import { storiesOf } from '@storybook/web-components';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

import './ui-label';

storiesOf('UILabel', module).add('with basic usage', () => '<ui-label>Simple label</ui-label>');

storiesOf('UILabel', module).add('with input referenced', () => {
  const wrapper = `
    <ui-label for="entry-example">Custom label</ui-label>
    <input id="entry-example" type="text" />
  `;

  return wrapper;
});
