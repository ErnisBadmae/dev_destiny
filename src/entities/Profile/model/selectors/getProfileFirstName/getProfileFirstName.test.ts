import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFirstName } from './getProfileFirstName';

describe('getProfileFirstName.test', ()=>{
    test('should check firstname',()=>{ 
        const state: DeepPartial<StateSchema>={
            profile: {
                data: {
                    first: 'Erni'
                }
            }
        }
        expect(getProfileFirstName(state as StateSchema)).toEqual('Erni')
    })

    test('should work with empty state',()=>{
        const state: DeepPartial<StateSchema>={}
        expect(getProfileFirstName(state as StateSchema)).toEqual('')
    })
})