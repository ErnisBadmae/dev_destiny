import { ArticleList, ArticleView, ArticleViewSelector } from "entities/Article";
import { fetchNextArticlesPage } from "pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/className/className";
import {
    DynamicModuleLoader,
    ReducerList
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useAppDispatch/useInitialEffect";
import { Page } from "shared/ui/Page/Page";
import {
    getArticlesPageIsError,
    getArticlesPageIsLoading, getArticlesPageView
} from "../../model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { articlePageActions, articlePageReducer, getArticles } from "../../model/slice/articlePageSlice";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlePageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { 
        className 
    } = props

    const {t} = useTranslation()
    const dispatch = useAppDispatch()

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading);
    const isError = useSelector(getArticlesPageIsError)
    const view = useSelector(getArticlesPageView)

    const onChangeView = useCallback((view:ArticleView) => {
        dispatch(articlePageActions.setView(view))
    },[dispatch])

    const onLoadNextPart = useCallback(()=> {
        dispatch(fetchNextArticlesPage())
    },[dispatch])

    useInitialEffect(() => {
        dispatch(articlePageActions.initState())
        dispatch(fetchArticlesList({
            page:1
        }))
    })

    if(isError) {
        {t('Произошла непредвиденная ошибка')}
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page 
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticleViewSelector 
                    view={view} 
                    onViewClick={onChangeView}
                />
                <ArticleList 
                    isLoading={isLoading}
                    view={view}
                    articles={articles} 
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);


