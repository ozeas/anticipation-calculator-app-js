import { fontSizes, colors } from 'ac-style-tokens';

import '../../../utils/theme';

const styled = new CSSStyleSheet();

styled.replaceSync(`
  :host {
    color: ${colors.text[2]};
    display: inline;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: ${fontSizes[1]}px;
    font-weight: normal;
    line-height: 18px;
  }
`);

export default styled;
