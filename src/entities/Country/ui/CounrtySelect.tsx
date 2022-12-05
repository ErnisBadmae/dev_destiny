/* eslint-disable react/display-name */

import {classNames} from 'shared/lib/className/className';
import { Select } from 'shared/ui/Select';
import { t } from 'i18next';
import { memo, useCallback } from 'react';
import { Country } from '../model/types/country';




interface CountrySelectProps {
 className?: string;
 value?: Country;
 onChange?: (value: Country) => void;
 readonly?: boolean
}

const options = [
    {value: Country.EU, content: Country.EU},
    {value: Country.RUSSIA, content: Country.RUSSIA},
    {value: Country.USA, content: Country.USA}
]

export const CountrySelect=memo(({className, value, onChange, readonly}:CountrySelectProps)=>  {

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country)
    },[onChange])

    return (
        <Select 
            className={classNames('', {}, [className])} 
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
})