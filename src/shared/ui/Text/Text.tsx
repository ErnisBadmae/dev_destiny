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

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: AlignText
}

export const Text=memo((props:TextProps)=>  {
    const {
        className, 
        text, 
        title,
        theme = TextTheme.PRIMARY,
        align = AlignText.LEFT,
    } = props

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true
    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}

        </div>
    );
})