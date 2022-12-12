import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', ()=>{
    test('should return error',()=>{
        const data =  {
            username:'admin',
            age:22,
            country:Country.RUSSIA,
            first: 'Erni',
            last: 'Badmaev',
            city:'spb',
            currency:Currency.RUB,  
        }       
        
        const state: DeepPartial<StateSchema>={
            profile: {
                data 
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state',()=>{
        const state: DeepPartial<StateSchema>={}
        expect(getProfileData(state as StateSchema)).toEqual(undefined )
    })
})