/* eslint-disable react/display-name */
import { FC, memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import {classNames} from 'shared/lib/className/className';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary', 
    SECONDARY = 'secondary',
    RED = 'red'
} 

interface AppLinkProps extends LinkProps{
 className?: string;
 theme?:AppLinkTheme;
 children?: ReactNode
}

export const AppLink= memo((props:AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink,
                {[cls[theme]]:true}, [className])}
            /* eslint-disable react/jsx-props-no-spreading */
            {...otherProps}
        >
            {children}
        </Link>
    );
});
