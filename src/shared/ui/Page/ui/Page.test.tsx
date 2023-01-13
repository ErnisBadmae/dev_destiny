import { pascalCase } from '../Page';
import {StateSchema} from '../../../../../src/app/providers/StoreProvider/config/StateSchema'

describe(`$Page`, ()=>{
 test('should return counter value',()=>{
   const state: DeepPartial<StateSchema>={
     counter: {
       value:10
       }
    }
 }
}