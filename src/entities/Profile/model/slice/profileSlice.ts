import { ProfileSchema } from './../types/profile';
import { createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    isError: undefined,
    data: undefined
}

export const profileSlice = createSlice({
    name:'user',
    initialState,
    reducers: {}
})

export const { 
    actions: profileActions
} = profileSlice

export const {
    reducer: profileReducer
} =  profileSlice