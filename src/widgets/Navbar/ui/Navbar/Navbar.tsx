import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/className/className';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ThemeButton } from 'shared/ui/Buttons/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onClose = useCallback(() => {
        setIsAuthModal(false)
    },[])

    const showModal = useCallback(() => {
        setIsAuthModal(true)
    },[])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    },[dispatch])

    if(authData) {
        return ( 
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text 
                    className={cls.appName} 
                    title={t('Mugco App')}
                    theme={TextTheme.INVERTED} 
                />
                <AppLink 
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn} 
                >
                    {t('Создать статью')}
                </AppLink>
                <Button 
                    theme={ThemeButton.CLEAR_INVERTED} 
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
                <LoginModal 
                    isOpen={isAuthModal} 
                    onClose={onClose}/>
            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button 
                theme={ThemeButton.CLEAR_INVERTED} 
                className={cls.links}
                onClick={showModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal 
                isOpen={isAuthModal} 
                onClose={onClose}/>}
        </header>
    );
});
