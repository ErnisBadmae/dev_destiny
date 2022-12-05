/* eslint-disable react/display-name */

import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import {classNames, Mods} from 'shared/lib/className/className';
import cls from './Button.module.scss';


export enum ThemeButton{
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    OUTLINE_RED = 'outline_red'
}
export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
 className?: string;
 theme?: ThemeButton;
 square?: boolean;
 size?: ButtonSize;
 disabled?: boolean;
 children?: ReactNode 
}



export const Button = memo<ButtonProps>((props: ButtonProps) =>  {

    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props

    const mods: Mods   =  {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]:true,
        [cls.disabled]:disabled
    }

    return (
        <button 
            type="button" 
            className={classNames(cls.Button,
                mods , [className])}
            disabled={disabled}
            /* eslint-disable react/jsx-props-no-spreading */
            {...otherProps}
        >
            {children}
        </button>
    );
})