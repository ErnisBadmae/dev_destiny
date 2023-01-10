import { ArticleList, ArticleView, ArticleViewSelector } from "entities/Article";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/className/className";
import {
    DynamicModuleLoader,
    ReducerList
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useAppDispatch/useInitialEffect";
import {
    getArticlesPageIsError,
    getArticlesPageIsLoading,
    getArticlesPageView
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

    const dispatch = useAppDispatch()

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading);
    const isError = useSelector(getArticlesPageIsError)
    const view = useSelector(getArticlesPageView)

    const onChangeView = useCallback((view:ArticleView) => {
        dispatch(articlePageActions.setView(view))
    },[dispatch])

    useInitialEffect(() => {
        dispatch(fetchArticlesList())
        dispatch(articlePageActions.initState())
    })

   

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector 
                    view={view} 
                    onViewClick={onChangeView}
                />
                <ArticleList 
                    isLoading={isLoading}
                    view={view}
                    articles={articles} 
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);


