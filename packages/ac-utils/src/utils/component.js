export const createTemplate = () => document.createElement('template');

export const createStyle = (template, componentName, style) => {
  const styled = new CSSStyleSheet();
  styled.replaceSync(style);
  ShadyCSS.prepareTemplate(template, componentName);

  return styled;
};
