/* eslint-disable react/display-name */

import { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/className/className';
import cls from './Select.module.scss';

export interface SelectOption <T extends string>{
    value: T;
    content:string
}

interface SelectProps <T extends string> {
 className?: string;
 label?: string;
 options?: SelectOption<T>[];
 value?: T; 
 readonly?:boolean;
 onChange?: (value: T) => void
 onClick?: (value:T) => void
}

export const Select = <T extends string>(props:SelectProps<T>)=>  {

    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if(onChange){ 
            (e.target.value as T)
        }
        console.log('test select')
    }



    const optionList = useMemo(() => options?.map((currenOpt) => {
        return  <option
            className={cls.option}
            value={currenOpt.value}
            key={currenOpt.value}
        >
            {currenOpt.content}
        </option>
    }),[options])

  

    const mods:Mods = {}

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label &&  (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select 
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
       
        </div>
    );
}