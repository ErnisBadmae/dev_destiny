import { To, NavigateOptions } from 'react-router-dom';
import { ProfileSchema } from './../../../../entities/Profile/model/types/profile';
import { LoginSchema } from 'features/AuthByUsername';
import { UserSchema } from 'entities/User';
import { CounterSchema } from 'entities/Counter';
import { 
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject 
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    //async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema 
}

export type StateSchemaKey = keyof StateSchema



export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce:(state:StateSchema, action: AnyAction)=>CombinedState<StateSchema> ;
    add: (key: StateSchemaKey, reducer:Reducer) => void;
    remove: (key: StateSchemaKey)=> void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager:ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions)=> void,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}