import { ArticleSortField, ArticleTypeTabs, ArticleView, ArticleViewSelector } from 'entities/Article';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';

import { ArticleType } from 'entities/Article/model/types/article';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/className/className';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from 'shared/types';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlePageActions } from '../../model/slice/articlePageSlice';
import cls from './ArticlePageFilters.module.scss';


interface ArticlePageFiltersProps {
 className?: string;
}

export const ArticlePageFilters=({className}:ArticlePageFiltersProps)=>  {
    const dispatch = useAppDispatch()
    const {t} = useTranslation('article')

    const view = useSelector(getArticlesPageView)
    const sort = useSelector(getArticlesPageSort)
    const order = useSelector(getArticlesPageOrder)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType )

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({replace:true}))
    },[dispatch])

    const debounceFetchData = useDebounce(fetchData, 500)
    
    const onChangeView = useCallback((view:ArticleView) => {
        dispatch(articlePageActions.setView(view))
        dispatch(articlePageActions.setPage(1))
        fetchData()
    },[dispatch, fetchData])

    const onChangeOrder = useCallback((newOrder:SortOrder) => {
        dispatch(articlePageActions.setOrder(newOrder))
        dispatch(articlePageActions.setPage(1))
        fetchData()
    },[dispatch, fetchData])

    const onChangeSort = useCallback((newSort:ArticleSortField) => {
        dispatch(articlePageActions.setSort(newSort))
        dispatch(articlePageActions.setPage(1))
        fetchData()
    },[dispatch, fetchData])

    const onChangeSearch = useCallback((search:string) => {
        dispatch(articlePageActions.setSearch(search))
        dispatch(articlePageActions.setPage(1))
        debounceFetchData()
    },[dispatch, debounceFetchData])

    const onChangeType = useCallback((value:ArticleType) => {
        dispatch(articlePageActions.setType(value))
        dispatch(articlePageActions.setPage(1))
        fetchData()
    },[dispatch, fetchData])

 
    
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
                <Input 
                    placeholder={t('Поиск')}
                    onChange ={onChangeSearch}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
}