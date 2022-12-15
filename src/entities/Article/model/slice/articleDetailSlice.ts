import { Article } from './../types/article';
import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetatailSchema } from '../types/articleDetailSchema';


const initialState: ArticleDetatailSchema = {
    isLoading: false,
    isError: undefined,
    data: undefined
}

export const articleDetailsSlice = createSlice({
    name:'articleDetails',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.isError = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleById.fulfilled, (
                state, 
                action: PayloadAction<Article >
            ) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
})

export const { 
    actions: articleDetailsActions
} = articleDetailsSlice

export const {
    reducer: articleDetailsReducer
} =  articleDetailsSlice