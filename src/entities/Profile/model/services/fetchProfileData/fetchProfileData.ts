import { Profile } from './../../types/profile';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchProfileData = createAsyncThunk
    <Profile, 
    string, 
    ThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (profileId:string, thunkApi) => {

            const {
                extra,
                rejectWithValue 
            }  = thunkApi

            try {
                const response = await extra.api.get<Profile>(`/profile/${profileId}`) 

                

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