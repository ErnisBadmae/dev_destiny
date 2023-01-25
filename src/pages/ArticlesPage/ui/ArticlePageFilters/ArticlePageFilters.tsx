import { ArticleSortField, ArticleView, ArticleViewSelector } from 'entities/Article';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';

import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
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
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';


interface ArticlePageFiltersProps {
 className?: string;
}

export const ArticlePageFilters=({className}:ArticlePageFiltersProps)=>  {
    const view = useSelector(getArticlesPageView)
    const sort = useSelector(getArticlesPageSort)
    const order = useSelector(getArticlesPageOrder)
    const search = useSelector(getArticlesPageSearch)
    const dispatch = useAppDispatch()
    const {t} = useTranslation()

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
        console.log('newOrder test from articlePageFilter', newOrder)
        dispatch(articlePageActions.setPage(1))
        fetchData()
    },[dispatch, fetchData])

    const onChangeSort = useCallback((newSort:ArticleSortField) => {
        console.log('newSort test from articlePageFilter', newSort)

        dispatch(articlePageActions.setSort(newSort))
        dispatch(articlePageActions.setPage(1))
        fetchData()
    },[dispatch, fetchData])

    const onChangeSearch = useCallback((search:string) => {
        dispatch(articlePageActions.setSearch(search))
        dispatch(articlePageActions.setPage(1))
        debounceFetchData()
    },[dispatch, debounceFetchData])

   
    
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
        </div>
    );
}