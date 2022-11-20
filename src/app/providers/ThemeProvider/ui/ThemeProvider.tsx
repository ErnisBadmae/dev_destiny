import React, { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
}

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme
    } = props
    const [theme, setTheme] = useState<Theme>(initialTheme ||defaultTheme);
    
    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );
    document.body.className = theme
        
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemProvider;
