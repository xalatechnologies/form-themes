import type { Theme } from './theme';
import { defaultTheme } from './theme';

export const mergeThemes = (base: Theme, override: Partial<Theme>): Theme => {
  return {
    ...base,
    ...override,
    colors: {
      ...base.colors,
      ...override.colors,
      text: {
        ...base.colors.text,
        ...override.colors?.text
      }
    },
    typography: {
      ...base.typography,
      ...override.typography,
      fontSize: {
        ...base.typography.fontSize,
        ...override.typography?.fontSize
      }
    },
    spacing: {
      ...base.spacing,
      ...override.spacing
    }
  };
};

export const createTheme = (override: Partial<Theme> = {}): Theme => {
  return mergeThemes(defaultTheme, override);
};
