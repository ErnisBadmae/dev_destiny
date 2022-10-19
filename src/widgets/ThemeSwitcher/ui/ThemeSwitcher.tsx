import { useTheme } from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/className/className';
import cls from './ThemeSwitcher.module.scss';


interface ThemeSwitcherProps {
 className?: string;
}

export const ThemeSwitcher=({className}:ThemeSwitcherProps)=>  {
    const { theme, toggleTheme } = useTheme();

 return (
    <button 
    onClick={toggleTheme}
    className={classNames(cls.ThemeSwitcher, {}, [className])}
    >переключить тему</button>
 );
}