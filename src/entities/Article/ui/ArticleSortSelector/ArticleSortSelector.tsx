import { ArticleSortField } from 'entities/Article/model/types/article';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/className/className';
import { SortOrder } from 'shared/types';
import { Select, SelectOption } from 'shared/ui/Select';
import cls from './ArticleSortSelector.module.scss';


interface ArticleSortSelectorProps {
 className?: string;
 sort:ArticleSortField;
 order:SortOrder;
 onChangeOrder: (newOrder:SortOrder) => void;
 onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector=memo((props:ArticleSortSelectorProps)=>  {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort
    } = props
    const {t} = useTranslation()

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value:'asc',
            content: t('возрастанию')
        },
        {
            value:'desc',
            content: t('убыванию')
        }
    ],[t])

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value:ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value:ArticleSortField.TITLE,
            content: t('названию')
        },
        {
            value:ArticleSortField.VIEWS,
            content: t('количеству просмотров')
        },
    ],[t])


    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select 
                options={sortOptions} 
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select 
                options={orderOptions} 
                label={t('По')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
})