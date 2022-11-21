import { DeepPartial } from '@reduxjs/toolkit';
import { pascalCase } from './LoginForm';
import {StateSchema} from '../../../../src/app/providers/StoreProvider/config/StateSchema'
describe(`$LoginForm`, ()=>{
 test('should return counter value',()=>{
   const state: DeepPartial<StateSchema>={
     counter: {
       value:10
       }
    }
 }