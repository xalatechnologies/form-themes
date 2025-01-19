export interface Theme {
    name: string;
    colors: ThemeColors;
    typography: ThemeTypography;
    spacing: ThemeSpacing;
    direction: 'ltr' | 'rtl';
}
export interface ThemeColors {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    error: string;
    text: {
        primary: string;
        secondary: string;
    };
}
export interface ThemeTypography {
    fontFamily: string;
    fontSize: {
        small: string;
        medium: string;
        large: string;
    };
}
export interface ThemeSpacing {
    unit: number;
    small: number;
    medium: number;
    large: number;
}
export declare const defaultTheme: Theme;
//# sourceMappingURL=theme.d.ts.map