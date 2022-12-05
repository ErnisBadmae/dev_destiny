import { CSSProperties, useMemo } from 'react';
import {classNames, Mods} from 'shared/lib/className/className';
import cls from './Avatar.module.scss';


interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?:string
}

export const Avatar=({className, src, size, alt}:AvatarProps)=>  {
    
    const mods: Mods ={}
    const styles = useMemo<CSSProperties >(() => {
        return {
            width: size,
            height: size
        }
    },[size])

    return (
        <img 
            src={src} 
            className={classNames(cls.Avatar,mods, [className])}
            style={styles}
            alt={alt}
        />
    );
}