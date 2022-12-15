import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import {StateSchema} from '../../../../../src/app/providers/StoreProvider/config/StateSchema'

describe(`$ArticleTextBlockComponent`, ()=>{
    test('should return counter value',()=>{
        const state: DeepPartial<StateSchema>={
            counter: {
                value:10
            }
        }
    })
})