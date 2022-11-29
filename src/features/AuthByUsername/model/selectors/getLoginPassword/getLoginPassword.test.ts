import { getLoginPassword } from './../getLoginPassword/getLoginPassword';

import { StateSchema } from 'app/providers/StoreProvider';


describe('getLoginPassword.test', ()=>{
    test('should return true',()=>{
        const state: DeepPartial<StateSchema>={
            loginForm: {
                password: '123123'
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123123' )
    })

    test('should work with empty state',()=>{
        const state: DeepPartial<StateSchema>={}
        expect(getLoginPassword(state as StateSchema)).toEqual('' )
    })
})