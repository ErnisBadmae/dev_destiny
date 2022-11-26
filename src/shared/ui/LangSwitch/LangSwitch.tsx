/* eslint-disable react/display-name */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/className/className';
import { Button, ThemeButton } from '../Buttons/Button';

import cls from './LangSwitch.module.scss';


interface LangSwitchProps {
 className?: string;
 short?: boolean
}

export const LangSwitch=memo(({className, short}:LangSwitchProps)=>  {
    
    const { t, i18n } = useTranslation();
    
    const toggle = async() => {
        i18n.changeLanguage(i18n.language ==='ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(cls.LangSwitch, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t(short ? "Короткий язык":"Язык")}
        </Button>
    );
})