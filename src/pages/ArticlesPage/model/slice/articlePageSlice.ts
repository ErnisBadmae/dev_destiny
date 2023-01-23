import {
    createEntityAdapter,
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from './../../../../shared/const/localStorage';
import { fetchArticlesList } from './../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from './../types/articlePageSchema';


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
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc'
        
    }),
    reducers: {
        setView:(state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage:(state, action: PayloadAction<number>) => {
            state.page = action.payload
          
        },
        setOrder:(state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload
          
        },
        setSort:(state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload
          
        },
        setSearch:(state, action: PayloadAction<string>) => {
            state.search = action.payload
          
        },
        initState: (state) =>{
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
            state.view = view
            state.limit = view === ArticleView.BIG ? 4 : 9
            state._inited = true
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
                articlesAdapter.addMany(state, action)
                state.hasMore = action.payload.length > 0
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
