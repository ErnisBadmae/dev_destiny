import { validateProfileData } from './validateProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';

jest.mock('axios')

const data =  {
    username:'admin',
    age:22,
    country:Country.RUSSIA,
    first: 'Erni',
    last: 'Badmaev',
    city:'spb',
    currency:Currency.RUB,  
}       


describe('validateProfileData', ()=>{
    test('success', async ()=>{        
        const result = validateProfileData(data)
        expect(result).toEqual([])
    })


    test('without firstname and lastname', async () => {
        const result = validateProfileData({
            ...data,
            first:'',
            last:''
        })
     
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ])    
    })

    test('incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined
        })
     
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE
        ])    
    })

    test('without country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined
        })
     
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY
        ])    
    })

    test('incorrect all ', async () => {
        const result = validateProfileData({})
     
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY
        ])    
    })
})