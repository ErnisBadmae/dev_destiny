/* eslint-disable react/display-name */

import { ChangeEvent, memo, useMemo } from 'react';
import {classNames, Mods} from 'shared/lib/className/className';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content:string
}

interface SelectProps {
 className?: string;
 label?: string;
 options?: SelectOption[];
 value?: string;
 readonly?:boolean;
 onChange?: (value: string) => void
}

export const Select=memo((props:SelectProps)=>  {

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
            (e.target.value)
        }
    }
    const optionList = useMemo(() => options?.map((currenOpt) => {
        <option
            className={cls.option}
            value={currenOpt.value}
            key={currenOpt.value}
        >
            {currenOpt.content}
        </option>
    })

    ,[options])

  

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
})