// import { useTheme } from 'app/providers/ThemeProvider';
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import {classNames} from 'shared/lib/className/className';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';


interface ModalProps {
  className?: string;
  children?:ReactNode;
  isOpen?: boolean;
  onClose?:() => void;
}

export const Modal=(props: ModalProps)=>  {
    const ANIMATION_DELAY = 300

    const {
        className,
        children,
        isOpen,
        onClose
    } = props

    const [isClosing, setIsClosing] = useState(false)
    const timeRef = useRef<ReturnType<typeof setTimeout>>()
     
    // const [theme] = useTheme()

 

    const closeHandler = useCallback(() => {
        if(onClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            },ANIMATION_DELAY)
        }
    },[onClose])
    
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key ==='Escape'){
            closeHandler()
        }
    },[closeHandler])

    const onContentClick =(e:React.MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown )
        }
    },[isOpen,onKeyDown])

    const mods: Record<string, boolean> ={
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        // [theme]: true
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div 
                        className={cls.content}
                        onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}