import { MutableRefObject, ReactNode, useRef } from 'react';
import {classNames} from 'shared/lib/className/className';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';


interface PageProps {
 className?: string;
 children: ReactNode;
 onScrollEnd?: () => void;
}

export const Page=(props:PageProps)=>  {
    const {
        className,
        children,
        onScrollEnd
    } = props

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    return (
        <section 
            className={classNames(cls.Page, {}, [className])}
            ref={wrapperRef}
        >
            {children}
            <div ref={triggerRef}></div>
        </section>
    );
}