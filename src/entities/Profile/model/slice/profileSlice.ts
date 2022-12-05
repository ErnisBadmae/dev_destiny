import { updateProfileData } from './../services/updateProfileData/updateProfileData';
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
    name:'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean> ) => {
            state.readonly = action.payload
        },
        cancelEdit: (state ) => {
            state.readonly = true
            state.form =state.data
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.data,
                ...action.payload
            }
        }
    },

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
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })

            .addCase(updateProfileData.pending, (state) => {
                state.isError = undefined
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled, (
                state, 
                action: PayloadAction<Profile >
            ) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
                state.readonly = true 
            })
            .addCase(updateProfileData.rejected, (state, action) => {
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