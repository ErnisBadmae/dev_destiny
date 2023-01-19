import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetatailSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/addComentForm/model/types/addCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ScrollSaveSchema } from 'features/ScrollSave/model/types/ScrollSaveSchema';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ProfileSchema } from './../../../../entities/Profile/model/types/profile';



export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollPosition: ScrollSaveSchema;
    
    //async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetatailSchema;
    articleDetailsComment?: ArticleDetailsCommentSchema;
    addComentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord< StateSchemaKey, boolean> 


export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce:(state:StateSchema, action: AnyAction)=>CombinedState<StateSchema> ;
    add: (key: StateSchemaKey, reducer:Reducer) => void;
    remove: (key: StateSchemaKey)=> void;

    //true - вмонтирован, иначе удален или демонтирован
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager:ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance;

}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}