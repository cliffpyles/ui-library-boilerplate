// src/utils/getTheme.ts
const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
};

const replaceKeysWithValues = (theme: any, root: any): any => {
  const processedTheme: any = {};

  for (const key in theme) {
    if (typeof theme[key] === 'object' && theme[key] !== null) {
      processedTheme[key] = replaceKeysWithValues(theme[key], root);
    } else if (typeof theme[key] === 'string' && theme[key].startsWith('$')) {
      const valuePath = theme[key].substring(1);
      processedTheme[key] = getNestedValue(root, valuePath);
    } else {
      processedTheme[key] = theme[key];
    }
  }

  return processedTheme;
};

export const buildTheme = (theme: any): any => {
  return replaceKeysWithValues(theme, theme);
};
