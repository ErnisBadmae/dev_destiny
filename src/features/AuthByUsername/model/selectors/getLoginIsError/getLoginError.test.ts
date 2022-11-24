import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsError } from './getLoginIsError';

describe('getLoginError.test', ()=>{
    test('should return error',()=>{
        const state: DeepPartial<StateSchema>={
            loginForm: {
                isError: 'error'
            }
        }
        expect(getLoginIsError(state as StateSchema)).toEqual('error' )
    })

    test('should work with empty state',()=>{
        const state: DeepPartial<StateSchema>={}
        expect(getLoginIsError(state as StateSchema)).toEqual('' )
    })
})