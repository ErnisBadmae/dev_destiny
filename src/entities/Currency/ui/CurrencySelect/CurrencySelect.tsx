/* eslint-disable react/display-name */
import { Currency } from '../../model/types/currency';
import {classNames} from 'shared/lib/className/className';
import { Select } from 'shared/ui/Select';
import { t } from 'i18next';
import { memo, useCallback } from 'react';




interface CurrencySelectProps {
 className?: string;
 value?: Currency;
 onChange?: (value: Currency) => void;
 readonly?: boolean
}

const options = [
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD}
]

export const CurrencySelect=memo(({className, value, onChange, readonly}:CurrencySelectProps)=>  {

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Currency)
    },[onChange])

    return (
        <Select 
            className={classNames('', {}, [className])} 
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
})