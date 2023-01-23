import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from './../../selectors/articlesPageSelectors';



export const initArticlesPage = createAsyncThunk<
    void, 
    void, 
     ThunkConfig<string>
     >(
         'articlePage/initArticlesPage',
         async (_, thunkApi) => {
             const {
                 dispatch,
                 getState 
             }  = thunkApi
             const inited = getArticlesPageInited(getState())


             if(!inited) {
                 dispatch(articlePageActions.initState())
                 dispatch(fetchArticlesList({}))
             }
         }
     ) 