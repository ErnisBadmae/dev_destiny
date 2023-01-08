import { TestAsyncThunk } from './../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

jest.mock('axios')

const data =  {
    username:'admin',
    age:22,
    country:Country.RUSSIA,
    first: 'Erni',
    last: 'Badmaev',
    city:'spb',
    currency:Currency.RUB,  
}       


describe('fetchProfileData', ()=>{
    test('success', async ()=>{

        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data}))

        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)

    })

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await   thunk.callThunk('1')
        expect(result.meta.requestStatus).toBe('rejected')

    
    })
})