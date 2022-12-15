import { ArticleDetails } from './ArticleDetails';
import {StateSchema} from '../../../../../src/app/providers/StoreProvider/config/StateSchema'

describe(`$ArticleDetails`, ()=>{
    test('should return counter value',()=>{
        const state: DeepPartial<StateSchema>={
            counter: {
                value:10
            }
        }
    })
})