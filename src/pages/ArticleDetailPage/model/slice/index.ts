import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from './../types/index';
import { articleDetailsCommentReducer } from './articleDetailCommentSlice';
import { articleDetailsRecommendationReducer } from './articleDetailPageRecommendationSlice';


export const ArticleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationReducer,
    comments: articleDetailsCommentReducer
})