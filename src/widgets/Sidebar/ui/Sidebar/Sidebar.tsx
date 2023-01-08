import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/className/className';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Buttons/Button';
import { LangSwitch } from 'shared/ui/LangSwitch/LangSwitch';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarsItems';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss'


interface SidebarProps {
 className?: string;
}

export const Sidebar=memo(({className}:SidebarProps)=>  {

    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemList = useSelector(getSidebarItems)

    const onToggle =() => {
        setCollapsed(prev => !prev)
    }

    const itemList = useMemo(() => {
        return sidebarItemList.map((item)=> (
            <SidebarItem  
                key={item.path} 
                item={item}
                collapsed={collapsed}
            />)
        )
    },[collapsed, sidebarItemList])
 
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


