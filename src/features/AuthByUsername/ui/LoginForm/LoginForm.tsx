/* eslint-disable react/display-name */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {classNames} from 'shared/lib/className/className';
import { Button, ThemeButton } from 'shared/ui/Buttons/Button';
import { Input } from 'shared/ui/Input/Input';
import {loginActions} from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
 className?: string;
}

export const LoginForm=memo(({className}:LoginFormProps)=>  {

    const {t} = useTranslation()
    const dispatch = useDispatch()
    const { username, password, isError, isLoading} = useSelector(getLoginState)

    const onChangeUsername = useCallback((value:string) =>{
        dispatch(loginActions.setUsername(value))
    },[dispatch])

    const onChangePassword = useCallback((value:string) =>{
        dispatch(loginActions.setPassword(value))
    },[dispatch])

    const onLoginClick = useCallback(() =>{
        dispatch(loginByUsername({username, password}))
    },[dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')}/>
            {isError && <Text text={t('Неверная пара логин-пароль')} theme={TextTheme.ERROR}/>}
            <Input 
                autofocus
                type='text' 
                className={cls.input}
                placeholder={t('Введите логин')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input 
                type='text' 
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button 
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
})