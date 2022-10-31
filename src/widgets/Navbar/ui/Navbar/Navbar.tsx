import { classNames } from 'shared/lib/className/className';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>

                <AppLink to={"/"}  theme={AppLinkTheme.SECONDARY} 
                    // eslint-disable-next-line i18next/no-literal-string
                    className={cls.mainLink}>Главная</AppLink>
                <AppLink to={'/about'} 
                    // eslint-disable-next-line i18next/no-literal-string
                    theme={ AppLinkTheme.RED}>О сайте</AppLink>
            </div>
        </div>
    );
};
