import {
    fetchCommentsByArticleId 
} from './../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    createEntityAdapter,
    createSlice,
    PayloadAction,

} from '@reduxjs/toolkit'
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';
  
const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment: Comment) => comment.id
   
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)
  
const articleDetailsCommentSlice = createSlice({
    name: 'articleDetailsCommentSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        isLoading:false,
        isError: undefined,
        ids: [],
        entities:{}
    }),
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isError = undefined
                state.isLoading = true
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state, 
                action: PayloadAction<Comment[] >
            ) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action)
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
})
  
export const { reducer: articleDetailsCommentReducer } = articleDetailsCommentSlice


  
