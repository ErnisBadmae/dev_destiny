/* eslint-disable react/display-name */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {  useSelector } from 'react-redux';
import {classNames} from 'shared/lib/className/className';
import { Button, ThemeButton } from 'shared/ui/Buttons/Button';
import { Input } from 'shared/ui/Input/Input';
import {loginActions, loginReducer} from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsError } from '../../model/selectors/getLoginIsError/getLoginIsError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { 
    DynamicModuleLoader, 
    ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';


export interface LoginFormProps {
 className?: string;
 onSuccess: ()=> void
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
}

const LoginForm = memo(({className, onSuccess}:LoginFormProps)=>  {

    const {t} = useTranslation()
    const dispatch = useAppDispatch()
 
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isError = useSelector(getLoginIsError)
    const isLoading = useSelector(getLoginIsLoading)

    const onChangeUsername = useCallback((value:string) =>{
        dispatch(loginActions.setUsername(value))
    },[dispatch])

    const onChangePassword = useCallback((value:string) =>{
        dispatch(loginActions.setPassword(value))
    },[dispatch])

    const onLoginClick = useCallback(async() =>{
        const result = await dispatch(loginByUsername({username, password}))
        if(result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    },[dispatch, password, username, onSuccess])

    return (
        <DynamicModuleLoader 
            removeAfterUnmount
            reducers={initialReducers}
        > 
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
        </DynamicModuleLoader>
    );
})

export default LoginForm