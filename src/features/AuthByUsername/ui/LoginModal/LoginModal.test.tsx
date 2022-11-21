import { DeepPartial } from '@reduxjs/toolkit';
import { pascalCase } from './LoginModal';
import {StateSchema} from '../../../../src/app/providers/StoreProvider/config/StateSchema'
describe(`$LoginModal`, ()=>{
 test('should return counter value',()=>{
   const state: DeepPartial<StateSchema>={
     counter: {
       value:10
       }
    }
 }