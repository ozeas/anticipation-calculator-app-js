import { storiesOf } from '@storybook/web-components';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

import './ui-tip';

storiesOf('UITip', module).add('with basic usage', () => '<ui-tip>tip for input</ui-tip>');
