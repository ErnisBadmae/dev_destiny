/* eslint-disable react/display-name */

import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailSlice';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/addComentForm/model/slice/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import {
    articleDetailsCommentReducer
} from 'pages/ArticleDetailPage/model/slice/articleDetailCommentSlice';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addComentForm: addCommentFormReducer,
    articleDetailsComment:articleDetailsCommentReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList
) => (StoryComponent: Story) => (

    <StoreProvider 
        initialState={state} 
        asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
    >
        <StoryComponent />
    </StoreProvider>
);