import { 
    fetchProfileData, 
    // getProfileData, 
    getProfileError, 
    getProfileForm, 
    getProfileLoading, 
    getProfileReadonly, 
    getProfileValidateErrors, 
    profileActions, 
    ProfileCard, 
    profileReducer, 
    ValidateProfileError
} from 'entities/Profile';
import { 
    DynamicModuleLoader, 
    ReducerList 
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {classNames} from 'shared/lib/className/className';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';

const reducers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
 className?: string;

}

const ProfilePage=({className }:ProfilePageProps)=>  {
    const {t} =useTranslation('profile')
    const dispatch = useAppDispatch()
    // const data = useSelector(getProfileData)
    const isError = useSelector(getProfileError)
    const isLoading = useSelector(getProfileLoading)
    const readonly = useSelector(getProfileReadonly)
    const formData = useSelector(getProfileForm)
    const validateError = useSelector(getProfileValidateErrors)

    console.log(validateError, 'validateError')

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileError.INCORRECT_AGE]: t('Ошибка поля возрас'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('ошибка поля страна'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('ошибка поля юзердата'),
        [ValidateProfileError.NO_DATA]: t('нет данных'),

    }

    useEffect(() => {
        if(__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData( ))
        }
    },[dispatch])

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ''}))
    },[dispatch])

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({last: value || ''}))

    },[dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({age: Number(value) || 0}))

    },[dispatch])

    const onChangeCity= useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ''}))

    },[dispatch])

    const onChangeUsername= useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ''}))

    },[dispatch])

    const onChangeAvatar= useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}))

    },[dispatch])

    const onChangeCurrency= useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({currency}))

    },[dispatch])

    const onChangeCountry= useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({country}))

    },[dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
                {validateError?.length && validateError.map((error) => {
                    return <Text 
                        key={error}
                        theme={TextTheme.ERROR} 
                        text={validateErrorTranslates[error]} 
                    />
                })}
                <ProfileCard 
                    data={formData}
                    isLoading={isLoading}
                    isError={isError}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
}

export default ProfilePage