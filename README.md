# @xalatechnologies/form-themes

Theme system for the Fylleut form system.

## Installation

```bash
npm install @xalatechnologies/form-themes
```

## Features

- Theme customization
- RTL support
- Color scheme management
- Typography system
- Spacing utilities

## Usage

```typescript
import { createTheme, mergeThemes } from '@xalatechnologies/form-themes';
import { defaultTheme } from '@xalatechnologies/form-themes';

// Create a custom theme
const customTheme = createTheme({
  name: 'custom',
  colors: {
    primary: '#0066cc',
    secondary: '#ff4081'
  }
});

// Merge themes
const mergedTheme = mergeThemes(defaultTheme, customTheme);
```

## Documentation

For detailed documentation, visit our [documentation site](https://docs.fylleut.com/packages/form-themes).

## License

MIT
