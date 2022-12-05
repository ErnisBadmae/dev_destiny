import { useTranslation } from 'react-i18next';
import {classNames, Mods} from 'shared/lib/className/className';
import { AlignText, Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar';
import {  Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import { Country, CountrySelect } from 'entities/Country';
import {Profile} from '../../model/types/profile'


interface ProfileCardProps {
 className?: string;
 data?: Profile;
 isError?: string;
 isLoading?:boolean;
 readonly?: boolean;
 
 onChangeFirstName?: (value?: string) => void;
 onChangeLastName?:(value?: string) => void;
 onChangeAge?:(value?: string) => void;
 onChangeCity?:(value?: string) => void;
 onChangeUsername?:(value?: string) => void;
 onChangeAvatar?:(value?: string) => void;
 onChangeCurrency?:(currency?: Currency) => void;
 onChangeCountry?:(country?: Country) => void;



}

export const ProfileCard=(props:ProfileCardProps)=>  {
    const { t } =useTranslation('profile')
    const {
        className,
        data,
        isError,
        isLoading,
        readonly,

        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } =props
    
    if(isLoading) {
        return (    
            <div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
                <Loader/>
            </div>
        )
    }

    if(isError) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла неожиданная ошибка')} 
                    text={t('Попробуйте перезагрузить страницу')}
                    align={AlignText.CENTER}
                />
            </div>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    }
    

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                
                { data?.avatar && (<div className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar}/>
                </div>
                )}
                <Input 
                    value ={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.inputs}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />

                <Input 
                    value ={data?.last}
                    placeholder={t('Ваша фамилия')}
                    className={cls.inputs}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />   

                <Input 
                    value ={data?.age}
                    placeholder={t('Ваша возраст')}
                    className={cls.inputs}
                    onChange={onChangeAge}
                    readonly={readonly}
                    // onKeyPress={(e) => {
                    //     if (!/[0-9]/.test(e.key)) {
                    //         e.preventDefault();
                    //     }
                    // }}
                />  

                <Input 
                    value ={data?.city}
                    placeholder={t('Ваша город')}
                    className={cls.inputs}
                    onChange={onChangeCity}
                    readonly={readonly}
                />  

                <Input 
                    value ={data?.avatar}
                    placeholder={t('Ваша avatar')}
                    className={cls.inputs}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />  

                <Input 
                    value ={data?.username}
                    placeholder={t('Ваша ник')}
                    className={cls.inputs}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />  
                <CurrencySelect
                    className={cls.inputs}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.inputs}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
}