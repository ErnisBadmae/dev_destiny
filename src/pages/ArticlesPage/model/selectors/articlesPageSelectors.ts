import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading =(state:StateSchema) => state.articlesPage?.isLoading || false
export const getArticlesPageIsError =(state:StateSchema) => state.articlesPage?.isError || ''
export const getArticlesPageView =(state:StateSchema) => state.articlesPage?.view || ArticleView.SMALL


