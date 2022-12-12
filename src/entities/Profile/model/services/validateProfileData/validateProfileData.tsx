import { Profile, ValidateProfileError } from "../../types/profile";

export const validateProfileData = (profile?: Profile ) => {
    if(!profile) {
        return [ValidateProfileError.NO_DATA] 
    }
    const { first, last, age, country} = profile


    const errors: ValidateProfileError [] = [] 

    if(!first || ! last) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA)
    }
    if(!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE)

    }
    if(!country ) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY)

    }
    return errors
}