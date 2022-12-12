import { Profile } from './../../types/profile';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchProfileData = createAsyncThunk
    <Profile, void, ThunkConfig<string>>(
        'profile/fetchProfileData',
        async (_, thunkApi) => {

            const {
                extra,
                rejectWithValue 
            }  = thunkApi

            try {
                const response = await extra.api.get<Profile>('/profile') 

                console.log(response, 'responseresponse')

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            
            } catch (error) {
                console.log(error)
                return rejectWithValue('error')
            }
        }
    )