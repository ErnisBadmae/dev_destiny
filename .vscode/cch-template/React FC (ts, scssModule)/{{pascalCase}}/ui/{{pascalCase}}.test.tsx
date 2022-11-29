import { pascalCase } from '../{{pascalCase}}';
import {StateSchema} from '../../../../../src/app/providers/StoreProvider/config/StateSchema'

describe(`${{pascalCase}}`, ()=>{
 test('should return counter value',()=>{
   const state: DeepPartial<StateSchema>={
     counter: {
       value:10
       }
    }
 }
}