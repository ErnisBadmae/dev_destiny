import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/className/className';
import { Button } from 'shared/ui/Buttons/Button';
import cls from './LoginForm.module.scss';


interface LoginFormProps {
 className?: string;
}

export const LoginForm=({className}:LoginFormProps)=>  {

    const {t} = useTranslation()

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <input type='text' />
            <input type='text' />
            <Button>
                {t('Войти')}
            </Button>
        </div>
    );
}