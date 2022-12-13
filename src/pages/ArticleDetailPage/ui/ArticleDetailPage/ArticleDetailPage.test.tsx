import  ArticleDetailPage  from './ArticleDetailPage';
import {StateSchema} from '../../../../../src/app/providers/StoreProvider/config/StateSchema'

describe(`$ArticleDetailPage`, ()=>{
    test('should return counter value',()=>{
        const state: DeepPartial<StateSchema>={
            counter: {
                value:10
            }
        }
    })
})