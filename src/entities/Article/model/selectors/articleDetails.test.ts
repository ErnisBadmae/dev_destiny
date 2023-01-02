import { StateSchema } from 'app/providers/StoreProvider';
import { 
    getArticleDetailData, 
    getArticleDetailIsLoading, 
    getArticleDetailIsError } from './articleDetails';

describe('getArticleDetailData.test', ()=>{
    test('should return data',()=>{
        const data = {
            id:'1',
            title:'title'
        }
        
        const state: DeepPartial<StateSchema>={
            articleDetails:{
                data,
            }
        }
        expect(getArticleDetailData(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state data',()=>{
        const state: DeepPartial<StateSchema>={}
        expect(getArticleDetailData(state as StateSchema)).toEqual(undefined )
    })



    test('should return isLoading',()=>{
        const state: DeepPartial<StateSchema>={
            articleDetails:{
                isLoading: true,
            }
        }
        expect(getArticleDetailIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should work with empty state isLoading',()=>{
        const state: DeepPartial<StateSchema>={}
        expect(getArticleDetailIsLoading(state as StateSchema)).toEqual(false )
    })



    test('should return isError',()=>{
        const state: DeepPartial<StateSchema>={
            articleDetails:{
                isError: 'error',
            }
        }
        expect(getArticleDetailIsError(state as StateSchema)).toEqual('error')
    })

    test('should work with empty state isError',()=>{
        const state: DeepPartial<StateSchema>={}
        expect(getArticleDetailIsError(state as StateSchema)).toEqual('')
    })
})