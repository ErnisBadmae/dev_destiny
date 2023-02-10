import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading
export const getArticleRecommendationsIsError= (state: StateSchema) => state.articleDetailsPage?.recommendations?.isError
 