import { StateSchema } from './StateSchema';
import { configureStore} from '@reduxjs/toolkit'

export function createReduxStore(initialState?: StateSchema) {
    return  configureStore<StateSchema>({
        reducer: {
        },
        devTools: __IS_DEV__,
        preloadedState:initialState
    })
}

