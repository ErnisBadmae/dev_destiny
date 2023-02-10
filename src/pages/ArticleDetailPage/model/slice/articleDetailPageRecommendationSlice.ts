import {
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { fetchArticlesRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendation';
import { ArticleDetailsRecommendationSchema } from '../types/ArticleDetailsRecommendationSchema';


const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id
   
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations|| recommendationsAdapter.getInitialState()
)
  
const articleDetailRecommendationSlice = createSlice({
    name: 'articleDetailRecommendationSlicee',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
        isLoading:false,
        isError: undefined,
        ids: [],
        entities:{}
    }),
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(fetchArticlesRecommendations.pending, (state) => {
                state.isError = undefined
                state.isLoading = true
            })
            .addCase(fetchArticlesRecommendations.fulfilled, (
                state, 
                action,
            ) => {
                state.isLoading = false
                recommendationsAdapter.setAll(state, action)
            })
            .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
})
  
export const { 
    reducer: articleDetailsRecommendationReducer 
} = articleDetailRecommendationSlice


  
