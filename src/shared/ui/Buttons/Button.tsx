import { ButtonHTMLAttributes, FC } from 'react';
import {classNames} from 'shared/lib/className/className';
import cls from './Button.module.scss';


export enum ThemeButton{

    CLEAR = 'clear',


}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
 className?: string;
 theme?: ThemeButton;
}

export const Button:FC<ButtonProps> = (props) =>  {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button 
            type="button" 
            className={classNames(cls.Button,
                {[cls[theme]]: true}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
}