import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/className/className';
import { Button, ThemeButton } from 'shared/ui/Buttons/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
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
            <div className={classNames(cls.Navbar, {}, [className])}>
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
            </div>
        )
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
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
        </div>
    );
};
