import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeContextProps {
    theme?: Theme;
    setThem?: (theme: Theme) => void;
}

export const ThemeContent = createContext({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
