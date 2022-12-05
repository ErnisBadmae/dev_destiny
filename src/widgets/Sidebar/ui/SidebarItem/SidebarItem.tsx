/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from '../../model/items';
import { classNames } from 'shared/lib/className/className';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';


interface SidebarItemProps {
    item?:SidebarItemType ,
    collapsed: boolean
}

export const SidebarItem=({item, collapsed}:SidebarItemProps)=>  {
    const { t } = useTranslation()

    const isAuth = useSelector(getUserAuthData)

    if(item?.authOnly && !isAuth) {
        return null
    }

    return (
       
        <AppLink 
            theme={AppLinkTheme.SECONDARY} 
            to={item.path}  
            className={classNames(cls.item, {[cls.collapsed]: collapsed}, ) }
        >
            <item.icon className={cls.icon}/>
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>

    );
}