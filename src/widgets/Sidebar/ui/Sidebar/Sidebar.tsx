/* eslint-disable i18next/no-literal-string */
import React from 'react';
import { useState } from 'react';
import { classNames } from 'shared/lib/className/className';
import { LangSwitch } from 'shared/ui/LangSwitch/LangSwitch';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss'


interface SidebarProps {
 className?: string;
}

export const Sidebar=({className}:SidebarProps)=>  {

    const [collapsed, setCollapsed] = useState(false)
    const onToggle =() => {
        setCollapsed(prev => !prev)
    }
 
    return (
        <div 
            data-testid="custom-element"
            className={classNames(cls.Sidebar, 
                {[cls.collapsed]: collapsed}, 
                [className])}
        >
            <button onClick={onToggle}>
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitch className={cls.lang}/>
            </div>
        </div>
    );
}