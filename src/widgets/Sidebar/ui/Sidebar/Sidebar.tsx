/* eslint-disable react/display-name */
/* eslint-disable i18next/no-literal-string */
import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/className/className';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Buttons/Button';
import { LangSwitch } from 'shared/ui/LangSwitch/LangSwitch';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SidebarItemList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss'


interface SidebarProps {
 className?: string;
}

export const Sidebar=memo(({className}:SidebarProps)=>  {

    const [collapsed, setCollapsed] = useState(false)

    const onToggle =() => {
        setCollapsed(prev => !prev)
    }

    const itemList = useMemo(() => {
        return SidebarItemList.map((item)=> (
            <SidebarItem  
                key={item.path} 
                item={item}
                collapsed={collapsed}
            />)
        )
    },[collapsed])
 
    return (
        <div 
            data-testid="sidebar"
            className={classNames(cls.Sidebar, 
                {[cls.collapsed]: collapsed}, 
                [className])}
        >
            <Button 
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                onClick={onToggle}
                size={ButtonSize.XL}
            >

                {collapsed ? '>': '<'}
                
            </Button>
            <div className={cls.items}>
            
                {itemList}
                
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitch 
                    short={collapsed} 
                    className={cls.lang}
                />
            </div>
        </div>
    );
})


