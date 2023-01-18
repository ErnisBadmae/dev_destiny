import { MutableRefObject, useEffect } from 'react';
export interface useInfiniteScrollOptions {
    callback?:() => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}


export function useInfiniteScroll(props: useInfiniteScrollOptions) {
    const {
        callback,
        triggerRef,
        wrapperRef
    } = props
    

    useEffect(() => {
        let observer:IntersectionObserver | null = null
        const triggerElement = triggerRef.current
        const wrapperElement = wrapperRef.current
        if(callback){
            const options ={
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry])=>{
                if(entry.isIntersecting){
                    callback()

                }
            }, options)

            observer.observe(triggerElement)
        }

        return () => {
            if(observer) {
                
                observer.unobserve(triggerElement)
            }
        }
       
    },[callback, triggerRef, wrapperRef])
}