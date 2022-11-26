import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import HomeIcon from 'shared/assets/icons/home.svg'
import MenuList from 'shared/assets/icons/list.svg'
import ProfileIcon from 'shared/assets/icons/Profile.svg'

export interface SidebarItemType {
    path:string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const  SidebarItemList: SidebarItemType[] =[
    {
        path: RoutePath.main,
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
        text:'Профиль'
    }
]