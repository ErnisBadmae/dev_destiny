import { StateSchema } from 'app/providers/StoreProvider';
import { scrollSaveActions } from 'features/ScrollSave';
import { getScrollByPath } from 'features/ScrollSave/model/selectors/getScroll';
import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/className/className';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';


interface PageProps {
 className?: string;
 children: ReactNode;
 onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';


export const Page=(props:PageProps)=>  {
    const {
        className,
        children,
        onScrollEnd
    } = props

    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname))

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll =useThrottle((e:UIEvent<HTMLDivElement>) => {

        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }))
    }, 500)

    return (
        <section 
            className={classNames(cls.Page, {}, [className])}
            ref={wrapperRef}
            onScroll={onScroll}
            id={PAGE_ID}

        >
            {children}
            { onScrollEnd ? 
                <div 
                    className={cls.trigger}
                    ref={triggerRef}
                /> 
                : null
            }
           
        </section>
    );
}