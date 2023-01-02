/* eslint-disable react/display-name */
import { memo } from 'react';
import {classNames, Mods} from 'shared/lib/className/className';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum AlignText {
    CENTER = 'center',
    TOP = 'top',
    LEFT = 'left',
    RIGHT = 'right'
}

export enum SizeText {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: AlignText;
    size?: SizeText
}

export const Text=memo((props:TextProps)=>  {
    const {
        className, 
        text, 
        title,
        theme = TextTheme.PRIMARY,
        align = AlignText.LEFT,
        size = SizeText.M,
    } = props

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true
    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}

        </div>
    );
})