import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/className/className';
import { Button } from 'shared/ui/Buttons/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';


interface LoginFormProps {
 className?: string;
}

export const LoginForm=({className}:LoginFormProps)=>  {

    const {t} = useTranslation()

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input 
                autofocus
                type='text' 
                className={cls.input}
                placeholder={t('Введите логин')}
            />
            <Input 
                type='text' 
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <Button 
                className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
}