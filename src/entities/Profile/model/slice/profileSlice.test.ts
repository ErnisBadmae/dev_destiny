import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileSchema, ValidateProfileError } from './../types/profile';
import { profileReducer, profileActions, updateProfileData } from 'entities/Profile';

describe('profileSlice.test', ()=>{
    const data =  {
        username:'admin',
        age:22,
        country:Country.RUSSIA,
        first: 'Erni',
        last: 'Badmaev',
        city:'spb',
        currency:Currency.RUB,  
    }    

    test('test set readonly',()=>{
        const state: DeepPartial<ProfileSchema>={readonly:false};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)
        ))
            .toEqual({readonly: true})
    });    

    test('test set cancelEdit',()=>{
        const state: DeepPartial<ProfileSchema>={data, form: {
            username:''
        }};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        ))
            .toEqual({
                readonly: true,
                validateError: undefined,
                data,
                form:data
            })
    }); 
    
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '123456',
            }),
        )).toEqual({
            form: { username: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { 
            isLoading: false,
            validateError: [
                ValidateProfileError.SERVER_ERROR
            ]
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateError: undefined
        });
    });


    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = { 
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            form: data,
            data
        });
    });
})