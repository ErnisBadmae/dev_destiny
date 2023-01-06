/* eslint-disable max-len */
import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComment?.isLoading
export const getArticleCommentsIsError= (state: StateSchema) => state.articleDetailsComment?.isError
 