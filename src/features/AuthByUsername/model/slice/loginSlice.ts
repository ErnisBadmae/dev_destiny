import { LoginSchema } from './../types/loginSchema';
import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
    isLoading:false,
    username: '',
    password:'',
}

export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>)=> {
            state.username=action.payload
        },

        setPassword: (state, action: PayloadAction<string>)=> {
            state.password=action.payload
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isError = undefined
                state.isLoading = true
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload

            })

    }
}
)

export const { actions: loginActions} = loginSlice 
export const {reducer: loginReducer} =  loginSlice