import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { addQueryParams } from 'shared/lib/url/addQueryParam/addQueryParam';
import { Article, ArticleType } from './../../../../../entities/Article/model/types/article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType
} from './../../selectors/articlesPageSelectors';


interface FetchArticleListProps {
    replace?: boolean
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

             const limit = getArticlesPageLimit(getState()) //передаем в селектор актуальный стэйт
             const page = getArticlesPageNum (getState());
             const sort = getArticlesPageSort(getState())
             const order = getArticlesPageOrder(getState())
             const search = getArticlesPageSearch(getState())
             const type = getArticlesPageType(getState())

             try {

                 addQueryParams({
                     sort, order, search, type 
                 })

                 const response = await extra.api.get<Article[]>('/articles', {
                     //передаем  query параметрами согласно документации server-json
                     params: {
                         _expand:'user',
                         _limit: limit,
                         _page:page,
                         _sort:sort,
                         _order:order,
                         q: search,
                         type: type === ArticleType.ALL ? undefined : type
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