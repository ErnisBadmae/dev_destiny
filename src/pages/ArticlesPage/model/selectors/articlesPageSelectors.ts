import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading =(state:StateSchema) => state.articlesPage?.isLoading || false
export const getArticlesPageIsError =(state:StateSchema) => state.articlesPage?.isError || ''
export const getArticlesPageView =(state:StateSchema) => state.articlesPage?.view || ArticleView.SMALL
export const getArticlesPageLimit =(state:StateSchema) => state.articlesPage?.limit || 9
export const getArticlesPageNum =(state:StateSchema) => state.articlesPage?.page || 1
export const getArticlesPageHasMore =(state:StateSchema) => state.articlesPage?.hasMore
export const getArticlesPageInited = (state:StateSchema) => state.articlesPage?._inited
