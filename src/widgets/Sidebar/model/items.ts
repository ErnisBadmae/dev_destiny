import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import HomeIcon from 'shared/assets/icons/home.svg'
import MenuList from 'shared/assets/icons/list.svg'
import ProfileIcon from 'shared/assets/icons/Profile.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'


export interface SidebarItemType {
    path:string | undefined;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?:boolean 
}

export const  SidebarItemList: SidebarItemType[] =[
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
    {
        path: RoutePath.profile,
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
]