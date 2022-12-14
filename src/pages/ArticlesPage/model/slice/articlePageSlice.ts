import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from './../../../../shared/const/localStorage';
import { fetchArticlesList } from './../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from './../types/articlePageSchema';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import {
    createEntityAdapter,
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';


const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        isError: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL
    }),
    reducers: {
        setView:(state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        initState: (state) =>{
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.isError = undefined
                state.isLoading = true
            })
            .addCase(fetchArticlesList.fulfilled, (
                state, 
                action: PayloadAction<Article[] >
            ) => {
                state.isLoading = false
                articlesAdapter.setAll(state, action)
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
    
});

export const { 
    reducer: articlePageReducer,
    actions: articlePageActions
} = articlesPageSlice;
