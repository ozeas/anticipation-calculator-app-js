import { fontSizes, colors } from 'ac-style-tokens';

import '../../../utils/theme';

const styled = new CSSStyleSheet();

styled.replaceSync(`
  :host {
    color: ${colors.text[3]};
    display: inline;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: ${fontSizes[0]}px;
    font-weight: bold;
    line-height: 14px;
  }
`);

export default styled;
