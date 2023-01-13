import { getArticlesPageLimit } from './../../selectors/articlesPageSelectors';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from './../../../../../entities/Article/model/types/article';


interface FetchArticleListProps {
   page?:number
}

export const fetchArticlesList = createAsyncThunk<
    Article[], 
    FetchArticleListProps, 
     ThunkConfig<string>
     >(
         'articlePage/fetchArticlesList',
         async (props, thunkApi) => {
             const {
                 extra,
                 rejectWithValue,
                 getState 
             }  = thunkApi

             const {
                 page = 1
             } = props

             const limit = getArticlesPageLimit(getState()) //передаем в селектор актуальный стэйт

             try {
                 const response = await extra.api.get<Article[]>('/articles', {
                     //передаем  query параметрами согласно документации server-json
                     params: {
                         _expand:'user',
                         _limit: limit,
                         _page:page
                     }
                 }) 

                 if (!response.data) {
                     throw new Error();
                 }

                 return response.data;
            
             } catch (error) { 
                 return rejectWithValue('error')
             }
         }
     ) 