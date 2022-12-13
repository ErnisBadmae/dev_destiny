import ArticlesPage from './ArticlesPage';
import {StateSchema} from '../../../../../src/app/providers/StoreProvider/config/StateSchema'

describe(`$ArticlesPage`, ()=>{
    test('should return counter value',()=>{
        const state: DeepPartial<StateSchema>={
            counter: {
                value:10
            }
        }
    })
})