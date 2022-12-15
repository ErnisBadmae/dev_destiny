import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailData = (state: StateSchema) => state.articleDetails?.data
export const getArticleDetailIsLoading = (state: StateSchema) => state.articleDetails?.isLoading
export const getArticleDetailIsError = (state: StateSchema) => state.articleDetails?.isError
