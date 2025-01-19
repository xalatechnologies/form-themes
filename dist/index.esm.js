const defaultTheme = {
    name: 'default',
    colors: {
        primary: '#1976d2',
        secondary: '#dc004e',
        background: '#ffffff',
        surface: '#f5f5f5',
        error: '#f44336',
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)'
        }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: {
            small: '0.875rem',
            medium: '1rem',
            large: '1.25rem'
        }
    },
    spacing: {
        unit: 8,
        small: 1,
        medium: 2,
        large: 3
    },
    direction: 'ltr'
};

const mergeThemes = (base, override) => {
    var _a, _b;
    return Object.assign(Object.assign(Object.assign({}, base), override), { colors: Object.assign(Object.assign(Object.assign({}, base.colors), override.colors), { text: Object.assign(Object.assign({}, base.colors.text), (_a = override.colors) === null || _a === undefined ? undefined : _a.text) }), typography: Object.assign(Object.assign(Object.assign({}, base.typography), override.typography), { fontSize: Object.assign(Object.assign({}, base.typography.fontSize), (_b = override.typography) === null || _b === undefined ? undefined : _b.fontSize) }), spacing: Object.assign(Object.assign({}, base.spacing), override.spacing) });
};
const createTheme = (override = {}) => {
    return mergeThemes(defaultTheme, override);
};

export { createTheme, defaultTheme, mergeThemes };
//# sourceMappingURL=index.esm.js.map
