import  ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import ProfileIcon  from 'shared/assets/icons/Profile.svg';
import  MenuList  from 'shared/assets/icons/list.svg';
import  HomeIcon  from 'shared/assets/icons/home.svg';
import { getUserAuthData } from 'entities/User';
import { createSelector } from '@reduxjs/toolkit';
import { SidebarItemType } from '../types/sidebar';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const  sidebarItemList: SidebarItemType[] =[
            {
                path: RoutePath.main || undefined,
                icon: HomeIcon,
                text:'Главная'
            },
            {
                path: RoutePath.about,
                icon: MenuList,
                text:'О сайте'
            },
        ];

        if(userData) {
            sidebarItemList.push(
                {
                    path: RoutePath.profile + userData?.id,
                    icon: ProfileIcon,
                    text:'Профиль',
                    authOnly: true
                },
                {
                    path: RoutePath.articles,
                    icon: ArticleIcon,
                    text:'Статьи',
                    authOnly: true
                },
            )
        }
        return sidebarItemList
    }
)