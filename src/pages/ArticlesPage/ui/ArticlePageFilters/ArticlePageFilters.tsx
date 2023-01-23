import { ArticleSortField, ArticleView, ArticleViewSelector } from 'entities/Article';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';

import { getArticlesPageOrder, getArticlesPageSort, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { articlePageActions } from '../../model/slice/articlePageSlice';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/className/className';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import cls from './ArticlePageFilters.module.scss';
import { SortOrder } from 'shared/types';


interface ArticlePageFiltersProps {
 className?: string;
}

export const ArticlePageFilters=({className}:ArticlePageFiltersProps)=>  {
    const view = useSelector(getArticlesPageView)
    const sort = useSelector(getArticlesPageSort)
    const order = useSelector(getArticlesPageOrder)
    const dispatch = useAppDispatch()
    const {t} = useTranslation()
    
    const onChangeView = useCallback((view:ArticleView) => {
        dispatch(articlePageActions.setView(view))
    },[dispatch])

    const onChangeOrder = useCallback((newOrder:SortOrder) => {
        dispatch(articlePageActions.setOrder(newOrder))
    },[dispatch])

    const onChangeSort = useCallback((newSort:ArticleSortField) => {
        dispatch(articlePageActions.setSort(newSort))
    },[dispatch])

   
    
    return (
        <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector 
                    view={view} 
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input placeholder={t('Поиск')}/>
            </Card>
        </div>
    );
}