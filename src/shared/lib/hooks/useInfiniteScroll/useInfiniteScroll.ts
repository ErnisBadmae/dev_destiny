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
        const currentElement = triggerRef.current

        if(callback){
            const options ={
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry])=>{
                if(entry.isIntersecting){
                    callback()

                }
            }, options)

            observer.observe(currentElement)
        }

        return () => {
            if(observer) {
                
                observer.unobserve(currentElement)
            }
        }
       
    },[callback, triggerRef, wrapperRef])
}