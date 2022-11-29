import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import {classNames} from 'shared/lib/className/className';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Buttons/Button';
import cls from './ProfileCard.module.scss';
import { Input } from 'shared/ui/Input/Input';


interface ProfileCardProps {
 className?: string;
}

export const ProfileCard=({className}:ProfileCardProps)=>  {

    const { t } =useTranslation('profile')
    
    const data = useSelector(getProfileData)
    const isError = useSelector(getProfileError)
    const isLoading = useSelector(getProfileLoading)


    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button 
                    className={cls.editBtn}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input 
                    value ={data?.first}
                    placeholder={t('Ваше имя')}
                />

                <Input 
                    value ={data?.first}
                    placeholder={t('Ваша фамилия')}
                    className={cls.inputs}
                />

                <Input 
                    value ={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.inputs}

                />
                    
            
            </div>
        </div>
    );
}