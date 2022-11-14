/* eslint-disable i18next/no-literal-string */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/className/className';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Buttons/Button';
import { LangSwitch } from 'shared/ui/LangSwitch/LangSwitch';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import HomeIcon from 'shared/assets/icons/home.svg'
import MenuList from 'shared/assets/icons/list.svg'

import cls from './Sidebar.module.scss'


interface SidebarProps {
 className?: string;
}

export const Sidebar=({className}:SidebarProps)=>  {

    const [collapsed, setCollapsed] = useState(false)
    const {t} = useTranslation()
    const onToggle =() => {
        setCollapsed(prev => !prev)
        console.log('toggle',collapsed)
    }
 
    return (
        <div 
            data-testid="custom-element"
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
                <div >
                    <AppLink 
                        className={cls.item}
                        to={RoutePath.main}  
                        theme={AppLinkTheme.SECONDARY} 
                    >
                        <HomeIcon className={cls.icon}/>
                        <span className={cls.link}>
                            {t('Главная')}
                        </span>
                    </AppLink>
                </div>
                <div >
                    <AppLink 
                        className={cls.item}
                        to={RoutePath.about} 
                        theme={ AppLinkTheme.RED}
                       

                    >
                        <MenuList className={cls.icon}/>
                        <span  className={cls.link}>
                            О сайте
                        </span>
                   
                    </AppLink>
                </div>
                
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
}


// 
// onClick={onToggle}
// 

// 