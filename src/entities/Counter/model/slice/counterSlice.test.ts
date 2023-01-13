import { CounterSchema } from 'entities/Counter';
import { counterActions, counterReducer } from './counterSlice';

describe('counterScle.test', ()=>{
    test('decrement',()=>{
        const state: CounterSchema= {value:10}
        
        expect(
            counterReducer(state, counterActions.decrement())
               
        )
            .toEqual({value:9})
           
    });

    test('increment',()=>{
        const state: CounterSchema= {value:1}
      
        expect(
            counterReducer(state, counterActions.increment())
             
        )
            .toEqual({value:2})
         
    })

    test('should work with empty state',()=>{
        expect(
            counterReducer(undefined, counterActions.increment())
           
        )
            .toEqual({value:1})
       
    })
})