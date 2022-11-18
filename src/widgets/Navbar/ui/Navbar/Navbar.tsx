/* eslint-disable max-len */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/className';
import { Button, ThemeButton } from 'shared/ui/Buttons/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev)=> !prev)
    },[])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button 
                theme={ThemeButton.CLEAR_INVERTED} 
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal 
                isOpen={isAuthModal} 
                onClose= {onToggleModal}
            // eslint-disable-next-line i18next/no-literal-string
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, earum! Iure, perspiciatis? Eos qui nisi, odio sint similique, eveniet, ea asperiores laboriosam neque fuga delectus unde impedit? Tempora, perferendis nisi!
            </Modal>
        </div>
    );
};
