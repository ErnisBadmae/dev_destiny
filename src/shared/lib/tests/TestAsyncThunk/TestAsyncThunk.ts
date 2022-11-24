import { 
    loginByUsername
} from './../../../../features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';


type ActionCreatorType
    <Return, Arg, RejectValue>  =(arg:Arg) => 
    AsyncThunkAction<Return, Arg, {
    rejectValue: RejectValue;
    }
>

export class TestAsyncThunk <Return, Arg, RejectValue>{
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema
    actionCreator: ActionCreatorType <Return, Arg, RejectValue>

    constructor(actionCreator: ActionCreatorType <Return, Arg, RejectValue> ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk(arg: Arg) {
        const action =  loginByUsername({
            username:'123',
            password:'123'
        })

        const result = await action(this.dispatch, this.getState, undefined)
        return result
    }
}