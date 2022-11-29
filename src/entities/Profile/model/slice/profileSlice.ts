import { Profile, ProfileSchema } from './../types/profile';
import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    isError: undefined,
    data: undefined
}

export const profileSlice = createSlice({
    name:'user',
    initialState,
    reducers: {},

    extraReducers:(builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isError = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (
                state, 
                action: PayloadAction<Profile >
            ) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })

    }
})

export const { 
    actions: profileActions
} = profileSlice

export const {
    reducer: profileReducer
} =  profileSlice