import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum } from './../../selectors/articlesPageSelectors';



export const fetchNextArticlesPage = createAsyncThunk<
    void, 
    void, 
     ThunkConfig<string>
     >(
         'articlePage/fetchNextArticlesPage',
         async (_, thunkApi) => {
             const {
                 dispatch,
                 getState 
             }  = thunkApi

             const hasMore = getArticlesPageHasMore(getState())
             const page = getArticlesPageNum(getState())
             const isLoading = getArticlesPageIsLoading(getState())

             if(hasMore && !isLoading) {
                 dispatch(articlePageActions.setPage(page + 1))
                 dispatch(fetchArticlesList({}))
             }
         }
     ) 