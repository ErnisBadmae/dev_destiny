import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from './../../../../../entities/Article/model/types/article';

export const fetchArticlesRecommendations = createAsyncThunk<
    Article[], 
    void,
     ThunkConfig<string>
     >(
         'articleDetailsPage/fetchArticlesRecommendations',
         async (props, thunkApi) => {
             const {
                 extra,
                 rejectWithValue,
             }  = thunkApi

             try {
                 const response = await extra.api.get<Article[]>('/articles', {
                     //передаем  query параметрами согласно документации server-json
                     params: {
                         _limit: 4 
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