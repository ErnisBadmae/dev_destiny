/* eslint-disable react/display-name */
import React, { InputHTMLAttributes, memo } from 'react';
import {classNames} from 'shared/lib/className/className';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'| 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?:string;
    onChange?: (value:string) => void
}

export const Input= memo((props:InputProps)=>  {

    const {
        className,
        value,
        onChange,
        type="text",
        placeholder,
        ...otherProps
    } = props

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }
 
    return (
        <div 
            className={classNames(cls.InputWrapper, {}, [className])}
        >
           
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
             
            <div className={cls.caretWrapper}>

         
                <input 
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                />
                <span className={cls.caret}/>
            </div>
        </div>
    );
})